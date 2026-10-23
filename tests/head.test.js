// Every page's generated <head> block (scripts/build-head.js): the Discord component embeds
// (https://docs.discord.com/developers/link-previews/component-embeds) and the icon set.
"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const head = require(path.join(ROOT, "scripts/build-head.js"));

const ALLOWED_TYPES = new Set([1, 2, 9, 10, 11, 12, 14, 17]);
const BUTTON_KEYS = new Set(["id", "type", "url", "style", "label", "emoji", "disabled"]);
const EMBED_RE = /<script id="discord:component-embed" type="application\/json">([\s\S]*?)<\/script>/g;

/** Visits every component in the tree, saying whether it sits inside a Container. */
function walk(c, visit, inContainer = false) {
  visit(c, inContainer);
  const kids = [...(c.components || []), ...(c.accessory ? [c.accessory] : [])];
  for (const k of kids) walk(k, visit, inContainer || c.type === 17);
}

/** Asserts a payload JSON string follows Discord's component-embed rules; returns the data. */
function assertValidPayload(json, where) {
  assert.ok(Buffer.byteLength(json, "utf8") <= head.MAX_BYTES, `${where}: over ${head.MAX_BYTES} bytes`);
  assert.ok(!json.includes("</"), `${where}: "</" could close the <script> early`);
  const data = JSON.parse(json);
  assert.deepEqual(Object.keys(data), ["component"], where);
  assert.equal(data.component.type, 17, `${where}: root must be one Container`);
  let count = 0;
  walk(data.component, (c, inContainer) => {
    count++;
    assert.ok(ALLOWED_TYPES.has(c.type), `${where}: component type ${c.type} isn't allowed`);
    if (inContainer) assert.notEqual(c.type, 17, `${where}: nested Container`);
    if (c.type === 2) {
      assert.equal(c.style, 5, `${where}: only link buttons`);
      for (const k of Object.keys(c)) assert.ok(BUTTON_KEYS.has(k), `${where}: button key ${k}`);
      assert.match(c.url, /^https?:\/\//, `${where}: button URL`);
    }
  });
  assert.ok(count <= 40, `${where}: ${count} components (max 40)`);
  return data;
}

const pages = head.pages();

test("every page's generated <head> block is up to date", () => {
  for (const page of pages) {
    assert.equal(head.render(page), page.html, `${page.rel} is stale: run node scripts/build-head.js`);
  }
});

test("every content page has one valid Discord embed; the 404 page and redirects have none", () => {
  let content = 0;
  for (const page of pages) {
    const blocks = [...page.html.matchAll(EMBED_RE)];
    if (head.isContentPage(page)) {
      content++;
      assert.equal(blocks.length, 1, `${page.rel}: expected one embed`);
      assertValidPayload(blocks[0][1], page.rel);
      assert.match(page.html, /<meta property="og:title" content="[^"]+">/, `${page.rel}: Open Graph fallback`);
    } else {
      assert.equal(blocks.length, 0, `${page.rel}: no embed on error pages or redirects`);
      assert.ok(!page.html.includes("og:title"), `${page.rel}: no Open Graph tags`);
    }
  }
  assert.ok(content >= 10, "found the content pages");
  assert.ok(pages.some((p) => p.rel === "404.html" && !head.isContentPage(p)), "404.html is not a content page");
});

test("the homepage embed lists the brands and uses the brand colour and icon", () => {
  const home = pages.find((p) => p.url === "/");
  const data = JSON.parse([...home.html.matchAll(EMBED_RE)][0][1]);
  assert.equal(data.component.accent_color, 0xd10f0f);
  assert.match(JSON.stringify(data), /Our brands/);
  assert.match(JSON.stringify(data), /assets\/img\/icon\.png/);
});

test("discordMd escapes Discord markdown with one backslash per character", () => {
  assert.equal(head.discordMd("**bold** a_b"), "\\*\\*bold\\*\\* a\\_b");
  assert.ok(!head.discordMd("**bold** a_b").includes("$1"));
  assert.equal(head.discordMd("~x~ `y` |z| [l](u) \\"), "\\~x\\~ \\`y\\` \\|z\\| \\[l\\](u) \\\\");
  assert.equal(head.discordMd("# h\n> q\n- l\nmid # > -"), "\\# h\n\\> q\n\\- l\nmid # > -");
});

test("page data with markdown characters stays plain text and valid", () => {
  const html = head.pageEmbed("A *b* _c_ ~d~ `e` |f| > g # h [i]", "**x** </script> y", head.BASE_URL + "/x/");
  const m = html.match(/^<script id="discord:component-embed" type="application\/json">([\s\S]*)<\/script>$/);
  assert.ok(m, html);
  const json = m[1];
  assert.equal(json.indexOf("</script>"), -1, "</script> in data can't close the tag early");
  const data = assertValidPayload(json, "markdown data");
  const text = data.component.components[0].components[0].content;
  assert.ok(text.includes("A \\*b\\* \\_c\\_ \\~d\\~ \\`e\\` \\|f\\| > g # h \\[i\\]"), text);
  assert.ok(text.includes("\\*\\*x\\*\\* </script> y"), text);
  assert.ok(!text.includes("$1"));
});

test("an oversized payload falls back to an HTML comment", () => {
  const out = head.pageEmbed("Big", "x".repeat(head.MAX_BYTES + 100), head.BASE_URL + "/big/");
  assert.match(out, /^<!-- discord:component-embed left out: over 3000 bytes -->$/);
});

// ---- Icons -----------------------------------------------------------------------------------

function png(buf) {
  assert.equal(buf.slice(0, 8).toString("hex"), "89504e470d0a1a0a", "PNG signature");
  return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20), colorType: buf[25], tRNS: buf.includes(Buffer.from("tRNS")) };
}

test("favicon.ico holds 16, 32 and 48px PNGs", () => {
  const ico = fs.readFileSync(path.join(ROOT, "favicon.ico"));
  assert.equal(ico.readUInt16LE(2), 1, "ICO type");
  const sizes = [];
  for (let i = 0; i < ico.readUInt16LE(4); i++) {
    const e = 6 + i * 16;
    const start = ico.readUInt32LE(e + 12);
    const img = png(ico.slice(start, start + ico.readUInt32LE(e + 8)));
    assert.equal(img.w, ico[e] || 256);
    sizes.push(img.w);
  }
  assert.deepEqual(sizes.sort((a, b) => a - b), [16, 32, 48]);
});

test("the home-screen icons are the right size, and opaque where they must be", () => {
  const apple = png(fs.readFileSync(path.join(ROOT, "apple-touch-icon.png")));
  assert.deepEqual([apple.w, apple.h], [180, 180]);
  assert.ok(apple.colorType === 2 && !apple.tRNS, "apple-touch-icon.png must be opaque (iOS fills transparency with black)");
  const mask = png(fs.readFileSync(path.join(ROOT, "assets/img/icon-maskable-512.png")));
  assert.deepEqual([mask.w, mask.h], [512, 512]);
  assert.ok(mask.colorType === 2 && !mask.tRNS, "the maskable icon must be opaque");
  for (const [f, s] of [["assets/img/icon-192.png", 192], ["assets/img/icon-512.png", 512]]) {
    const p = png(fs.readFileSync(path.join(ROOT, f)));
    assert.deepEqual([p.w, p.h], [s, s], f);
  }
});

test("site.webmanifest has the name, start URL, colours and icons", () => {
  const m = JSON.parse(fs.readFileSync(path.join(ROOT, "site.webmanifest"), "utf8"));
  assert.ok(m.name && m.short_name);
  assert.equal(m.start_url, "/");
  assert.equal(m.display, "browser");
  assert.match(m.theme_color, /^#[0-9a-f]{6}$/i);
  assert.match(m.background_color, /^#[0-9a-f]{6}$/i);
  for (const icon of m.icons) assert.ok(fs.existsSync(path.join(ROOT, icon.src)), icon.src);
  const has = (size, purpose) => m.icons.some((i) => i.sizes === size && (i.purpose || "any") === purpose);
  assert.ok(has("192x192", "any") && has("512x512", "any") && has("512x512", "maskable"));
});

test("every page lists the same icon tags", () => {
  for (const page of pages) {
    for (const tag of head.FAVICON_TAGS) assert.ok(page.html.includes(tag), `${page.rel}: missing ${tag}`);
    assert.ok(!/global\.media\.stux\.group\/icon-(light|dark)\.png" media=/.test(page.html), `${page.rel}: old remote favicon`);
  }
});

test("the icon files are published by the Pages workflow and served with the right type locally", () => {
  const pagesYml = fs.readFileSync(path.join(ROOT, ".github/workflows/pages.yml"), "utf8");
  for (const f of ["favicon.ico", "apple-touch-icon.png", "site.webmanifest"]) assert.ok(pagesYml.includes(f), `pages.yml copies ${f}`);
  assert.match(fs.readFileSync(path.join(ROOT, "dev-server.js"), "utf8"), /"\.webmanifest": "application\/manifest\+json/);
});

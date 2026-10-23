// The /changelogs/ page's parser (assets/js/changelogs.js): Date Version headings and the fixed
// section order and badge colours.
"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const { render, ORDER } = require(path.join(ROOT, "assets/js/changelogs.js"));

test("Date Version headings (vYY.MM.DD and vYY.MM.DD-N) render as releases", () => {
  const html = render("# Changelog\n\n## v26.10.23-1\n\n### Fixed\n\n- b\n\n## v26.10.23\n\n### Added\n\n- a\n\n## v1.13.1\n\n### Changed\n\n- c\n");
  assert.match(html, /<h2>v26\.10\.23-1<\/h2>/);
  assert.match(html, /<h2>v26\.10\.23<\/h2>/);
  assert.match(html, /<h2>v1\.13\.1<\/h2>/);
  assert.ok(html.indexOf("v26.10.23-1") < html.indexOf("<h2>v26.10.23</h2>"), "file order is kept");
  assert.equal((html.match(/<article class="cl-entry">/g) || []).length, 3);
});

test("sections are sorted Added, Changed, Fixed, Removed, Security, Deprecated, unknown last", () => {
  assert.deepEqual(ORDER, ["Added", "Changed", "Fixed", "Removed", "Security", "Deprecated"]);
  const md = "## v26.10.23\n\n### Notes\n\n- n\n\n### Deprecated\n\n- d\n\n### Security\n\n- s\n\n### Removed\n\n- r\n\n### Fixed\n\n- f\n\n### Changed\n\n- c\n\n### Added\n\n- a\n";
  const html = render(md);
  const seen = [...html.matchAll(/cl-label-([a-z]+)|class="cl-h4">([^<]+)/g)].map((m) => m[1] || m[2]);
  assert.deepEqual(seen, ["added", "changed", "fixed", "removed", "security", "deprecated", "Notes"]);
});

test("the badge colours are the standard palette", () => {
  const css = fs.readFileSync(path.join(ROOT, "assets/css/style.css"), "utf8");
  const want = { added: "#2ecc71", changed: "#3ba7ff", fixed: "#ffa64d", removed: "#ff4d4d", security: "#b06bff", deprecated: "#8a8a94" };
  for (const [type, hex] of Object.entries(want)) {
    assert.match(css, new RegExp(`^\.cl-label-${type} \{ --cl: ${hex}; \}`, "m"), type);
  }
});

test("the real CHANGELOG.md renders every release", () => {
  const md = fs.readFileSync(path.join(ROOT, "CHANGELOG.md"), "utf8");
  const releases = (md.match(/^## /gm) || []).length;
  assert.equal((render(md).match(/<article class="cl-entry">/g) || []).length, releases);
});

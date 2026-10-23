// VERSION.md is a Date Version (https://datevers.ing), a real calendar date, not in the future,
// and matches the newest "## v..." heading in CHANGELOG.md.
"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const DATEVER = /^(\d{2})\.(0[1-9]|1[0-2])\.(0[1-9]|[12]\d|3[01])(-[1-9]\d*)?$/;
const version = fs.readFileSync(path.join(ROOT, "VERSION.md"), "utf8").trim();

test("VERSION.md holds a bare Date Version", () => {
  assert.match(version, DATEVER, `VERSION.md holds '${version}', not YY.MM.DD or YY.MM.DD-N`);
});

test("VERSION.md is a real calendar date, not in the future (UTC)", () => {
  const [, yy, mm, dd] = version.match(DATEVER);
  const d = new Date(Date.UTC(2000 + +yy, +mm - 1, +dd));
  assert.equal(d.getUTCMonth() + 1, +mm, `${version} isn't a real date`);
  assert.equal(d.getUTCDate(), +dd, `${version} isn't a real date`);
  const now = new Date();
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  assert.ok(d.getTime() <= today, `${version} is dated in the future (UTC)`);
});

test("VERSION.md matches the newest CHANGELOG.md release heading", () => {
  const md = fs.readFileSync(path.join(ROOT, "CHANGELOG.md"), "utf8");
  const m = md.match(/^## v(\S+)/m);
  assert.ok(m, "CHANGELOG.md has no '## v...' heading");
  assert.equal(m[1], version);
});

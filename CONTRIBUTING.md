<p align="center">
  <picture><source media="(prefers-color-scheme: dark)" srcset="https://global.media.stux.group/logo-light.png"><source media="(prefers-color-scheme: light)" srcset="https://global.media.stux.group/logo-dark.png"><img src="https://global.media.stux.group/logo-dark.png" height="80" alt="Stux.Group Logo"></picture>
</p>

# Contributing to Stux.Group Services

Stux.Group Services is a Stux.Group project. The repository isn't open to public pull requests,
and per the [License](README.md#license) section it isn't licensed for redistribution or reuse.
This document exists for anyone with write access working on it consistently.

Questions: [hello@stux.group](mailto:hello@stux.group).

## Local setup

```
git clone https://github.com/StuxGroup/Services.git
cd Services
./dev-server.sh
```

No install step: there's no `package.json` and no dependencies. `dev-server.js` is
a single dependency-free Node script; the only requirement is having Node itself installed. Pass
`--no-dev-mode` to test the site as it behaves in production (no dev banner).

## Tests

```
bash tests/run.sh
```

The tests in `tests/*.test.js` use Node's built-in test runner (`node --test`), so there's nothing
to install; CI runs them on every push. They check that `VERSION.md` is a valid Date Version
matching the newest `CHANGELOG.md` heading, that the changelogs page parses Date Version headings
and orders its sections, that every page's generated `<head>` block is up to date with valid
Discord previews under the 3,000-byte limit, and that the icon set is complete.

## Project conventions

- **Plain HTML/CSS/JS, no framework, no build step to deploy.** Every page is a real `.html` file: no
  templating engine, no client-side router. The layout follows
  [StuxieDev Projects](https://github.com/StuxieDev/Projects), recoloured in Stux.Group red
  (`#d10f0f`, with a `#ff5a4f` highlight). It is dark by default, with a light theme that follows the
  system preference: colours are variables on `:root` in `style.css`, redefined in its two light
  blocks, so use the variables rather than hard-coding a colour.
- The sitemap (`sitemap.xml`, `sitemap/index.html`, `robots.txt`) is generated: after adding or removing a page, edit the `PAGES` list in `scripts/build-sitemap.py` and run `python scripts/build-sitemap.py`, then commit the result. Add new root files to the copy step in `.github/workflows/pages.yml`.
- Every page's `<head>` has a block between `<!-- head:start ... -->` and `<!-- head:end -->`
  written by `node scripts/build-head.js`: the icon tags (`favicon.ico`, the 512px icon,
  `apple-touch-icon.png`, `site.webmanifest`), and on content pages the Open Graph tags and the
  Discord link preview (`<script id="discord:component-embed">`), built from the page's own
  `<title>` and meta description. Don't edit the block by hand: change the page or the script and
  re-run it (`build-sitemap.py` runs it too). `--check` reports stale pages, and the tests fail on
  them. The 404 page and the `/changelog/` redirect get the icons only, no preview
- Clean URLs use a folder-per-page layout (`legal/privacy/index.html` → `/legal/privacy/`).
- Shared styles live in `assets/css/style.css`; shared behaviour in `assets/js/main.js`. Copy the
  existing header/footer block when adding a page rather than introducing a templating system.
- `assets/js/dev-mode.js` is the production default (`DEV_MODE = false`), committed as-is.
  `dev-server.js` intercepts that one path locally and serves a generated version instead.
- **Icons are self-hosted** in `assets/img/services/`, resized to 128 × 128. Take them from the
  service's own `global.media.<domain>/icon.png` or its repo.
- **Only two things load from elsewhere**, both Stux.Group's own: live status from
  `raw.githubusercontent.com/StuxGroup/Status` and SeasonalOverlaysLibrary from
  `seasonaloverlayslibrary.stuxapis.net`. If you add another, update the Privacy Policy.

## Adding or retiring a service card

The services list has six sections, in this order: **Featured**, **Our companies**, **Services &
tools**, **APIs & libraries**, **Templates** and **Discontinued**.

1. Add/update the entry in the README's services table
2. Add/update the matching `<article class="project-card">` block in `index.html`. For a service
   that belongs to one of the companies, add `<div class="owner">Company</div>` above the name
3. **One badge per card**, above the description (`<span class="badge-status ...">` before
   `<p class="desc">`). Declare the state on the `<article>` with `data-state="discontinued"`,
   `"template"`, `"maintenance"` or `"soon"` and render the matching badge in the HTML (e.g.
   `<span class="badge-status soon"><i class="badge-ico" aria-hidden="true"></i>Coming soon</span>`;
   Maintenance uses the `maintenance` class and the same icon element). If several states are
   listed, the first that applies wins: Discontinued, Template, Maintenance, Coming soon
4. **Live status:** with no `data-state`, a card with `data-monitor="<slug>"` (a slug monitored by
   `StuxGroup/Status`) gets one live badge from `main.js`: Online, Degraded or Offline. Add
   `<span class="badge-status live" hidden></span>` above the description; don't hard-code a
   "Live" badge, because it can't be kept accurate. No monitor, or status unavailable: no badge.
   A status page's own card uses `data-monitor="<source>:*"` to show that page's overall status
5. When a service is discontinued, move its card into "Discontinued", add the `discontinued`
   class and `data-state="discontinued"`, drop any dead Website link, and add a one-line `<p class="discontinued-note">` saying why
6. Update the hero's service count if it changed

## Seasonal overlays

`main.js` asks SeasonalOverlaysLibrary for today's preset from its calendar. It plays once per
browser session (a `sessionStorage` flag), never on its own for people with
`prefers-reduced-motion`, and the hero button (labelled with today's preset) replays it. If the
library can't load, the button stays hidden and nothing else changes.

## Legal pages

All six live under `legal/` (`privacy`, `terms`, `cookies`, `imprint`, `disclaimer`, `opt-out`),
each its own folder with an `index.html`, linked from the **Boring Legal Stuff** hub at
`legal/index.html`. Keep them in sync with what the site actually does.

## Versioning and changelog

- Stux.Group Services uses [Date Versioning](https://datevers.ing) (since v26.10.23; semver
  before that): the version is the UTC date of the release as `YY.MM.DD` (e.g. `26.10.23`), and a
  second release on the same UTC day is `26.10.23-1`, then `-2` and so on. Use UTC (`date -u`),
  not local time. Never a future date, never a date before the latest release, and a released
  version is never reused
- The version lives in `VERSION.md` (the bare version, no `v`); set it on every release. The `v`
  only appears in git tags (`v26.10.23`) and changelog headings (`## v26.10.23`)
- Every release gets a `CHANGELOG.md` entry using `###` subsections in this order: Added,
  Changed, Fixed, Removed, Security, Deprecated. Never a bare bullet list under a version
- `commit.sh` (bash) and `commit.bat` (Windows) read `VERSION.md`, refuse anything that isn't a
  valid Date Version (or is dated in the future), warn if it's dated before today, and handle the
  commit and `git tag`; they don't push. The release workflow publishes a GitHub Release when the
  tag is pushed
- Work happens on `test` (or a branch off it), never on `main`. Changes reach `main` only through a pull request from `test`; the release commit and tag are made on `test` and go live when the pull request is merged.

## Before committing

- Run `bash tests/run.sh`
- Open changed pages via `./dev-server.sh` and click through: CI checks files and local links,
  but a live look is the only real check of how it renders
- Check both the dev-mode banner (default) and `--no-dev-mode` if you touched `dev-server.js` or
  `assets/js/dev-mode.js`
- Only link a repository if it is public: no "Repository" link on a card for a private or missing repo. Run `scripts/check-repo-links.sh` (needs `gh`) to list linked repos that are not public
- Give every card its full name, in its heading and its icon's alt text ("Stux.Group Status", not "Status"), and its own icon, never a shared or generic one. A service without a logo of its own gets a badge-style icon (the brand's mark on a round avatar, with a badge saying what the service is) from `python -I scripts/badge-icons.py <brand> <brand icon-light.png> assets/img/services`; add a glyph and file name there for a new one

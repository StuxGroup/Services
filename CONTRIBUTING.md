<p align="center">
  <img src="https://global.media.stux.group/logo.png" height="80" alt="Stux.Group Logo">
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

No install step: there's no `package.json`, no dependencies, nothing to build. `dev-server.js` is
a single dependency-free Node script; the only requirement is having Node itself installed. Pass
`--no-dev-mode` to test the site as it behaves in production (no dev banner).

## Project conventions

- **Plain HTML/CSS/JS, no framework, no build step.** Every page is a real `.html` file: no
  templating engine, no client-side router. The layout follows
  [StuxieDev Projects](https://github.com/StuxieDev/Projects), recoloured in Stux.Group red
  (`#d10f0f`, with a `#ff5a4f` highlight).
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
3. **Live status:** if `StuxGroup/Status` monitors it, give the card `data-monitor="<slug>"` and a
   `<span class="svc-status" hidden></span>` in its `.stack`. `main.js` fills it in; don't
   hard-code a "Live" badge, because it can't be kept accurate
4. **Lifecycle badges** are only for states a check can't show: `badge-status soon` (Coming
   soon), `badge-status template` (Template) or `badge-status archived` (Discontinued)
5. When a service is discontinued, move its card into "Discontinued", add the `discontinued`
   class, drop any dead Website link, and add a one-line `<p class="discontinued-note">` saying why
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

- The version lives in `VERSION.md` (a bare version string); bump it on every release
- Every release gets a `CHANGELOG.md` entry using `###` subsections in this order: Added,
  Changed, Fixed, Removed, Security, Deprecated. Never a bare bullet list under a version
- `commit.sh` (bash) and `commit.bat` (Windows) read `VERSION.md` and handle the commit and
  `git tag`; the release workflow publishes a GitHub Release when the tag is pushed

## Before committing

- Open changed pages via `./dev-server.sh` and click through: CI checks files and local links,
  but a live look is the only real check of how it renders
- Check both the dev-mode banner (default) and `--no-dev-mode` if you touched `dev-server.js` or
  `assets/js/dev-mode.js`

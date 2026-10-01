# Changelog

All notable changes to Stux.Group Services (services.stux.group) are documented here. This
project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## v1.10.3

### Added

- A GithubStats card in APIs & libraries, with a live badge from StuxAPIs Status (`stuxapis:githubstats`)

## v1.10.2

### Removed

- The `.project-icon.on-tile` style, so icons can't be put in the bordered tile again

## v1.10.1

### Fixed

- Stux.Dev is marked Coming soon (`data-state="soon"`)
- The StuxAPIs card's Website link goes to stuxapis.net again, not services.stuxapis.net

## v1.10.0

### Added

- A `ream-st` status source (status.ream.st, Ream.st's new status page), and a Status link on the Ream.st card

### Changed

- Ream.st moved from Our companies to Services & tools, since it is a Stux.Group service, not a brand
- Ream.st, Multi.st Twitch and Multi.st YouTube now read their live badge from status.ream.st, as they have moved off Stux.Group Status
- The Artists section is now "Artists & Smart Links"

### Fixed

- Sm.lol's and Lunar Calendar's icons no longer sit in the bordered tile

## v1.9.0

### Added

- A Sm.lol card in Services & tools, with a live badge from Stux.Dev Status (`stux-dev:sm-lol`)
- README: the services list is now split into the site's sections, with each card's badge, plus a Badges section documenting the status sources and `<source>:*`

### Changed

- Lunar Calendar is marked Coming soon, matching services.stuxapis.net
- README: StuxAPIs' site is now services.stuxapis.net, and the Artists section points to artists.stux.music

## v1.8.3

### Fixed

- Stux.Cloud and StuxAPIs are marked Coming soon (`data-state="soon"`), which takes precedence over a live badge

## v1.8.1

### Fixed

- The Status card now has a live badge, showing status.stux.group's overall status (`data-monitor="<source>:*"`)

## v1.8.0

### Added

- An "Artists" section holding the Stux Sharp and Sharp.Stux.Music cards, moved out of Services & tools
- Live badges on the Stux Sharp and Sharp.Stux.Music cards, read from the new Stux.Music Status page (new `stux-music` source, status.stux.music)
- A live badge on the Stux.Cloud card, read from the new Stux.Cloud monitor on Stux.Group Status

## v1.7.1

### Changed

- SeasonalOverlaysLibrary, Kittens and SecretGen now read their live badge from the new StuxAPIs Status page (new `stuxapis` source), now that the StuxAPIs group has moved off Stux.Group Status
- The StuxAPIs company card's website link now goes to services.stuxapis.net, StuxAPIs' own services page

## v1.7.0

### Added

- Live status badges on far more cards: `data-monitor="<source>:<slug>"` reads another status page's `summary.json` (sources `stux-group` (default), `stux-dev`, `stuxiedev`, `robostux`), so Stuxs.Tools, Downl.one and AutoScroll show their live badge from Stux.Dev Status, and SeasonalOverlaysLibrary, Kittens and SecretGen from the new StuxAPIs group on Stux.Group Status
- `scripts/check-repo-links.sh`, which lists linked GitHub repositories that are not public, and a matching rule in `CONTRIBUTING.md`

### Changed

- Cards still keep one badge each, with the same precedence as before (declared state first, then the live status)

### Fixed

- SeasonalOverlaysLibrary no longer overflows its card: the title wraps at Seasonal / Overlays / Library
- The template names are "Maintenancepage" and "Instancepage" (one word, like Soonpage and Servicepage) in the cards, alt text and README

### Removed

- The "Repository" link from cards whose repository is private: Multi.st Twitch, Multi.st YouTube, Stuxs.Tools, Downl.one, Stux Sharp and Sharp.Stux.Music (and the matching README table entries)

## v1.6.0

### Added
- The status section's dot pulses with the same expanding, fading ring as the Online badge dot, coloured by state (green up, amber degraded or partial, red down). It stays still when reduced motion is requested

### Fixed
- Coming soon and Maintenance badges showed two icons (two rockets, two wrenches) because the glyph artwork held a pair; each now shows a single rocket or wrench. Every badge now has exactly one icon: the glyph, the status dot, or none
- The Discontinued badge picked up its grey colours (the HTML class `discontinued` had no style)

## v1.5.0

### Changed
- The hero's seasonal overlay button now asks a question: its label (derived from today's overlay, e.g. "Pumpkins") ends in "?" and switches to "!" while the overlay is playing, then goes back to "?" when it ends. The label change also applies when reduced motion is requested

## v1.4.1

### Fixed
- Kittens and SecretGen show their own icons (the orange cat and the blue padlock) instead of the generic StuxAPIs logo
- SeasonalOverlaysLibrary has a new icon in the library's own purple: a snowflake on stacked overlay layers, replacing the old orange tile

## v1.4.0

### Added

- A Maintenance badge (the site banner's wrench icon and orange) and a Coming soon badge with the banner's rocket icon in purple, declared with `data-state` on a card
- Live status badges read Online (with a pulsing green dot, still when reduced motion is requested), Degraded and Offline

### Changed

- Every service card shows exactly one badge, above its description. The first that applies wins: Discontinued, Template, Maintenance, Coming soon, then the live status. Cards with no state and no monitor show none
- Card states are declared with `data-state` instead of separate badge and status spans; `main.js` only fills the live badge when no state applies

## v1.3.1

### Changed

- The copyright line reads Stux.Group instead of Stux Group Ltd

### Fixed

- The footer's Created-with icons are optically sized, so the heart no longer looks bigger than the code and coffee icons

## v1.3.0

### Added

- `/sitemap/`, a page in the site's own layout listing every page with its full URL, and `sitemap.xml` for crawlers, both generated by `scripts/build-sitemap.py` (the page list lives in that script; `<lastmod>` is each page's last git commit date). It covers the home page, `/changelogs/` and the legal pages
- `robots.txt` with a `Sitemap:` line, and a **Sitemap** link in every footer next to Boring Legal Stuff

### Changed

- The Pages workflow publishes `sitemap.xml`, `robots.txt` and `sitemap/`, and CI checks the sitemap files exist

## v1.2.0

### Added

- A **Changelogs** page at `/changelogs/`, rendering this changelog in the site's own layout with colour-coded section badges (Added, Changed, Fixed, Removed, Security, Deprecated, always in that order). `/changelog/` redirects to it
- The footer's version number (read from the published `VERSION.md`, falling back to "Changelogs") links to the changelogs page
- `CHANGELOG.md` and `VERSION.md` are now published with the site

### Removed

- The "A Stux.Group Service" text link and its separator from the footer brand block; the logo, "Created with" line and links stay

## v1.1.0

### Added

- A brand block in the footer of every page, **Stux.Group logo | A Stux.Group Service**, muted until hovered or focused (the logo fades in smoothly, with the same filter functions in every state)
- A **Created with** line in the footer: a heart, code brackets and a coffee mug, by Stux.Group

### Changed

- The dev-mode banner is the shared Stux site banner: a muted strip with a label chip and a faint icon pattern. It stays at the top and pushes the page down by its exact height, and the sticky header sits below it, so nothing is covered, including on phones. In dev mode, `?banner=soon,maintenance,site` previews the other banner styles
- The footer's copyright sign is an icon, with a hidden "©" for screen readers

## v1.0.0

### Added
- Stux.Group Services, a static index of the Stux.Group Brand of Companies at `services.stux.group`, built like StuxieDev Projects and recoloured in Stux.Group red: 25 services and sites in Featured (Stux.Group, Status, GitHup), Our companies, Services & tools, APIs & libraries and Templates, plus Discontinued (Gaymer.Social)
- Live status pills on every card that `status.stux.group` monitors, and a live overall status band, read from `StuxGroup/Status`'s GitHup data
- Seasonal overlays from StuxAPIs' SeasonalOverlaysLibrary: today's calendar preset plays once per visit (never for people who prefer reduced motion), with a hero button to replay it and a "Try a random one" button on the library's card
- The **Boring Legal Stuff** hub at `/legal/` with Privacy Policy, Terms and Ethics, Cookies Policy, Imprint, Disclaimer and Opt-Out Preferences, and a 404 page
- Self-hosted service icons and fonts (Lato and Poppins)
- `dev-server.js` with `dev-server.sh`/`dev-server.bat`, forcing `DEV_MODE` on locally (`--no-dev-mode` to opt out)
- CI checking key files, HTML and local links, workflow YAML and the version/changelog match; a Pages workflow that publishes only the site files; and a release workflow that turns each `vX.Y.Z` tag into a GitHub Release
- `commit.sh`/`commit.bat` release scripts that read `VERSION.md` and tag `vX.Y.Z`

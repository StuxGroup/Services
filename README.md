<p align="center">
  <picture><source media="(prefers-color-scheme: dark)" srcset="https://global.media.stux.group/logo-light.png"><source media="(prefers-color-scheme: light)" srcset="https://global.media.stux.group/logo-dark.png"><img src="https://global.media.stux.group/logo-dark.png" height="100" alt="Stux.Group Logo"></picture>
</p>

# Stux.Group Services

### *Every Stux.Group brand, service, API and template, in one place.*

[Stux.Group Services](https://services.stux.group) is a small, static, no-build-step website that
indexes the Stux.Group Brand of Companies and links out to everything, each with its own repository
and, usually, its own site. It's built the same way as
[StuxieDev Projects](https://github.com/StuxieDev/Projects), in Stux.Group red.

- Plain HTML, CSS and JavaScript: no framework, no bundler, no dependencies to install
- **Live status** on each card, read from status.stux.group and the other brands' status pages
  (all powered by [GitHup](https://githup.stux.group)), see [Badges](#badges)
- **Seasonal overlays** from [SeasonalOverlaysLibrary](https://seasonaloverlayslibrary.stuxapis.net)
  (StuxAPIs): today's preset plays once per visit (never with reduced motion), and the hero button
  replays it
- Deployed to [GitHub Pages](https://pages.github.com/) by `.github/workflows/pages.yml`
- No accounts, no ads, no cookies, no tracking scripts

---

## Services listed here

Grouped as on the site. **Badge** is what the card shows: a fixed state from `data-state`, or a
live status from the `data-monitor` shown (`source:slug`, default source `stux-group`).

### Featured

| Service | What it is | Site | Repo | Badge |
|---|---|---|---|---|
| Stux.Group | The parent of the Stux.Group Brand of Companies | [stux.group](https://stux.group) | [StuxGroup](https://github.com/StuxGroup) (org) | Coming soon |
| Status | Live status and uptime history of Stux.Group's services | [status.stux.group](https://status.stux.group) | [StuxGroup/Status](https://github.com/StuxGroup/Status) | Live: `stux-group:*` (overall) |
| GitHup | Uptime monitoring and status pages, run entirely on GitHub | [githup.stux.group](https://githup.stux.group) | [StuxGroup/GitHup](https://github.com/StuxGroup/GitHup) | Live: `githup` |

### Our brands

| Service | What it is | Site | Repo | Badge |
|---|---|---|---|---|
| Stuxedo | Hosting and cloud services | [stuxedo.com](https://stuxedo.com) | [Stuxedo](https://github.com/Stuxedo) (org) | Coming soon |
| Stux.Dev | Free, ad-free, no-account web tools | [stux.dev](https://stux.dev) | [StuxDev](https://github.com/StuxDev) (org) | Coming soon |
| Stux.Cloud | The infrastructure behind Stuxedo | [stux.cloud](https://stux.cloud) | [StuxCloud](https://github.com/StuxCloud) (org) | Coming soon |
| StuxAPIs | APIs and libraries for the Stux.Group ecosystem | [stuxapis.net](https://stuxapis.net) | [StuxAPIs](https://github.com/StuxAPIs) (org) | Coming soon |
| Stux.Music | The record label for the artist Stux Sharp | [stux.music](https://stux.music) | [StuxMusic](https://github.com/StuxMusic) (org) | Coming soon |
| Stux.Digital | From idea to online: the front door for a new website | [stux.digital](https://stux.digital) | [StuxDigital](https://github.com/StuxDigital) (org) | Coming soon |
| Stux.Design | The design studio behind every Stux.Group brand | [stux.design](https://stux.design) | [StuxDesign](https://github.com/StuxDesign) (org) | Coming soon |
| Stux.Games | Games and the open-source tools behind them | [stux.games](https://stux.games) | [StuxGames](https://github.com/StuxGames) (org) | Coming soon |

### Services & tools

| Service | What it is | Site | Repo | Badge |
|---|---|---|---|---|
| Stuxs.Tools | Free browser utilities, one page per tool | [stuxs.tools](https://stuxs.tools) | — (private) | Live: `stux-dev:stuxs-tools` |
| Downl.one | Media downloader | [downl.one](https://downl.one) | — (private) | Live: `stux-dev:downl-one` |
| AutoScroll | Auto-scrolling image gallery for Reddit | [autoscroll.stux.dev](https://autoscroll.stux.dev) | [StuxDev/AutoScroll](https://github.com/StuxDev/AutoScroll) | Live: `stux-dev:autoscroll` |
| Sm.lol | Short links, bio pages, QR codes, vCard and file links | [sm.lol](https://sm.lol) | — (private) | Live: `stux-dev:sm-lol` |
| Ream.st | Free multi-view stream viewers | [ream.st](https://ream.st) | [Ream-st](https://github.com/Ream-st) (org) | Live: `ream-st:ream-st` |
| Multi.st Twitch | Several Twitch streams at once | [twitch.multi.st](https://twitch.multi.st) | — (private) | Live: `ream-st:multi-st-twitch` |
| Multi.st YouTube | Several YouTube streams at once | [youtube.multi.st](https://youtube.multi.st) | — (private) | Live: `ream-st:multi-st-youtube` |

### Artists & Smart Links

| Service | What it is | Site | Repo | Badge |
|---|---|---|---|---|
| Stux Sharp | The artist Stux Sharp's official site | [stuxsharp.com](https://stuxsharp.com) | — (private) | Live: `stux-music:stux-sharp` |
| Sharp.Stux.Music | Smart-link and release portal for Stux Sharp | [sharp.stux.music](https://sharp.stux.music) | — (private) | Live: `stux-music:sharp-stux-music` |

Every Stux.Music artist is also listed on [artists.stux.music](https://artists.stux.music)
([StuxMusic/Artists](https://github.com/StuxMusic/Artists)).

### APIs & libraries

| Service | What it is | Site | Repo | Badge |
|---|---|---|---|---|
| SeasonalOverlaysLibrary | Dependency-free seasonal particle overlays | [seasonaloverlayslibrary.stuxapis.net](https://seasonaloverlayslibrary.stuxapis.net) | [StuxAPIs/SeasonalOverlaysLibrary](https://github.com/StuxAPIs/SeasonalOverlaysLibrary) | Live: `stuxapis:seasonaloverlayslibrary` |
| Kittens | Random kitten images API | [kittens.stuxapis.net](https://kittens.stuxapis.net) | [StuxAPIs/Kittens](https://github.com/StuxAPIs/Kittens) | Live: `stuxapis:kittens` |
| SecretGen | Secret generator API | [secretgen.stuxapis.net](https://secretgen.stuxapis.net) | [StuxAPIs/SecretGen](https://github.com/StuxAPIs/SecretGen) | Live: `stuxapis:secretgen` |
| GithubStats | GitHub statistics cards API | [githubstats.stuxapis.net](https://githubstats.stuxapis.net) | [StuxAPIs/GithubStats](https://github.com/StuxAPIs/GithubStats) | Live: `stuxapis:githubstats` |
| Lunar Calendar | Lunar calendar API (fork of hnthap's project) | — | [StuxAPIs/LunarCalendar](https://github.com/StuxAPIs/LunarCalendar) | Coming soon |

### Templates

| Service | What it is | Site | Repo | Badge |
|---|---|---|---|---|
| Soonpage | "Coming soon" page template | [soonpage.stux.group](https://soonpage.stux.group) | [StuxGroup/soonpage](https://github.com/StuxGroup/soonpage) | Template |
| Maintenancepage | Maintenance page template | [maintenancepage.stux.group](https://maintenancepage.stux.group) | [StuxGroup/maintenancepage](https://github.com/StuxGroup/maintenancepage) | Template |
| Servicepage | Placeholder for services not yet set up | [servicepage.stux.group](https://servicepage.stux.group) | [StuxGroup/servicepage](https://github.com/StuxGroup/servicepage) | Template |
| Instancepage | Landing page for Stuxedo customer servers | — | [Stuxedo/instancepage](https://github.com/Stuxedo/instancepage) | Template |
| GitHub Pages Redirect | Redirects `username.github.io` to a custom domain | — | [StuxGroup/GitHubPagesRedirect](https://github.com/StuxGroup/GitHubPagesRedirect) | Template |

### Discontinued

| Service | What it is | Site | Repo | Badge |
|---|---|---|---|---|
| Gaymer.Social | LGBTQ+ Mastodon instances (discontinued September 2026) | [gaymer.social](https://gaymer.social) | [GaymerSocial](https://github.com/GaymerSocial) (org) | Discontinued |

These tables (and the matching cards on the site) are the source of truth for what's listed. Update
both together when a service is added, retired or renamed.

### Badges

Each card shows exactly one badge, above its description. A `data-state` wins, in this order of
precedence: Discontinued, Template, Maintenance, Coming soon. Otherwise `main.js` shows a live
Online / Degraded / Offline badge from the card's `data-monitor`, read from that status page's
`data/summary.json`. `<source>:*` shows the page's overall status instead of one monitor's. With no
monitor, or no status available, the card has no badge.

| Source | Status page | Repo |
|---|---|---|
| `stux-group` (default) | [status.stux.group](https://status.stux.group) | [StuxGroup/Status](https://github.com/StuxGroup/Status) |
| `stux-dev` | [status.stux.dev](https://status.stux.dev) | [StuxDev/Status](https://github.com/StuxDev/Status) |
| `stuxapis` | [status.stuxapis.net](https://status.stuxapis.net) | [StuxAPIs/Status](https://github.com/StuxAPIs/Status) |
| `ream-st` | [status.ream.st](https://status.ream.st) | [Ream-st/Status](https://github.com/Ream-st/Status) |
| `stux-music` | [status.stux.music](https://status.stux.music) | [StuxMusic/Status](https://github.com/StuxMusic/Status) |
| `stuxiedev` | [status.stuxie.dev](https://status.stuxie.dev) | [StuxieDev/Status](https://github.com/StuxieDev/Status) |
| `robostux` | [status.robo.st](https://status.robo.st) | [RoboStux/Status](https://github.com/RoboStux/Status) |

`scripts/check-repo-links.sh` lists any linked repository that isn't public; private repos get no
Repository link.

## Local development

```
./dev-server.sh          # http://127.0.0.1:8080, DEV_MODE forced on
./dev-server.sh 3000 --no-dev-mode
```

On Windows, use `dev-server.bat` instead. No `npm install` needed: the dev server is a single
dependency-free Node script (`dev-server.js`); Node just needs to be installed. See
[CONTRIBUTING.md](CONTRIBUTING.md) for more.

## Releasing

1. Update `CHANGELOG.md`
2. Bump `VERSION.md`
3. Update this README if relevant
4. Run `./commit.sh` (or `commit.bat`): it reads `VERSION.md`, commits, and tags `vX.Y.Z`
5. `git push origin main --tags`; the release workflow then publishes a GitHub Release from the
   matching `CHANGELOG.md` section

## License

&copy; 2026 Stux.Group. All rights reserved. This repository is not licensed for reuse or
redistribution. Lato and Poppins (`assets/fonts/`) are under the SIL Open Font License.

---

*Stux.Group is the parent of the <picture><source media="(prefers-color-scheme: dark)" srcset="https://global.media.stux.group/icon-light.png"><source media="(prefers-color-scheme: light)" srcset="https://global.media.stux.group/icon-dark.png"><img src="https://global.media.stux.group/icon-dark.png" height="14" alt="Stux.Group" valign="middle"></picture> Stux.Group Brand of Companies.*

"Stux.Group" is the trading name of **Stux Group Ltd**, a company registered in England and Wales (company no. 13160574), registered office 82a James Carter Road, Mildenhall, England, IP28 7DE.

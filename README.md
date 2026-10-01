<p align="center">
  <img src="https://global.media.stux.group/logo.png" height="100" alt="Stux.Group Logo">
</p>

# Stux.Group Services

### *Every Stux.Group company, service, API and template, in one place.*

[Stux.Group Services](https://services.stux.group) is a small, static, no-build-step website that
indexes the Stux.Group Brand of Companies and links out to everything, each with its own repository
and, usually, its own site. It's built the same way as
[StuxieDev Projects](https://github.com/StuxieDev/Projects), in Stux.Group red.

- Plain HTML, CSS and JavaScript: no framework, no bundler, no dependencies to install
- **Live status** on each card, read from [status.stux.group](https://status.stux.group)
  (`StuxGroup/Status`, powered by [GitHup](https://githup.stux.group))
- **Seasonal overlays** from [SeasonalOverlaysLibrary](https://seasonaloverlayslibrary.stuxapis.net)
  (StuxAPIs): today's preset plays once per visit (never with reduced motion), and the hero button
  replays it
- Deployed to [GitHub Pages](https://pages.github.com/) by `.github/workflows/pages.yml`
- No accounts, no ads, no cookies, no tracking scripts

---

## Services listed here

| Service | What it is | Site | Repo |
|---|---|---|---|
| Stux.Group | The parent of the Stux.Group Brand of Companies | [stux.group](https://stux.group) | [StuxGroup](https://github.com/StuxGroup) (org) |
| Status | Live status and uptime history of Stux.Group's services | [status.stux.group](https://status.stux.group) | [StuxGroup/Status](https://github.com/StuxGroup/Status) |
| GitHup | Uptime monitoring and status pages, run entirely on GitHub | [githup.stux.group](https://githup.stux.group) | [StuxGroup/GitHup](https://github.com/StuxGroup/GitHup) |
| Stux.Dev | Free, ad-free, no-account web tools | [stux.dev](https://stux.dev) | [StuxDev](https://github.com/StuxDev) (org) |
| StuxAPIs | APIs and libraries for the Stux.Group ecosystem | [stuxapis.net](https://stuxapis.net) | [StuxAPIs](https://github.com/StuxAPIs) (org) |
| Stuxedo | Hosting and cloud services | [stuxedo.com](https://stuxedo.com) | [Stuxedo](https://github.com/Stuxedo) (org) |
| Stux.Cloud | The infrastructure behind Stuxedo | [stux.cloud](https://stux.cloud) | [StuxCloud](https://github.com/StuxCloud) (org) |
| Stux.Music | The record label for the artist Stux Sharp | [stux.music](https://stux.music) | [StuxMusic](https://github.com/StuxMusic) (org) |
| Ream.st | Free multi-view stream viewers | [ream.st](https://ream.st) | [Ream-st](https://github.com/Ream-st) (org) |
| Stuxs.Tools | Free browser utilities, one page per tool | [stuxs.tools](https://stuxs.tools) | [StuxDev/Stuxs.Tools](https://github.com/StuxDev/Stuxs.Tools) |
| Downl.one | Media downloader | [downl.one](https://downl.one) | [StuxDev/Downl.one](https://github.com/StuxDev/Downl.one) |
| AutoScroll | Auto-scrolling image gallery for Reddit | [autoscroll.stux.dev](https://autoscroll.stux.dev) | [StuxDev/AutoScroll](https://github.com/StuxDev/AutoScroll) |
| Multi.st Twitch | Several Twitch streams at once | [twitch.multi.st](https://twitch.multi.st) | [Ream-st/Multi.st-Twitch](https://github.com/Ream-st/Multi.st-Twitch) |
| Multi.st YouTube | Several YouTube streams at once | [youtube.multi.st](https://youtube.multi.st) | [Ream-st/Multi.st-Youtube](https://github.com/Ream-st/Multi.st-Youtube) |
| Stux Sharp | The artist Stux Sharp's official site | [stuxsharp.com](https://stuxsharp.com) | [StuxMusic/StuxSharp.com](https://github.com/StuxMusic/StuxSharp.com) |
| Sharp.Stux.Music | Smart-link and release portal for Stux Sharp | [sharp.stux.music](https://sharp.stux.music) | [StuxMusic/Sharp.Stux.Music](https://github.com/StuxMusic/Sharp.Stux.Music) |
| SeasonalOverlaysLibrary | Dependency-free seasonal particle overlays | [seasonaloverlayslibrary.stuxapis.net](https://seasonaloverlayslibrary.stuxapis.net) | [StuxAPIs/SeasonalOverlaysLibrary](https://github.com/StuxAPIs/SeasonalOverlaysLibrary) |
| Kittens | Random kitten images API | [kittens.stuxapis.net](https://kittens.stuxapis.net) | [StuxAPIs/Kittens](https://github.com/StuxAPIs/Kittens) |
| SecretGen | Secret generator API | [secretgen.stuxapis.net](https://secretgen.stuxapis.net) | [StuxAPIs/SecretGen](https://github.com/StuxAPIs/SecretGen) |
| Lunar Calendar | Lunar calendar API (fork of hnthap's project) | — | [StuxAPIs/LunarCalendar](https://github.com/StuxAPIs/LunarCalendar) |
| Soonpage | "Coming soon" page template | [soonpage.stux.group](https://soonpage.stux.group) | [StuxGroup/soonpage](https://github.com/StuxGroup/soonpage) |
| Maintenance Page | Maintenance page template | [maintenancepage.stux.group](https://maintenancepage.stux.group) | [StuxGroup/maintenancepage](https://github.com/StuxGroup/maintenancepage) |
| Servicepage | Placeholder for services not yet set up | [servicepage.stux.group](https://servicepage.stux.group) | [StuxGroup/servicepage](https://github.com/StuxGroup/servicepage) |
| Instance Page | Landing page for Stuxedo customer servers | — | [Stuxedo/instancepage](https://github.com/Stuxedo/instancepage) |
| GitHub Pages Redirect | Redirects `username.github.io` to a custom domain | — | [StuxGroup/GitHubPagesRedirect](https://github.com/StuxGroup/GitHubPagesRedirect) |
| Gaymer.Social | LGBTQ+ Mastodon instances (discontinued September 2026) | [gaymer.social](https://gaymer.social) | [GaymerSocial](https://github.com/GaymerSocial) (org) |

This table (and the matching cards on the site) is the source of truth for what's listed. Update
both together when a service is added, retired or renamed. A card gets a live status pill when it
has a `data-monitor` matching a monitor slug in `StuxGroup/Status`'s `.githup.yml`.

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

*Stux.Group is the parent of the <img src="https://global.media.stux.group/icon.png" height="14" alt="Stux.Group" valign="middle"> Stux.Group Brand of Companies.*

"Stux.Group" is the trading name of **Stux Group Ltd**, a company registered in England and Wales (company no. 13160574), registered office 82a James Carter Road, Mildenhall, England, IP28 7DE.

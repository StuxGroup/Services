# Changelog

All notable changes to Stux.Group Services (services.stux.group) are documented here. This
project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

(function () {
  // Dev-only banners in the shared site-banner component (dev-server.js forces DEV_MODE on);
  // ?banner=soon,maintenance,site previews the other styles.
  if (window.DEV_MODE) {
    var copy = {
      maintenance: ["Maintenance", "Stux.Group Services is being updated and will be back shortly."],
      soon: ["Coming soon", "Stux.Group Services is launching soon."],
      dev: ["Dev mode", "Local preview of Stux.Group Services. Run <code>dev-server.sh --no-dev-mode</code> to see it as production does."],
      site: ["Notice", "A site notice for Stux.Group Services appears here."]
    };
    var want = (new URLSearchParams(location.search).get("banner") || "").split(",");
    var box = document.createElement("div");
    box.className = "site-banners";
    box.setAttribute("data-site-banners", "");
    ["maintenance", "soon", "dev", "site"].forEach(function (v) {
      if (v !== "dev" && want.indexOf(v) < 0) return;
      var d = document.createElement("div");
      d.className = "site-banner site-banner--" + v;
      d.setAttribute("role", "note");
      d.innerHTML = '<span class="site-banner-label"></span><span class="site-banner-text">' + copy[v][1] + "</span>";
      d.firstChild.textContent = copy[v][0];
      box.appendChild(d);
    });
    document.body.insertBefore(box, document.body.firstChild);
    document.documentElement.classList.add("has-site-banner", "theme-dark");
    var bs = document.createElement("script");
    bs.src = "/assets/js/site-banner.js";
    document.body.appendChild(bs);
  }

  var yearEls = document.querySelectorAll("[data-year]");
  var year = new Date().getFullYear();
  // Copyright ranges: data-year-start is the year of the repo's first commit,
  // rendered as "start–current", or just the year while they're the same.
  yearEls.forEach(function (el) {
    var start = parseInt(el.getAttribute("data-year-start"), 10);
    el.textContent = start && start < year ? start + "–" + year : year;
  });

  // Live status: GitHup commits status.stux.group's data to StuxGroup/Status
  // every 5 minutes. Cards with data-monitor="<slug>" get a status pill, and
  // the status band gets the overall state. Nothing is shown if it can't load.
  var SUMMARY = "https://raw.githubusercontent.com/StuxGroup/Status/main/data/summary.json";
  var PILL = { up: "Operational", degraded: "Degraded", down: "Down" };
  var OVERALL = {
    up: "All systems operational", degraded: "Degraded performance",
    partial: "Partial outage", down: "Major outage"
  };
  fetch(SUMMARY + "?t=" + Date.now(), { cache: "no-store" })
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (summary) {
      var bySlug = {};
      (summary.monitors || []).forEach(function (m) { bySlug[m.slug] = m; });
      document.querySelectorAll("[data-monitor]").forEach(function (card) {
        var m = bySlug[card.getAttribute("data-monitor")];
        var pill = card.querySelector(".svc-status");
        if (!m || !pill || !PILL[m.status]) return;
        pill.className = "svc-status " + m.status;
        pill.textContent = PILL[m.status];
        pill.title = "Live from status.stux.group";
        pill.hidden = false;
      });
      var band = document.getElementById("status-band");
      if (band && OVERALL[summary.status]) {
        band.className = "status-band " + summary.status;
        band.querySelector("h2").textContent = OVERALL[summary.status];
        var n = (summary.monitors || []).length;
        band.querySelector("p").textContent = n + " services checked every 5 minutes by GitHup.";
      }
    })
    .catch(function () {});

  // Seasonal overlays: SeasonalOverlaysLibrary (StuxAPIs) plays today's preset
  // from its seasonal calendar. It plays once per visit on its own (never for
  // people who ask for reduced motion), and the hero button replays it.
  var lib = window.SeasonalOverlaysLibrary;
  if (!lib) return;
  var LABEL = {
    fireworks: "\uD83C\uDF86 Fireworks", hearts: "\u2764\uFE0F Hearts", stpatricks: "\uD83C\uDF40 Shamrocks",
    eastereggs: "\uD83E\uDD5A Easter eggs", rainbows: "\uD83C\uDF08 Pride rainbows", sunny: "\u2600\uFE0F Sunshine",
    pumpkins: "\uD83C\uDF83 Pumpkins", skullsghosts: "\uD83D\uDC7B Spooky season", thanksgiving: "\uD83E\uDD83 Thanksgiving",
    snow: "\u2744\uFE0F Snow", christmas: "\uD83C\uDF84 Christmas", nyeve: "\uD83C\uDF89 New Year's Eve",
    leavesSpring: "\uD83C\uDF31 Spring leaves", leavesSummer: "\uD83C\uDF3F Summer leaves",
    leavesAutumn: "\uD83C\uDF42 Autumn leaves", leavesWinter: "\uD83C\uDF3E Winter leaves"
  };
  var preset = lib.resolveAutoPreset(new Date());
  var btn = document.getElementById("season-btn");
  if (btn && preset) {
    btn.textContent = (LABEL[preset] || "\u2728 Today's overlay");
    btn.hidden = false;
  }
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var played = false;
  try { played = sessionStorage.getItem("sg-season-played") === "1"; } catch (e) {}
  if (preset && !reduced && !played) {
    setTimeout(function () { lib.auto(); }, 600);
    try { sessionStorage.setItem("sg-season-played", "1"); } catch (e) {}
  }
})();

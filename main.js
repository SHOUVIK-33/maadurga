/* ============================================================
   Maa Durga • Navratri — behaviour
   Countdown, shlok-of-day, ambient audio, virtual diya & bell,
   devotee wall, dynamic renderers.
   ============================================================ */
(function () {
  "use strict";
  const D = window.DURGA_DATA || {};

  /* ---------------- mobile nav ---------------- */
  function initNav() {
    const btn = document.querySelector(".burger");
    const nav = document.querySelector("nav.main");
    if (btn && nav) btn.addEventListener("click", () => nav.classList.toggle("open"));
  }

  /* ---------------- countdown ---------------- */
  function initCountdown() {
    const host = document.getElementById("countdown");
    if (!host) return;
    const noteEl = document.getElementById("cdNote");
    const badgeEl = document.getElementById("cdBadge");
    const labelEl = document.getElementById("cdLabel");

    const starts = (D.NAVRATRI_DATES || []).map(r => ({
      ...r, s: new Date(r.start + "T00:00:00+05:30"), e: new Date(r.end + "T23:59:59+05:30")
    }));

    function pick() {
      const now = new Date();
      const live = starts.find(r => now >= r.s && now <= r.e);
      if (live) return { live, next: starts.find(r => r.s > now) || live };
      const next = starts.find(r => r.s > now);
      return { live: null, next: next || starts[starts.length - 1] };
    }

    function tick() {
      const now = new Date();
      const { live, next } = pick();
      if (live && badgeEl) {
        badgeEl.style.display = "inline-block";
        badgeEl.textContent = "🪔 " + live.name + " chal rahi hai — Jai Maa Durga!";
      } else if (badgeEl) badgeEl.style.display = "none";

      const target = (live ? next.s : next.s);
      const diff = Math.max(0, target - now);
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      set("cdD", d); set("cdH", h); set("cdM", m); set("cdS", s);
      if (labelEl) labelEl.textContent = (live ? "Agli Navratri: " : "Agli Navratri: ") + next.name;
      if (noteEl) noteEl.textContent = next.name + " • " + fmt(next.start) + " se " + fmt(next.end) + " • " + next.note;
    }
    function set(id, v) { const el = document.getElementById(id); if (el) el.textContent = String(v).padStart(2, "0"); }
    function fmt(iso) {
      const dt = new Date(iso + "T00:00:00+05:30");
      return dt.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
    }
    tick();
    setInterval(tick, 1000);
  }

  /* ---------------- shlok of the day ---------------- */
  function initShlok() {
    const host = document.getElementById("shlokBox");
    if (!host || !(D.SHLOKS || []).length) return;
    const day = Math.floor(Date.now() / 86400000);
    const s = D.SHLOKS[day % D.SHLOKS.length];
    host.innerHTML =
      '<div class="sa">' + esc(s.sanskrit) + '</div>' +
      '<div class="hi hi">' + esc(s.hi) + '</div>' +
      '<div class="en">' + esc(s.en) + '</div>' +
      '<div class="src">— ' + esc(s.src) + '</div>';
  }

  /* ---------------- dynamic renderers ---------------- */
  function renderFourNavratri() {
    const host = document.getElementById("fourNavratri");
    if (!host) return;
    host.innerHTML = (D.FOUR_NAVRATRI || []).map(f => `
      <article class="card">
        <div class="icon">${f.icon}</div>
        <span class="pill">${esc(f.tag)}</span>
        <h3>${esc(f.name)}</h3>
        <div class="hi hi">${esc(f.nameHi)} • ${esc(f.season)}</div>
        <p><strong>Tithi:</strong> ${esc(f.month)}</p>
        <p>${esc(f.desc)}</p>
        <p class="katha" style="border-left:3px solid var(--gold);padding-left:12px;color:var(--muted);font-style:italic">${esc(f.katha)}</p>
      </article>`).join("");
  }

  function renderDates() {
    const host = document.getElementById("datesTable");
    if (!host) return;
    host.innerHTML = `<table><thead><tr><th>Navratri</th><th>Prakar</th><th>Pratipada (Start)</th><th>Navami (End)</th><th>Vishesh</th></tr></thead><tbody>` +
      (D.NAVRATRI_DATES || []).map(r => `<tr>
        <td><strong>${esc(r.name)}</strong><br><span class="hi">${esc(r.nameHi)}</span></td>
        <td><span class="pill">${esc(r.type)}</span></td>
        <td>${fmtDate(r.start)}</td><td>${fmtDate(r.end)}</td><td>${esc(r.note)}</td></tr>`).join("") +
      `</tbody></table>`;
  }

  function renderNavadurga() {
    const host = document.getElementById("navadurgaList");
    if (!host) return;
    host.innerHTML = (D.NAVADURGA || []).map(g => `
      <details class="roop">
        <summary>
          <span class="daybadge">${g.day}</span>
          <span class="ttl"><h3>${esc(g.name)}</h3><span class="hi">${esc(g.hi)} — ${esc(g.meaning)}</span></span>
          <span class="chev">▾</span>
        </summary>
        <div class="body">
          <p>${esc(g.desc)}</p>
          <div class="mantra hi">${esc(g.mantraHi)}<br><span style="font-family:var(--font-body);font-size:.85rem;color:var(--muted)">${esc(g.mantra)}</span></div>
          <div class="meta">
            <div><span class="k">Vahan</span><span class="v">${esc(g.vahan)}</span></div>
            <div><span class="k">Bhog</span><span class="v">${esc(g.bhog)}</span></div>
            <div><span class="k">Rang</span><span class="v"><span style="display:inline-block;width:14px;height:14px;border-radius:4px;vertical-align:-2px;margin-right:6px;background:${g.colourHex};border:1px solid rgba(0,0,0,.15)"></span>${esc(g.colour)}</span></div>
            <div><span class="k">Shastra / Chinh</span><span class="v">${esc(g.weapon)}</span></div>
            <div><span class="k">Beej Mantra</span><span class="v hi">${esc(g.beej)}</span></div>
            <div><span class="k">Phal</span><span class="v">${esc(g.blessing)}</span></div>
          </div>
          <p class="katha">${esc(g.katha)}</p>
        </div>
      </details>`).join("");
  }

  function renderColors() {
    const host = document.getElementById("colorGrid");
    if (!host) return;
    host.innerHTML = (D.NAVRATRI_COLORS || []).map(c => `
      <div class="swatch">
        <div class="dot" style="background:${c.hex}"></div>
        <div>
          <div class="sw-day">Din ${c.day}</div>
          <div class="sw-name">${esc(c.colour)} <span class="hi" style="font-family:var(--font-hi);color:var(--saffron)">(${esc(c.hi)})</span></div>
          <div style="font-size:.85rem;color:var(--muted)">${esc(c.meaning)}</div>
        </div>
      </div>`).join("");
  }

  function renderShaktipeeth() {
    const host = document.getElementById("shaktiTable");
    if (!host) return;
    const rows = D.SHAKTIPEETH || [];
    const search = document.getElementById("spSearch");
    const filter = document.getElementById("spFilter");
    function draw() {
      const q = (search && search.value || "").toLowerCase().trim();
      const c = filter ? filter.value : "";
      const list = rows.filter(r =>
        (!c || r.country === c) &&
        (!q || (r.name + r.loc + r.part + r.shakti + r.bhairav).toLowerCase().includes(q)));
      host.innerHTML = `<table><thead><tr><th>#</th><th>Shaktipeeth</th><th>Sthaan</th><th>Desh</th><th>Ang / Aabhushan</th><th>Shakti (Devi)</th><th>Bhairav</th></tr></thead><tbody>` +
        list.map(r => `<tr>
          <td>${r.n}</td>
          <td><strong>${esc(r.name)}</strong></td>
          <td>${esc(r.loc)}</td>
          <td>${esc(r.country)}</td>
          <td>${esc(r.part)}</td>
          <td class="hi">${esc(r.shakti)}</td>
          <td>${esc(r.bhairav)}</td></tr>`).join("") +
        `</tbody></table><p style="padding:10px 14px;color:var(--muted);font-size:.85rem">${list.length} peeth dikhaye ja rahe hain.</p>`;
    }
    if (search) search.addEventListener("input", draw);
    if (filter) filter.addEventListener("change", draw);
    draw();
  }

  function renderMandirs() {
    const host = document.getElementById("mandirGrid");
    if (!host) return;
    host.innerHTML = (D.MANDIRS || []).map(m => `
      <article class="card">
        <h3>${esc(m.name)}</h3>
        <div class="hi hi">${esc(m.hi)}</div>
        <p><strong>📍 ${esc(m.place)}</strong></p>
        <p>${esc(m.about)}</p>
        <p><span class="pill">Darshan ka samay: ${esc(m.best)}</span></p>
      </article>`).join("");
  }

  function renderSamagri() {
    const host = document.getElementById("samagriWrap");
    if (!host) return;
    host.innerHTML = Object.entries(D.SAMAGRI || {}).map(([k, arr]) => `
      <article class="card">
        <h3>${esc(k)}</h3>
        <ul class="checklist" style="columns:1">${arr.map(i => `<li>${esc(i)}</li>`).join("")}</ul>
      </article>`).join("");
  }

  function renderSeason() {
    const host = document.getElementById("seasonWrap");
    if (!host) return;
    host.innerHTML = (D.SEASON_SCIENCE || []).map(s => `
      <article class="card"><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></article>`).join("");
  }

  function renderStotrams() {
    const host = document.getElementById("stotramGrid");
    if (!host) return;
    host.innerHTML = (D.STOTRAMS || []).map(s => `
      <article class="card">
        <span class="pill">${esc(s.type)}</span>
        <h3>${esc(s.name)}</h3>
        <div class="hi hi">${esc(s.hi)}</div>
        <p>${esc(s.about)}</p>
        <div class="mantra hi" style="background:var(--cream-2);border-radius:12px;padding:12px 14px;font-size:.95rem;color:var(--maroon)">${esc(s.sample)}</div>
      </article>`).join("");
  }

  /* ---------------- ambient audio (Web Audio, no files needed) ---------------- */
  function initAudio() {
    const btn = document.getElementById("audioToggle");
    if (!btn) return;
    let ctx = null, master = null, drone = null, chimeTimer = null, on = false;

    function makeCtx() {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      master = ctx.createGain();
      master.gain.value = 0.0;
      master.connect(ctx.destination);
    }
    function startDrone() {
      // soft tanpura-like drone (Sa-Pa)
      const freqs = [146.83, 220.0, 293.66];
      drone = freqs.map((f, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = i === 0 ? "sine" : "triangle";
        o.frequency.value = f;
        g.gain.value = i === 0 ? 0.18 : 0.06;
        o.connect(g); g.connect(master); o.start();
        return { o, g };
      });
      // slow tremolo LFO
      const lfo = ctx.createOscillator();
      const lg = ctx.createGain();
      lfo.frequency.value = 0.08; lg.gain.value = 0.05;
      lfo.connect(lg); lg.connect(master.gain); lfo.start();
    }
    function bell() {
      const now = ctx.currentTime;
      const partials = [523.25, 659.25, 783.99, 1046.5];
      partials.forEach((f, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = "sine"; o.frequency.value = f;
        g.gain.setValueAtTime(0, now);
        g.gain.linearRampToValueAtTime(0.14 / (i + 1), now + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, now + 3.2 - i * 0.3);
        o.connect(g); g.connect(master);
        o.start(now); o.stop(now + 3.4);
      });
    }
    function scheduleChime() {
      bell();
      chimeTimer = setTimeout(scheduleChime, 6000 + Math.random() * 6000);
    }
    function toggle() {
      if (!ctx) { makeCtx(); startDrone(); }
      if (ctx.state === "suspended") ctx.resume();
      on = !on;
      const t = ctx.currentTime;
      master.gain.cancelScheduledValues(t);
      master.gain.linearRampToValueAtTime(on ? 0.5 : 0.0, t + 1.2);
      if (on) { btn.classList.add("playing"); btn.querySelector(".label").textContent = "Aarti Chal Rahi Hai — Mute"; if (!chimeTimer) scheduleChime(); }
      else { btn.classList.remove("playing"); btn.querySelector(".label").textContent = "Aarti / Stotram Chalao"; clearTimeout(chimeTimer); chimeTimer = null; }
    }
    btn.addEventListener("click", toggle);
  }

  /* ---------------- virtual diya ---------------- */
  function initDiya() {
    const diya = document.getElementById("diya");
    if (!diya) return;
    const hint = document.getElementById("diyaHint");
    diya.addEventListener("click", () => {
      diya.classList.toggle("lit");
      if (hint) hint.textContent = diya.classList.contains("lit")
        ? "🪔 Diya jal gaya — Maa ka aashirwad sada bana rahe!" : "Diya par click karke jalayein 🪔";
    });
  }

  /* ---------------- bell / shankh ---------------- */
  function initBell() {
    const b = document.getElementById("bellBtn");
    if (!b) return;
    const hint = document.getElementById("bellHint");
    b.addEventListener("click", () => {
      b.classList.remove("ring"); void b.offsetWidth; b.classList.add("ring");
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const now = ctx.currentTime;
        [660, 990, 1320, 1760].forEach((f, i) => {
          const o = ctx.createOscillator(), g = ctx.createGain();
          o.type = "triangle"; o.frequency.value = f;
          g.gain.setValueAtTime(0, now);
          g.gain.linearRampToValueAtTime(0.2 / (i + 1), now + 0.01);
          g.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);
          o.connect(g); g.connect(ctx.destination); o.start(now); o.stop(now + 1.7);
        });
        setTimeout(() => ctx.close(), 2000);
      } catch (e) { /* audio not available */ }
      if (hint) hint.textContent = "🔔 Ghanti baj gayi — Om Namah Shivaya!";
    });
  }

  /* ---------------- devotee wall ---------------- */
  function initWall() {
    const form = document.getElementById("wallForm");
    const list = document.getElementById("wallList");
    if (!form || !list) return;
    const KEY = "durga_devotee_wall_v1";
    const seed = [
      { name: "Ananya", msg: "Maa, mere parivaar ko sada swasth rakho. Jai Mata Di!", when: "Navratri 2026" },
      { name: "Rohit Verma", msg: "Jai Maa Durga! Meri manokamna poori karo Maa.", when: "Navratri 2026" },
      { name: "Priya", msg: "Maa ke charnon mein meri prarthna — sabka kalyan ho.", when: "Navratri 2026" }
    ];
    function load() { try { return JSON.parse(localStorage.getItem(KEY)) || seed; } catch (e) { return seed; } }
    function save(v) { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) {} }
    function draw() {
      const items = load().slice().reverse();
      list.innerHTML = items.map(n => `
        <div class="note">
          <div class="who">🙏 ${esc(n.name)}</div>
          <div>${esc(n.msg)}</div>
          <div class="when">${esc(n.when)}</div>
        </div>`).join("");
    }
    form.addEventListener("submit", e => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]').value.trim();
      const msg = form.querySelector('[name="msg"]').value.trim();
      if (!name || !msg) return;
      const items = load();
      items.push({ name, msg, when: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) });
      save(items); form.reset(); draw();
    });
    draw();
  }

  /* ---------------- wallpaper / graphic download ---------------- */
  function initWallpapers() {
    document.querySelectorAll("[data-download-svg]").forEach(btn => {
      btn.addEventListener("click", () => {
        const svg = document.getElementById(btn.dataset.downloadSvg);
        if (!svg) return;
        const blob = new Blob([svg.outerHTML], { type: "image/svg+xml;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = (btn.dataset.filename || "durga-graphic") + ".svg";
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 4000);
      });
    });
  }

  /* ---------------- helpers ---------------- */
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
  function fmtDate(iso) { return new Date(iso + "T00:00:00+05:30").toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }); }

  /* ---------------- boot ---------------- */
  document.addEventListener("DOMContentLoaded", function () {
    initNav(); initCountdown(); initShlok(); initAudio();
    renderFourNavratri(); renderDates(); renderNavadurga(); renderColors();
    renderShaktipeeth(); renderMandirs(); renderSamagri(); renderSeason(); renderStotrams();
    initDiya(); initBell(); initWall(); initWallpapers();
  });
})();

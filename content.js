/* ═══════════════════════════════════════════════════
   navigation.js — Chapter & section routing
   ═══════════════════════════════════════════════════ */

/* State */
let curCh  = null;
let curSec = null;
let rubOpen = false;
const RS  = {};   // rubric checkbox state
const RSC = {};   // rubric scores
const visitedSecs = {};

/* ── CHAPTER OPEN/CLOSE ─────────────────────────── */
function openChapter(id) {
  curCh = id;
  if (!visitedSecs[id]) visitedSecs[id] = {};
  rubOpen = false;

  const rb  = document.getElementById('rb');
  const rar = document.getElementById('rar');
  if (rb)  rb.classList.remove('op');
  if (rar) rar.textContent = '▼';

  buildRubric(id);
  showSec(SEC[id][0].id);

  document.getElementById('det').classList.add('act');
  document.getElementById('map').classList.add('h');
}

function closeChapter() {
  document.getElementById('det').classList.remove('act');
  document.getElementById('map').classList.remove('h');
}

function prevCh() {
  const ids = CM.map(c => c.id);
  const i   = ids.indexOf(curCh);
  if (i > 0) openChapter(ids[i - 1]);
}

function nextCh() {
  const ids = CM.map(c => c.id);
  const i   = ids.indexOf(curCh);
  if (i < ids.length - 1) openChapter(ids[i + 1]);
}

/* ── SECTION NAVIGATION ─────────────────────────── */
function showSec(sid) {
  curSec = sid;
  if (!visitedSecs[curCh]) visitedSecs[curCh] = {};
  visitedSecs[curCh][sid] = true;

  const ch   = CM.find(x => x.id === curCh);
  const secs = SEC[curCh];
  const idx  = secs.findIndex(s => s.id === sid);
  const sec  = secs[idx];

  /* Content */
  const co  = document.getElementById('dco');
  const key = curCh + '_' + sid;
  let html  = '';

  /* Chapter intro card on first section */
  if (idx === 0) {
    html += `<div class="ch-intro-card" style="--ch-color:${ch.color}">
      <div class="ch-intro-num">${ch.num}</div>
      <div class="ch-intro-llo">${ch.lo ? 'LLO ' + ch.num + ' — ' : ''}${ch.title}</div>
      <div class="ch-intro-title">${ch.desc}</div>
      <div class="ch-intro-desc" style="margin-top:.5rem">
        ${ch.tags.map(t =>
          `<span style="display:inline-block;margin:.15rem;font-size:.6rem;font-weight:700;
            padding:.15rem .5rem;border-radius:10px;background:rgba(255,255,255,.1);
            color:rgba(255,255,255,.6)">${t}</span>`
        ).join('')}
      </div>
    </div>`;
  }

  /* Rubric context badge */
  if (sec.rubric && sec.rubric.length && ch.lo) {
    html += `<div class="rubric-context" role="note" aria-label="Rubric context">
      <span class="rubric-context-label">📋 Rubric</span>
      <div class="rubric-context-items">
        ${sec.rubric.map(r => `<span class="rc-badge">${r}</span>`).join('')}
      </div>
      <button onclick="openRubricPanel()" aria-label="Toon rubric criteria"
        style="margin-left:auto;font-size:.62rem;color:rgba(125,194,66,.7);background:none;
          border:none;cursor:pointer;font-family:inherit;">Criteria ↑</button>
    </div>`;
  }

  /* Main content */
  html += CO[key] ? CO[key]()
    : `<div class="cs ac"><p style="color:var(--mu)">Sectie laden…</p></div>`;

  /* Section nav */
  const prevSec    = secs[idx - 1];
  const nextSec    = secs[idx + 1];
  const chIdx      = CM.findIndex(c => c.id === curCh);
  const nextChap   = idx === secs.length - 1 ? CM[chIdx + 1] : null;

  html += `<nav class="section-nav" aria-label="Sectie navigatie">
    <button class="sec-nav-btn prev" aria-label="${prevSec ? prevSec.l : 'Vorig hoofdstuk'}"
      onclick="${prevSec ? `showSec('${prevSec.id}')` : 'prevCh()'}">
      ← ${prevSec ? prevSec.l : 'Vorig hoofdstuk'}
    </button>
    <span style="font-size:.68rem;color:var(--mu)" aria-label="Sectie ${idx+1} van ${secs.length}">${idx + 1} / ${secs.length}</span>
    ${nextSec
      ? `<button class="sec-nav-btn next" style="background:${ch.color};color:${ch.color === '#f5c842' ? '#0a1a0a' : '#fff'}"
           aria-label="${nextSec.l}" onclick="showSec('${nextSec.id}')">
          ${nextSec.l} →
         </button>`
      : nextChap
        ? `<button class="sec-nav-btn next-green" aria-label="${nextChap.title}"
             onclick="openChapter('${nextChap.id}')">
            Verder: ${nextChap.title} →
           </button>`
        : `<button class="sec-nav-btn next-green" aria-label="Terug naar kaart"
             onclick="closeChapter()">← Terug naar kaart</button>`
    }
  </nav>`;

  co.innerHTML  = html;
  co.scrollTop  = 0;

  buildSidebar();
  updateProgress();
  buildRightPanel();
}

/* ── PROGRESS ───────────────────────────────────── */
function updateProgress() {
  if (!curCh) return;
  const secs = SEC[curCh];
  const idx  = secs.findIndex(s => s.id === curSec);
  const pct  = secs.length > 1 ? Math.round((idx / (secs.length - 1)) * 100) : 100;

  const bar = document.getElementById('prog-bar');
  if (bar) bar.style.width = pct + '%';

  const tabs = document.getElementById('prog-chapters');
  if (!tabs) return;
  tabs.innerHTML = CM.map(ch => {
    const isCur  = ch.id === curCh;
    const isDone = Object.keys(visitedSecs[ch.id] || {}).length > 0;
    return `<button class="prog-ch-btn ${isCur ? 'active' : isDone ? 'done' : ''}"
      style="--ch-color:${ch.color}"
      onclick="openChapter('${ch.id}')"
      aria-label="${ch.title}" aria-current="${isCur ? 'true' : 'false'}">
      <span class="ch-num">${ch.num}</span>${ch.title}
    </button>`;
  }).join('');

  const sec = secs[idx];
  const el1 = document.getElementById('dcc');
  const el2 = document.getElementById('dcc2');
  if (el1) el1.textContent = CM.find(c => c.id === curCh)?.title || '';
  if (el2 && sec) el2.textContent = sec.l;
}

/* ── SIDEBAR ────────────────────────────────────── */
function buildSidebar() {
  const ch      = CM.find(x => x.id === curCh);
  const secs    = SEC[curCh];
  const ds      = document.getElementById('ds');
  if (!ds) return;

  const groups  = {};
  secs.forEach(s => {
    if (!groups[s.group]) groups[s.group] = [];
    groups[s.group].push(s);
  });

  const visited  = visitedSecs[curCh] || {};
  const doneCnt  = Object.keys(visited).length;

  let html = `<div class="ds-header">
    <div class="ds-chapter-name">${ch.icon} ${ch.title}</div>
    <div class="ds-progress-text">${doneCnt}/${secs.length} secties bekeken</div>
  </div>`;

  Object.entries(groups).forEach(([grp, items]) => {
    html += `<div class="ds-section-group" role="group" aria-label="${grp}">
      <div class="ds-group-label" aria-hidden="true">${grp}</div>`;
    items.forEach(s => {
      const isAc   = s.id === curSec;
      const isDone = visited[s.id];
      html += `<div class="dsi ${isAc ? 'ac' : ''} ${isDone && !isAc ? 'done-sec' : ''}"
        data-s="${s.id}" onclick="showSec('${s.id}')"
        role="button" tabindex="0" aria-current="${isAc ? 'true' : 'false'}"
        style="${isAc ? '--ch-color:' + ch.color : ''}"
        onkeydown="if(event.key==='Enter'||event.key===' ')showSec('${s.id}')">
        <span class="sid" style="background:${ch.color}" aria-hidden="true"></span>
        ${s.l}
        <span class="sec-done-mark" aria-label="Bekeken">✓</span>
      </div>`;
    });
    html += '</div>';
  });

  if (ch.lo && RUB[ch.lo]) {
    const r      = RUB[ch.lo];
    const scores = RSC[curCh] || {};
    html += `<div class="ds-llo-footer" aria-label="LLO scores">
      <div class="ds-llo-title">${r.title}</div>
      <div class="ds-llo-scores">
        ${r.cols.map((col, ci) =>
          `<div class="ds-score-pill ${scores[ci] ? 'set' : ''}" title="${col.t}">
            ${col.t.split(' ')[0]}: ${scores[ci] || '—'}
          </div>`
        ).join('')}
      </div>
    </div>`;
  }

  ds.innerHTML = html;
}

/* ── RIGHT RUBRIC PANEL ─────────────────────────── */
function buildRightPanel() {
  const panel = document.getElementById('sec-rubric-panel');
  if (!panel) return;
  const ch  = CM.find(x => x.id === curCh);
  const sec = SEC[curCh]?.find(s => s.id === curSec);

  if (!sec?.rubric?.length || !ch.lo) {
    panel.classList.remove('visible');
    return;
  }

  panel.classList.add('visible');
  const r = RUB[ch.lo];

  panel.innerHTML = `<div class="srp-title">📋 Rubric</div>
    <div style="font-size:.62rem;color:rgba(255,255,255,.28);margin-bottom:.75rem;line-height:1.5">${r.title}</div>
    ${sec.rubric.map(tag => `<div class="srp-item"><span class="srp-dot"></span>${tag}</div>`).join('')}
    <div style="margin-top:.75rem;padding-top:.65rem;border-top:1px solid rgba(255,255,255,.07)">
      <div class="srp-title">Relevante criteria</div>
      ${r.cols.map(col => {
        const rel = col.items.filter(it =>
          sec.rubric.some(tag =>
            it.toLowerCase().includes(tag.toLowerCase().split(' ')[0].toLowerCase())
          )
        );
        if (!rel.length) return '';
        return `<div style="margin-bottom:.6rem">
          <div style="font-size:.58rem;font-weight:800;color:${col.color};margin-bottom:.3rem">${col.t}</div>
          ${rel.map(it =>
            `<div class="srp-item"><span class="srp-dot" style="background:${col.color}50"></span>${it}</div>`
          ).join('')}
        </div>`;
      }).join('')}
    </div>`;
}

/* ── RUBRIC PANEL ───────────────────────────────── */
function buildRubric(chId) {
  const ch  = CM.find(x => x.id === chId);
  const r   = ch.lo ? RUB[ch.lo] : null;
  const tl  = document.getElementById('rtl');
  const rb  = document.getElementById('rb');
  if (!tl || !rb) return;

  if (!r) {
    tl.textContent = `${ch.icon} ${ch.title} — geen LLO-rubric`;
    rb.innerHTML   = '';
    return;
  }

  tl.textContent = `📋 ${r.title} — ${r.noten}`;
  if (!RS[chId])  RS[chId]  = {};
  if (!RSC[chId]) RSC[chId] = {};

  rb.innerHTML = `
    <div style="width:100%;padding-bottom:.6rem;border-bottom:1px solid rgba(255,255,255,.06);margin-bottom:.6rem;flex-basis:100%">
      <div style="font-size:.62rem;color:rgba(255,255,255,.35);line-height:1.55;max-width:900px">
        <strong style="color:rgba(255,255,255,.55)">Bekwaam (6–7):</strong> ${r.niveaus.bekwaam.substring(0,110)}…
        &nbsp;|&nbsp;<strong style="color:rgba(255,255,255,.55)">Gevorderd (8):</strong> ${r.niveaus.gevorderd.substring(0,75)}…
        &nbsp;|&nbsp;<strong style="color:rgba(255,255,255,.55)">Excellent (9–10):</strong> ${r.niveaus.excellent.substring(0,75)}…
      </div>
    </div>
    ${r.cols.map((col, ci) => {
      if (!RS[chId][ci])  RS[chId][ci]  = {};
      const checked = Object.values(RS[chId][ci]).filter(Boolean).length;
      return `<div class="rc">
        <div class="rct" style="color:${col.color}">${col.t}
          <span style="color:rgba(255,255,255,.28);font-size:.52rem;font-weight:400;margin-left:.25rem">(${checked}/${col.items.length})</span>
        </div>
        ${col.items.map((it, ii) =>
          `<div class="rr" onclick="togCheck(${ci},${ii})" role="checkbox"
            aria-checked="${RS[chId][ci][ii] ? 'true' : 'false'}"
            tabindex="0" onkeydown="if(event.key==='Enter'||event.key===' ')togCheck(${ci},${ii})">
            <div class="rch ${RS[chId][ci][ii] ? 'on' : ''}" aria-hidden="true">${RS[chId][ci][ii] ? '✓' : ''}</div>
            <div class="rrt">${it}</div>
          </div>`
        ).join('')}
        <div class="rsc">
          <span class="rsl">Score:</span>
          <div class="rsb" role="group" aria-label="Score ${col.t}">
            ${[6,7,8,9,10].map(n =>
              `<button class="rsbn ${RSC[chId][ci] === n ? 'on' : ''}"
                onclick="setScore(${ci},${n},event)"
                aria-label="Score ${n}" aria-pressed="${RSC[chId][ci] === n}">${n}</button>`
            ).join('')}
          </div>
          <span style="font-size:.62rem;color:${RSC[chId][ci] ? col.color : 'rgba(255,255,255,.22)'}">
            ${RSC[chId][ci] ? '→ ' + niveauLabel(RSC[chId][ci]) : ''}
          </span>
        </div>
      </div>`;
    }).join('')}`;
}

function niveauLabel(n) {
  return n >= 9 ? 'Excellent' : n >= 8 ? 'Gevorderd' : n >= 6 ? 'Bekwaam' : 'Niet bekwaam';
}

function togCheck(ci, ii) {
  if (!RS[curCh])       RS[curCh]       = {};
  if (!RS[curCh][ci])   RS[curCh][ci]   = {};
  RS[curCh][ci][ii] = !RS[curCh][ci][ii];
  buildRubric(curCh);
  if (!rubOpen) openRubricPanel();
}

function setScore(ci, n, e) {
  e.stopPropagation();
  if (!RSC[curCh]) RSC[curCh] = {};
  RSC[curCh][ci] = RSC[curCh][ci] === n ? null : n;
  buildRubric(curCh);
  buildSidebar();
  if (!rubOpen) openRubricPanel();
}

function togRubric() {
  rubOpen = !rubOpen;
  document.getElementById('rb')?.classList.toggle('op', rubOpen);
  if (document.getElementById('rar')) document.getElementById('rar').textContent = rubOpen ? '▲' : '▼';
}

function openRubricPanel() {
  rubOpen = true;
  document.getElementById('rb')?.classList.add('op');
  if (document.getElementById('rar')) document.getElementById('rar').textContent = '▲';
}

/* ── KEYBOARD ───────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeChapter(); return; }
  if (!curCh || !curSec) return;
  const secs = SEC[curCh];
  const i    = secs.findIndex(s => s.id === curSec);
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    e.preventDefault();
    if (i < secs.length - 1) showSec(secs[i + 1].id); else nextCh();
  }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault();
    if (i > 0) showSec(secs[i - 1].id); else prevCh();
  }
});

// Shared auth, storage, and progress utilities

const STORAGE_KEY = 'grade4_math_helper';
const DEFAULT_ADMIN_PASS   = 'admin2024';
const DEFAULT_WILLIAM_PASS = 'spidey1';

// ── STORAGE ───────────────────────────────────────────────────────────────────

function getStore() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}

function saveStore(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// ── PASSWORDS ─────────────────────────────────────────────────────────────────

function getAdminPass()    { return getStore().adminPass    || DEFAULT_ADMIN_PASS; }
function getWilliamPass()  { return getStore().williamPass  || DEFAULT_WILLIAM_PASS; }

function setWilliamPass(p) { const s = getStore(); s.williamPass = p; saveStore(s); }
function setAdminPass(p)   { const s = getStore(); s.adminPass   = p; saveStore(s); }

// ── SESSION ───────────────────────────────────────────────────────────────────

function getSession()      { return sessionStorage.getItem('math_session'); }
function setSession(role)  { sessionStorage.setItem('math_session', role); }
function clearSession()    { sessionStorage.removeItem('math_session'); }

function requireAuth(role) {
  const s = getSession();
  if (!s) { location.href = 'index.html'; return false; }
  if (role && s !== role) { location.href = s === 'admin' ? 'admin.html' : 'dashboard.html'; return false; }
  return true;
}

// ── PROGRESS ──────────────────────────────────────────────────────────────────
// Schema:
// {
//   currentBlock: 1,          // highest block unlocked (1-based)
//   blockData: {
//     '1': { passed, bestScore, bestTime, attempts, lastDate }
//   },
//   badges: [],
//   practiceDays: [],         // ['2024-07-01', ...]
//   todayDate: '2024-07-01',
//   todayDone: false
// }

function getProgress() {
  const s = getStore();
  return s.progress || {
    currentBlock: 1,
    blockData: {},
    badges: [],
    practiceDays: [],
    todayDate: '',
    todayDone: false
  };
}

function saveProgress(p) {
  const s = getStore();
  s.progress = p;
  saveStore(s);
}

function resetProgress() {
  const s = getStore();
  s.progress = { currentBlock: 1, blockData: {}, badges: [], practiceDays: [], todayDate: '', todayDone: false };
  saveStore(s);
}

function isDoneToday() {
  const p    = getProgress();
  const today = new Date().toISOString().split('T')[0];
  return p.todayDate === today && p.todayDone;
}

// Save a block result. Returns { newBadges, passed }.
function saveBlockResult(blockId, correctCount, elapsedSeconds, passScore) {
  const p     = getProgress();
  const key   = String(blockId);
  const today = new Date().toISOString().split('T')[0];
  const passed = correctCount >= passScore;
  const prev   = p.blockData[key] || {};

  p.blockData[key] = {
    passed:    passed || prev.passed || false,  // once passed, stays passed
    bestScore: Math.max(correctCount, prev.bestScore ?? 0),
    bestTime:  passed
      ? (prev.bestTime ? Math.min(elapsedSeconds, prev.bestTime) : elapsedSeconds)
      : (prev.bestTime ?? null),
    attempts:  (prev.attempts ?? 0) + 1,
    lastDate:  today,
    lastScore: correctCount
  };

  // Advance currentBlock if this block was just passed
  if (passed && blockId === p.currentBlock && blockId < 20) {
    p.currentBlock = blockId + 1;
  }

  // Record today's drill (soft lock)
  p.todayDate = today;
  p.todayDone = true;

  // Record practice day
  if (!p.practiceDays.includes(today)) p.practiceDays.push(today);

  // Check badges
  const newBadges = checkAndAwardBadges(p);
  saveProgress(p);
  return { newBadges, passed };
}

// ── BADGES ────────────────────────────────────────────────────────────────────

function checkAndAwardBadges(p) {
  if (typeof BADGES === 'undefined') return [];
  const earned = [];
  for (const b of BADGES) {
    if (!(p.badges||[]).includes(b.id) && b.check(p)) {
      if (!p.badges) p.badges = [];
      p.badges.push(b.id);
      earned.push(b);
    }
  }
  return earned;
}

// ── HELPERS ───────────────────────────────────────────────────────────────────

function scoreColor(correct, total) {
  const pct = correct / total;
  if (pct === 1)   return 'gold';
  if (pct >= 0.9)  return 'great';
  if (pct >= 0.7)  return 'ok';
  if (pct > 0)     return 'low';
  return 'none';
}

function formatTime(sec) {
  const m = Math.floor(sec / 60), s = sec % 60;
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

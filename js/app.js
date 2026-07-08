// Shared auth, storage, and progress utilities

const STORAGE_KEY = 'grade4_math_helper';
const DEFAULT_ADMIN_PASS = 'admin2024';
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

function getAdminPass() {
  return getStore().adminPass || DEFAULT_ADMIN_PASS;
}

function getWilliamPass() {
  return getStore().williamPass || DEFAULT_WILLIAM_PASS;
}

function setWilliamPass(newPass) {
  const store = getStore();
  store.williamPass = newPass;
  saveStore(store);
}

function setAdminPass(newPass) {
  const store = getStore();
  store.adminPass = newPass;
  saveStore(store);
}

// ── SESSION ───────────────────────────────────────────────────────────────────

function getSession() {
  return sessionStorage.getItem('math_session'); // 'william' or 'admin'
}

function setSession(role) {
  sessionStorage.setItem('math_session', role);
}

function clearSession() {
  sessionStorage.removeItem('math_session');
}

function requireAuth(role) {
  const session = getSession();
  if (!session) { window.location.href = 'index.html'; return false; }
  if (role && session !== role) {
    window.location.href = session === 'admin' ? 'admin.html' : 'dashboard.html';
    return false;
  }
  return true;
}

// ── PROGRESS ──────────────────────────────────────────────────────────────────

function getProgress() {
  const store = getStore();
  return store.progress || { scores: {}, badges: [], practiceDays: [] };
}

function saveProgress(progress) {
  const store = getStore();
  store.progress = progress;
  saveStore(store);
}

function resetProgress() {
  const store = getStore();
  store.progress = { scores: {}, badges: [], practiceDays: [] };
  saveStore(store);
}

function recordPracticeDay(progress) {
  const today = new Date().toISOString().split('T')[0];
  if (!progress.practiceDays) progress.practiceDays = [];
  if (!progress.practiceDays.includes(today)) {
    progress.practiceDays.push(today);
  }
}

// Save a drill result. Returns array of newly earned badges.
function saveDrillResult(drillKey, correctCount) {
  const progress = getProgress();
  if (!progress.scores) progress.scores = {};

  const prev = progress.scores[drillKey];
  progress.scores[drillKey] = {
    best: Math.max(correctCount, prev?.best ?? 0),
    lastScore: correctCount,
    attempts: (prev?.attempts ?? 0) + 1,
    lastDate: new Date().toISOString().split('T')[0]
  };

  recordPracticeDay(progress);
  const newBadges = checkAndAwardBadges(progress);
  saveProgress(progress);
  return newBadges;
}

// ── BADGES ────────────────────────────────────────────────────────────────────

function checkAndAwardBadges(progress) {
  const newBadges = [];
  if (typeof BADGES === 'undefined') return newBadges;
  for (const badge of BADGES) {
    if (!(progress.badges || []).includes(badge.id) && badge.check(progress)) {
      if (!progress.badges) progress.badges = [];
      progress.badges.push(badge.id);
      newBadges.push(badge);
    }
  }
  return newBadges;
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

function scorePercent(correct, total) {
  return Math.round((correct / total) * 100);
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

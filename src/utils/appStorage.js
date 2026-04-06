export const STORAGE_KEYS = {
  scenarioProgress: 'insurance:scenario-progress',
  scenarioResults: 'insurance:scenario-results',
  completedScenarios: 'insurance:completed-scenarios',
  quizProgress: 'insurance:quiz-progress',
  bestQuizScore: 'insurance:quiz-best-score',
  lastQuizResult: 'insurance:last-quiz-result',
};

function isBrowser() {
  return typeof window !== 'undefined';
}

function loadJSON(key, fallback) {
  if (!isBrowser()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveJSON(key, value) {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

export function getScenarioProgress(scenarioId) {
  const all = loadJSON(STORAGE_KEYS.scenarioProgress, {});
  return all?.[scenarioId] || null;
}

export function saveScenarioProgress(scenarioId, payload) {
  const all = loadJSON(STORAGE_KEYS.scenarioProgress, {});
  all[scenarioId] = {
    ...payload,
    updatedAt: Date.now(),
  };
  saveJSON(STORAGE_KEYS.scenarioProgress, all);
}

export function clearScenarioProgress(scenarioId) {
  const all = loadJSON(STORAGE_KEYS.scenarioProgress, {});
  delete all[scenarioId];
  saveJSON(STORAGE_KEYS.scenarioProgress, all);
}

export function saveScenarioResult(scenarioId, payload) {
  const all = loadJSON(STORAGE_KEYS.scenarioResults, {});
  all[scenarioId] = {
    ...payload,
    updatedAt: Date.now(),
  };
  saveJSON(STORAGE_KEYS.scenarioResults, all);
}

export function getScenarioResultState(scenarioId) {
  const all = loadJSON(STORAGE_KEYS.scenarioResults, {});
  return all?.[scenarioId] || null;
}

export function markScenarioComplete(scenarioId) {
  const current = loadJSON(STORAGE_KEYS.completedScenarios, []);
  const next = Array.from(new Set([...current, scenarioId]));
  saveJSON(STORAGE_KEYS.completedScenarios, next);
  return next;
}

export function getCompletedScenarios() {
  return loadJSON(STORAGE_KEYS.completedScenarios, []);
}

export function getQuizProgress() {
  return loadJSON(STORAGE_KEYS.quizProgress, null);
}

export function saveQuizProgress(payload) {
  saveJSON(STORAGE_KEYS.quizProgress, {
    ...payload,
    updatedAt: Date.now(),
  });
}

export function clearQuizProgress() {
  if (!isBrowser()) return;
  window.localStorage.removeItem(STORAGE_KEYS.quizProgress);
}

export function getBestQuizScore() {
  return loadJSON(STORAGE_KEYS.bestQuizScore, null);
}

export function saveBestQuizScore(score) {
  const best = getBestQuizScore();
  const next = best === null ? score : Math.max(best, score);
  saveJSON(STORAGE_KEYS.bestQuizScore, next);
  return next;
}

export function getProgressSnapshot() {
  const completed = getCompletedScenarios();
  const bestQuizScore = getBestQuizScore();
  const quizProgress = getQuizProgress();
  const scenarioProgress = loadJSON(STORAGE_KEYS.scenarioProgress, {});

  return {
    completedScenarios: completed,
    bestQuizScore,
    activeScenarioCount: Object.keys(scenarioProgress).length,
    hasQuizInProgress: Boolean(quizProgress && typeof quizProgress.currentQ === 'number'),
  };
}

export function saveLastQuizResult(score) {
  saveJSON(STORAGE_KEYS.lastQuizResult, { score, updatedAt: Date.now() });
}

export function getLastQuizResult() {
  return loadJSON(STORAGE_KEYS.lastQuizResult, null);
}

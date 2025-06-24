const track = new Map();
const originalSetTimeout = window.setTimeout;
const originalClearTimeout = window.clearTimeout;

window.setTimeout = (callback, delay) => {
  const timerId = originalSetTimeout(callback, delay);
  track.set(timerId, true);
  return timerId;
}

window.clearTimeout = (timerId) => {
  originalClearTimeout(timerId);
  track.delete(timerId);
}

function clearAllTimeout() {
  const keys = [...track.keys()];
  for(const key of keys){
    clearTimeout(key);
  }
}
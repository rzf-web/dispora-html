/* ------------------------------------------------------------------------------
@name: Session
@description: Session
--------------------------------------------------------------------------------- */

// --- Session
const Session = (() => {
  let _timeoutSession;

  // --- handleSet
  const handleSet = (key, value) => {
    return localStorage.setItem(key, value);
  }

  // --- handleGet
  const handleGet = (key, value) => {
    return localStorage.getItem(key, value);
  }

  // --- handleRemove
  const handleRemove = (key) => {
    return localStorage.removeItem(key);
  }

  // --- handleClear
  const handleClear = (key) => {
    return localStorage.clear();
  }

  // --- handleTimeout
  const handleTimeout = (callbackFunction, timer = 30) => {
    _timeoutSession = setTimeout(() => {
      callbackFunction();
    }, (timer * 1000));

    document.addEventListener('mousemove', (e) => {
      clearTimeout(_timeoutSession);
      _timeoutSession = setTimeout(() => {
        callbackFunction();
      }, (timer * 1000));
    }, true);

  }

  // --- return
  return {
    set: handleSet,
    get: handleGet,
    remove: handleRemove,
    clear: handleClear,
    timeout: handleTimeout
  }

})();

export default Session;

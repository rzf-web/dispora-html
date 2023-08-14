/* ------------------------------------------------------------------------------
@name: Reveal
@description: Reveal
--------------------------------------------------------------------------------- */

// --- Reveal
const Reveal = (() => {
  // --- handleRevealConfig
  const handleRevealConfig = (origin = "bottom", delay = "250", distance = "16px") => {
    const _config = {
      duration: 1000,
      distance: distance,
      delay: delay,
      origin: origin,
      interval: 250,
    };
    return _config;
  };

  // --- return
  return {
    config: handleRevealConfig
  }

})();

export default Reveal;

const EasePack3 = {
  Linear: {
    None: t => t,
  },
  Quad: {
    In: t => t * t,
    Out: t => t * (2 - t),
    InOut: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  },
  Cubic: {
    In: t => t * t * t,
    Out: t => (--t) * t * t + 1,
    InOut: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  },
  // Add more easing equations as needed
};

// Additional easing functions
EasePack3.Quart = {
  In: t => t * t * t * t,
  Out: t => 1 - (--t) * t * t * t,
  InOut: t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t,
};

EasePack3.Quint = {
  In: t => t * t * t * t * t,
  Out: t => 1 + (--t) * t * t * t * t,
  InOut: t => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t,
};

// Example usage
const duration = 1; // duration in seconds
const progress = 0.5; // progress between 0 and 1

const linearProgress = EasePack3.Linear.None(progress);
const quadInProgress = EasePack3.Quad.In(progress);
const quadOutProgress = EasePack3.Quad.Out(progress);
const quadInOutProgress = EasePack3.Quad.InOut(progress);
const cubicInProgress = EasePack3.Cubic.In(progress);
const cubicOutProgress = EasePack3.Cubic.Out(progress);
const cubicInOutProgress = EasePack3.Cubic.InOut(progress);
const quartInProgress = EasePack3.Quart.In(progress);
const quintInOutProgress = EasePack3.Quint.InOut(progress);

// VanillaAnimation.js

// Utility function to extend objects
function extend(target, source) {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
}

// Main animation library
const VanillaAnimation = {
  elements: [],

  animate(element, duration, properties) {
    const animation = {
      element,
      duration,
      properties,
      startTime: null,
      easing: 'linear',
      onComplete: () => {},
    };

    this.elements.push(animation);

    // Kick off the animation loop if it's not already running
    if (!this.isAnimating()) {
      this.animationLoop();
    }
  },

  isAnimating() {
    return this.elements.length > 0;
  },

  animationLoop() {
    if (!this.isAnimating()) return;

    const currentTime = Date.now();

    this.elements.forEach((animation, index) => {
      if (!animation.startTime) {
        animation.startTime = currentTime;
      }

      const elapsed = currentTime - animation.startTime;
      const progress = Math.min(elapsed / animation.duration, 1);

      const easedProgress = this.ease(animation.easing, progress);
      this.updateElementProperties(animation.element, animation.properties, easedProgress);

      if (progress === 1) {
        animation.onComplete();
        this.elements.splice(index, 1);
      }
    });

    requestAnimationFrame(() => this.animationLoop());
  },

  ease(easing, t) {
    // Basic linear easing function
    return t;
  },

  updateElementProperties(element, properties, progress) {
    for (const key in properties) {
      if (properties.hasOwnProperty(key)) {
        const startValue = 0; // You might want to get the actual start value from the element
        const endValue = properties[key];
        const currentValue = startValue + (endValue - startValue) * progress;

        element.style[key] = currentValue + 'px';
      }
    }
  },
};

// Example usage:
const box = document.getElementById('box');

VanillaAnimation.animate(box, 1000, { left: 300, top: 200 });

var shaq = document.getElementById('shaq');

var timings = {
  duration: 5000,
  iterations: Infinity
};

var keyframes = [
  { transform: 'rotate(0)' },
  { transform: 'rotate(360deg)' }
];

var shaqEffect = new KeyframeEffect(shaq, keyframes, timings);
document.timeline.play(shaqEffect);
var animateShaq = document.getElementById('shaq').animate([
    { transform: 'rotate(0)' },
  { transform: 'rotate(360deg)' }
  ], {
    duration: 5000,
    iterations: Infinity
  }
);

var animateBatmobile = document.getElementById('batmobile').animate([
    { transform: 'translateX(150%)' },
    { transform: 'translateX(-150%)' }
  ], {
    duration: 4000,
    iterations: 1
  }
);

document.getElementById('play').onclick = function () {
  animateBatmobile.play();
};

document.getElementById('pause').onclick = function () {
  animateBatmobile.pause();
};

document.getElementById('cancel').onclick = function () {
  animateBatmobile.cancel();
};

document.getElementById('finish').onclick = function () {
  animateBatmobile.finish();
};

document.getElementById('reverse').onclick = function () {
  animateBatmobile.reverse();
};

document.getElementById('playbackRate').onclick = function () {
  if (animateBatmobile.playbackRate === 1) {
    animateBatmobile.playbackRate = 2;
    document.getElementById('playbackRate').innerHTML = '.playbackRate = 1';
  } else {
    animateBatmobile.playbackRate = 1;
    document.getElementById('playbackRate').innerHTML = '.playbackRate = 2';
  }
};

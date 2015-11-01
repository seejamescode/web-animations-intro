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

var animateLeonardo = document.getElementById('leonardo').animate([
    { transform: 'translateY(0)' },
    { transform: 'translateY(-5em)' },
    { transform: 'translateY(0)' }
  ], {
    duration: 500,
    iterations: 1,
    timing: 'ease-in'
  }
);

var animateLeonardo2 = document.getElementById('leonardo2').animate([
    { transform: 'translate(0) scaleX(-1)' },
    { transform: 'translateY(-5em) scaleX(-1)' },
    { transform: 'translateY(0) scaleX(-1)' }
  ], {
    duration: 500,
    iterations: 1,
    timing: 'ease-in'
  }
);

animateLeonardo2.pause();

animateLeonardo.onfinish = function() {
  animateLeonardo2.play();
}

animateLeonardo2.onfinish = function() {
  animateLeonardo.play();
}
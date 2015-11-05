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

var leapingLeo = document.getElementById('leonardo');

var animateLeonardo = leapingLeo.animate([
    { transform: 'translateY(0)' },
    { transform: 'translateY(-5em)' },
    { transform: 'translateY(0)' }
  ], {
    duration: 750,
    iterations: 1,
    timing: 'ease-in'
  }
);

var animateLeonardo2 = leapingLeo.animate([
    { transform: 'translate(0) scaleX(-1)' },
    { transform: 'translateY(-5em) scaleX(-1)' },
    { transform: 'translateY(0) scaleX(-1)' }
  ], {
    duration: 750,
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

var leftSharkLeftFin = document.querySelector('#shark1-LeftFin').animate([
    {transform: 'scale(1) rotate(0deg)'},
    {transform: 'scale(0.95) rotate(70deg) translate(-40%,-37%)'}
], {
    duration: 1000,
    direction: 'alternate',
    iterations: Infinity
});

leftSharkLeftFin.currentTime = 500;

var leftSharkRightFin = document.querySelector('#shark1-RightFin').animate([
    {transform: 'scale(1) rotate(0deg)'},
    {transform: 'scale(0.95) rotate(-70deg) translate(30%,-50%)'}
], {
    duration: 1000,
    direction: 'alternate',
    iterations: Infinity
});

var rightSharkLeftFin = document.querySelector('#shark2-LeftFin').animate([
    {transform: 'scale(1) rotate(0deg)'},
    {transform: 'scale(0.95) rotate(70deg) translate(-40%,-37%)'}
], {
    duration: 1000,
    direction: 'alternate',
    iterations: Infinity
});

var rightSharkRightFin = document.querySelector('#shark2-RightFin').animate([
    {transform: 'scale(1) rotate(0deg)'},
    {transform: 'scale(0.95) rotate(-70deg) translate(30%,-50%)'}
], {
    duration: 1000,
    direction: 'alternate',
    iterations: Infinity
});

var syncButton = document.getElementById('sync');

syncButton.onclick = function () {
  if (syncButton.innerHTML === 'leftSharkLeftFin.currentTime = rightSharkLeftFin.currentTime') {
    leftSharkLeftFin.currentTime = rightSharkLeftFin.currentTime;
    syncButton.innerHTML = 'Unsync';
  } else {
    leftSharkLeftFin.currentTime = 500;
    syncButton.innerHTML = 'leftSharkLeftFin.currentTime = rightSharkLeftFin.currentTime';
  }
};

var slimer = document.getElementById('slimer');

var animateOpacity = slimer.animate([
    { opacity: '.9' },
    { opacity: '.1' }
  ], {
    direction: 'alternate',
    duration: 4000,
    iterations: Infinity
  }
);

var animateFloat = slimer.animate([
    { transform: 'translateY(0)' },
    { transform: 'translateY(-1em)' },
    { transform: 'translateY(0)' }
  ], {
    duration: 2000,
    iterations: Infinity
  }
);

var animateBackground = slimer.animate([
    { background: 'repeating-radial-gradient(#b8e7bf, #b8e7bf 5px, white 5px, white 10px)' },
    { background: 'repeating-radial-gradient(white, white 5px, #b8e7bf 5px, #b8e7bf 10px)' }
  ], {
    duration: 300,
    iterations: Infinity
  }
);

var elmOpacity = document.getElementById('opacity');
var elmFloat = document.getElementById('float');

elmOpacity.onclick = function () {
  if (elmOpacity.innerHTML === 'animateOpacity.pause()') {
    animateOpacity.pause();
    elmOpacity.innerHTML = 'animateOpacity.play()';
  } else {
    animateOpacity.play();
    elmOpacity.innerHTML = 'animateOpacity.pause()';
  }
};

elmFloat.onclick = function () {
  if (elmFloat.innerHTML === 'animateFloat.pause()') {
    animateFloat.pause();
    elmFloat.innerHTML = 'animateFloat.play()';
  } else {
    animateFloat.play();
    elmFloat.innerHTML = 'animateFloat.pause()';
  }
};

var backgroundSlider = document.getElementById('background');
var backgroundValueDisplay = document.getElementById('backgroundValue');

backgroundSlider.addEventListener('change', function() {
  animateBackground.playbackRate = backgroundSlider.value;
  backgroundValueDisplay.innerHTML = animateBackground.playbackRate;
});





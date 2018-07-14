window.onload = function () {
  var mc = new Hammer(document.querySelector('#container'), {});

  var pannedDown = false,
      pannedUp = false,
      lastScroll = 0;

  var mask = document.querySelector('.mask'),
      theNumbers = document.querySelectorAll('.numbers'),
      numbers = theNumbers[0],
      numbers2 = theNumbers[1],
      scene1 = document.querySelector(".one");

  window.onscroll = function () {
    var newScroll = window.scrollY;
    if (newScroll > lastScroll) {
      panDown();
    }
    if (newScroll < lastScroll) {
      panUp();
    }
    lastScroll = newScroll;
  };

  var panDown = function panDown() {
    if (pannedDown) return false;
    pannedDown = true;
    //console.log(pannedDown)
    numbers.className = "numbers active";
    numbers2.className = "numbers active";
    setTimeout(function () {
      mask.className = "mask active";
    }, 800);
    setTimeout(function () {
      //mask.className = "mask active transition"
      scene1.className = "slide one transition";
      //numbers.className = "numbers";
      pannedUp = false;
    }, 1800);
  };

  var panUp = function panUp() {
    if (pannedUp || !pannedDown) return false;
    pannedUp = true;
    numbers.className = "numbers active down";
    numbers2.className = "numbers active down";

    scene1.className = "slide one";
    setTimeout(function () {
      mask.className = "mask active";
      numbers.className = "numbers down";
      numbers2.className = "numbers down";
    }, 1000);
    setTimeout(function () {
      mask.className = "mask";
      pannedDown = false;
    }, 1600);
  };
};

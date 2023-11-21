$(document).ready(function () {

  if ($(window).width() >= 1100) {
    $('.service__item').hover(
      function () {
        $('.service__item--open').removeClass('active');
      },
      function () {
        $('.service__item--open').addClass('active');
      }
    );
  }

  $(".header__btn").on("click", function () {
    $(this).toggleClass("open");
    $(".header__nav").toggleClass("open");
    $("body").toggleClass("lock");
  });


});


var number1 = document.querySelector('.num1'),
  number1Top = number1.getBoundingClientRect().top,
  start = +number1.innerHTML,
  end = +number1.dataset.max;

window.addEventListener('scroll', function onScroll() {
  if (window.pageYOffset > number1Top - window.innerHeight / 1.2) {
    this.removeEventListener('scroll', onScroll);
    var interval = setInterval(function () {
      number1.innerHTML = ++start;
      if (start == end) {
        clearInterval(interval);
      }
    }, 5);
  }
});

var number2 = document.querySelector('.num2'),
  number2Top = number2.getBoundingClientRect().top,
  start2 = +number2.innerHTML,
  end2 = +number2.dataset.max;

window.addEventListener('scroll', function onScroll() {
  if (window.pageYOffset > number2Top - window.innerHeight / 1.2) {
    this.removeEventListener('scroll', onScroll);
    var interval = setInterval(function () {
      number2.innerHTML = ++start2;
      if (start2 == end2) {
        clearInterval(interval);
      }
    }, 5);
  }
});

var number3 = document.querySelector('.num3'),
  number3Top = number3.getBoundingClientRect().top,
  start3 = +number3.innerHTML,
  end3 = +number3.dataset.max;

window.addEventListener('scroll', function onScroll() {
  if (window.pageYOffset > number3Top - window.innerHeight / 1.2) {
    this.removeEventListener('scroll', onScroll);
    var interval = setInterval(function () {
      number3.innerHTML = ++start3;
      if (start3 == end3) {
        clearInterval(interval);
      }
    }, 5);
  }
});

var number4 = document.querySelector('.num4'),
  number4Top = number4.getBoundingClientRect().top,
  start4 = +number4.innerHTML,
  end4 = +number4.dataset.max;

window.addEventListener('scroll', function onScroll() {
  if (window.pageYOffset > number4Top - window.innerHeight / 1.2) {
    this.removeEventListener('scroll', onScroll);
    var interval = setInterval(function () {
      number4.innerHTML = ++start4;
      if (start4 == end4) {
        clearInterval(interval);
      }
    }, 5);
  }
});

var number5 = document.querySelector('.num5'),
  number5Top = number5.getBoundingClientRect().top,
  start5 = +number5.innerHTML,
  end5 = +number5.dataset.max;

window.addEventListener('scroll', function onScroll() {
  if (window.pageYOffset > number5Top - window.innerHeight / 1.2) {
    this.removeEventListener('scroll', onScroll);
    var interval = setInterval(function () {
      number5.innerHTML = ++start5;
      if (start5 == end5) {
        clearInterval(interval);
      }
    }, 3);
  }
});






//header

const navOffset = $(".header").offset().top + 200;
$(window).scroll(function () {

  const scrolled = $(this).scrollTop();

  if (scrolled > navOffset) {
    $('header').addClass("sticky animate__animated animate__fadeInDown");
    $('header').next().addClass("margin-top");
  } else if (scrolled < navOffset) {
    $('header').removeClass("sticky animate__animated animate__fadeInDown");
    $('header').next().removeClass("margin-top");
  }
});
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
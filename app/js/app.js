$(document).ready(function(){
  $('.service__item').hover(
    function() {
      $( '.service__item--open' ).removeClass('active');
    }, function() {
      $( '.service__item--open' ).addClass('active');
    }
  );


  
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
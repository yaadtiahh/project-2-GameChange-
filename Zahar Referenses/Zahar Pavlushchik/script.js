/*Burger-menu*/
const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")
 
menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
 menuHamburger.classList.toggle('cross');
})

const container = document.querySelector('.container-n2');
const hamburgerMenu = document.querySelector('.menu-hamburger');

hamburgerMenu.addEventListener('click', function() {
  container.classList.toggle('hide');
});


function changeColor() {
  var hamburger = document.getElementById("menu-hamburger");
  hamburger.classList.toggle("active");
}
/*MULTI TEXT*/
var typingEffect = new Typed(".multitext",{
    strings : ["UI.","","UX/UI Designer.","Web-Designer."],
    loop : true,
    typeSpeed : 100,
    backSpeed : 60,
    backDelay : 1500
})
/******MULTI TEXT******/

/*scroll animation*/

SmoothScroll({
// time scroll 400 = 0.4 s
animationTime : 650,
// value in step px
stepSize : 75,

// additional information:

// speed
accelerationDelta : 30,
// max speed
accelerationMax : 2,

// keyboard support
keyboardSupport : true,
// Keyboard arrow scroll step in px
arrowScroll : 50,

// Pulse (less tweakable)
// ratio of "tail" to "acceleration"
pulseAlgorithm : true,
pulseScale : 4,
pulseNormalize : 1,

// touchpad support
touchpadSupport : true,
})


//footer button to top//
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Button animate //

$(document).ready(function() {
  // Прокрутка при клике на ссылки в nav-bar
  $('nav a[href*="#"]').on('click', function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });

  // Прокрутка при клике на кнопку "Projects" в футере
  $('.nav__links a[href="#projects"]').on('click', function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });
});
$(document).ready(function() {
  // Прокрутка при клике на ссылки в nav-bar
  $('nav a[href*="#"]').on('click', function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });

  // Прокрутка при клике на кнопку "Projects" в футере
  $('.nav__links a[href="#about"]').on('click', function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });
});


















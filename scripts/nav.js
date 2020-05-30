$(window).resize(function() {
  location.reload();
});

// Mobile nav
if (screen.width <= 568) {

  const navSlide = () => {

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');
    const logo = document.querySelector('.logo');
    const navlink = document.querySelector('.contact');
    const project = document.querySelector('.project');
    const body = document.querySelector('.body');

    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
      logo.classList.toggle('logo-active');
      body.classList.toggle('body-active');
    });

    navlink.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
      logo.classList.toggle('logo-active');
      body.classList.toggle('body-active');
    });

    project.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
      logo.classList.toggle('logo-active');
      body.classList.toggle('body-active');
    });

  }

  navSlide();

};


//scroll top

var lastScroll = 0;
var scrollUpStart = 0;
$(window).on('scroll', function() {

  var scroll = $(window).scrollTop();
  if (scroll === 0) {
    // we are at the top
    $("header").removeClass("header-scroll");
  } else if (lastScroll > scroll) {
    // we are scrolling up

    // we check if we have started scrolling up already
    if (scrollUpStart < scroll) {
      // if we just started scrolling up, we set
      // the scrollUpStart to the current scroll value
      scrollUpStart = scroll;
    }

    // if we continue scrolling up, the difference between
    // scrollUpStart and scroll will eventually reach a 100px
    if (scrollUpStart - scroll > 100) {
      $("header").addClass("header-scroll");
    }

  } else {
    // we are scrolling down
    // reset scrollUpStart
    scrollUpStart = 0;
    $("header").removeClass("header-scroll");
  }
  lastScroll = scroll;
});

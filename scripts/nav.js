$(window).resize(function() {
  location.reload();
});

// Mobile nav
  if (screen.width <= 568) {

    const navSlide = () => {

      const burger = document.querySelector('.burger');
      const nav = document.querySelector('.navbar');
      const header = document.querySelector('header');
      const logo = document.querySelector('.logo');
      const navlink = document.querySelector('.contact');
      const project = document.querySelector('.project');
      const body = document.querySelector('.body');

      burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        header.classList.toggle('header-active');
        burger.classList.toggle('toggle');
        logo.classList.toggle('logo-active');
        body.classList.toggle('body-active');
      });

      navlink.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        header.classList.toggle('header-active');
        burger.classList.toggle('toggle');
        logo.classList.toggle('logo-active');
        body.classList.toggle('body-active');
      });

      project.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        header.classList.toggle('header-active');
        burger.classList.toggle('toggle');
        logo.classList.toggle('logo-active');
        body.classList.toggle('body-active');
      });

    }

    navSlide();

  };

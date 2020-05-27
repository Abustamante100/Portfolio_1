const navSlide = () => {
  const burger = document.querySelector ('.burger');
  const nav = document.querySelector ('.navbar');
  const header = document.querySelector ('header');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    navLink.classList.toggle('nav-active');
    header.classList.toggle('header-active');
    burger.classList.toggle('toggle');
  });

}

navSlide();

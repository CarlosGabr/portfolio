function toggleMenu() {
  const menuMobile = document.querySelector('.cabecalho__menu-mobile');
  const toggle = document.querySelector('.menu-toggle');
  menuMobile.classList.toggle('active');
  toggle.classList.toggle('active');
}
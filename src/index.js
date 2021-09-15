const menu = document.querySelector('.menu');
const toggler = document.querySelector('.menu__toggler');

toggler.addEventListener('click', function() {
  menu.classList.toggle('menu--open');
});

const menuTrigger = document.querySelector('[data-js-menu-trigger]');
const menuTriggerIcon = document.querySelector('[data-js-menu-trigger] span');
const menu = document.querySelector('[data-js-menu]');


menuTrigger.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuTriggerIcon.innerHTML = menu.classList.contains('is-active') ? 'close' : 'menu';
});
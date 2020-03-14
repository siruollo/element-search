'use strict';

const menus = Array.from(document.querySelectorAll('body > .menu'));
menus.forEach((menu) => {
  let menuLinks = Array.from(menu.querySelectorAll('.menu__link'));

  menuLinks.forEach((item) => {
    const subMenu = item.nextSibling.nextSibling;

    if (subMenu) {
      item.onclick = (event) => {
        event.preventDefault();

        if (subMenu.classList.contains('menu_active')) {
          subMenu.classList.remove('menu_active');
          return;
        }

        const menuActive = menu.querySelector('.menu_active');
        if (menuActive) {
          menuActive.classList.remove('menu_active');
        }

        if (subMenu) {
          subMenu.classList.add('menu_active');
        }
      };
    }
  });
});
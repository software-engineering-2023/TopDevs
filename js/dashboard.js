const toggleButton = document.getElementById('toggle-button');
const menuContainer = document.querySelector('.menu-container');
const menuItems = document.querySelectorAll('.menu .menu-item');

toggleButton.addEventListener('click', function () {
  menuContainer.style.right = menuContainer.style.right === '0px' ? '-200px' : '0px';
});

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', function (event) {
    event.stopPropagation();
    const submenu = this.querySelector('ul');
    if (submenu) {
      const isOpen = this.classList.contains('open');
      menuItems.forEach(function (item) {
        item.classList.remove('open');
      });
      if (!isOpen) {
        this.classList.add('open');
      }
    }
  });
});

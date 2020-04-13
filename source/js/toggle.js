var navMain = document.querySelector('.navigation');
  var navToggle = document.querySelector('.navigation__toggle');

  navMain.classList.remove('navigation--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('navigation--off')) {
      navMain.classList.remove('navigation--off');
      navMain.classList.add('navigation--on');
    } else {
      navMain.classList.add('navigation--off');
      navMain.classList.remove('navigation--on');
    }
  });

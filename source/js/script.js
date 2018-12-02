/* Js active */

var bodyElement = document.querySelector ('.no-js');
bodyElement.classList.remove('no-js');

var pageHeader = document.querySelector ('.page-header__group-container');
pageHeader.classList.remove ('page-header__group-container--open');

var pageHeaderNav = document.querySelector ('.page-header__nav');
pageHeaderNav.classList.remove ('page-header__nav--open');

/* Mobile nav */

var toogleBtn = document.querySelector ('.toggle-btn');

toogleBtn.addEventListener("click", function(evt) {
  if (toogleBtn.classList.contains('toggle-btn--open')) {
    pageHeader.classList.remove ('page-header__group-container--open');
    toogleBtn.classList.remove ('toggle-btn--open');
    pageHeaderNav.classList.remove ('page-header__nav--open');
  }
  else {
    pageHeader.classList.add ('page-header__group-container--open');
    toogleBtn.classList.add ('toggle-btn--open');
    pageHeaderNav.classList.add ('page-header__nav--open');
  }
});

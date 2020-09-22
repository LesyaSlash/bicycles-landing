'use strict';
var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.page-header__toggle');
var menuItems = pageHeader.querySelectorAll('.site-list__item');

pageHeader.classList.remove('page-header--no-js');
pageHeader.classList.add('page-header--closed-menu');

headerToggle.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (pageHeader.classList.contains('page-header--closed-menu')) {
    pageHeader.classList.remove('page-header--closed-menu');
    pageHeader.classList.add('page-header--opened-menu');
  } else {
    pageHeader.classList.remove('page-header--opened-menu');
    pageHeader.classList.add('page-header--closed-menu');
  }
});

menuItems.forEach(function (item) {
  item.addEventListener('click', function () {
    pageHeader.classList.remove('page-header--opened-menu');
    pageHeader.classList.add('page-header--closed-menu');
  });
});

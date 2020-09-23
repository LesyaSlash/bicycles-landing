'use strict';

(function () {

  var pageHeader = document.querySelector('.page-header');
  var headerToggle = document.querySelector('.page-header__toggle');
  var menuItems = pageHeader.querySelectorAll('.site-list__item');

  // функция закрытия меню
  var closeMenu = function () {
    pageHeader.classList.remove('page-header--opened-menu');
    pageHeader.classList.add('page-header--closed-menu');
  };

  // открытие/закрытие меню по нажатию на кнопку
  if (headerToggle) {
    pageHeader.classList.remove('page-header--no-js');
    pageHeader.classList.add('page-header--closed-menu');

    headerToggle.addEventListener('click', function (evt) {
      evt.preventDefault();
      if (pageHeader.classList.contains('page-header--closed-menu')) {
        pageHeader.classList.remove('page-header--closed-menu');
        pageHeader.classList.add('page-header--opened-menu');
      } else {
        closeMenu();
      }
    });
  }

  // закрытие меню после перехода по ссылке-якорю
  if (menuItems.length) {
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener('click', function () {
        closeMenu();
      });
    }
  }

  // отправка формы и открытие окна успешной отправки
  var form = document.querySelector('.form');
  var modalSuccess = document.querySelector('.modal');
  var modalSuccessClose = modalSuccess.querySelector('.modal__toggle');
  var URL = 'https://echo.htmlacademy.ru';

  var upload = function (data, successHandler) {
    var xhr = new XMLHttpRequest();


    xhr.addEventListener('load', function () {
      successHandler(xhr.response);
    });

    xhr.open('POST', URL);
    xhr.responseType = 'json';
    xhr.send(data);
  };

  var successPopupEscPressHandler = function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      closeSuccessPopup();
    }
  };

  var successPopupClickHandler = function (evt) {
    if (evt.target === modalSuccess) {
      evt.preventDefault();
      closeSuccessPopup();
    }
  };

  var closeButtonHandler = function (evt) {
    evt.preventDefault();
    closeSuccessPopup();
  };

  var closeSuccessPopup = function () {
    modalSuccess.classList.remove('modal--open');
    document.removeEventListener('keydown', successPopupEscPressHandler);
    document.removeEventListener('click', successPopupClickHandler);
  };

  var showSuccess = function () {
    modalSuccess.classList.add('modal--open');
    document.addEventListener('keydown', successPopupEscPressHandler);
    document.addEventListener('click', successPopupClickHandler);
    modalSuccessClose.addEventListener('click', closeButtonHandler);
  };

  var uploadSuccessHandler = function () {
    showSuccess();
  };

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    upload(new FormData(form), uploadSuccessHandler);
  });
})();

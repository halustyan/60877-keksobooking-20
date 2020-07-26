'use strict';
(function () {

  window.upload = function (data) {
    var URL = 'https://javascript.pages.academy/keksobookin';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        window.onSuccess();
      } else {
        window.onError();
      }
    });

    xhr.open('POST', URL);
    xhr.send(data);
  };

  window.adForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var formData = new FormData(window.adForm);
    window.upload(formData);
    window.disabledAfterSend(window.mapFiltersSelect, window.adFormTextareas, window.adFormInputs, window.adFormSelects, window.mapFiltersInputs, window.mapPins);
    window.mapPin.addEventListener('mousedown', window.onMouseUpRenderPins);

  });

})();

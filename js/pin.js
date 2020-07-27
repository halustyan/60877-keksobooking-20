'use strict';
(function () {
  var pinField = document.querySelector('.map__pins');
  var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

  var fragment = document.createDocumentFragment();

  var createPinElement = function (itemarrayObjEl) {
    var cloneElement = pinTemplate.cloneNode(true);
    var pinElementImg = cloneElement.querySelector('img');
    cloneElement.style.left = itemarrayObjEl.location.x + 'px';
    cloneElement.style.top = itemarrayObjEl.location.y + 'px';
    pinElementImg.src = itemarrayObjEl.author.avatar;
    pinElementImg.alt = itemarrayObjEl.offer.description;
    return cloneElement;
  };
  var mapPin = document.querySelector('.map__pin--main');
  window.mapPin = mapPin;

  window.renderPins = function (objectElArray) {
    var maxCountPins = 5;
    if (objectElArray.length < maxCountPins) {
      maxCountPins = objectElArray.length;
    }
    for (var b = 0; b < maxCountPins; b++) {
      fragment.appendChild(createPinElement(objectElArray[b]));
      pinField.appendChild(fragment);
    }
    var mapPins = document.querySelectorAll('.map__pin:not(.map__pin--main)');
    window.mapPins = mapPins;

    mapPins.forEach(function (item, index) {
      item.addEventListener('click', function () {
        window.renderCards(objectElArray[index]);
      });
    });
    return true;

  };
  mapPin.style.left = '570px';
  mapPin.style.top = '365px';

  var removeDisabled = function () {
    window.map.classList.remove('map--faded');
    window.adForm.classList.remove('ad-form--disabled');

    for (var g = 0; g < window.adFormInputs.length; g++) {
      window.adFormInputs[g].removeAttribute('disabled');
    }

    for (var e = 0; e < window.adFormSelects.length; e++) {
      window.adFormSelects[e].removeAttribute('disabled');
    }

    for (var n = 0; n < window.mapFiltersSelect.length; n++) {
      window.mapFiltersSelect[n].removeAttribute('disabled');
    }
    for (var r = 0; r < window.adFormTextareas.length; r++) {
      window.adFormTextareas[r].removeAttribute('disabled');
    }
    document.querySelector('.ad-form__submit').removeAttribute('disabled');
    return true;
  };

  window.activatePage = function (data) {

    window.renderPins(data);

    removeDisabled();
    document.querySelector('.ad-form__submit').removeAttribute('disabled');
    window.formReset.removeAttribute('disabled');

  };

  window.onLoad = function (data, onError, onSuccess) {
    window.activatePage(data, onError, onSuccess);
    window.mapPin.removeEventListener('mousedown', window.onMouseUpRenderPins);
  };

  window.onMouseUpRenderPins = function (data) {
    window.formReset.removeAttribute('disabled');
    data = window.load.data;
    if (typeof window.load === 'function') {
      window.load(window.onLoad, window.onError);
    } else {
      window.renderPins(data);
      removeDisabled();
    }
  };

  mapPin.addEventListener('keydown', function (evt) {

    if (evt.keyCode === 13) {
      var data = window.load.data;
      window.onMouseUpRenderPins(data);
      window.formReset.addEventListener('click', window.removeButtonClick);
    }

  });
})();

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

  window.renderPin = function (objectElArray) {
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
    for (var l = 0; l < mapPins.length; l++) {
      mapPins[l].addEventListener('click', function () {});
    }

    mapPins.forEach(function (item, index) {
      item.addEventListener('click', function (evt) {

        renderCard(objectElArray[index]);
      });
    });
    return true;

  };
  mapPin.style.left = '570px';
  mapPin.style.top = '375px';

  mapPin.addEventListener('keydown', function (evt) {

    if (evt.keyCode === 13) {
      renderCard(cardObject);
      renderPin(ElObjectArray);
      map.classList.remove('map--faded');
      adForm.classList.remove('ad-form--disabled');
    }
  });

  var removedisabled = function () {
    map.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');


    for (var g = 0; g < adFormInputs.length; g++) {
      adFormInputs[g].removeAttribute('disabled');
    }

    for (var e = 0; e < adFormSelects.length; e++) {
      adFormSelects[e].removeAttribute('disabled');
    }

    for (var n = 0; n < mapFiltersSelect.length; n++) {
      mapFiltersSelect[n].removeAttribute('disabled');
    }
    for (var r = 0; r < adFormTextarea.length; r++) {
      adFormTextarea[r].removeAttribute('disabled');
    }
    return true;
  };

  window.activatePage = function (data) {
    renderPin(data);
    removedisabled();
    mapPin.removeEventListener('mousedown', onMouseUpRenderPins);
    mapPin.addEventListener('mousedown', onMouseUpRenderPins);
  };
  window.onLoad = function (data, onError, onSuccess) {
    window.activatePage(data, onError, onSuccess);
  };

  window.onMouseUpRenderPins = function () {
    window.load(onLoad, onError);
  };

})();

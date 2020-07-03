//PIN.JS
(function () {
var pinField = document.querySelector('.map__pins');
var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

var fragment = document.createDocumentFragment();

var createPinElement = function (itemarrayObjEl) {
  var cloneElement = pinTemplate.cloneNode(true);
  var pinElementImg = cloneElement.querySelector('img');
  cloneElement.style.top = itemarrayObjEl.location.x + 'px';
  cloneElement.style.left = itemarrayObjEl.location.y + 'px';
  pinElementImg.src = itemarrayObjEl.author.avatar;
  pinElementImg.alt = itemarrayObjEl.offer.description;
  return cloneElement;
};
var mapPin = document.querySelector('.map__pin--main');
window.mapPin = mapPin;
var renderPin = function (objectElArray) {
  for (var b = 0; b < objectElArray.length; b++) {
    fragment.appendChild(createPinElement(objectElArray[b]));
    pinField.appendChild(fragment);
  }
  var mapPins = document.querySelectorAll('.map__pin:not(.map__pin--main)');

  for (var l = 0; l < mapPins.length; l++) {
    mapPins[l].addEventListener('click', function (evt) {})
  }

  mapPins.forEach(function (item, index) {
    item.addEventListener('click', function (evt) {

      renderCard(ElObjectArray[index]);
    });
  });
  return true;

};
mapPin.style.left = '570px';
mapPin.style.top = '375px';

mapPin.addEventListener('keydown', function (evt) {

  if (evt.keyCode == 13) {
    renderCard(cardObject);
    renderPin(ElObjectArray);
    map.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
  }
});

var close = function () {
  var popupclose = document.querySelector('.map').querySelector('.map__card').querySelector('.popup__close');

  popupclose.addEventListener('click', function (evt) {
    if (evt.key == "Enter") {
      document.querySelector('.map__card').remove();
    }
    document.querySelector('.map__card').remove();
  });
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode == 27) {
      document.querySelector('.map__card').remove();
    }
  })
  return true;
}

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
for (var e = 0; e < adFormTextarea.length; e++) {
  adFormTextarea[e].removeAttribute('disabled');
}
return true;
}

var addClick = function () {
  var mapPins = document.querySelectorAll('.map__pin:not(.map__pin--main)');
  window.mapPins = mapPins;
  for (var l = 0; l < mapPins.length; l++) {
    mapPins[l].addEventListener('click', function (evt) {})
  }

  mapPins.forEach(function (item, index) {
    item.addEventListener('click', function (evt) {
      renderCard(ElObjectArray[index]);
    });
  });
  return true;
}

var activatePage = function (data) {

  renderCard(cardObject);

  close ();

  renderPin(data);

  addClick();

  removedisabled ();
  return true;
}
window.onError = function (dataerror) {
  var errorTemplate = document.querySelector('#error').content.querySelector('.error');
  var errorTemplateClone = errorTemplate.cloneNode(true);
  var main = document.querySelector('main');
  main.prepend(errorTemplateClone);
  errorTemplateClone.textContent = dataerror;
  if (dataerror ===null||dataerror ===undefined) {
    main.insertAdjacentHTML('afterbegin','<div class="error"><p class="error__message">Ошибка загрузки объявления</p><button class="error__button">Попробовать снова</button></div>"');
  }
  return true;
};

window.onSuccess = function (dataSuccess) {
  var successTemplate = document.querySelector('#success').content.querySelector('.success');
  var successTemplateClone = successTemplate.cloneNode(true);
  var main = document.querySelector('main');
  successTemplateClone.textContent = dataSuccess;
  main.prepend(successTemplateClone);
  if (dataSuccess ===null||dataSuccess ===undefined) {
    main.insertAdjacentHTML('afterbegin','<div class="success"><p class="success__message">Ваше объявление<br>успешно размещено!</p></div>"');
  }
  return true;
};


function onLoad (data) {
  activatePage(data);
}

function onMouseUpRenderPins() {
  window.load(onLoad, onError);
}

mapPin.addEventListener('mousedown', onMouseUpRenderPins);




})();

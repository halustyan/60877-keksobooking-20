'use strict';
(function () {

  var adFormInputs = document.querySelectorAll('.ad-form input');
  window.adFormInputs = adFormInputs;

  var map = document.querySelector('.map');
  window.map = map;

  var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
  window.photos = photos;

  var adFormSelects = document.querySelectorAll('.ad-form select');
  window.adFormSelects = adFormSelects;

  var adFormTextareas = document.querySelectorAll('.ad-form textarea');
  window.adFormTextareas = adFormTextareas;

  var formTitle = document.querySelector('.ad-form__element-title');

  var mapFiltersSelect = document.querySelectorAll('.map__filters select');
  window.mapFiltersSelect = mapFiltersSelect;

  var formReset = document.querySelector('.ad-form__reset');

  document.querySelector('.ad-form__submit').setAttribute('disabled', 'disabled');

  var bottomSelectedType = document.querySelector('.ad-form__bottom-type');

  var adFormElementPriceForNight = document.querySelector('.ad-form__element-price-for-night');
  adFormElementPriceForNight.placeholder = 'Больше 1000 и меньше 5000';
  var adFormElementPriceForNightPlaceHolderValue = adFormElementPriceForNight.placeholder;

  var roomNumber = document.querySelector('#room_number');

  var deskription = document.querySelector('#description');

  var deskriptionPlaceholder = deskription.placeholder;

  var address = document.querySelector('.ad-form__element--address');

  window.returnintodefault = function () {

    var bottomFilters = document.querySelectorAll('.features .feature__checkbox');

    for (var x = 0; x < bottomFilters.length; x++) {
      bottomFilters[x].checked = false;
    }

    bottomSelectedType.value = 'flat';
    adFormElementPriceForNight.value = adFormElementPriceForNightPlaceHolderValue;
    roomNumber.value = '1';
    deskription.value = deskriptionPlaceholder;
    address.value = '570, 375';
    timeIn.value = '12:00';

    return true;

  };

  var mapFiltersInputs = document.querySelectorAll('.map__filters select');

  window.mapFiltersInputs = mapFiltersInputs;

  // функция блокировки формы после отправки данных
  window.disabledAfterSend = function (filtersSelect, textAreas, formInputs, formSelects, topMapFiltersInputs, pins) {

    for (var z = 0; z < filtersSelect.length; z++) {
      filtersSelect[z].setAttribute('disabled', 'disabled');
    }

    for (var zz = 0; zz < textAreas.length; zz++) {
      textAreas[zz].setAttribute('disabled', 'disabled');
    }

    for (var zk = 0; zk < formInputs.length; zk++) {
      formInputs[zk].setAttribute('disabled', 'disabled');
    }

    for (var zn = 0; zn < formSelects.length; zn++) {
      formSelects[zn].setAttribute('disabled', 'disabled');
    }

    for (var zy = 0; zy < topMapFiltersInputs.length; zy++) {
      topMapFiltersInputs[zy].setAttribute('disabled', 'disabled');
    }

    formTitle.value = '';
    formTitle.setAttribute('disabled', 'disabled');
    document.querySelector('.ad-form__submit').setAttribute('disabled', 'disabled');
    window.returnintodefault();

    for (var k = 0; k < pins.length; k++) {
      pins[k].remove();
    }
    var card = document.querySelector('.map__card');
    if (card !== null) {
      card.remove();
    }
    document.querySelector('.map').classList.add('map--faded');
    adForm.classList.add('ad-form--disabled');
    document.querySelector('.ad-form__submit').removeAttribute('disabled');
    return true;
  };
  // Обработчки на кнопку ресет

  /*var removeButtonClick = document.addEventListener('click', function (evt) {
    if (evt.target !== formReset ) {
      return;
    }
    for (var z = 0; z < window.adFormInputs.length; z++) {
      window.adFormInputs[z].setAttribute('disabled', 'disabled');
    }
    formTitle.value = '';
    formTitle.setAttribute('disabled', 'disabled');
    document.querySelector('.ad-form__submit').setAttribute('disabled', 'disabled');
    window.returnintodefault();

    for (var k = 0; k < window.mapPins.length; k++) {
      window.mapPins[k].remove();
    }
    var card = document.querySelector('.map__card');
    if (card !== null) {
      card.remove();
    }

    document.querySelector('.map').classList.add('map--faded');

    adForm.classList.add('ad-form--disabled');
    formReset.setAttribute('disabled', 'disabled');
    document.removeEventListener('click', removeButtonClick);
  });*/


  var adForm = document.querySelector('.ad-form');
  window.adForm = adForm;

  bottomSelectedType.addEventListener('change', function () {
    if (bottomSelectedType.value === 'bungalo') {
      adFormElementPriceForNight.placeholder = 'Больше ноля и меньше 1000';
      if (adFormElementPriceForNight.value > 0 && adFormElementPriceForNight.value < 1000) {
        adFormElementPriceForNight.setCustomValidity('');
      } else {
        adFormElementPriceForNight.setCustomValidity('Больше ноля и меньше 1000');
      }
    }
    if (bottomSelectedType.value === 'flat') {
      adFormElementPriceForNight.placeholder = 'Больше 1000 и меньше 5000';
      if (adFormElementPriceForNight.value > 1000 && adFormElementPriceForNight.value < 5000) {
        adFormElementPriceForNight.setCustomValidity('');
      } else {
        adFormElementPriceForNight.setCustomValidity('Больше 1000 и меньше 5000');
      }
    }
    if (bottomSelectedType.value === 'house') {
      adFormElementPriceForNight.placeholder = 'Больше 5000 и меньше 10000';
      if (adFormElementPriceForNight.value > 5000 && adFormElementPriceForNight.value < 10000) {
        adFormElementPriceForNight.setCustomValidity('');
      } else {
        adFormElementPriceForNight.setCustomValidity('Больше 5000 и меньше 10000');
      }
    }
    if (bottomSelectedType.value === 'palace') {
      adFormElementPriceForNight.placeholder = 'Больше 10000';
      if (adFormElementPriceForNight.value > 10000) {

        adFormElementPriceForNight.setCustomValidity('');
      } else {
        adFormElementPriceForNight.setCustomValidity('Больше 10000');
      }
    }

  });

  formTitle.addEventListener('change', function () {
    if (formTitle.validity.tooShort) {
      formTitle.setCustomValidity('Имя должно состоять минимум из 30-х символов');
      formTitle.style.border = '2px solid';
      formTitle.style.borderColor = 'red';
      formTitle.focus();
    } else if (formTitle.validity.tooLong) {
      formTitle.setCustomValidity('Имя не должно превышать 100-ти символов');
      formTitle.style.border = '2px solid';
      formTitle.style.borderColor = 'red';
      formTitle.focus();
    } else if (formTitle.validity.valueMissing) {
      formTitle.setCustomValidity('Обязательное поле');
      formTitle.style.border = '2px solid';
      formTitle.style.borderColor = 'red';
      formTitle.focus();
    } else {
      formTitle.setCustomValidity('');
      formTitle.style.border = '';
      formTitle.style.borderColor = '';
      formTitle.focus();
    }
  });

  adFormElementPriceForNight.addEventListener('change', function () {
    if (bottomSelectedType.value === 'bungalo') {
      if (adFormElementPriceForNight.value > 0 && adFormElementPriceForNight.value < 1000) {
        adFormElementPriceForNight.setCustomValidity('');
        adFormElementPriceForNight.style.border = '';
        adFormElementPriceForNight.style.borderColor = '';
      } else {
        adFormElementPriceForNight.setCustomValidity('Больше ноля и меньше 1000');
        adFormElementPriceForNight.style.border = '2px solid';
        adFormElementPriceForNight.style.borderColor = 'red';
      }
    }
    if (bottomSelectedType.value === 'flat') {
      if (adFormElementPriceForNight.value > 1000 && adFormElementPriceForNight.value < 5000) {
        adFormElementPriceForNight.setCustomValidity('');
        adFormElementPriceForNight.style.border = '';
        adFormElementPriceForNight.style.borderColor = '';
      } else {
        adFormElementPriceForNight.setCustomValidity('Больше 1000 и меньше 5000');
        adFormElementPriceForNight.style.border = '2px solid';
        adFormElementPriceForNight.style.borderColor = 'red';
      }
    }
    if (bottomSelectedType.value === 'house') {
      if (adFormElementPriceForNight.value > 5000 && adFormElementPriceForNight.value < 10000) {
        adFormElementPriceForNight.setCustomValidity('');
        adFormElementPriceForNight.style.border = '';
        adFormElementPriceForNight.style.borderColor = '';
      } else {
        adFormElementPriceForNight.setCustomValidity('Больше 5000 и меньше 10000');
        adFormElementPriceForNight.style.border = '2px solid';
        adFormElementPriceForNight.style.borderColor = 'red';
      }
    }
    if (bottomSelectedType.value === 'palace') {
      if (adFormElementPriceForNight.value > 10000) {
        adFormElementPriceForNight.setCustomValidity('');
        adFormElementPriceForNight.style.border = '';
        adFormElementPriceForNight.style.borderColor = '';
      } else {
        adFormElementPriceForNight.setCustomValidity('Больше 10000');
        adFormElementPriceForNight.style.border = '2px solid';
        adFormElementPriceForNight.style.borderColor = 'red';
      }
    }
  });

  var timeIn = document.querySelector('#timein');
  window.timeIn = timeIn;
  var timeOut = document.querySelector('#timeout');
  window.timeOut = timeOut;
  timeIn.addEventListener('change', function () {
    if (timeIn.value === '12:00') {
      timeOut.value = '12:00';
    }
    if (timeIn.value === '13:00') {
      timeOut.value = '13:00';
    }
    if (timeIn.value === '14:00') {
      timeOut.value = '14:00';
    }
  });

  timeOut.addEventListener('change', function () {
    if (timeOut.value === '12:00') {
      timeIn.value = '12:00';
    }
    if (timeOut.value === '13:00') {
      timeIn.value = '13:00';
    }
    if (timeOut.value === '14:00') {
      timeIn.value = '14:00';
    }
  });

  var capacityrooms = document.querySelector('#capacity');
  window.capacityrooms = capacityrooms;
  roomNumber.addEventListener('change', function () {
    if (roomNumber.value === '1') {
      capacityrooms.options[0].disabled = true;
      capacityrooms.options[2].disabled = false;
      capacityrooms.options[1].disabled = true;
      capacityrooms.options[3].disabled = true;
      capacityrooms.value = '1';
    }

    if (roomNumber.value === '2') {
      capacityrooms.options[0].disabled = true;
      capacityrooms.options[1].disabled = false;
      capacityrooms.options[3].disabled = true;
      capacityrooms.value = '2';
    }

    if (roomNumber.value === '3') {
      capacityrooms.options[0].disabled = false;
      capacityrooms.options[3].disabled = true;
      capacityrooms.value = '3';
    }

    if (roomNumber.value === '100') {
      capacityrooms.options[0].disabled = true;
      capacityrooms.options[1].disabled = true;
      capacityrooms.options[2].disabled = true;
      capacityrooms.value = '0';
      capacityrooms.options[3].disabled = false;
    }

  });

  capacityrooms.addEventListener('change', function () {
    if (capacityrooms.value === '1') {
      roomNumber.value = '1';
    }

    if (capacityrooms.value === '2') {
      roomNumber.value = '2';
    }

    if (capacityrooms.value === '3') {
      roomNumber.value = '3';
    }

    if (capacityrooms.value === '0') {
      roomNumber.value = '100';
    }

  });
})();

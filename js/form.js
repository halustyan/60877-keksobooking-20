(function () {
var adFormInputs = document.querySelectorAll('.ad-form input');
window.adFormInputs = adFormInputs;
var adFormSelects = document.querySelectorAll('.ad-form select');
window.adFormSelects = adFormSelects;
var adFormTextarea = document.querySelectorAll('.ad-form textarea');
window.adFormTextarea= adFormTextarea;

var mapFiltersSelect = document.querySelector('.map__filters select');
window.mapFiltersSelect = mapFiltersSelect;

function disabledFunction(arr1, arr2, arr3, arr4) {
  for (var z = 0; g < arr1.length; z++) {
    arr1[z].setAttribute('disabled', 'disabled');
  }

  for (var m = 0; m < arr2.length; m++) {
    arr2[m].setAttribute('disabled', 'disabled');
  }

  for (var g = 0; g < arr3.length; g++) {
    arr3[g].setAttribute('disabled', 'disabled');
  }

  for (var e = 0; e < arr4.length; e++) {
    arr4[e].setAttribute('disabled', 'disabled');
  }
  return true;
}

disabledFunction(mapFiltersSelect, adFormTextarea, adFormInputs, adFormSelects);

var adForm = document.querySelector('.ad-form');
window.adForm = adForm;
var address = document.querySelector('.ad-form__element--address');
var heightimg = document.querySelector('.map__pin--main img').offsetHeight;
var widthPin = document.querySelector('.map__pin--main').offsetWidth / 2;

var coordTopPin = mapPin.offsetTop - heightimg;
var coordLeftPin = mapPin.offsetLeft - widthPin;

address.value = parseInt(coordLeftPin, 10) + ' ' + parseInt(coordTopPin, 10);
var adFormElementPriceForNight = document.querySelector('.ad-form__element-price-for-night');

var bottomSelectedType = document.querySelector('.ad-form__bottom-type');

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

adFormElementPriceForNight.addEventListener('change', function () {
  if (bottomSelectedType.value === 'bungalo') {
    if (adFormElementPriceForNight.value > 0 && adFormElementPriceForNight.value < 1000) {
      adFormElementPriceForNight.setCustomValidity('');
      adFormElementPriceForNight.style.border = "";
      adFormElementPriceForNight.style.borderColor = "";
    } else {
      adFormElementPriceForNight.setCustomValidity('Больше ноля и меньше 1000');
      adFormElementPriceForNight.style.border = "2px solid";
      adFormElementPriceForNight.style.borderColor = "red";
    }
  }
  if (bottomSelectedType.value === 'flat') {
    if (adFormElementPriceForNight.value > 1000 && adFormElementPriceForNight.value < 5000) {
      adFormElementPriceForNight.setCustomValidity('');
      adFormElementPriceForNight.style.border = "";
      adFormElementPriceForNight.style.borderColor = "";
    } else {
      adFormElementPriceForNight.setCustomValidity('Больше 1000 и меньше 5000');
      adFormElementPriceForNight.style.border = "2px solid";
      adFormElementPriceForNight.style.borderColor = "red";
    }
  }
  if (bottomSelectedType.value === 'house') {
    if (adFormElementPriceForNight.value > 5000 && adFormElementPriceForNight.value < 10000) {
      adFormElementPriceForNight.setCustomValidity('');
      adFormElementPriceForNight.style.border = "";
      adFormElementPriceForNight.style.borderColor = "";
    } else {
      adFormElementPriceForNight.setCustomValidity('Больше 5000 и меньше 10000');
      adFormElementPriceForNight.style.border = "2px solid";
      adFormElementPriceForNight.style.borderColor = "red";
    }
  }
  if (bottomSelectedType.value === 'palace') {
    if (adFormElementPriceForNight.value > 10000) {
      adFormElementPriceForNight.setCustomValidity('');
      adFormElementPriceForNight.style.border = "";
      adFormElementPriceForNight.style.borderColor = "";
    } else {
      adFormElementPriceForNight.setCustomValidity('Больше 10000');
      adFormElementPriceForNight.style.border = "2px solid";
      adFormElementPriceForNight.style.borderColor = "red";
    }
  }
});

var timeIn = document.querySelector("#timein");
var timeOut = document.querySelector("#timeout");

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

var roomNumber = document.querySelector('#room_number');

var capacityrooms = document.querySelector('#capacity');

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

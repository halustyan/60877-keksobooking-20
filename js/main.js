'use strict';
var arr = [];
var map = document.querySelector('.map');

map.classList.remove('map--faded');

function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

var getRandomArrayEl = function (randarr) {
  var rand = Math.floor(Math.random() * randarr.length);
  return randarr[rand];
};

var types = ['palace', 'flat', 'house', 'bungalo'];

var createObject = function (index) {
  var sizeofthepin = 40;

  var getmappinswidth = document.querySelector('.map__pins').offsetWidth;

  var minHeight = 130;

  var maxHeight = 630;

  var titles = ['Title1', 'Title2', 'Title3', 'Title4', 'Title5', 'Title6', 'Title7', 'Title8'];

  var timerange = ['12:00', '13:00', '14:00'];

  var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

  var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

  var deskriptions = ['cozy place', 'beutiful view', 'modern design'];

  var obj = {

    'author': {
      'avatar': 'img/avatars/user0' + (index + 1) + '.png',
    },

    'offer': {
      'title': titles[randomInteger(0, titles.length - 1)],
      'address': randomInteger(1, 1000) + ', ' + randomInteger(1, 1000),
      'price': randomInteger(1, 10000),
      'type': types[randomInteger(0, types.length - 1)],
      'rooms': randomInteger(1, 3),
      'guests': randomInteger(1, 6),
      'checkin': timerange[randomInteger(0, timerange.length - 1)],
      'checkout': timerange[randomInteger(0, timerange.length - 1)],
      'features': getRandomArrayEl(features),
      'description': getRandomArrayEl(deskriptions),
      'photos': getRandomArrayEl(photos),
    },

    'location': {
      'x': randomInteger(minHeight, maxHeight),
      'y': randomInteger(sizeofthepin, getmappinswidth - sizeofthepin),
    }

  };
  return obj;
}

for (var i = 0; i < 8; i++) {
  arr.push(createObject(i));
}


var ElObjectArray = arr;

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

for (var b = 0; b < ElObjectArray.length; b++) {
  fragment.appendChild(createPinElement(ElObjectArray[b]));
  pinField.appendChild(fragment);
}

var Arrayrenderad = arr;

var cardObject = Arrayrenderad[0];

var cardTemplate = document.querySelector('#card').content.querySelector('.map__card');

var newCardElement = cardTemplate.cloneNode(true);

var fragmentCard = document.createDocumentFragment();
fragmentCard.appendChild(newCardElement);

map.appendChild(fragmentCard);

var photoElement = document.querySelector('.popup__photos');

var photoArray = cardObject.offer.photos;

var photoTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup__photo');

photoElement.innerHTML = '';

var fragmentPhoto = document.createDocumentFragment();

var renderCard = function (obj) {
  newCardElement.querySelector('.popup__title').textContent = obj.offer.title;
  newCardElement.querySelector('.popup__text--address').textContent = obj.offer.address;
  newCardElement.querySelector('.popup__text--price').textContent = obj.offer.price + '₽/ночь';
  newCardElement.querySelector('.popup__type').textContent = types[obj.offer.type];
  newCardElement.querySelector('.popup__text--capacity').textContent = obj.offer.rooms + ' комнаты для ' + obj.offer.guests + ' гостей';
  newCardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + obj.offer.checkin + ', выезд до ' + obj.offer.checkout;
  newCardElement.querySelector('.popup__description').textContent = obj.offer.description;
  newCardElement.querySelector('.popup__features').textContent = obj.offer.features;
  newCardElement.querySelector('.popup__avatar').src = obj.author.avatar;
  for (var k = types; k < photoArray.length; k++) {
    var newPhotoElement = photoTemplate.cloneNode(true);
    newPhotoElement.src = photoArray[k];
    fragmentPhoto.appendChild(newPhotoElement);
  }
  photoElement.appendChild(fragmentPhoto);
};



  renderCard(cardObject);









/*

var popupTextAddress = document.querySelector('.popup__text--address');
var popupTextPrice = document.querySelector('.popup__text--price');

var PopupType = document.querySelector('.popup__type');

var createDocumentCardAdd = function (cardel) {

  var ClonePopupTitle =  popupTitle.cloneNode(true);

  var ClonePopupTextAddress =  popupTextAddress.cloneNode(true);

  var ClonePopupTextPrice = popupTextPrice.cloneNode(true);

  var ClonePopupType = PopupType.cloneNode(true);

  if (cardel.offer.type ==='flat') {
    ClonePopupType.innerHtml = "Квартира";
  }

  else if (cardel.offer.type ==='bungalo') {
    ClonePopupType.innerHtml = "Бунгало";
  }

  ClonePopupTitle.innerHtml = cardel.offer.title;

  ClonePopupTextAddress.innerHtml = cardel.offer.address;

  ClonePopupTextPrice.innerHtml = cardel.offer.price + '₽/ночь';

  return cardel;
}*/

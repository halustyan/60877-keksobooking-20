'use strict';
(function () {
  var arrayRenderads = [];

  var cardObject = arrayRenderads[0];
  window.cardObject = cardObject;
  var cardTemplate = document.querySelector('#card').content.querySelector('.map__card');
  window.cardTemplate = cardTemplate;
  var newCardElement = cardTemplate.cloneNode(true);

  window.renderCards = function (dataFromServer) {
    newCardElement.querySelector('.popup__title').textContent = dataFromServer.offer.title;
    newCardElement.querySelector('.popup__text--address').textContent = dataFromServer.offer.address;
    newCardElement.querySelector('.popup__text--price').textContent = dataFromServer.offer.price + '₽/ночь';
    newCardElement.querySelector('.popup__type').textContent = dataFromServer.offer.type;
    newCardElement.querySelector('.popup__text--capacity').textContent = dataFromServer.offer.rooms + ' комнаты для ' + dataFromServer.offer.guests + ' гостей';
    newCardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + dataFromServer.offer.checkin + ', выезд до ' + dataFromServer.offer.checkout;
    newCardElement.querySelector('.popup__description').textContent = dataFromServer.offer.description;
    newCardElement.querySelector('.popup__avatar').src = dataFromServer.author.avatar;

    var fragmentCard = document.createDocumentFragment();
    fragmentCard.appendChild(newCardElement);
    window.map.appendChild(fragmentCard);

    var photoElement = document.querySelector('.popup__photos');

    var photoArray = dataFromServer.offer.photos;
    window.photoArray = photoArray;
    var photoTemplate = document.querySelector('#card').content.querySelector('.popup__photo');

    photoElement.textContent = '';

    var fragmentPhoto = document.createDocumentFragment();

    var features = dataFromServer.offer.features;

    var mapCard = document.querySelector('.map__card');
    window.mapCard = mapCard;

    var createListFeaturesElement = function () {

      for (var f = 0; f < features.length; f++) {
        var conditioner = 'conditioner';
        var washer = 'washer';
        var wifi = 'wifi';
        var dishwasher = 'dishwasher';
        var parking = 'parking';
        var elevator = 'elevator';
        switch (features[f]) {
          case conditioner:
            newCardElement.querySelector('.popup__feature--conditioner').style.display = 'none';
            break;
          case washer:
            newCardElement.querySelector('.popup__feature--washer').style.display = 'none';
            break;
          case wifi:
            newCardElement.querySelector('.popup__feature--wifi').style.display = 'none';
            break;
          case dishwasher:
            newCardElement.querySelector('.popup__feature--dishwasher').style.display = 'none';
            break;
          case parking:
            newCardElement.querySelector('.popup__feature--parking').style.display = 'none';
            break;
          case elevator:
            newCardElement.querySelector('.popup__feature--elevator').style.display = 'none';
            break;
          default:
            newCardElement.querySelector('.popup__feature').style.display = 'inline-block';
            break;
        }
      }
    };

    createListFeaturesElement();

    var insertPhotoOnPage = function () {
      var popupPhotos = document.querySelector('.popup__photos');

      for (var g = 0; g < window.photos.length; g++) {
        var popupPhotosImg = document.createElement('img');
        popupPhotosImg.src = window.photos[g];
        popupPhotosImg.style.width = '70px';
        popupPhotosImg.style.height = '70px';
        popupPhotosImg.style.padding = '5px';
        popupPhotos.appendChild(popupPhotosImg);
      }
    };
    insertPhotoOnPage();

    for (var k = window.types; k < window.photoArray.length; k++) {
      var newPhotoElement = photoTemplate.cloneNode(true);
      newPhotoElement.src = photoArray[k];
      fragmentPhoto.appendChild(newPhotoElement);
    }
    photoElement.appendChild(fragmentPhoto);
    var popupclose = document.querySelector('.map').querySelector('.map__card').querySelector('.popup__close');

    var popUpCloseFunction = function (evt) {
      if (evt.key === 'Enter') {
        document.querySelector('.map__card').remove();
      }
      if (document.querySelector('.map__card')) {
        document.querySelector('.map__card').remove();
      }
      popupclose.removeEventListener('click', popUpCloseFunction);
    };
    popupclose.addEventListener('click', popUpCloseFunction);

    var removeEnterFunction = function (evt) {
      var mapCardRemove = document.querySelector('.map__card');
      if (evt.keyCode === 27) {
        if (mapCardRemove !== null) {
          document.querySelector('.map__card').remove();
          document.removeEventListener('keydown', removeEnterFunction);
        }
      }
    };

    document.addEventListener('keydown', removeEnterFunction);
  };

})();

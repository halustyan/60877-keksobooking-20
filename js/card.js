(function () {
var Arrayrenderad = arr;

var cardObject = Arrayrenderad[0];
window.cardObject = cardObject;
var cardTemplate = document.querySelector('#card').content.querySelector('.map__card');
window.cardTemplate = cardTemplate;
var newCardElement = cardTemplate.cloneNode(true);
window.renderCard = function (obj) {
  newCardElement.querySelector('.popup__title').textContent = obj.offer.title;
  newCardElement.querySelector('.popup__text--address').textContent = obj.offer.address;
  newCardElement.querySelector('.popup__text--price').textContent = obj.offer.price + '₽/ночь';
  newCardElement.querySelector('.popup__type').textContent = obj.offer.type;
  newCardElement.querySelector('.popup__text--capacity').textContent = obj.offer.rooms + ' комнаты для ' + obj.offer.guests + ' гостей';
  newCardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + obj.offer.checkin + ', выезд до ' + obj.offer.checkout;
  newCardElement.querySelector('.popup__description').textContent = obj.offer.description;
  newCardElement.querySelector('.popup__avatar').src = obj.author.avatar;

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

  var features = obj.offer.features;

  // удаление картинок из карточки товара

  var createListFeaturesElement = function () {

    for (var f = 0; f < features.length; f++) {

      switch (features[f]) {
        case 'conditioner':
          newCardElement.querySelector('.popup__feature--conditioner').style.display = 'none';
          break;
        case 'washer':
          newCardElement.querySelector('.popup__feature--washer').style.display = 'none';
          break;
        case 'wifi':
          newCardElement.querySelector('.popup__feature--wifi').style.display = 'none';
          break;
        case 'dishwasher':
          newCardElement.querySelector('.popup__feature--dishwasher').style.display = 'none';
          break;
        case 'parking':
          newCardElement.querySelector('.popup__feature--parking').style.display = 'none';
          break;
        case 'elevator':
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

    for (var g = 0; g < photos.length; g++) {
      var popupPhotosImg = document.createElement('img');
      popupPhotosImg.src = photos[g];
      popupPhotosImg.style.width = '70px';
      popupPhotosImg.style.height = '70px';
      popupPhotosImg.style.padding = '5px';
      popupPhotos.appendChild(popupPhotosImg);
    }
  };
  insertPhotoOnPage();

  for (var k = types; k < photoArray.length; k++) {
    var newPhotoElement = photoTemplate.cloneNode(true);
    newPhotoElement.src = photoArray[k];
    fragmentPhoto.appendChild(newPhotoElement);
  }
  photoElement.appendChild(fragmentPhoto);
};
})();

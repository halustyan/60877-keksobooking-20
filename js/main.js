'use strict';
//MAIN.JS
(function () {
var arr = [];
window.arr = arr;
var map = document.querySelector('.map');
window.map = map;
function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

var getRandomArrayEl = function (randarr) {
  var rand = Math.floor(Math.random() * randarr.length);
  return randarr[rand];
};

var types = ['palace', 'flat', 'house', 'bungalo'];
window.types = types;
var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
window.photos = photos;
var createObject = function (index) {
  var sizeofthepin = 40;

  var getmappinswidth = document.querySelector('.map__pins').offsetWidth;

  var minHeight = 130;

  var maxHeight = 630;

  var titles = ['Title1', 'Title2', 'Title3', 'Title4', 'Title5', 'Title6', 'Title7', 'Title8'];

  var timerange = ['12:00', '13:00', '14:00'];

  var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

  var deskriptions = ['cozy place', 'beutiful view', 'modern design'];

  var createRandomArr = function (array) {

    var randomArr = [];

    for (var i = 0; i < randomInteger(1, 6); i++) {
      randomArr.push(array[i]);
    }

    return randomArr;

  };

  window.obj = {

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
      'features': createRandomArr(features),
      'description': getRandomArrayEl(deskriptions),
      'photos': getRandomArrayEl(photos),
    },

    'location': {
      'x': randomInteger(minHeight, maxHeight),
      'y': randomInteger(sizeofthepin, getmappinswidth - sizeofthepin),
    }

  };

  return obj;
};

for (var i = 0; i < 8; i++) {
  arr.push(createObject(i));
}

var ElObjectArray = arr;
window.ElObjectArray = ElObjectArray;
})();

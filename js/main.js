var arr = [];

var map = document.querySelector('.map');

map.classList.remove('map--faded');

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

var getRandomArrayEl = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

function createObject(index) {
  var sizeofthepin = 40;

  var getmappinswidth = document.querySelector(".map__pins").offsetWidth;

  var minHeight = 130;

  var maxHeight = 630;

  var titles = ["Title1", "Title2", "Title3", "Title4", "Title5", "Title6", "Title7", "Title8"];

  var types = ["palace", "flat", "house", "bungalo"];

  var timerange = ["12:00", "13:00", "14:00"];

  var features = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];

  var photos = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];

  var deskriptions = ['cozy place', 'beutiful view', 'modern design'];

  var obj = {

    "author": {
      "avatar": "img/avatars/user0" + (index + 1) + ".png",
    },

    "offer": {
      "title": titles[randomInteger(0, titles.length - 1)],
      "address": randomInteger(1, 1000) + ', ' + randomInteger(1, 1000),
      "price": randomInteger(1, 10000),
      "type": types[randomInteger(0, types.length - 1)],
      "rooms": randomInteger(1, 3),
      "guests": randomInteger(1, 6),
      "checkin": timerange[randomInteger(0, timerange.length - 1)],
      "checkout": timerange[randomInteger(0, timerange.length - 1)],
      "features": getRandomArrayEl(features),
      "description": getRandomArrayEl(deskriptions),
      "photos": getRandomArrayEl(photos),
    },

    "location": {
      "x": randomInteger(minHeight, maxHeight),
      "y": randomInteger(sizeofthepin, getmappinswidth - sizeofthepin),
    }

  };
  return obj;
}

for (var i = 0; i < 8; i++) {
  arr.push(createObject(i));
}

var mockObjectArray = arr;

var pinField = document.querySelector('.map__pins');
var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
var fragment = document.createDocumentFragment();


var createPinElement = function (itemObj) {
  var cloneElement = pinTemplate.cloneNode(true);
  var pinElementImg = cloneElement.querySelector("img");
  pinElementImg.src = itemObj.author.avatar;
  cloneElement.style.top = itemObj.location.x + "px";
  cloneElement.style.left = itemObj.location.y + "px";
  return cloneElement;
}


for (var i = 0; i < mockObjectArray.length; i++) {
  fragment.appendChild(createPinElement(mockObjectArray[i]));
  pinField.appendChild(fragment);
}



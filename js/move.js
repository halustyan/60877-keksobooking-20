'use strict';

(function () {
  var mapPinMain = document.querySelector('.map__pin--main');

  window.mapPinMain = mapPinMain;

  var placemarkAddress = document.querySelector('#address');

  window.placemarkAddress = placemarkAddress;

  var activeMode = false;

  var Y_MIN = 130;
  var Y_MAX = 630;
  var X_MIN = 0;
  var X_MAX = 1200;
  var MAIN_ACTIVE_PIN_HEIGHT = document.querySelector('.map__pin--main img').offsetHeight + 22;
  var mapEdges = {
    top: Y_MIN - MAIN_ACTIVE_PIN_HEIGHT,
    bottom: Y_MAX - MAIN_ACTIVE_PIN_HEIGHT,
    left: X_MIN - Math.ceil(mapPinMain.offsetWidth / 2),
    right: X_MAX - Math.ceil(mapPinMain.offsetWidth / 2)
  };

  mapPinMain.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
      if (mapPinMain.offsetLeft - shift.x < mapEdges.left) {
        mapPinMain.style.left = mapEdges.left + 'px';
      } else if (mapPinMain.offsetLeft - shift.x > mapEdges.right) {
        mapPinMain.style.left = mapEdges.right + 'px';
      } else if (mapPinMain.offsetTop - shift.y < mapEdges.top) {
        mapPinMain.style.top = mapEdges.top + 'px';
      } else if (mapPinMain.offsetTop - shift.y > mapEdges.bottom) {
        mapPinMain.style.top = mapEdges.bottom + 'px';
      } else {
        mapPinMain.style.top = mapPinMain.offsetTop - shift.y + 'px';
        mapPinMain.style.left = mapPinMain.offsetLeft - shift.x + 'px';
      }

      var setActiveAddress = function () {
        var coordinateX = Math.round(mapPinMain.offsetLeft + mapPinMain.offsetWidth / 2);
        var coordinateY = Math.round(mapPinMain.offsetTop + MAIN_ACTIVE_PIN_HEIGHT);
        placemarkAddress.value = coordinateX + ', ' + coordinateY;
      };
      setActiveAddress();

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();

          document.removeEventListener('click', onClickPreventDefault);
        };
        document.addEventListener('click', onClickPreventDefault);
      } else {
        if (evt.which === 1 && activeMode === false) {
          activeMode = true;
        }
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
  window.mapPin.addEventListener('mousedown', window.onMouseUpRenderPins);
})();

'use strict';

(function () {
  var mapPinMain = document.querySelector('.map__pin--main');
  var placemarkAddress = document.querySelector('#address');
  placemarkAddress.value = "570, 375";
  var activeMode = false;

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

      if ((mapPinMain.offsetLeft - shift.x) < -32) {
        var flag1 = true;
      }
      if ((mapPinMain.offsetLeft - shift.x) > 1168) {
        var flag2 = true;
      }
      if ((mapPinMain.offsetTop - shift.y) < 61) {
        var flag3 = true;
      }
      if ((mapPinMain.offsetTop - shift.y) > 625) {
        var flag4 = true;
      }

      if (flag1) {
        mapPinMain.style.left = -32 + 'px';
      }
      if (flag2) {
        mapPinMain.style.left = 1168 + 'px';
      }
      if (flag3) {
        mapPinMain.style.top = 61 + 'px';
      }
      if (flag4) {
        mapPinMain.style.top = 625 + 'px';
      }
      if (!flag1 && !flag2 && !flag3 && !flag4) {
        mapPinMain.style.top = (mapPinMain.offsetTop - shift.y) + 'px';
        mapPinMain.style.left = (mapPinMain.offsetLeft - shift.x) + 'px';
      }

      var pinX = (mapPinMain.offsetLeft - shift.x);
      var pinY = (mapPinMain.offsetTop - shift.y);

      placemarkAddress.value = pinX + ', ' + pinY;
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
  window.onMouseUpRenderPins2 =  function(){
    window.load(onLoad, onError);
  }
  mapPin.addEventListener('mousedown', onMouseUpRenderPins);
})();

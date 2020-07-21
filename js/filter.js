'use strict';
(function () {
  var mapFilters = document.querySelector('.map__filters');
  var housingType = document.querySelector('#housingtype');
  var housingPrice = document.querySelector('#housing-price');
  var housingRooms = document.querySelector('#housing-rooms');
  var housingGuests = document.querySelector('#housing-guests');
  var filtersForm = document.querySelector('.map__filters');
  var any = 'any';
  var middle = 'middle';
  var low = 'low';
  var high = 'high';
  var tenThousand = 10000;
  var fiftyThousand = 50000;
  var renderFilteredPins = function (data) {

    var allPins = document.querySelectorAll('.map__pin:not(.map__pin--main)');

    allPins.forEach(function (pin) {
      pin.remove();
      if (document.querySelector('.map__card') !== null) {
        document.querySelector('.map__card').remove();

      }
    });
    window.renderPins(data);
  };

  mapFilters.addEventListener('change', function () {
    var data = window.load.data;
    var housingTypeValue = housingType.value;
    var housingPriceValue = housingPrice.value;
    var housingRoomsValue = housingRooms.value;
    var housingGuestsValue = housingGuests.value;
    var filteredData;

    var filteredItemsHousingType = data.filter(function (filteredElem, indexOfElem, arrayElem) {
      if (housingTypeValue === any) {
        return arrayElem;
      } else {
        return filteredElem.offer.type === housingTypeValue;
      }
    });

    filteredData = filteredItemsHousingType;

    var filteredItemsHousingPrice = filteredData.filter(function (filteredElem, indexOfElem, arrayElem) {
      if (housingPriceValue === middle) {
        return filteredElem.offer.price >= tenThousand && filteredElem.offer.price <= fiftyThousand;
      } else if (housingPriceValue === low) {
        return filteredElem.offer.price < tenThousand;
      } else if (housingPriceValue === high) {
        return filteredElem.offer.price > fiftyThousand;
      } else {
        return arrayElem;
      }
    });

    filteredData = filteredItemsHousingPrice;

    var filteredItemsHousingRooms = filteredData.filter(function (filteredElem, indexOfElem, arrayElem) {
      if (housingRoomsValue === '1') {
        return filteredElem.offer.rooms === 1;
      } else if (housingRoomsValue === '2') {
        return filteredElem.offer.rooms === 2;
      } else if (housingRoomsValue === '3') {
        return filteredElem.offer.rooms === 3;
      } else {
        return arrayElem;
      }
    });

    filteredData = filteredItemsHousingRooms;

    var filteredItemHousingGuests = filteredData.filter(function (filteredElem, indexOfElem, arrayElem) {
      if (housingGuestsValue === '2') {
        return filteredElem.offer.guests === 2;
      } else if (housingGuestsValue === '1') {
        return filteredElem.offer.guests === 1;
      } else if (housingGuestsValue === '0') {
        return filteredElem.offer.guests === 0;
      } else {
        return arrayElem;
      }
    });

    filteredData = filteredItemHousingGuests;

    var features = Array.from(document.querySelectorAll('.map__checkbox:checked')).map(function (feature) {

      return feature.value;

    });

    function getFilteredFeatures(filteredDataFilter, featuresFilterFunction) {
      if (featuresFilterFunction.length === 0) {
        return filteredData;
      }
      for (var i = 0; i < featuresFilterFunction.length; i++) {
        if (i !== 0) {
          filteredData = arr;
        }
        var arr = filteredData.filter(function (filteredElement) {
          return filteredElement.offer.features.includes(featuresFilterFunction[i]);
        });
      }
      return arr;
    }
    var debounceFunction = function () {
      window.debounce(window.renderFilteredPins);
    };
    filtersForm.addEventListener('change', debounceFunction);
    renderFilteredPins(getFilteredFeatures(filteredData, features));
  });
})();

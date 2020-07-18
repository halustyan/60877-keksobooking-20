'use strict';
(function () {
  var mapFilters = document.querySelector('.map__filters');
  var housingType = document.querySelector('#housingtype');
  var housingPrice = document.querySelector('#housing-price');
  var housingRooms = document.querySelector('#housing-rooms');
  var housingGuests = document.querySelector('#housing-guests');

  var DEBOUNCE_INTERVAL = 300;
  var renderFilteredPins = function (data) {
    var allPins = document.querySelectorAll('.map__pin:not(.map__pin--main)');
    allPins.forEach(function (pin) {
      window.setTimeout(function () {
        pin.remove();
      }, DEBOUNCE_INTERVAL);

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

    var filteredItemsHousingType = data.filter(function (item, i, arr) {
      if (housingTypeValue === 'any') {
        return arr;
      } else {
        return item.offer.type === housingTypeValue;
      }
    });

    filteredData = filteredItemsHousingType;

    var filteredItemsHousingPrice = filteredData.filter(function (item, i, arr) {
      if (housingPriceValue === 'middle') {
        return item.offer.price >= 10000 && item.offer.price <= 50000;
      } else if (housingPriceValue === 'low') {
        return item.offer.price < 10000;
      } else if (housingPriceValue === 'high') {
        return item.offer.price > 50000;
      } else {
        return arr;
      }
    });

    filteredData = filteredItemsHousingPrice;

    var filteredItemsHousingRooms = filteredData.filter(function (item, i, arr) {
      if (housingRoomsValue === '1') {
        return item.offer.rooms === 1;
      } else if (housingRoomsValue === '2') {
        return item.offer.rooms === 2;
      } else if (housingRoomsValue === '3') {
        return item.offer.rooms === 3;
      } else {
        return arr;
      }
    });

    filteredData = filteredItemsHousingRooms;

    var filteredItemHousingGuests = filteredData.filter(function (item, i, arr) {
      if (housingGuestsValue === '2') {
        return item.offer.guests === 2;
      } else if (housingGuestsValue === '1') {
        return item.offer.guests === 1;
      } else if (housingGuestsValue === '0') {
        return item.offer.guests === 0;
      } else {
        return arr;
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
        var arr = filteredData.filter(function (el) {
          return el.offer.features.includes(featuresFilterFunction[i]);
        });
      }
      return arr;
    }
    console.log(window.obj);
    renderFilteredPins(getFilteredFeatures(filteredData, features));

  });
})();

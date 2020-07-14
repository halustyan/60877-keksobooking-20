'use strict';
(function () {
  var mapFilters = document.querySelector('.map__filters');
  var housingType = document.querySelector('#housingtype');
  var housingPrice = document.querySelector('#housing-price');
  var housingRooms = document.querySelector('#housing-rooms');
  var housingGuests = document.querySelector('#housing-guests');


  var renderFilteredPins = function (data) {
    var allPins = document.querySelectorAll('.map__pin:not(.map__pin--main)');
    allPins.forEach(function (pin) {
      pin.remove();
    });
    window.renderPin(data);
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

    var filteredItemsHousingRoomsPrice = filteredData.filter(function (item, i, arr) {
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

    filteredData = filteredItemsHousingRoomsPrice;

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

    renderFilteredPins(filteredData);
  });
})();

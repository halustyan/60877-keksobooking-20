'use strict';
(function () {

  var DEFAULT_FILTER = 'any';

  var mapFilters = document.querySelector('.map__filters');
  var housingType = mapFilters.querySelector('#housingtype');
  var housingPrice = mapFilters.querySelector('#housing-price');
  var housingRooms = mapFilters.querySelector('#housing-rooms');
  var housingGuests = mapFilters.querySelector('#housing-guests');

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

  var priceMap = {
    middle: {
      from: 10000,
      to: 50000
    },
    low: {
      from: 0,
      to: 9999
    },
    high: {
      from: 50001,
      to: 100000
    }
  };

  var filterHousingType = (function (adv) {
    return housingType.value === DEFAULT_FILTER ||
    housingType.value === adv.offer.type;
  });

  var filterHousingPrice = function (adv) {
    return housingPrice.value === DEFAULT_FILTER ||
    adv.offer.price >= priceMap[housingPrice.value].from && adv.offer.price <= priceMap[housingPrice.value].to;
  };

  var filterHousingRooms = (function (adv) {
    return housingRooms.value === DEFAULT_FILTER ||
    Number(housingRooms.value) === adv.offer.rooms;
  });

  var filterHousingGuests = (function (adv) {
    return housingGuests.value === DEFAULT_FILTER ||
    Number(housingGuests.value) === adv.offer.guests;
  });

  var filterHousingFeatures = function (adv) {
    var checkedFeatures = mapFilters.querySelectorAll('input:checked');

    return Array.from(checkedFeatures).every(function (feature) {
      return adv.offer.features.includes(feature.value);
    });
  };

  var updateOffers = function (offers) {
    var arr = [];
    var filteredOffers = offers.slice();

    for (var i = 0; i < filteredOffers.length; i++) {
      if (arr.length >= 5) {
        // выход из цикла
        break;
      }

      if (filterHousingType(filteredOffers[i]) &&
      filterHousingPrice(filteredOffers[i]) &&
      filterHousingRooms(filteredOffers[i]) &&
      filterHousingGuests(filteredOffers[i]) &&
      filterHousingFeatures(filteredOffers[i])) {
        arr.push(filteredOffers[i]);
      }
    }
    return arr;
  };

  var onFormFilterChange = window.debounce(function () {
    var filteredData = updateOffers(window.load.data);
    renderFilteredPins(filteredData);
  });

  mapFilters.addEventListener('change', onFormFilterChange);

})();

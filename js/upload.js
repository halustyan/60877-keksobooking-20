(function () {
  adForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  var adFormElementTitle = document.querySelector('.ad-form__element-title');
  var adFormElementPriceForNight =  document.querySelector('.ad-form__element-price-for-night');
  var description =  document.querySelector('#description');
  var address =  document.querySelector('#address');
  var formData = new FormData(this);
/*formData.append("adtitle", adFormElementTitle.value);
formData.append("price for night", adFormElementPriceForNight.value);
formData.append("rooms number", capacityrooms.value);
formData.append("description", description.value);
formData.append("address", address.value);
formData.append("timeIn", timeIn.value);
formData.append("timeOut", timeOut.value);*/
var request = new XMLHttpRequest();
request.responseType = 'json';
request.open("POST", "https://javascript.pages.academy/keksobooking");
request.send(formData);
if (request.status === 200) {
  onSuccess();
}
  else {
    onError();

  }
disabledaftersend(mapFiltersSelect, adFormTextarea, adFormInputs, adFormSelects, mapFiltersInputs);
adForm.classList.add('ad-form--disabled');
});
})();

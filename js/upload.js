(function () {
'use strict';
window.upload = function(data) {
  var URL = "https://javascript.pages.academy/keksobooking";
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.addEventListener("load", function(){
    window.onSuccess();
  })
  if (xhr.status ==400) {
    window.onError();
  }
  xhr.open("POST", URL);
  xhr.send(data);
}
adForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  var formData = new FormData(this);
window.upload(formData);
disabledaftersend(mapFiltersSelect, adFormTextarea, adFormInputs, adFormSelects, mapFiltersInputs, mapPins);
});

})();

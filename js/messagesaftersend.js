'use strict';
(function () {
  window.onError = function (dataerror) {

    var errorTemplate = document.querySelector('#error').content.querySelector('.error');
    var errorTemplateClone = errorTemplate.cloneNode(true);
    var main = document.querySelector('main');
    main.prepend(errorTemplateClone);
    errorTemplateClone.textContent = dataerror;
    var errorDiv = document.querySelector('.error');
    if (dataerror === null || dataerror === undefined) {
      errorDiv.insertAdjacentHTML('afterbegin', '<p class="error__message">Ошибка загрузки объявления</p><button class="error__button">Попробовать снова</button>');
    }
    var errorButton = document.querySelector('.error__button');

    window.errorDiv = errorDiv;
    if (errorDiv !== null) {

      document.addEventListener('click', function (evt) {
        if (evt.target === errorDiv) {
          return;
        }
        errorDiv.remove();
      });
    }
    errorDiv.addEventListener('click', function () {
      errorDiv.remove();
    });
    if (errorButton !== null) {
      errorButton.addEventListener('click', function () {
        errorDiv.style.display = 'none';
      });
    }
    return true;
  };

  window.onSuccess = function (dataSuccess) {
    var successTemplate = document.querySelector('#success').content.querySelector('.success');
    var successTemplateClone = successTemplate.cloneNode(true);
    var main = document.querySelector('main');
    successTemplateClone.textContent = dataSuccess;
    main.prepend(successTemplateClone);
    var successDiv = document.querySelector('.success');
    if (dataSuccess === null || dataSuccess === undefined) {
      successDiv.insertAdjacentHTML('afterbegin', '<p class="success__message">Ваше объявление<br>успешно размещено!</p>');
    }

    document.addEventListener('click', function (evt) {
      if (evt.target !== successDiv) {
        return;
      }
      successDiv.remove();
    });

    return true;
  };
})();

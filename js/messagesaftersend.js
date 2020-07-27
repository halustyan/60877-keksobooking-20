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

    var removeRemoveFunction = function (evt) {
      if (evt.target !== errorDiv) {
        return;
      }
      errorDiv.remove();
    };

    document.addEventListener('click', removeRemoveFunction);
    document.removeEventListener('click', removeRemoveFunction);

    var removeDivError = function () {
      if (document.querySelector('.error__button') !== null) {
        var errorDivRemoveFunc = function () {
          document.querySelector('.error').remove();
        };
        document.querySelector('.error__button').addEventListener('click', errorDivRemoveFunc);
        if (document.querySelector('.error__button') !== null) {
          document.querySelector('.error__button').removeEventListener('click', errorDivRemoveFunc);
        }
      } else {
        document.querySelector('.error').remove();
      }

    };
    removeDivError();

    var removeDivErrorEsc = function (evt) {
      if (evt.keyCode === 27) {
        document.querySelector('.error').remove();
      }

    };
    document.addEventListener('keydown', removeDivErrorEsc);
    document.removeEventListener('keydown', removeDivErrorEsc);
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

    var removeSuccessFunction = function (evt) {
      if (evt.target !== successDiv) {
        return;
      }
      successDiv.remove();
    };
    document.addEventListener('click', removeSuccessFunction);
    document.removeEventListener('click', removeSuccessFunction);

    var removeSuccessDiv = function (evt) {
      if (evt.keyCode === 27) {
        document.querySelector('.success').remove();
      }
    };
    document.addEventListener('keydown', removeSuccessDiv);
    document.removeEventListener('keydown', removeSuccessDiv);

  };
})();

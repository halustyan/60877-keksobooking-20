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
      document.removeEventListener('click', removeRemoveFunction);
    };

    document.addEventListener('click', removeRemoveFunction);

    var removeDivError = function () {
      if (document.querySelector('.error__button') !== null) {
        var errorDivRemoveFunc = function () {
          document.querySelector('.error').remove();
          if (document.querySelector('.error__button') !== null) {
            document.querySelector('.error__button').removeEventListener('click', errorDivRemoveFunc);
          }
        };
        document.querySelector('.error__button').addEventListener('click', errorDivRemoveFunc);
      } else {
        document.querySelector('.error').remove();
      }

    };
    removeDivError();

    var removeDivErrorEsc = function (evt) {
      if (evt.keyCode === 27) {
        document.querySelector('.error').remove();
      }
      document.removeEventListener('keydown', removeDivErrorEsc);

    };
    document.addEventListener('keydown', removeDivErrorEsc);

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
      document.removeEventListener('click', removeSuccessFunction);
    };
    document.addEventListener('click', removeSuccessFunction);

    var removeSuccessDiv = function (evt) {
      if (evt.keyCode === 27) {
        document.querySelector('.success').remove();
      }
      document.removeEventListener('keydown', removeSuccessDiv);
      return true;
    };
    document.addEventListener('keydown', removeSuccessDiv);

  };
})();

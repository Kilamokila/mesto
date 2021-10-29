const dataForValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error'
};

const allForms = Array.from(document.querySelectorAll(dataForValidation.formSelector));

class FormValidator {
  constructor(data, formElement) {
    this._formElement = formElement;
    this._data = data;
  }

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._data.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._data.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._data.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._data.errorClass);
  }

  _isValid(inputElement) {
    !inputElement.validity.valid ?
      this._showInputError(inputElement) :
      this._hideInputError(inputElement);
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };

  _toggleButtonState() {
    const buttonElement = this._formElement.querySelector(this._data.submitButtonSelector);
    const noInvalidInput = this._formElement.checkValidity();
    !noInvalidInput ?
      buttonElement.setAttribute('disabled', true) :
      buttonElement.removeAttribute('disabled');
  }

  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._data.inputSelector));
    inputList.forEach((inputElement) => {
      this._toggleButtonState();
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  };

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners(this._formElement);
  };
};

const pushValidation = () => {
  allForms.forEach((form) => {
    const validationClass = new FormValidator(dataForValidation, form);
    validationClass.enableValidation();
  })
};

pushValidation();

export { dataForValidation, allForms, FormValidator };
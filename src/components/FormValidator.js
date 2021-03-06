export default class FormValidator {
  constructor(validationConfig, formElement) {
    this._formElement = formElement;
    this._validationConfig = validationConfig;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._validationConfig.submitButtonSelector);
  }

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._validationConfig.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._validationConfig.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._validationConfig.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._validationConfig.errorClass);
  }

  _isValid(inputElement) {
    !inputElement.validity.valid ?
      this._showInputError(inputElement) :
      this._hideInputError(inputElement);
  }

  _toggleButtonState() {
    const noInvalidInput = this._formElement.checkValidity();
    !noInvalidInput ?
      this._buttonElement.setAttribute('disabled', true) :
      this._buttonElement.removeAttribute('disabled');
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      this._toggleButtonState();
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  };

  changeButtonState() {
    this._buttonElement.setAttribute('disabled', true);
  };

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  };

  resetValidationFields() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    })
  }
};
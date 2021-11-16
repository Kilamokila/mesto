import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popup, { submitFormCallback, resetValidationFields }) {
        super(popup);
        this._submitFormCallback = submitFormCallback;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
        this.resetValidationFields = resetValidationFields;
    }

    close() {
        super.close();
        if (this._form.hasAttribute('name')) { this._form.reset() };
        this.resetValidationFields();
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitFormCallback(this._getInputValues());
            this.close();
        });
    }
}
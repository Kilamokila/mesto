import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, { submitFormCallback, form, resetValidationFields }) {
        super(popupSelector);
        this._submitFormCallback = submitFormCallback;
        this._form = form;
        this.resetValidationFields = resetValidationFields;
    }

    close() {
        super.close();
        this._form.reset();
        this.resetValidationFields();
    }

    _getInputValues() {
        this._inputList = this._form.querySelectorAll('.popup__input');
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
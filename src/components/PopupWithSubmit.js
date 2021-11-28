import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
    constructor(popup) {
        super(popup);
        this._form = this._popup.querySelector('.popup__form');
        this._submitButton = this._form.querySelector('.popup__button');
    }

    setActionOfSubmit(action) {
        this._submitFormCallback = action;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitFormCallback();
            this.close();
        });
    }
}
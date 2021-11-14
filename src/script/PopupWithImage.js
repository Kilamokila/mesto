import { popupFullSizePhoto, popupPhotoTitle } from "../utils/constants.js";
import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor({ data }, popupSelector) {
        super(popupSelector);
        this._data = data;
    }

    open() {
        super.open();
        popupFullSizePhoto.setAttribute("src", this._data.link);
        popupFullSizePhoto.setAttribute("alt", this._data.name);
        popupPhotoTitle.textContent = this._data.name;
    }
}
import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
        this._popupFullSizePhoto = this._popup.querySelector('.popup__fullsize-photo');
        this._popupPhotoTitle = this._popup.querySelector('.popup__photo-title');
    }

    open(data) {
        super.open(data);
        this._popupFullSizePhoto.setAttribute("src", data.link);
        this._popupFullSizePhoto.setAttribute("alt", data.name);
        this._popupPhotoTitle.textContent = data.name;
    }
}
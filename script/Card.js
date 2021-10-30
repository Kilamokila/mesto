import { openPopup } from '../utils/utils.js'

const popupFullSizePhoto = document.querySelector('.popup__fullsize-photo');
const popupPhotoTitle = document.querySelector('.popup__photo-title');

class Card {
  constructor(data, cardSelector) {
    this._data = data;
    this._cardSelector = cardSelector;
  }

  _returnTemplate() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content
      .cloneNode(true);
    return cardTemplate;
  }

  _viewCard() {
    const viewCardPopup = document.getElementById('view-card-popup');
    popupFullSizePhoto.setAttribute("src", this._data.link);
    popupFullSizePhoto.setAttribute("alt", this._data.name);
    popupPhotoTitle.textContent = this._data.name;
    openPopup(viewCardPopup);
  }

  _setEventListeners() {
    this._element.querySelector('.elements__like-button').addEventListener('click', (evt) => {
      evt.target.classList.toggle('elements__like-button_active');
    });
    this._element.querySelector('.elements__delete-button').addEventListener('click', (evt) => {
      evt.target.closest('.element-card').remove();
    });
    this._element.querySelector('.elements__card-image').addEventListener('click', () => {
      this._viewCard()
    });
  }

  returnNewCard() {
    this._element = this._returnTemplate();
    this._element.querySelector('.elements__place-name').textContent = this._data.name;
    const cardImgae = this._element.querySelector('.elements__card-image');
    cardImgae.setAttribute('src', this._data.link);
    cardImgae.setAttribute('alt', this._data.name);
    this._setEventListeners()
    return this._element;
  }
}

export { Card };
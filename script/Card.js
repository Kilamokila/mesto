import { openPopup } from './Index.js'

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://images.unsplash.com/photo-1616345346452-c3df758fd44a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://images.unsplash.com/photo-1589833035032-1619e9b41e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'
  }
];

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
    this._element.querySelector('.elements__card-image').setAttribute('src', this._data.link);
    this._element.querySelector('.elements__card-image').setAttribute('alt', this._data.name);
    this._setEventListeners()
    return this._element;
  }
}

const renderCards = () => {
  initialCards.forEach((card => {
    const newCard = new Card(card, '.elements__card-template');
    document.querySelector('.elements').append(newCard.returnNewCard());
  }))
};

renderCards();

export { initialCards, popupFullSizePhoto, popupPhotoTitle, Card };
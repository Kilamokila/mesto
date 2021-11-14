export default class Card {
  constructor({ data, cardSelector, handleCardClick }) {
    this._data = data;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _returnTemplate() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content
      .cloneNode(true);
    return cardTemplate;
  }

  _setEventListeners() {
    this._element.querySelector('.elements__like-button').addEventListener('click', (evt) => {
      evt.target.classList.toggle('elements__like-button_active');
    });
    this._element.querySelector('.elements__delete-button').addEventListener('click', (evt) => {
      evt.target.closest('.element-card').remove();
    });
    this._element.querySelector('.elements__card-image').addEventListener('click', () => {
      this._handleCardClick()
    });
  }

  returnNewCard() {
    this._element = this._returnTemplate();
    this._element.querySelector('.elements__place-name').textContent = this._data.name;
    const cardImage = this._element.querySelector('.elements__card-image');
    cardImage.setAttribute('src', this._data.link);
    cardImage.setAttribute('alt', this._data.name);
    this._setEventListeners()
    return this._element;
  }
}
export default class Card {
  constructor({ data, cardSelector, handleCardClick, handleLikeClick, handleDeleteCard }) {
    this._data = data;
    this.id = data._id;
    this._likes = data.likes;
    this._currentUserID = data.currentUserID;
    this._ownerID = data.owner._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteCard = handleDeleteCard;
    this._element = this._returnTemplate();
    this._deleteButton = this._element.querySelector('.elements__delete-button');
    this._likeButton = this._element.querySelector('.elements__like-button');
    this._cardImg = this._element.querySelector('.elements__card-image');
    this._likeCounter = this._element.querySelector('.elements__like-counter');
  }

  _returnTemplate() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content
      .cloneNode(true);
    return cardTemplate;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => this._handleLikeClick(this));
    this._deleteButton.addEventListener('click', () => this._handleDeleteCard(this));
    this._cardImg.addEventListener('click', () => this._handleCardClick(this));
  }

  checkLike() {
    if (this._likes) {
      return this._likes.some(user => user._id === this._currentUserID);
    }
  }

  likeTheCard = (likeData) => {
    this._likes = likeData;
    this._toggleLikeState();
    this._likeCounter.textContent = this._likes.length;
  }

  _toggleLikeState() {
    if (!this.checkLike()) {
      this._likeButton.classList.remove('elements__like-button_active');
    } else {
      this._likeButton.classList.add('elements__like-button_active');
    }
  }

  deleteCurrentCard() {
    this._element.remove();
    this._element = null;
  }

  returnNewCard() {
    this._element.querySelector('.elements__place-name').textContent = this._data.name;
    this._cardImg.setAttribute('src', this._data.link);
    this._cardImg.setAttribute('alt', this._data.name);
    if (this._ownerID !== this._currentUserID) {
      this._deleteButton.setAttribute('hidden', '')
    };
    this._setEventListeners();
    if (this._likes) {
      this._likeCounter.textContent = this._likes.length
    };
    this._toggleLikeState();
    return this._element;
  }
}
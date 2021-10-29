import { initialCards, popupFullSizePhoto, popupPhotoTitle, Card } from './Card.js';
import { dataForValidation, allForms, FormValidator } from './FormValidator.js';

const page = document.querySelector('.page');
const profileEditButton = page.querySelector('.profile__edit-button');
const profileName = page.querySelector('.profile__info-name');
const profileDescription = page.querySelector('.profile__info-description');
const profilePopup = document.getElementById('profile-popup');
const editCardPopup = document.getElementById('edit-card-popup');
const editProfileForm = document.getElementById('editProfileForm');
const addCardForm = document.getElementById('addCardForm');
const nameInput = page.querySelector('.popup__input_type_name');
const jobInput = page.querySelector('.popup__input_type_description');
const placeInput = page.querySelector('.popup__input_type_place');
const linkInput = page.querySelector('.popup__input_type_link');
const createCardButton = page.querySelector('#create-card__button');
const cardAddButton = page.querySelector('.profile__card-add-button');
const elementsSection = page.querySelector('.elements');
const popups = page.querySelectorAll('.popup');

export const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escapePopup);
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', escapePopup);
};

const closeCurrentPopup = (evt) => {
  closePopup(evt.target.closest('.popup'));
};

function escapePopup(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

const createCard = (evt) => {
  evt.preventDefault();
  const cardToBeAdd = {
    name: placeInput.value,
    link: linkInput.value
  };
  const newCard = new Card(cardToBeAdd, '.elements__card-template');
  const cardElement = newCard.returnNewCard();
  elementsSection.prepend(cardElement);
  addCardForm.reset();
  closePopup(editCardPopup);
  createCardButton.setAttribute('disabled', true);
};

const openProfilePopup = () => {
  openPopup(profilePopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
};

const editProfile = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(profilePopup);
};

profileEditButton.addEventListener('click', openProfilePopup);
editProfileForm.addEventListener('submit', editProfile);
cardAddButton.addEventListener('click', () => openPopup(editCardPopup));
cardAddButton.addEventListener('click', () => openPopup(editCardPopup));
addCardForm.addEventListener('submit', createCard);
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    };
    if (evt.target.classList.contains('popup__container-exit-button')) {
      closePopup(popup);
    };
  });
});
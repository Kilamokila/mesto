import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { validationConfig, initialCards } from '../utils/constants.js'
import { closePopup, openPopup, openProfilePopup, editProfile } from '../utils/utils.js'

const page = document.querySelector('.page');
const profileEditButton = page.querySelector('.profile__edit-button');
const editCardPopup = document.getElementById('edit-card-popup');
const editProfileForm = document.getElementById('editProfileForm');
const addCardForm = document.getElementById('addCardForm');
const placeInput = page.querySelector('.popup__input_type_place');
const linkInput = page.querySelector('.popup__input_type_link');
const cardAddButton = page.querySelector('.profile__card-add-button');
const elementsSection = page.querySelector('.elements');
const popups = page.querySelectorAll('.popup');
const templateSection = document.querySelector('.elements');

const addCardFormValidator = new FormValidator(validationConfig, addCardForm);
const editProfileFormValidator = new FormValidator(validationConfig, editProfileForm);

const getCard = (data) => {
    const newCard = new Card(data, '.elements__card-template').returnNewCard();
    return newCard;
}

const renderCards = () => {
    initialCards.forEach((card => {
        templateSection.append(getCard(card));
    }));
};

renderCards();

const pushValidation = () => {
    addCardFormValidator.enableValidation();
    editProfileFormValidator.enableValidation();
};

pushValidation();

const resetValidationFields = () => {
    addCardFormValidator.resetValidationFields();
    editProfileFormValidator.resetValidationFields();
}

const createCard = (evt) => {
    evt.preventDefault();
    const cardToBeAdd = getCard({
        name: placeInput.value,
        link: linkInput.value
    });
    elementsSection.prepend(cardToBeAdd);
    addCardForm.reset();
    closePopup(editCardPopup);
    addCardFormValidator.changeButtonState();
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
            resetValidationFields();
        };
        if (evt.target.classList.contains('popup__container-exit-button')) {
            closePopup(popup);
            resetValidationFields();
        };
    });
});
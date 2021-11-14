export const popupFullSizePhoto = document.querySelector('.popup__fullsize-photo');
export const popupPhotoTitle = document.querySelector('.popup__photo-title');
export const profileName = document.querySelector('.profile__info-name');
export const profileDescription = document.querySelector('.profile__info-description');
export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_description');
export const profileEditButton = document.querySelector('.profile__edit-button');
export const editProfileForm = document.getElementById('editProfileForm');
export const addCardForm = document.getElementById('addCardForm');
export const popupImage = document.getElementById('view-card-popup');
export const popupEditProfile = document.getElementById('profile-popup');
export const popupEditCard = document.getElementById('edit-card-popup');
export const placeInput = document.querySelector('.popup__input_type_place');
export const linkInput = document.querySelector('.popup__input_type_link');
export const cardAddButton = document.querySelector('.profile__card-add-button');
export const templateSection = document.querySelector('.elements')

export const initialCards = [
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

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error'
};
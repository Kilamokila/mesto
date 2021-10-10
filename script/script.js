const page = document.querySelector('.page');
const profileEditButton = page.querySelector('.profile__edit-button');
const profileName = page.querySelector('.profile__info-name');
const profileDescription = page.querySelector('.profile__info-description');
const profilePopup = document.getElementById('profile-popup');
const editCardPopup = document.getElementById('edit-card-popup');
const viewCardPopup = document.getElementById('view-card-popup');
const editProfileForm = document.getElementById('editProfileForm');
const addCardForm = document.getElementById('addCardForm');
const nameInput = page.querySelector('.popup__input_type_name');
const jobInput = page.querySelector('.popup__input_type_description');
const placeInput = page.querySelector('.popup__input_type_place');
const linkInput = page.querySelector('.popup__input_type_link');
const inputs = Array.from(page.querySelectorAll('.popup__input'));
const createCardButton = page.querySelector('#create-card__button');
const cardAddButton = page.querySelector('.profile__card-add-button');
const cardTemplate = page.querySelector('.elements__card-template');
const elementsSection = page.querySelector('.elements');
const popupFullSizePhoto = page.querySelector('.popup__fullsize-photo');
const popupPhotoTitle = page.querySelector('.popup__photo-title');
const popups = page.querySelectorAll('.popup');

const openPopup = (popup) => {
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

function escapePopup (evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

const returnNewCard = (name, link) => {
  const newCard = cardTemplate.content.cloneNode(true);
  const newCardImage = newCard.querySelector('.elements__card-image');
  const newCardName = newCard.querySelector('.elements__place-name');
  const newCardLikeButton = newCard.querySelector('.elements__like-button');
  const newCardDeleteButton = newCard.querySelector('.elements__delete-button');
  const setCardLikeListener = (evt) => {
    evt.target.closest('.elements__like-button').classList.toggle('elements__like-button_active');
  };
  const setCardDeleteListener = (evt) => {
    evt.target.closest('.element-card').remove();
  }
  newCardImage.setAttribute('src', link);
  newCardImage.setAttribute("alt", name);
  newCardName.textContent = name;
  newCardLikeButton.addEventListener('click', setCardLikeListener);
  newCardDeleteButton.addEventListener('click', setCardDeleteListener);
  newCardImage.addEventListener('click', () => viewCard(name, link));
  return(newCard);
};

const viewCard = (name, link) => {
  popupFullSizePhoto.setAttribute("src", link);
  popupFullSizePhoto.setAttribute("alt", name);
  popupPhotoTitle.textContent = name;
  openPopup(viewCardPopup);
};

const addCard = (card) => {
  const theCardToAdd = returnNewCard(card.name, card.link);
  elementsSection.append(theCardToAdd);
};

initialCards.forEach(initialCard => addCard(initialCard));

const createCard = (evt) => {
    evt.preventDefault();
    const cardToBeAdd = {
      name: placeInput.value,
      link: linkInput.value
    };
    elementsSection.prepend(returnNewCard(cardToBeAdd.name, cardToBeAdd.link));
    addCardForm.reset();
    toggleButtonState(inputs, createCardButton);
    closePopup(editCardPopup);
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
editProfileForm.addEventListener('submit', editProfile)
cardAddButton.addEventListener('click', () => openPopup(editCardPopup)); 
addCardForm.addEventListener('submit', createCard);
popups.forEach((popup) => {  
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(popup)
    };
    if (evt.target.classList.contains('popup__container-exit-button')) {
      closePopup(popup)
    };
  });
});
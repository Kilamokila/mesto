const page = document.querySelector('.page');
const profileEditButton = page.querySelector('.profile__edit-button');
const profileName = page.querySelector('.profile__info-name');
const profileDescription = page.querySelector('.profile__info-description');
const popups = page.querySelectorAll('.popup');
const profilePopup = document.getElementById('profile-popup');
const editCardPopup = document.getElementById('edit-card-popup');
const viewCardPopup = document.getElementById('view-card-popup');
const popupCloseButtons = document.querySelectorAll('.popup__container-exit-button');
const editProfileForm = document.getElementById('editProfileForm');
const addCardForm = document.getElementById('addCardForm');
const nameInput = page.querySelector('.popup__input_type_name');
const jobInput = page.querySelector('.popup__input_type_description');
const placeInput = page.querySelector('.popup__input_type_place');
const linkInput = page.querySelector('.popup__input_type_link');
const cardCreateButton = page.querySelector('.popup__button_context_create');
const cardAddButton = page.querySelector('.profile__card-add-button');
const cardTemplate = page.querySelector('.elements__card-template');
const elementsSection = page.querySelector('.elements');
const popupFullSizePhoto = page.querySelector('.popup__fullsize-photo');
const popupPhotoTitle = page.querySelector('.popup__photo-title');

const openPopups = (popup) => {
  popup.classList.add('popup_opened');
} 

const closePopups = (popup) => {
 popup.classList.remove('popup_opened');
}

const savePopup = () => {popups.forEach((popup) => {
  closePopups(popup);
})}

const closeCurrentPopup = (evt) => {
  savePopup(evt.target.closest('.popup'))
}

const returnNewCard = (name, link) => {
  const newCard = cardTemplate.content.cloneNode(true);
  const newCardImage = newCard.querySelector('.elements__card-image');
  const newCardName = newCard.querySelector('.elements__place-name');
  const newCardLikeButton = newCard.querySelector('.elements__like-button');
  const newCardDeleteButton = newCard.querySelector('.elements__delete-button');
  const likeTheCard = (evt) => {
    evt.target.closest('.elements__like-button').classList.toggle('elements__like-button_active');
  };
  const deleteTheCard = (evt) => {
    evt.target.closest('.element-card').remove();
  }
  newCardImage.setAttribute('src', link);
  newCardImage.setAttribute("alt", name);
  newCardName.textContent = name;
  newCardLikeButton.addEventListener('click', likeTheCard);
  newCardDeleteButton.addEventListener('click', deleteTheCard);
  newCardImage.addEventListener('click', () => viewCard(name, link));
  return(newCard);
};

const viewCard = (name, link) => {
  popupFullSizePhoto.setAttribute("src", link);
  popupFullSizePhoto.setAttribute("alt", name);
  popupPhotoTitle.textContent = name;
  openPopups(viewCardPopup);
} 

const addCard = (card) => {
  const theCardToAdd = returnNewCard(card.name, card.link);
  elementsSection.append(theCardToAdd);
}

initialCards.forEach(initialCard => addCard(initialCard));

const createCard = (evt) => {
    evt.preventDefault();
    const cardToBeAdd = { 
      name: placeInput.value, 
      link: linkInput.value
    };
    addCard(cardToBeAdd);
    addCardForm.reset();
    closePopups(editCardPopup);
  }

const openProfilePopup = () => {
    openPopups(profilePopup);
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
}

const editProfile = (evt) => {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopups(profilePopup);
}

profileEditButton.addEventListener('click', openProfilePopup);
editProfileForm.addEventListener('submit', editProfile)
cardAddButton.addEventListener('click', () => openPopups(editCardPopup)); 
addCardForm.addEventListener('submit', createCard);
popupCloseButtons.forEach((item) => {
  item.addEventListener('click', closeCurrentPopup);
})
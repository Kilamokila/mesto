const page = document.querySelector('.page');
const profileEditButton = page.querySelector('.profile__edit-button');
const profileName = page.querySelector('.profile__info-name');
const profileDescription = page.querySelector('.profile__info-description');
const popups = page.querySelectorAll('.popup');
const profilePopup = document.getElementById('profile-popup');
const editCardPopup = document.getElementById('edit-card-popup');
const viewCardPopup = document.getElementById('view-card-popup');
const popupCloseButtons = page.querySelectorAll('.popup__container-exit-button');
const formElement = page.querySelector('.popup__form')
const nameInput = page.querySelector('.popup__input_type_name');
const jobInput = page.querySelector('.popup__input_type_description');
const placeInput = page.querySelector('.popup__input_type_place');
const linkInput = page.querySelector('.popup__input_type_link');
const cardCreateButton = page.querySelector('.popup__button_context_create');
const deleteButton = page.querySelector('.elements__delete-button');
const cardAddButton = page.querySelector('.profile__card-add-button');
const cardTemplate = page.querySelector('.elements__card-template');
const elementsSection = page.querySelector('.elements');
const popupFullSizePhoto = page.querySelector('.popup__fullsize-photo');
const popupPhotoTitle = page.querySelector('.popup__photo-title');
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

   const viewCard = (evt) => {
    openViewCardPopup();
    const giveMeAPicture = evt.target.getAttribute("src");
    const givemeAName = evt.target.getAttribute("alt");
    popupFullSizePhoto.setAttribute("src", giveMeAPicture);
    popupPhotoTitle.textContent = givemeAName;
  } 

const addCards = () => {
    for (let i = 0; i < initialCards.length; i ++ ) {
        const newCard = cardTemplate.content.firstElementChild.cloneNode(true);
        const arrayElement = initialCards[i];
        newCard.querySelector('.elements__card-image').setAttribute("src", arrayElement.link);
        newCard.querySelector('.elements__card-image').setAttribute("alt", arrayElement.name);
        newCard.querySelector('.elements__place-name').textContent = arrayElement.name;
        newCard.querySelector('.elements__like-button').addEventListener('click', (evt) => {
          evt.target.closest('.elements__like-button').classList.toggle('elements__like-button_active');
        });
        newCard.querySelector('.elements__delete-button').addEventListener('click', (evt) => {
            evt.target.closest('.element-card').remove();
        });
        newCard.querySelector('.elements__card-image').addEventListener('click', viewCard);  
        elementsSection.appendChild(newCard);
    }}

addCards (initialCards);

const addCard = () => {
  const newCard = cardTemplate.content.firstElementChild.cloneNode(true);
  newCard.querySelector('.elements__card-image').setAttribute("src", linkInput.value);
  newCard.querySelector('.elements__card-image').setAttribute("alt", placeInput.value);
  newCard.querySelector('.elements__place-name').textContent = placeInput.value;
  newCard.querySelector('.elements__like-button').addEventListener('click', (evt) => {
    evt.target.closest('.elements__like-button').classList.toggle('elements__like-button_active');
  });
  newCard.querySelector('.elements__delete-button').addEventListener('click', (evt) => {
      evt.target.closest('.element-card').remove();
  });
  newCard.querySelector('.elements__card-image').addEventListener('click', viewCard);
  elementsSection.prepend(newCard);
  }
  
 const openProfilePopup = () => {
    profilePopup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
}

const openCardAddPopup = () => {
    editCardPopup.classList.add('popup_opened');
} 

const openViewCardPopup = () => {
  viewCardPopup.classList.add('popup_opened');
}

const savePopup = () => {popups.forEach((item) => {
    item.classList.remove('popup_opened')
})}

const closePopup = (evt) => {
    savePopup(evt.target.closest('.popup'))
}

popupCloseButtons.forEach((item) => {
    item.addEventListener('click', closePopup);
})

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    savePopup();
}

const saveCard = () => {
  addCard ();
  linkInput.value = '';
  placeInput.value = ''; 
  savePopup();
} 

profileEditButton.addEventListener('click', openProfilePopup);
cardAddButton.addEventListener('click', openCardAddPopup);
formElement.addEventListener('submit', formSubmitHandler); 
cardCreateButton.addEventListener('click', saveCard);
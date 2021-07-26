let page = document.querySelector('.page');
let profileEditButton = page.querySelector('.profile__edit-button');
let profileName = page.querySelector('.profile__info-name');
let profileDescription = page.querySelector ('.profile__info-description');
let popup = page.querySelector('.popup');
let popupCloseButton = page.querySelector('.popup__container-exit-button');
let formElement = page.querySelector('.popup__profile-form')
let nameInput = page.querySelector('.popup__profile-input_type_name');
let jobInput = page.querySelector('.popup__profile-input_type_description');

let openPopup = function () {
    popup.classList.add('popup_opened')
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
}

let closePopup = function () {popup.classList.remove('popup_opened')};

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup();
}

profileEditButton.addEventListener('click', openPopup);
formElement.addEventListener('submit', formSubmitHandler); 
popupCloseButton.addEventListener('click', closePopup);
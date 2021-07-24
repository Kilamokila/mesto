let page = document.querySelector('.page');
let content = page.querySelector('.content');
let profile = content.querySelector('.profile');
let profileContainer = profile.querySelector('.profile__container');
let profileEditButton = profileContainer.querySelector('.profile__edit-button');
let profileName = profileContainer.querySelector('.profile__info-name');
let profileDescription = profileContainer.querySelector ('.profile__info-description');
let popup = page.querySelector('.popup');
let popupContainer = popup.querySelector('.popup__container');
let popupCloseButton = popupContainer.querySelector('.popup__container-exit-button');
let popupContainerProfileEditor = popupContainer.querySelector('.popup__container-profile-editor');
let formElement = popupContainerProfileEditor.querySelector('.popup__profile-form')
let popupSaveButton = formElement.querySelector('.popup__save-button');
let nameInput = formElement.querySelector('.popup__profile-input_name');
let jobInput = formElement.querySelector('.popup__profile-input_description');

let openPopup = function () {popup.classList.add('popup_opened')};
let closePopup = function () {popup.classList.remove('popup_opened')};

profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    let jobInputValue = jobInput.value;
    let nameInputValue = nameInput.value;
    profileName.textContent = nameInputValue;
    profileDescription.textContent = jobInputValue;
}
formElement.addEventListener('submit', formSubmitHandler); 

let profileEdit = function () {
    openPopup();
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
}
profileEditButton.addEventListener('click', profileEdit);
popupSaveButton.addEventListener('click', closePopup);
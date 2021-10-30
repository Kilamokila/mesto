const page = document.querySelector('.page');
const profilePopup = document.getElementById('profile-popup');
const profileName = page.querySelector('.profile__info-name');
const profileDescription = page.querySelector('.profile__info-description');
const nameInput = page.querySelector('.popup__input_type_name');
const jobInput = page.querySelector('.popup__input_type_description');

export const openPopup = (popup) => {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', escapePopup);
};

export const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', escapePopup);
};

function escapePopup(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
};

export const openProfilePopup = () => {
    openPopup(profilePopup);
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
};

export const editProfile = (evt) => {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(profilePopup);
};
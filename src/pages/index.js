import '../pages/index.css';
import Card from '../components/Card.js';
import Api from '../components/Api';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithSubmit from '../components/PopupWithSubmit';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import {
    validationConfig,
    profileEditButton,
    editProfileForm,
    addCardForm,
    editAvatarForm,
    profileDescription,
    profileName,
    profileAvatar,
    popupImage,
    popupEditProfile,
    popupEditCard,
    popupSubmit,
    popupEditAvatar,
    cardAddButton,
    templateSection,
    editAvatar,
} from '../utils/constants.js'

//экземляр для валидации полей формы добавления карточки
const addCardFormValidator = new FormValidator(validationConfig, addCardForm);
//экземляр для валидации полей формы редактрирования профиля
const editProfileFormValidator = new FormValidator(validationConfig, editProfileForm);
//экземпляр для отображения информации о профиле
const avatarFormValidator = new FormValidator(validationConfig, editAvatarForm);

const userInfo = new UserInfo({
    name: profileName,
    about: profileDescription
});

const viewCard = new PopupWithImage(popupImage);
viewCard.setEventListeners();

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-30/',
    headers: {
        authorization: '11b8a25a-777f-46a7-9549-b5aa8adb4a21',
        'Content-Type': 'application/json',
    }
})

let userID = null;

Promise.all([api.getCardsData(), api.getUserData()])
    .then(([cardsData, userData]) => {
        userID = userData._id;
        userInfo.setUserInfo(userData);
        profileAvatar.setAttribute('src', userData.avatar)
        cardSection.renderItems(cardsData);
    })
    .catch(err => console.log(err));
const popupWithSubmit = new PopupWithSubmit(popupSubmit);
/* Функция принимает объект с данными в виде параметра
и возвращает экземляр карточки с экземпляром попапа, соответствующего 
её ссылке на изображение. Возвращаемая карточка обладает функционалом
отметки лайка, удаления и открытия фото через связанный попап */
const getCard = (data) => {
    const newCard = new Card({
        data: { ...data, currentUserID: userID },
        cardSelector: '.elements__card-template',
        handleCardClick: () => viewCard.open(data),
        handleLikeClick: (newCard) => {
            if (newCard.checkLike()) {
                api.deleteCardLike(newCard.id)
                    .then(cardData => newCard.likeTheCard(cardData.likes))
                    .catch(err => console.log(err));
            } else {
                api.putCardLike(newCard.id)
                    .then(cardData => newCard.likeTheCard(cardData.likes))
                    .catch(err => console.log(err));
            }
        },
        handleDeleteCard: (newCard) => {
            popupWithSubmit.open();
            popupWithSubmit.setActionOfSubmit(() => {
                api.deleteCard(newCard.id)
                    .then(() => newCard.deleteCurrentCard())
                    .catch(err => console.log(err));
                popupWithSubmit.close()
            })
        }
    }).returnNewCard();
    return newCard;
}

//экземпляр вносит карточки в разметку на основе переданных ему данных о ссылках и наименованиях
const cardSection = new Section({
    renderer: (item) => cardSection.addItem(getCard(item)),
}, templateSection)

//функция подключает валидацию доступных форм на странице
const pushValidation = () => {
    addCardFormValidator.enableValidation();
    editProfileFormValidator.enableValidation();
    avatarFormValidator.enableValidation();
};

const popupAvatarForm = new PopupWithForm(
    popupEditAvatar, {
    submitFormCallback: (userAvatarLink) => {
        popupAvatarForm.changeButtonText(true);
        api.patchAvatar(userAvatarLink)
            .then(() => profileAvatar.setAttribute('src', userAvatarLink.avatar))
            .catch(err => console.log(err))
            .finally(() => popupAvatarForm.changeButtonText(false))
    },
    resetValidationFields: () => avatarFormValidator.resetValidationFields()
})

/* экземпляр добавляет новую карточку в разметку 
на основе переданых в поля ввода данных: ссылки и наименования */
const popupCardForm = new PopupWithForm(
    popupEditCard, {
    submitFormCallback: (cardData) => {
        popupCardForm.changeButtonText(true);
        api.postCard(cardData)
            .then((cardData) => cardSection.addItem(getCard(cardData)))
            .catch(err => console.log(err))
            .finally(() => popupCardForm.changeButtonText(false));
        addCardFormValidator.changeButtonState()
    },
    resetValidationFields: () => addCardFormValidator.resetValidationFields()
})

/* экземпляр обновляет информацию о профиле
на основе переданных в поля ввода данных: имени и описания */
const popupProfileForm = new PopupWithForm(
    popupEditProfile, {
    submitFormCallback: (userData) => {
        popupProfileForm.changeButtonText(true);
        userInfo.setUserInfo(userData);
        api.patchUserData(userData)
            .then()
            .catch(err => console.log(err))
            .finally(() => popupProfileForm.changeButtonText(false));
        editProfileFormValidator.changeButtonState();
    },
    resetValidationFields: () => editProfileFormValidator.resetValidationFields()
})

pushValidation();
popupWithSubmit.setEventListeners();
popupCardForm.setEventListeners();
popupProfileForm.setEventListeners();
popupAvatarForm.setEventListeners();
editAvatar.addEventListener('click', () => popupAvatarForm.open());
cardAddButton.addEventListener('click', () => popupCardForm.open());
profileEditButton.addEventListener('click', () => popupProfileForm.open());
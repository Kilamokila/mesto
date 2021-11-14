import '../pages/index.css';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js'
import UserInfo from './UserInfo.js';
import Section from './Section.js';
import {
    validationConfig,
    initialCards,
    profileEditButton,
    editProfileForm,
    addCardForm,
    profileDescription,
    profileName,
    popupImage,
    popupEditProfile,
    popupEditCard,
    cardAddButton,
    templateSection,
} from '../utils/constants.js'

//экземляр для валидации полей формы добавления карточки
const addCardFormValidator = new FormValidator(validationConfig, addCardForm);
//экземляр для валидации полей формы редактрирования профиля
const editProfileFormValidator = new FormValidator(validationConfig, editProfileForm);
//экземпляр для отображения информации о профиле
const userInfo = new UserInfo({
    userNameSelector: profileName,
    userDescriptionSelector: profileDescription
});
userInfo.getUserInfo();

/* Функция принимает объект с данными в виде параметра
и возвращает экземляр карточки с экземпляром попапа, соответствующего 
её ссылке на изображение. Возвращаемая карточка обладает функционалом
отметки лайка, удаления и открытия фото через связанный попап */
const getCard = (data) => {
    const viewCard = new PopupWithImage({ data: data }, popupImage)
    const newCard = new Card({
        data: data,
        cardSelector: '.elements__card-template',
        handleCardClick: () => {
            viewCard.open();
            viewCard.setEventListeners();
        }
    }).returnNewCard();
    return newCard;
}

//экземпляр вносит карточки в разметку на основе переданных ему данных о ссылках и наименованиях
const cardSection = new Section({
    items: initialCards,
    renderer: (item) => cardSection.addItem(getCard(item)),
}, templateSection)

//функция подключает валидацию доступных форм на странице
const pushValidation = () => {
    addCardFormValidator.enableValidation();
    editProfileFormValidator.enableValidation();
};

/* экземпляр добавляет новую карточку в разметку 
на основе переданых в поля ввода данных: ссылки и наименования */
const popupCardForm = new PopupWithForm(
    popupEditCard, {
    submitFormCallback: (cardData) => {
        const cardToBeAdd = getCard(cardData);
        templateSection.prepend(cardToBeAdd);
        addCardFormValidator.changeButtonState();
    },
    form: addCardForm,
    resetValidationFields: () => addCardFormValidator.resetValidationFields()
})

/* экземпляр обновляет информацию о профиле
на основе переданных в поля ввода данных: имени и описания */
const popupProfileForm = new PopupWithForm(
    popupEditProfile, {
    submitFormCallback: (userData) => {
        userInfo.setUserInfo(userData);
        editProfileFormValidator.changeButtonState();
    },
    form: editProfileForm,
    resetValidationFields: () => editProfileFormValidator.resetValidationFields()
})

cardSection.renderItems();
pushValidation();
popupCardForm.setEventListeners();
popupProfileForm.setEventListeners();
cardAddButton.addEventListener('click', () => popupCardForm.open());
profileEditButton.addEventListener('click', () => popupProfileForm.open());
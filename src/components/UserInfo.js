export default class UserInfo {
    constructor({ name, about, avatar }) {
        this._name = name;
        this._about = about;
        this._avatar = avatar;
        this._nameInput = document.querySelector('.popup__input_type_name');
        this._jobInput = document.querySelector('.popup__input_type_description');
    }

    getUserInfo(userData) {
        this._data = {};
        this._data.name = userData.name;
        this._data.about = userData.about;
        this._data.avatar = userData.avatar;
        this._id = userData.id;
        return this._data
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._about.textContent = data.about;
    }

    setUserAvatar(userData) {
        this._avatar.setAttribute('src', userData.avatar);
    }
}
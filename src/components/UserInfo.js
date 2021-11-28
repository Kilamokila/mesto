export default class UserInfo {
    constructor({ name, about }) {
        this._name = name;
        this._about = about;
        this._nameInput = document.querySelector('.popup__input_type_name');
        this._jobInput = document.querySelector('.popup__input_type_description');
    }

    getUserInfo() {
        this._data = {};
        this._data.name = this._name.textContent;
        this._data.about = this._about.textContent;
        return this._data
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._about.textContent = data.about;
        this._nameInput.value = data.name;
        this._jobInput.value = data.about;
    }
}
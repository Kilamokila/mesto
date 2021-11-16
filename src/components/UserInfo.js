export default class UserInfo {
    constructor({ userName, userDescription }) {
        this._userName = userName;
        this._userDescription = userDescription;
        this._nameInput = document.querySelector('.popup__input_type_name');
        this._jobInput = document.querySelector('.popup__input_type_description');
    }

    getUserInfo() {
        this._data = {};
        this._data.userName = this._userName.textContent;
        this._data.description = this._userDescription.textContent;
        return this._data
    }

    setUserInfo(data) {
        this._userName.textContent = data.userName;
        this._userDescription.textContent = data.description;
        this._nameInput.value = data.userName;
        this._jobInput.value = data.description;
    }
}
import { nameInput, jobInput } from '../utils/constants.js';

export default class UserInfo {
    constructor({ userNameSelector, userDescriptionSelector }) {
        this._userNameSelector = userNameSelector;
        this._userDescriptionSelector = userDescriptionSelector;
    }

    getUserInfo() {
        nameInput.value = this._userNameSelector.textContent;
        jobInput.value = this._userDescriptionSelector.textContent;
    }

    setUserInfo(data) {
        this._userNameSelector.textContent = data.userName;
        this._userDescriptionSelector.textContent = data.description;
    }
}
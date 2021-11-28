export default class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _checkRes(res) {
        return res.ok ? res.json() : Promise.reject(`Что-то пошло не так: ${res}`);
    }

    getCardsData() {
        return fetch(`${this._url}cards`, {
            headers: this._headers,
        })
            .then(this._checkRes)
    }

    postCard(cardData) {
        return fetch(`${this._url}cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify(cardData)
        })
            .then(this._checkRes)
    }

    deleteCard(cardId) {
        return fetch(`${this._url}cards/${cardId}`, {
            method: "DELETE",
            headers: this._headers,
        })
            .then(this._checkRes)
    }

    getUserData() {
        return fetch(`${this._url}users/me`, {
            headers: this._headers,
        })
            .then(this._checkRes)
    }

    patchUserData(userData) {
        return fetch(`${this._url}users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify(userData)
        })
            .then(this._checkRes)
    }

    patchAvatar(userAvatarLink) {
        return fetch(`${this._url}users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify(userAvatarLink)
        })
            .then(this._checkRes)
    }

    putCardLike(cardId) {
        return fetch(`${this._url}cards/likes/${cardId}`, {
            method: "PUT",
            headers: this._headers,
        })
            .then(this._checkRes)
    }

    deleteCardLike(cardId) {
        return fetch(`${this._url}cards/likes/${cardId}`, {
            method: "DELETE",
            headers: this._headers,
        })
            .then(this._checkRes)
    }
}
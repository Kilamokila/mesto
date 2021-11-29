(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n,r,o=this,i=e.data,u=e.cardSelector,a=e.handleCardClick,c=e.handleLikeClick,l=e.handleDeleteCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=function(e){o._likes=e,o._toggleLikeState(),o._likeCounter.textContent=o._likes.length},(n="likeTheCard")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._data=i,this.id=i._id,this._likes=i.likes,this._currentUserID=i.currentUserID,this._ownerID=i.owner._id,this._cardSelector=u,this._handleCardClick=a,this._handleLikeClick=c,this._handleDeleteCard=l,this._element=this._returnTemplate(),this._deleteButton=this._element.querySelector(".elements__delete-button"),this._likeButton=this._element.querySelector(".elements__like-button"),this._cardImg=this._element.querySelector(".elements__card-image"),this._likeCounter=this._element.querySelector(".elements__like-counter")}var n,r;return n=t,(r=[{key:"_returnTemplate",value:function(){return document.querySelector(this._cardSelector).content.cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){return e._handleLikeClick(e)})),this._deleteButton.addEventListener("click",(function(){return e._handleDeleteCard(e)})),this._cardImg.addEventListener("click",(function(){return e._handleCardClick(e)}))}},{key:"checkLike",value:function(){var e=this;if(this._likes)return this._likes.some((function(t){return t._id===e._currentUserID}))}},{key:"_toggleLikeState",value:function(){this.checkLike()?this._likeButton.classList.add("elements__like-button_active"):this._likeButton.classList.remove("elements__like-button_active")}},{key:"returnNewCard",value:function(){return this._element.querySelector(".elements__place-name").textContent=this._data.name,this._cardImg.setAttribute("src",this._data.link),this._cardImg.setAttribute("alt",this._data.name),this._ownerID!==this._currentUserID&&this._deleteButton.setAttribute("hidden",""),this._setEventListeners(),this._likes&&(this._likeCounter.textContent=this._likes.length),this._toggleLikeState(),this._element}},{key:"deleteCurrentCard",value:function(){this._element.remove(),this._element=null}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){var n=t.url,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,r;return t=e,(r=[{key:"_checkRes",value:function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e))}},{key:"getCardsData",value:function(){return fetch("".concat(this._url,"cards"),{headers:this._headers}).then(this._checkRes)}},{key:"postCard",value:function(e){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._checkRes)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkRes)}},{key:"getUserData",value:function(){return fetch("".concat(this._url,"users/me"),{headers:this._headers}).then(this._checkRes)}},{key:"patchUserData",value:function(e){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkRes)}},{key:"patchAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkRes)}},{key:"putCardLike",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkRes)}},{key:"deleteCardLike",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkRes)}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._validationConfig=t,this._inputList=Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector)),this._buttonElement=this._formElement.querySelector(this._validationConfig.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._validationConfig.inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._validationConfig.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._validationConfig.inputErrorClass),t.textContent="",t.classList.remove(this._validationConfig.errorClass)}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_toggleButtonState",value:function(){this._formElement.checkValidity()?this._buttonElement.removeAttribute("disabled"):this._buttonElement.setAttribute("disabled",!0)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){e._toggleButtonState(),t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"changeButtonState",value:function(){this._buttonElement.setAttribute("disabled",!0)}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"resetValidationFields",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&o(t.prototype,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__container-exit-button")&&e.close()}))}}])&&u(t.prototype,n),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},s.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function u(e,t){var n,r=t.submitFormCallback,o=t.resetValidationFields;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitFormCallback=r,n._form=n._popup.querySelector(".popup__form"),n._submitButton=n._form.querySelector(".popup__button"),n._inputList=n._form.querySelectorAll(".popup__input"),n.resetValidationFields=o,n._submitTextDefault=n._submitButton.textContent,n}return t=u,(n=[{key:"close",value:function(){s(d(u.prototype),"close",this).call(this),this._form.hasAttribute("name")&&this._form.reset(),this.resetValidationFields()}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"changeButtonText",value:function(e){this._submitButton.textContent=e?"Сохранение...":this._submitTextDefault}},{key:"setEventListeners",value:function(){var e=this;s(d(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitFormCallback(e._getInputValues()),e.close()}))}}])&&l(t.prototype,n),u}(a);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=v(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function g(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupFullSizePhoto=t._popup.querySelector(".popup__fullsize-photo"),t._popupPhotoTitle=t._popup.querySelector(".popup__photo-title"),t}return t=u,(n=[{key:"open",value:function(e){b(E(u.prototype),"open",this).call(this),this._popupFullSizePhoto.setAttribute("src",e.link),this._popupFullSizePhoto.setAttribute("alt",e.name),this._popupPhotoTitle.textContent=e.name}}])&&m(t.prototype,n),u}(a);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=L(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},O.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function P(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t._submitButton=t._form.querySelector(".popup__button"),t}return t=u,(n=[{key:"setActionOfSubmit",value:function(e){this._submitFormCallback=e}},{key:"setEventListeners",value:function(){var e=this;O(I(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitFormCallback(),e.close()}))}}])&&S(t.prototype,n),u}(a);function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t){var n=t.name,r=t.about;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._about=r,this._nameInput=document.querySelector(".popup__input_type_name"),this._jobInput=document.querySelector(".popup__input_type_description")}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._data={},this._data.name=this._name.textContent,this._data.about=this._about.textContent,this._data}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about,this._nameInput.value=e.name,this._jobInput.value=e.about}}])&&T(t.prototype,n),e}();function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&D(t.prototype,n),e}(),x=(document.querySelector(".popup__fullsize-photo"),document.querySelector(".popup__photo-title"),document.querySelector(".profile__info-name")),A=document.querySelector(".profile__info-description"),F=(document.querySelector(".popup__input_type_name"),document.querySelector(".popup__input_type_description"),document.querySelector(".profile__edit-button")),V=document.getElementById("editProfileForm"),U=document.getElementById("addCardForm"),z=document.getElementById("editAvatarForm"),N=(document.getElementById("submitForm"),document.getElementById("view-card-popup")),J=document.getElementById("profile-popup"),H=document.getElementById("edit-card-popup"),M=document.getElementById("submit-popup"),$=document.querySelector(".profile__avatar"),G=document.getElementById("avatar-popup"),K=(document.querySelector(".popup__input_type_place"),document.querySelector(".popup__input_type_link"),document.querySelector(".profile__card-add-button")),Q=document.querySelector(".profile__image-link"),W=document.querySelector(".elements"),X={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error"};function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){ee(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ne=new i(X,U),re=new i(X,V),oe=new i(X,z),ie=new R({name:x,about:A}),ue=new C(N);ue.setEventListeners();var ae=new r({url:"https://mesto.nomoreparties.co/v1/cohort-30/",headers:{authorization:"11b8a25a-777f-46a7-9549-b5aa8adb4a21","Content-Type":"application/json"}}),ce=null;Promise.all([ae.getCardsData(),ae.getUserData()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ce=i._id,ie.setUserInfo(i),$.setAttribute("src",i.avatar),fe.renderItems(o)})).catch((function(e){return console.log(e)}));var le=new B(M),se=function(e){return new t({data:Z(Z({},e),{},{currentUserID:ce}),cardSelector:".elements__card-template",handleCardClick:function(){return ue.open(e)},handleLikeClick:function(e){e.checkLike()?ae.deleteCardLike(e.id).then((function(t){return e.likeTheCard(t.likes)})).catch((function(e){return console.log(e)})):ae.putCardLike(e.id).then((function(t){return e.likeTheCard(t.likes)})).catch((function(e){return console.log(e)}))},handleDeleteCard:function(e){le.open(),le.setActionOfSubmit((function(){ae.deleteCard(e.id).then((function(){return e.deleteCurrentCard(e)})).catch((function(e){return console.log(e)})),le.close()}))}}).returnNewCard()},fe=new q({renderer:function(e){return fe.addItem(se(e))}},W),pe=new _(G,{submitFormCallback:function(e){pe.changeButtonText(!0),ae.patchAvatar(e).then((function(){return $.setAttribute("src",e.avatar)})).catch((function(e){return console.log(e)})).finally((function(){return pe.changeButtonText(!1)}))},resetValidationFields:function(){return oe.resetValidationFields()}}),he=new _(H,{submitFormCallback:function(e){he.changeButtonText(!0),ae.postCard(e).then((function(e){return fe.addItem(se(e))})).catch((function(e){return console.log(e)})).finally((function(){return he.changeButtonText(!1)})),ne.changeButtonState()},resetValidationFields:function(){return ne.resetValidationFields()}}),de=new _(J,{submitFormCallback:function(e){de.changeButtonText(!0),ie.setUserInfo(e),ae.patchUserData(e).then().catch((function(e){return console.log(e)})).finally((function(){return de.changeButtonText(!1)})),re.changeButtonState()},resetValidationFields:function(){return re.resetValidationFields()}});ne.enableValidation(),re.enableValidation(),oe.enableValidation(),le.setEventListeners(),he.setEventListeners(),de.setEventListeners(),pe.setEventListeners(),Q.addEventListener("click",(function(){return pe.open()})),K.addEventListener("click",(function(){return he.open()})),F.addEventListener("click",(function(){return de.open()}))})();
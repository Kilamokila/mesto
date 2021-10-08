const dataForValidation = {
        formSelector: '.popup__form',
        inputSelector: '.popup__input',
        submitButtonSelector: '.popup__button',
        inputErrorClass: 'popup__input_type_error',
        errorClass: 'popup__input-error'
  };

const showInputError = (formElement, inputElement, errorMessage, object) => {// Функция, показывающая сообщение об ошибке
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);// определяем элемент ошибки
    inputElement.classList.add(object.inputErrorClass);// добавляем класс поля, отвечающий за выделение нижней границы
    errorElement.textContent = errorMessage;// добавляем текстовое содержимое об ошибке
    errorElement.classList.add(object.errorClass);// добавляем класс, отвечающий за оформление текста ошибки
};

const hideInputError = (formElement, inputElement, object) => {// Функция, скрывающая сообщение об ошибке
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);// определяем элемент ошибки
    inputElement.classList.remove(object.inputErrorClass); // удаляем класс поля, отвечающий за выделение нижней границы
    errorElement.textContent = '';// очищаем текстовое содержимое сообщения об ошибке
    errorElement.classList.remove(object.errorClass);// удаляем класс, отвечающий за оформление текста ошибки
};

const isValid = (formElement, inputElement, object) => {// Функция, скрывающая или показывающая сообщение об ошибке, в зависимости от валидности поля
    !inputElement.validity.valid ? showInputError(formElement, inputElement, inputElement.validationMessage, object) : hideInputError(formElement, inputElement, object);
};

const hasInvalidInput = (inputList) => {// Функция, проверящая поля ввода на валидность
    return inputList.some((inputElement) => {// "проходимся" по каждому элементу массива и возвращаем "true", если условие выполнено
    return !inputElement.validity.valid;// условие: вернуть "true", если поле ввода не валидно
    })
  };

const toggleButtonState = (inputList, buttonElement) => {// Функция, изменяющая состояние кнопки в зависимости от валидности поля, путём добавления атрибута
    hasInvalidInput(inputList) ? buttonElement.setAttribute('disabled', true) : buttonElement.removeAttribute('disabled');
}

const setEventListeners = (formElement, object) => {// Функция, "навешивающая" слушатели на каждое поле ввода
    const inputList = Array.from(formElement.querySelectorAll(object.inputSelector));// создаём массив из коллекции полей ввода форм
    const buttonElement = formElement.querySelector(object.submitButtonSelector);// находим кнопки
    inputList.forEach((inputElement) => {// "проходимся" по каждому полю ввода созданного массива
      toggleButtonState(inputList, buttonElement);
        inputElement.addEventListener('input', () => {// "навешиваем" слушатели события ввода элементов на каждое поле, которые:
            isValid(formElement, inputElement, object)// 1. проверяют поле на валидность после каждого введенного символа
            toggleButtonState(inputList, buttonElement);// 2. проверяют возможность изменения состояния кнопки, в зависимости от валидности 
        });
    });
    toggleButtonState(inputList, buttonElement);
};

const enableValidation = (object) => {// Функция, подключающая валидацию всех форм на странице
    const formList = Array.from(document.querySelectorAll(object.formSelector)); // создаём массив из коллекции форм
    formList.forEach((formElement) => {// "проходимся" по каждой форме массива
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();// отменяем стандартное поведение при отправке каждой формы массива во избежание перезагрузки страницы
      });
      setEventListeners(formElement, object);// "вешаем" обработчики на каждую форму массива
    });
  };

  enableValidation(dataForValidation);
  
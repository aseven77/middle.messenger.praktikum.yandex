export enum validationInputList {
    login = 'login',
    password = 'password',
    newPassword = 'newPassword',
    oldPassword = 'oldPassword',
    confirmPassword = 'confirm_password',
    firstName = 'first_name',
    secondName = 'second_name',
    phone = 'phone',
    email = 'email',
    displayName = 'display_name',
    message = 'message',
}

type ValidateRule = {
    type: validationInputList | string
    value: string
}

export function validateForm(rules: ValidateRule[]) {
    let errorMessage = { text: "", inputName: "" };
    for (let i = 0; i < rules.length; i++) {

        const { type, value } = rules[i]

        if (type === validationInputList.login) {
            errorMessage.inputName = "login"
            if (value.length === 0) {
                errorMessage.text = "Логин не может быть пустым"
                break
            } else if (value.length < 3) {
                errorMessage.text = "Логин должен содержать от 3 символов"
                break
            } else if (value.length > 20) {
                errorMessage.text = "Логин должен содержать до 20 символов"
                break
            } else if (!value.match(/[a-zA-Zа-я]+/g)) {
                errorMessage.text = "Логин не может содержать только цифры"
                break
            } else if (value.match(/\s/g)) {
                errorMessage.text = "Логин не может содержать пробелы"
                break
            } else if (value.match(/[а-я]/g)) {
                errorMessage.text = "Логин должен содержать только латинские символы"
                break
            }
        }
        if (
            type === validationInputList.password ||
            type === validationInputList.newPassword ||
            type === validationInputList.oldPassword ||
            type === validationInputList.confirmPassword
        ) {
            errorMessage.inputName = `${type}`
            if (value.length === 0) {
                errorMessage.text = "Пароль не может быть пустым"
                break
            } else if (value.length < 7) {
                errorMessage.text = "Пароль должен содержать от 8 символов"
                break
            } else if (value.length > 40) {
                errorMessage.text = "Пароль должен содержать до 40 символов"
                break
            } else if (!value.match(/\d+/g)) {
                errorMessage.text = "Пароль должен содержать хотя бы одну цифру"
                break
            } else if (!value.match(/[A-ZА-Я]+/g)) {
                errorMessage.text = "Пароль должен содержать хотя бы заглавную букву"
                break
            }
        }
        if (type === validationInputList.firstName || type === validationInputList.secondName) {
            errorMessage.inputName = `${type}`
            const nameForText = type === validationInputList.firstName ? "Имя" : "Фамилия"
            if (value.length === 0) {
                errorMessage.text = `${nameForText} не может быть ${nameForText === "Имя" ? "пустым" : "пустой"}`
                break
            } else if (!value.match(/^[A-ZА-Я]/g)) {
                errorMessage.text = "Первая буква должна быть заглавной"
                break
            } else if (value.match(/\d+/g)) {
                errorMessage.text = "Пожалуйста, уберите цифры"
                break
            } else if (value.match(/\s/g)) {
                errorMessage.text = `${nameForText} не может содержать пробелы`
                break
            } else if (!value.match(/^[a-zA-ZА-Яа-я0-9-]{0,}$/g)) {
                errorMessage.text = `${nameForText} не может содержать специальные символы`
                break
            }
        }
        if (type === validationInputList.email) {
            errorMessage.inputName = "email"
            if (value.length === 0) {
                errorMessage.text = "Почта не может быть пустой"
                break
            } else if (value.match(/\s/g)) {
                errorMessage.text = "Почта не может содержать пробелы"
                break
            } else if (value.match(/[а-я]/g)) {
                errorMessage.text = "Почта должен содержать только латинские символы"
                break
            } else if (!value.match(/^[a-zA-Z0-9-_@.]{0,}$/g)) {
                errorMessage.text = "Почта не должна содержать специальные символы"
                break
            } else if (!value.match(/[@]/g)) {
                errorMessage.text = "В почте должен быть символ @"
                break
            } else if (!value.match(/[.]/g)) {
                errorMessage.text = "В почте должна быть точка"
                break
            } else if (value.match(/[.]/g) && !value.match(/\w+[.]\w+/g)) {
                errorMessage.text = "Перед точкой и после нее должны быть символы "
                break
            }
        }
        if (type === validationInputList.phone) {
            errorMessage.inputName = "phone"
            if (value.length === 0) {
                errorMessage.text = "Номер телефона не может быть пустым"
                break
            } else if (value.match(/\s/g)) {
                errorMessage.text = "Номер телефона не может содержать пробелы"
                break
            } else if (value.match(/[A-Za-zА-Яа-я]+/g)) {
                errorMessage.text = "Номер телефона не может содержать буквы"
                break
            } else if (!value.match(/^[+]/g)) {
                errorMessage.text = "Номер телефона должен начинаться с плюса"
                break
            } else if (value.length < 10) {
                errorMessage.text = "Номер телефона должен содержать от 10 символов"
                break
            } else if (value.length > 15) {
                errorMessage.text = "Номер телефона должен содержать до 15 символов"
                break
            }
        }
        if (type === validationInputList.displayName) {
            errorMessage.inputName = "display_name"
            if (value.length === 0) {
                errorMessage.text = "Имя в чате не может быть пустым"
                break
            }
        }

        if (type === validationInputList.message) {
            errorMessage.inputName = "message"
            if (value.length === 0) {
                errorMessage.text = "Сообщение не должно быть пустым"
                break
            }
        }


    }

    return errorMessage
}
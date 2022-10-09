import { log } from "console";
import Block from '../../core/Block';
import login from '../login';
import { validationInputList, validateForm } from '../../helpers/validation';
export class Registration extends Block {


    constructor() {
        super()
        this.setProps({
            loginValue: "",
            emailValue: "",
            passwordValue: "",
            firstNameValue: "",
            secondNameValue: "",
            phoneValue: "",
            checkPasswordValue: "",
            onInput: (e: FocusEvent) => {

                const inputEl = e.target as HTMLInputElement


                const errorMessage = validateForm([{ type: inputEl.name, value: inputEl.value }]);

                if (!errorMessage?.text) {
                    inputEl.nextElementSibling.textContent = ""
                }

                inputEl.nextElementSibling.textContent = errorMessage?.text

            },
            onLoginLink: () => {
                window.currentPage.page = login
            },
            onSubmitForm: () => {

                const login = this.element?.querySelector("input[name='login']") as HTMLInputElement
                const first_name = this.element?.querySelector("input[name='first_name']") as HTMLInputElement
                const second_name = this.element?.querySelector("input[name='second_name']") as HTMLInputElement
                const email = this.element?.querySelector("input[name='email']") as HTMLInputElement
                const phone = this.element?.querySelector("input[name='phone']") as HTMLInputElement
                const password = this.element?.querySelector("input[name='password']") as HTMLInputElement
                const confirm_password = this.element?.querySelector("input[name='confirm_password']") as HTMLInputElement

                const errorMessage = validateForm([
                    { type: validationInputList.login, value: login.value },
                    { type: validationInputList.firstName, value: first_name.value },
                    { type: validationInputList.secondName, value: second_name.value },
                    { type: validationInputList.email, value: email.value },
                    { type: validationInputList.phone, value: phone.value },
                    { type: validationInputList.password, value: password.value },
                    { type: validationInputList.confirmPassword, value: confirm_password.value }
                ])


                if (!errorMessage.text) {

                    if (password.value !== confirm_password.value) {
                        alert('Пароли не совпадают')
                    }

                    else {

                        this.setProps({
                            loginValue: login.value,
                            passwordValue: password.value,
                            firstNameValue: first_name.value,
                            secondNameValue: second_name.value,
                            emailValue: email.value,
                            phoneValue: phone.value,
                            passwordValue: password.value,
                            checkPasswordValue: confirm_password.value
                        })

                        console.log(
                            {
                                login: login.value,
                                first_name: first_name.value,
                                second_name: second_name.value,
                                email: email.value,
                                phone: phone.value,
                                password: password.value,
                                confirmPassword: confirm_password.value,
                            })
                    }

                }
            },
        })
    }

    render() {
        // language=hbs
        return `
        <div class="card w-100">
            <div class="title">Registration</div>
            <form class="form-chat" action="">
                {{{Input 
                    onInput=onInput 
                    type="text" 
                    inputName="login" 
                    title="Login"
                }}}

                {{{Input 
                    onInput=onInput 
                    type="text" 
                    inputName="first_name" 
                    title="First name"
                }}}

                {{{Input 
                    onInput=onInput 
                    type="text" 
                    inputName="second_name" 
                    title="Second name"
                }}}

                {{{Input 
                    onInput=onInput 
                    type="email" 
                    inputName="email" 
                    title="E-mail"
                }}}

                {{{Input 
                    onInput=onInput 
                    type="tel" 
                    inputName="phone" 
                    title="Phone"
                }}}

                {{{Input 
                    onInput=onInput 
                    type="password" 
                    inputName="password" 
                    title="Password"
                }}}

                {{{Input 
                    onInput=onInput 
                    type="password" 
                    inputName="confirm_password" 
                    title="Confirm password"
                }}}
                
                {{{Button 
                    text="Login" 
                    classList="form-chat__btn d-block" 
                    onClick=onSubmitForm
                }}}
            </form>
            <div class="text-center">
                <div class="mb-1">
                Forgot your password?
                {{{Button text="Sign in" classList="button--plain" onClick=onLoginLink}}}
                </div>
            </div>
        </div>
    `;
    }
}
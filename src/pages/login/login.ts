import Block from '../../core/Block';
import passwordRecovery from '../passwordRecovery';
import Registration from '../registration';
import { validationInputList, validateForm } from '../../helpers/validation';


export class Login extends Block {
    constructor() {
        super()
        this.setProps({
            loginValue: "",
            passwordValue: "",
            onInput: (e: FocusEvent) => {

                const inputEl = e.target as HTMLInputElement
                const nextElSibling = inputEl.nextElementSibling as HTMLInputElement


                const errorMessage = validateForm([{ type: inputEl.name, value: inputEl.value }]);

                if (!errorMessage?.text) {
                    nextElSibling.textContent = ""
                }

                nextElSibling.textContent = errorMessage?.text

            },
            onRegistrationLink: () => {
                window.currentPage.page = Registration
            },

            onRestorePasswordLink: () => {
                window.currentPage.page = passwordRecovery
            },

            onSubmitForm: () => {

                const login = this.element?.querySelector("input[name='login']") as HTMLInputElement
                const password = this.element?.querySelector("input[name='password']") as HTMLInputElement

                const errorMessage = validateForm([
                    { type: validationInputList.login, value: login.value },
                    { type: validationInputList.password, value: password.value },
                ])

                if (!errorMessage.text) {
                    this.setProps({
                        loginValue: login.value,
                        passwordValue: password.value,
                    })

                    console.log({ login: login.value, password: password.value })
                }
            },
        })
    }
    render() {
        // language=hbs
        return `
    <div class="card w-100">
        <div class="title">Authorization</div>
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
                inputName="password" 
                title="Password"
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
                {{{Button text="Restore password" classList="button--plain" onClick=onRestorePasswordLink}}}
            </div>
            <div class="mb-1">
                New to my Chat?
                {{{Button text="Create an account" classList="button--plain" onClick=onRegistrationLink}}}
            
            </div>
        </div>
    </div>
    `;
    }
}

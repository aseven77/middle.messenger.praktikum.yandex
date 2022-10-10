import { log } from "console";
import Block from '../../core/Block';
import passwordRecovery from "../passwordRecovery";
import { validationInputList, validateForm } from '../../helpers/validation';

export class PasswordChange extends Block {
    constructor() {
        super()
        this.setProps({
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",

            onInput: (e: FocusEvent) => {

                const inputEl = e.target as HTMLInputElement


                const errorMessage = validateForm([{ type: inputEl.name, value: inputEl.value }]);

                if (!errorMessage?.text) {
                    inputEl.nextElementSibling.textContent = ""
                }

                inputEl.nextElementSibling.textContent = errorMessage?.text

            },

            onPasswordRecoveryLink: () => {
                window.currentPage.page = passwordRecovery
            },
            onSubmitForm: () => {


                const oldPassword = this.element?.querySelector("input[name='oldPassword']") as HTMLInputElement
                const newPassword = this.element?.querySelector("input[name='newPassword']") as HTMLInputElement
                const confirmPassword = this.element?.querySelector("input[name='confirmPassword']") as HTMLInputElement

                const errorMessage = validateForm([
                    { type: validationInputList.newPassword, value: newPassword.value },
                    { type: validationInputList.oldPassword, value: oldPassword.value },
                    { type: validationInputList.confirmPassword, value: confirmPassword.value }
                ])




                if (!errorMessage.text) {

                    if (
                        oldPassword.value === newPassword.value && newPassword.value === confirmPassword.value

                    ) {
                        this.setProps({
                            oldPassword: oldPassword.value,
                            newPassword: newPassword.value,
                            confirmPassword: confirmPassword.value
                        })

                        console.log(
                            {
                                oldPassword: oldPassword.value,
                                newPassword: newPassword.value,
                                confirmPassword: confirmPassword.value
                            })

                    }

                    else {

                        alert('Пароли не совпадают')
                    }

                }
            },
        })
    }
    render() {
        // language=hbs
        return `
        <div class="card w-100">
            <div class="title">Password change </div>
            <form class="form-chat" action="">
                {{{Input 
                    type="password" 
                    inputName="oldPassword" 
                    title="Old password"
                    onInput=onInput
                    value="Azamat123ik"
                }}}
                {{{Input 
                    type="password" 
                    inputName="newPassword" 
                    title="New password"
                    onInput=onInput 
                    value="Azamat123ik"
                }}}
                {{{Input 
                    type="password" 
                    inputName="confirmPassword" 
                    title="Confirm password"
                    onInput=onInput 
                    value="Azamat123i2"
                }}}
                {{{Button 
                    text="Save" 
                    classList="form-chat__btn d-block"
                    onClick=onSubmitForm
                }}}
            </form>
            <div class="text-center">
                <div class="mb-1">
                Forgot your password? 
                {{{Button text="Restore password." classList="button--plain" onClick=onPasswordRecoveryLink}}}
                </div>
            </div>
        </div>
    `;
    }
}
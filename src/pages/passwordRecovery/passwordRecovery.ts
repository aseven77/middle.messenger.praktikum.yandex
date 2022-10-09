import Block from '../../core/Block';
import { validationInputList, validateForm } from '../../helpers/validation';

export class PasswordRecovery extends Block {
    constructor() {
        super()
        this.setProps({
            email: "",

            onInput: (e: FocusEvent) => {

                const inputEl = e.target as HTMLInputElement


                const errorMessage = validateForm([{ type: inputEl.name, value: inputEl.value }]);

                if (!errorMessage?.text) {
                    inputEl.nextElementSibling.textContent = ""
                }

                inputEl.nextElementSibling.textContent = errorMessage?.text

            },

            onSubmitForm: () => {


                const email = this.element?.querySelector("input[name='email']") as HTMLInputElement

                const errorMessage = validateForm([
                    { type: validationInputList.email, value: email.value }
                ])




                if (!errorMessage.text) {

                    this.setProps({
                        email: email.value
                    })

                    console.log(
                        {
                            email: email.value
                        })


                }
            },
        })
    }
    render() {
        // language=hbs
        return `
        <div class="card w-100">
            <div class="title">Restore password</div>
            <form class="form-chat" action="">
                {{{Input type="email" inputName="email" title="E-mail" onInput=onInput}}}
                {{{Button 
                    text="Restote" 
                    classList="form-chat__btn d-block"
                    onClick=onSubmitForm
                }}}
            </form>
        </div>
    `;
    }
}
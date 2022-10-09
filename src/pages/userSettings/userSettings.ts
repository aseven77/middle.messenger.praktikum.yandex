import { log } from "console";
import Block from '../../core/Block';
import passwordChange from "../passwordChange";
import { validationInputList, validateForm } from '../../helpers/validation';

export class userSettings extends Block {
    constructor() {
        super()
        this.setProps({
            loginValue: "",
            emailValue: "",
            firstNameValue: "",
            secondNameValue: "",
            onInput: (e: FocusEvent) => {

                const inputEl = e.target as HTMLInputElement


                const errorMessage = validateForm([{ type: inputEl.name, value: inputEl.value }]);

                if (!errorMessage?.text) {
                    inputEl.nextElementSibling.textContent = ""
                }

                inputEl.nextElementSibling.textContent = errorMessage?.text

            },
            onSubmitForm: () => {

                const login = this.element?.querySelector("input[name='login']") as HTMLInputElement
                const first_name = this.element?.querySelector("input[name='first_name']") as HTMLInputElement
                const second_name = this.element?.querySelector("input[name='second_name']") as HTMLInputElement
                const email = this.element?.querySelector("input[name='email']") as HTMLInputElement


                const errorMessage = validateForm([
                    { type: validationInputList.login, value: login.value },
                    { type: validationInputList.firstName, value: first_name.value },
                    { type: validationInputList.secondName, value: second_name.value },
                    { type: validationInputList.email, value: email.value },
                ])


                if (!errorMessage.text) {
                    this.setProps({
                        loginValue: login.value,
                        firstNameValue: first_name.value,
                        secondNameValue: second_name.value,
                        emailValue: email.value,

                    })

                    console.log(
                        {
                            login: login.value,
                            first_name: first_name.value,
                            second_name: second_name.value,
                            email: email.value
                        })

                }
            },


            onPasswordChangeLink: () => {
                window.currentPage.page = passwordChange
            }
        })
    }

    render() {
        // language=hbs
        return `
        <div class="card w-100">
            <div class="title">Registration</div>
            <form action="" class="form-chat">
            <div class="title">a.sharafutdinov</div>
            <label class="avatar">
                <img src="https://peppy-cendol-4e4544.netlify.app/avatar.26527edb.png" class="avatar__picture">
                <input type="file" name="avatar" class="avatar__control">
                <div class="avatar__edit"> </div>
            </label>
            <div class="text-center">
            {{{Input 
                type="text" 
                inputName="login" 
                title="Login" 
                value="a.sharafutdinov"
                onInput=onInput 
            }}}
            {{{Input 
                onInput=onInput 
                type="text" 
                inputName="first_name" 
                title="First name"
                value="Азамат"
            }}}
            {{{Input 
                type="text" 
                inputName="second_name" 
                title="Second name" 
                value="Шарафутдинов"
                onInput=onInput 
            }}}
            {{{Input 
                type="email" 
                inputName="email" 
                title="E-mail" 
                value="info-raisart@yandex.ru"
                onInput=onInput 
            
            }}}
            {{{Button 
                text="Save" 
                classList="form-chat__btn d-block" 
                onClick=onSubmitForm
            }}}

           
            
            </div>
    
        </form>
            <div class="text-center">
                <div class="mb-1">
            
                {{{Button text="Create password" classList="button--plain" onClick=onPasswordChangeLink}}}
                </div>
            </div>
        </div>
    `;
    }
}
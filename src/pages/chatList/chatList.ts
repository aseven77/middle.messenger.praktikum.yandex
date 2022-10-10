
import Block from '../../core/Block';
import { validationInputList, validateForm } from '../../helpers/validation';

import './index.scss';

import * as avatar from '../../img/avatar.png';

export class ChatList extends Block {
    constructor() {
        super()
        this.setProps({
            loginValue: "",
            passwordValue: "",
            onInput: (e: FocusEvent) => {

                const inputEl = e.target as HTMLInputElement


                const errorMessage = validateForm([{ type: inputEl.name, value: inputEl.value }]);

                if (!errorMessage?.text) {
                    inputEl.nextElementSibling.textContent = ""
                }

                inputEl.nextElementSibling.textContent = errorMessage?.text

            },
            onSubmitForm: () => {

                const message = this.element?.querySelector("[name='message']") as HTMLInputElement


                const errorMessage = validateForm([
                    { type: validationInputList.message, value: message.value },
                ])

                if (!errorMessage.text) {
                    this.setProps({
                        message: message.value
                    })

                    console.log({ message: message.value })
                }
            },
        })
    }
    render() {

        // language=hbs
        return `
        <div class="chat">
        <div class="chat-left">
            <div class="chat__header">
                <a href="#" class="chat-profile">
                    <div class="chat-profile__img">
                        <img src="${avatar}" alt="{{name}}"/>
                    </div>
                    <div class="chat-profile__name">Шарафутдинов Азамат</div>
                </a>
                <a href="#" class="exit-profile">Exit</a>
            </div>
            <div class="search">
                <input type="text" placeholder="Search" class="search__control">
            </div>
            <ul class="chat-list">
                Чаты
            </ul>
    
        </div>
        <div class="chat-right">
            <div class="conversation-header">
                <div class="conversation-header__avatar">
                    <img src="${avatar}" />
                </div> 
                <div class="conversation-header__name">
                    Иванов Иван
                </div> 
                <div class="conversation-setting">
                    <div class="conversation-setting__button">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div> 
                    <ul class="setting-list conversation-setting__list">
                        <li class="setting-list__item">
                            <a href="#" class="setting-list__link">
                                Add to room
                            </a>
                        </li>
                        <li class="setting-list__item">
                            <a href="#" class="setting-list__link">
                                Setting chat
                            </a>
                        </li>
                        <li class="setting-list__item">
                            <a href="#" class="setting-list__link">
                                Clear chat
                            </a>
                        </li>
                        <li class="setting-list__item">
                            <a href="#" class="setting-list__link">
                                Delete chat
                            </a>
                        </li>
                    </ul>
                </div> 
            </div>
            <div class="message-wrapper">
                <div class="message-list">
                    <div class="message-in">
                        <div class="msg-container">

                            <div class="message-main">
                                Привет. Как дела?
                            </div>
                        </div>
                    </div>
                    <div class="message-out">
                        <div class="msg-container">

                            <div class="message-main">
                                Привет. Все хорошо. Ты как?
                            </div>
                        </div>
                    </div>
                    <div class="message-in">
                        <div class="msg-container">

                            <div class="message-main">
                                Вполне не плохо, слушай вопрос такой. Когда там первый спринт сдавать?
                            </div>
                        </div>
                    </div>
                    <div class="message-out">
                        <div class="msg-container">
                            <div class="message-main">
                            Сегодня)
                            </div>
                        </div>
                    </div>
                    <div class="message-in">
                        <div class="msg-container">
                            <div class="message-main">
                                Wtf?)
                            </div>
                        </div>
                    </div>
                </div>
                <div class="compose-box">
                    <form class="compose-form">
                        {{{Textarea  name="message" title="E-mail" onInput=onInput}}}
                        {{{Button text="Send" onClick=onSubmitForm}}}
                    </form>
                </div>
            </div>
    
        </div>
    </div>

    `;
    }
}
export default `
<div class="chat">
    <div class="chat-left">
        <div class="chat__header">
            <a href="#" class="chat-profile">
                <div class="chat-profile__img">
                    <img src="{{img}}" />
                </div>
                <div class="chat-profile__name">{{name}}</div>
            </a>
            <a href="#" class="exit-profile">Exit</a>
        </div>
        <div class="search">
            <input type="text" placeholder="Search" class="search__control">
        </div>
        <ul class="chat-list">
        {{#each chatItems}}
            <li class="chat-list__item">
                {{> chat-item }}
            </li>
        {{/each}}
        </ul>

    </div>
    <div class="chat-right">
        <div class="conversation-header">
            <div class="conversation-header__avatar">
                <img src="{{img}}" />
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
                        <div class="tail-in">
                            <svg viewBox="0 0 8 13" width="8" height="13" class=""><path opacity=".13" fill="#0000000" d="M1.533 3.568 8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path><path fill="#ffffff" d="M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path></svg>
                        </div>
                        <div class="message-main">
                            Привет. Как дела?
                        </div>
                    </div>
                </div>
                <div class="message-out">
                    <div class="msg-container">
                        <div class="tail-in">
                            <svg viewBox="0 0 8 13" width="8" height="13" class=""><path opacity=".13" fill="#0000000" d="M1.533 3.568 8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path><path fill="#ffffff" d="M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path></svg>
                        </div>
                        <div class="message-main">
                            Привет. Все хорошо. Ты как?
                        </div>
                    </div>
                </div>
                <div class="message-in">
                    <div class="msg-container">
                        <div class="tail-in">
                            <svg viewBox="0 0 8 13" width="8" height="13" class=""><path opacity=".13" fill="#0000000" d="M1.533 3.568 8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path><path fill="#ffffff" d="M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path></svg>
                        </div>
                        <div class="message-main">
                            Вполне не плохо, слушай вопрос такой. Когда там первый спринт сдавать?
                        </div>
                    </div>
                </div>
                <div class="message-out">
                    <div class="msg-container">
                        <div class="tail-in">
                            <svg viewBox="0 0 8 13" width="8" height="13" class=""><path opacity=".13" fill="#0000000" d="M1.533 3.568 8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path><path fill="#ffffff" d="M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path></svg>
                        </div>
                        <div class="message-main">
                        Сегодня)
                        </div>
                    </div>
                </div>
                <div class="message-in">
                    <div class="msg-container">
                        <div class="tail-in">
                            <svg viewBox="0 0 8 13" width="8" height="13" class=""><path opacity=".13" fill="#0000000" d="M1.533 3.568 8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path><path fill="#ffffff" d="M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path></svg>
                        </div>
                        <div class="message-main">
                            Wtf?)
                        </div>
                    </div>
                </div>
            </div>
            <div class="compose-box">
                <form class="compose-form">
                    <textarea name="message" placeholder="Enter your message"></textarea>
                    <button class="button">
                        Send
                    </button>
                </form>
            </div>
        </div>

    </div>
</div>
`

import hbs from "handlebars";

const template = `
    <div class="chat-item">
        <div class="chat-item__avatar">
            <img src="{{picture}}" alt="{{name}}" />
        </div>
        <div class="chat-item__info">
            <div class="chat-item__name">
                {{name}}
            </div>
            <div class="chat-item__message">
                {{message}}
            </div>
        </div>

        <div class="chat-item__count-new-message"> {{countMessage}}</div>
        <time class="chat-item__time">{{time}}</time>
    </div>
`

hbs.registerPartial("chat-item", template)
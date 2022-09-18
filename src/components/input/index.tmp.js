import hbs from "handlebars";

const template = `
    <label class="input">
        <span class="input__label">{{title}}</span>
        <input type="{{type}}" class="input__control" name="{{inputName}}" value="{{value}}">
    </label>
`

hbs.registerPartial("input", template)
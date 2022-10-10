import Block from '../../core/Block';

import { validationInputList, validateForm } from '../../helpers/validation';

import './index.scss';

interface InputProps {
    onChange?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    type?: 'text' | 'password' | 'email' | 'phone';
    placeholder?: string;
    value?: string;
    error?: string;
    title?: string;
    inputName?: string;
    errorRef?: string;

}

export class Input extends Block {

    static componentName = "Input";

    constructor({ onInput, onFocus, onBlur, ...props }: InputProps) {
        super({ ...props, events: { input: onInput, focus: onFocus, blur: onBlur } })
    }

    protected render(): string {
        // language=hbs
        return `
      <label class="input">
        <span class="input__label">{{title}}</span>
        <input type="{{type}}" class="input__control" name="{{inputName}}" value="{{value}}">
        {{{Error className=errorClassName ref=errorRef text=error}}}
    </label>
    `
    }
}

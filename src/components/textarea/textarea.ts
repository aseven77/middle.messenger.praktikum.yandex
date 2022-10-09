import Block from '../../core/Block';

import { validationInputList, validateForm } from '../../helpers/validation';



interface InputProps {
    onChange?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    type?: 'text' | 'password' | 'email' | 'phone';
    placeholder?: string;
    value?: string;
    error?: string;
    title?: string;
    name?: string;
    errorRef?: string;

}

export class Textarea extends Block {

    constructor({ onInput, onFocus, onBlur, ...props }: InputProps) {
        super({ ...props, events: { input: onInput, focus: onFocus, blur: onBlur } })
    }

    protected render(): string {
        // language=hbs
        return `
        <div class="">
        <textarea name="{{name}}" placeholder="Enter your message" value="{{value}}"></textarea>
        {{{Error className=errorClassName ref=errorRef text=error}}}
        </div>
    `
    }
}

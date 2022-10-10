import Block from '../../core/Block';

import './index.scss';

interface ButtonProps {
    text: string;
    onClick: () => void;
    classList: string
}

export class Button extends Block {
    static componentName = "Button";

    constructor({ text, classList, onClick }: ButtonProps) {
        super({ text, classList, events: { click: onClick } });
    }

    protected render(): string {
        // language=hbs
        return `
    
        <button class="button {{classList}}" type="button">{{text}}</button>

    `;
    }
}

import Block from '../../core/Block'
import './index.scss';

interface ErrorProps {
    text?: string
    className?: string
}

export class Error extends Block {
    static componentName = "Error"
    constructor(props: ErrorProps) {
        super(props)
    }
    protected render(): string {
        // language=hbs
        return `
      <div class="error">{{text}}</div>
    `
    }
}
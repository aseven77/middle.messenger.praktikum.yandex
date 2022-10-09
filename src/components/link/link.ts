import Block from '../../core/Block';

import './index.scss';

interface LinkProps {
    text: string;
    to: string;
    onClick: string
}

export class Link extends Block {
    constructor(props: LinkProps) {
        const onClick = (e: MouseEvent) => {
            // const router = new Router();
            // router.go(this.props.to);

            console.log(13);

            e.preventDefault();
        }

        super({ ...props, events: { click: onClick } });
    }

    render() {
        // language=hbs
        return `<a class="link" href="{{to}}">{{text}}</a>`;
    }
}
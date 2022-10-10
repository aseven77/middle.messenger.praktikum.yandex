require('babel-core/register');
import { renderDOM, registerComponent } from './core';
import './pages/404/index.scss';
import ChatList from './pages/chatList';

import "./style/index.scss";

import Button from './components/button';
import Link from './components/link';
import Input from './components/input';
import Error from "./components/error";
import Textarea from "./components/textarea";

registerComponent(Button);
registerComponent(Link);
registerComponent(Input);
registerComponent(Textarea);
registerComponent(Error);

document.addEventListener('DOMContentLoaded', () => {
    renderDOM(new ChatList());
});


window.currentPage = new Proxy(
    { page: "ChatList" },
    {
        get(target: any, prop) {
            const value: any = target[prop]
            return typeof value === 'function' ? value.bind(target) : value;

        },

        set(target, prop, value) {
            target[prop] = value
            renderDOM(new value())
            return true
        }

    }
)
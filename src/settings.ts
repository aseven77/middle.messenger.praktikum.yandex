require('babel-core/register');
import { renderDOM, registerComponent } from './core';
import './pages/404/index.scss';
import userSettings from './pages/userSettings';

import "./style/index.scss";

import Button from './components/button';
import Link from './components/link';
import Input from './components/input';
import Error from "./components/error";

registerComponent(Button);
registerComponent(Link);
registerComponent(Input);
registerComponent(Error);

document.addEventListener('DOMContentLoaded', () => {
    renderDOM(new userSettings());
});


window.currentPage = new Proxy(
    { page: "userSettings" },
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
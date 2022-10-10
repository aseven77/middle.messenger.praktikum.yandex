require('babel-core/register');
import { renderDOM } from './core';
import './pages/404/index.scss';
import s404 from './pages/404';

import "./style/index.scss";



document.addEventListener('DOMContentLoaded', () => {
    renderDOM(new s404());
});


window.currentPage = new Proxy(
    { page: "s404" },
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
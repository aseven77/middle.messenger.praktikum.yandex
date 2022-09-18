import hbs from "handlebars";
import formTpl from "./index.tmp";
import "../../components/chat-item/index.tmp";
import avatar from "./avatar.png";

const data = {
    name: "Азамат Шарафутдинов",
    img: avatar,
    chatItems: [
        {
            picture: avatar,
            name: "Комната 1",
            message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate possimus nemo nisi reprehenderit excepturi delectus dolorum harum debitis reiciendis in? Dicta porro mollitia placeat soluta quasi ipsum dolor iure nulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate possimus nemo nisi reprehenderit excepturi delectus dolorum harum debitis reiciendis in? Dictaporro mollitia placeat soluta quasi ipsum dolor iure nulla.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate possimus nemo nisi reprehenderit excepturi delectus dolorum harum debitis reiciendis in? Dictaporro mollitia placeat soluta quasi ipsum dolor iure nulla.",
            time: "12:00",
            countMessage: 2
        },
        {
            picture: avatar,
            name: "Азамат Шарафутдинов",
            message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate possimus nemo nisi reprehenderit excepturi delectus dolorum harum debitis reiciendis in? Dicta porro mollitia placeat soluta quasi ipsum dolor iure nulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate possimus nemo nisi reprehenderit excepturi delectus dolorum harum debitis reiciendis in? Dictaporro mollitia placeat soluta quasi ipsum dolor iure nulla.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate possimus nemo nisi reprehenderit excepturi delectus dolorum harum debitis reiciendis in? Dictaporro mollitia placeat soluta quasi ipsum dolor iure nulla.",
            time: "12:00",
            countMessage: 2
        },
        {
            picture: avatar,
            name: "Азамат Шарафутдинов",
            message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate possimus nemo nisi reprehenderit excepturi delectus dolorum harum debitis reiciendis in? Dicta porro mollitia placeat soluta quasi ipsum dolor iure nulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate possimus nemo nisi reprehenderit excepturi delectus dolorum harum debitis reiciendis in? Dictaporro mollitia placeat soluta quasi ipsum dolor iure nulla.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate possimus nemo nisi reprehenderit excepturi delectus dolorum harum debitis reiciendis in? Dictaporro mollitia placeat soluta quasi ipsum dolor iure nulla.",
            time: "12:00",
            countMessage: 2
        },
        {
            picture: avatar,
            name: "Азамат Шарафутдинов",
            message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate possimus nemo nisi reprehenderit excepturi delectus dolorum harum debitis reiciendis in? Dicta porro mollitia placeat soluta quasi ipsum dolor iure nulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate possimus nemo nisi reprehenderit excepturi delectus dolorum harum debitis reiciendis in? Dictaporro mollitia placeat soluta quasi ipsum dolor iure nulla.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate possimus nemo nisi reprehenderit excepturi delectus dolorum harum debitis reiciendis in? Dictaporro mollitia placeat soluta quasi ipsum dolor iure nulla.",
            time: "12:00",
            countMessage: 2
        },
        {
            picture: avatar,
            name: "Азамат Шарафутдинов",
            message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate possimus nemo nisi reprehenderit excepturi delectus dolorum harum debitis reiciendis in? Dicta porro mollitia placeat soluta quasi ipsum dolor iure nulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate possimus nemo nisi reprehenderit excepturi delectus dolorum harum debitis reiciendis in? Dictaporro mollitia placeat soluta quasi ipsum dolor iure nulla.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate possimus nemo nisi reprehenderit excepturi delectus dolorum harum debitis reiciendis in? Dictaporro mollitia placeat soluta quasi ipsum dolor iure nulla.",
            time: "12:00",
            countMessage: 2
        },
        {
            picture: avatar,
            name: "Азамат Шарафутдинов",
            message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate possimus nemo nisi reprehenderit excepturi delectus dolorum harum debitis reiciendis in? Dicta porro mollitia placeat soluta quasi ipsum dolor iure nulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate possimus nemo nisi reprehenderit excepturi delectus dolorum harum debitis reiciendis in? Dictaporro mollitia placeat soluta quasi ipsum dolor iure nulla.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate possimus nemo nisi reprehenderit excepturi delectus dolorum harum debitis reiciendis in? Dictaporro mollitia placeat soluta quasi ipsum dolor iure nulla.",
            time: "12:00",
            countMessage: 2
        },
        {
            picture: avatar,
            name: "Азамат Шарафутдинов",
            message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate possimus nemo nisi reprehenderit excepturi delectus dolorum harum debitis reiciendis in? Dicta porro mollitia placeat soluta quasi ipsum dolor iure nulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate possimus nemo nisi reprehenderit excepturi delectus dolorum harum debitis reiciendis in? Dictaporro mollitia placeat soluta quasi ipsum dolor iure nulla.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate possimus nemo nisi reprehenderit excepturi delectus dolorum harum debitis reiciendis in? Dictaporro mollitia placeat soluta quasi ipsum dolor iure nulla.",
            time: "12:00",
            countMessage: 2
        }
    ]
}

const template = hbs.compile(formTpl);
const html = template(data)

const rootNode = document.getElementById("root");

rootNode.innerHTML = html
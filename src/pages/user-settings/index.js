import hbs from "handlebars";
import registrationTmp from "./index.tmp";
import "../../components/input/index.tmp";
import avatar from "./avatar.png";

const data = {
    title: "a.sharafutdinov",
    img: avatar,
    inputs: [
        {
            title: "Login",
            type: "text",
            inputName: "login",
            value: "a.sharafutdinov"
        },
        {
            title: "First name",
            type: "text",
            inputName: "first_name",
            value: "Азамат"
        },
        {
            title: "Second name",
            type: "text",
            inputName: "second_name",
            value: "Шарафутдинов"
        },
        {
            title: "E-mail",
            type: "email",
            inputName: "email",
            value: "info-raisart@yandex.ru"
        }
    ]
}

const template = hbs.compile(registrationTmp);
const html = template(data)

const rootNode = document.getElementById("root");

rootNode.innerHTML = html
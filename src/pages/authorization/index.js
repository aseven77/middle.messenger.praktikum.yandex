import hbs from "handlebars";
import formTpl from "./index.tmp";
import "../../components/input/index.tmp";

const data = {
    title: "Authorization",
    inputs: [
        {
            title: "Login",
            type: "text",
            inputName: "login"
        },
        {
            title: "Password",
            type: "password",
            inputName: "password"
        }
    ]
}

const template = hbs.compile(formTpl);
const html = template(data)

const rootNode = document.getElementById("root");

rootNode.innerHTML = html
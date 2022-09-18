import hbs from "handlebars";
import formTpl from "./index.tmp";
import "../../components/input/index.tmp";

const data = {
    title: "Restore password",
    inputs: [
        {
            title: "E-mail",
            type: "email",
            inputName: "email"
        }
    ]
}

const template = hbs.compile(formTpl);
const html = template(data)

const rootNode = document.getElementById("root");

rootNode.innerHTML = html
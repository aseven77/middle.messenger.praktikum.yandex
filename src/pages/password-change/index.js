import hbs from "handlebars";
import formTpl from "./index.tmp";
import "../../components/input/index.tmp";

const data = {
    title: "Password change",
    inputs: [
        {
            title: "Old password",
            type: "password",
            inputName: "oldPassword"
        },
        {
            title: "New password",
            type: "password",
            inputName: "newPassword"
        },
        {
            title: "Confirm password",
            type: "password",
            inputName: "confirm-newPassword"
        }
    ]
}

const template = hbs.compile(formTpl);
const html = template(data)

const rootNode = document.getElementById("root");

rootNode.innerHTML = html
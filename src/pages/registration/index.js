import hbs from "handlebars";
import registrationTmp from "./index.tmp";
import "../../components/input/index.tmp";

const data = {
    title: "Registration",
    inputs: [
        {
            title: "Login",
            type: "text",
            inputName: "login"
        },
        {
            title: "First name",
            type: "text",
            inputName: "first_name"
        },
        {
            title: "Second name",
            type: "text",
            inputName: "second_name"
        },
        {
            title: "E-mail",
            type: "email",
            inputName: "email"
        },
        {
            title: "Phone",
            type: "phone",
            inputName: "phone"
        },
        {
            title: "Password",
            type: "password",
            inputName: "password"
        },
        {
            title: "Confirm password",
            type: "password",
            inputName: "confirm_password"
        }
    ]
}

const template = hbs.compile(registrationTmp);
const html = template(data)

const rootNode = document.getElementById("root");

rootNode.innerHTML = html
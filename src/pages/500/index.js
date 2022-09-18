import hbs from "handlebars";
import formTpl from "./index.tmp";
import "../../components/input/index.tmp";


const template = hbs.compile(formTpl);
const html = template()

const rootNode = document.getElementById("root");

rootNode.innerHTML = html
import {BaseElement} from '../BaseElement';
import css from "!!raw-loader!../../styles/VBox.css";


export class VBox extends BaseElement{
    constructor(){
        console.log(css);
        super("div",['vbox'],css);
        console.log(this.innerHTML);
        const template = "<slot name='content'></slot>";
        this.shadowRoot.children[0].innerHTML = template;
    }
}
customElements.define("serai-vbox",VBox);
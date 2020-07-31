import {BaseElement} from '../BaseElement';
import css from "!!raw-loader!../../styles/HBox.css";


export class HBox extends BaseElement{
    constructor(){
        super("div",['hbox'],css);
        console.log(this.innerHTML);
        const template = "<slot name='content'></slot>";
        this.shadowRoot.children[0].innerHTML = template;
    }
}
customElements.define("serai-hbox",HBox);
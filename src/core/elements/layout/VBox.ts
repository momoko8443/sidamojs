import {BaseElement} from '../BaseElement';
import css from "!!raw-loader!../../styles/VBox.css";
import template from  "!!raw-loader!../../templates/VBox.html";

export class VBox extends BaseElement{
    constructor(){
        super(template,css);
    }
    connectedCallback(){ //当 custom element首次被插入文档DOM时，被调用
        console.log('connectedCallback','called');
    }
    disconnectedCallback(){ //当 custom element从文档DOM中删除时，被调用
        console.log('disconnectedCallback','called');
    }
    adoptedCallback(){ //当 custom element被移动到新的文档时，被调用
        console.log('adoptedCallback','called');
    }
    attributeChangedCallback(){ // 当 custom element增加、删除、修改自身属性时，被调用
        console.log('attributeChangedCallback','called');
    }
}
customElements.define("serai-vbox",VBox);
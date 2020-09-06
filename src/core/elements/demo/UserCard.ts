import {BaseElement} from '../BaseElement';
import css from "!!raw-loader!../../styles/demo/UserCard.css";
import template from  "!!raw-loader!../../templates/demo/UserCard.html";

export class UserCard extends BaseElement{
    public image:string;
    public name:string;
    public email:string;
    constructor(_template:string,_style:string){
        super(_template || template,_style || css);
        this.image = "";
        this.name = "";
        this.email = "";
        console.log('constructorCallback','called');
        this.buildAttributesSetterGetter();
    }
    


    static get observedAttributes() {
        return ['image', 'name','email'];
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
    
    imageHandler(oldValue:any, newValue:any){
        this.shadowRoot.querySelector('img').setAttribute('src', newValue);   
    }
    nameHandler(oldValue:any, newValue:any){
        (this.shadowRoot.querySelector('.container>.name') as HTMLElement).innerText = newValue;
    }
    emailHandler(oldValue:any, newValue:any){
        (this.shadowRoot.querySelector('.container>.email') as HTMLElement).innerText = newValue;
    }
}
customElements.define("user-card", UserCard);
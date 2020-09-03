import {BaseElement} from '../BaseElement';
import css from "!!raw-loader!../../styles/demo/UserCard.css";
import template from  "!!raw-loader!../../templates/demo/UserCard.html";

export class UserCard extends BaseElement{
    constructor(_template:string,_style:string){
        super(_template || template,_style || css);
        console.log('constructorCallback','called');
    }
    get image(){
        return JSON.parse(this.getAttribute('image'));
    }
    set image(val){
        if(val){
            this.setAttribute('image',JSON.stringify(val));
        }else{
            this.removeAttribute('image');
        }
    }
    get name(){
        return JSON.parse(this.getAttribute('name'));
    }
    set name(val){
        if(val){
            this.setAttribute('name',JSON.stringify(val));
        }else{
            this.removeAttribute('name');
        }
    }
    get email(){
        return JSON.parse(this.getAttribute('email'));
    }
    set email(val){
        if(val){
            this.setAttribute('email',JSON.stringify(val));
        }else{
            this.removeAttribute('email');
        }
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
    attributeChangedCallback(name:string, oldValue:any, newValue:any){ // 当 custom element增加、删除、修改自身属性时，被调用
        console.log('attributeChangedCallback','called');
        console.log('name',name);
        console.log('oldValue',oldValue);
        console.log('newValue',newValue);
        if(name === "image"){
            this.shadowRoot.querySelector('img').setAttribute('src', newValue);    
        }
        if(name === "name"){
            (this.shadowRoot.querySelector('.container>.name') as HTMLElement).innerText = newValue;
        }
        if(name === "email"){
            (this.shadowRoot.querySelector('.container>.email') as HTMLElement).innerText = newValue;
        }
    }
}
customElements.define("user-card", UserCard);
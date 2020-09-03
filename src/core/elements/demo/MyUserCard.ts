import {UserCard} from './UserCard';
import css from "!!raw-loader!../../styles/demo/MyUserCard.css";
import template from  "!!raw-loader!../../templates/demo/MyUserCard.html";
export class MyUserCard extends UserCard{
    constructor(){
        super(template,css);
    }

    get address(){
        return JSON.parse(this.getAttribute('address'));
    }
    set address(val){
        if(val){
            this.setAttribute('address',JSON.stringify(val));
        }else{
            this.removeAttribute('address');
        }
    }
    static get observedAttributes() {
        return ['image', 'name','email','address'];
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
            (this.shadowRoot.querySelector('.container>.name') as HTMLElement).innerText = newValue + '_extends';
        }
        if(name === "email"){
            (this.shadowRoot.querySelector('.container>.email') as HTMLElement).innerText = newValue + '_extends';
        }
        if(name === "address"){
            (this.shadowRoot.querySelector('.container>.address') as HTMLElement).innerText = newValue;
        }
    }
}

customElements.define("my-user-card", MyUserCard);
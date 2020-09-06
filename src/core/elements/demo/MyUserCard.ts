import {UserCard} from './UserCard';
import css from "!!raw-loader!../../styles/demo/MyUserCard.css";
import template from  "!!raw-loader!../../templates/demo/MyUserCard.html";
export class MyUserCard extends UserCard{
    public address:string;
    public gender:string;
    constructor(){
        super(template,css);
        this.address = "";
        this.gender = "";
        this.buildAttributesSetterGetter();
    }
    
    static get observedAttributes() {
        return ['image', 'name','email','address','gender'];
    }

    nameHandler(oldValue:any, newValue:any){
        if(newValue !== oldValue){
            this.render();
        }
    }

    genderHandler(oldValue:any, newValue:any){
        if(newValue !== oldValue){
            this.render();
        }
    }

    addressHandler(oldValue:any, newValue:any){
        (this.shadowRoot.querySelector('.container>.address') as HTMLElement).innerText = newValue;
    }

    render(){
        if(this.name && this.gender){
            const gender = this.gender === "male" ? 'Mr. ' : 'Ms. ';
            (this.shadowRoot.querySelector('.container>.name') as HTMLElement).innerText = gender + this.name;
        }
    }


}

customElements.define("my-user-card", MyUserCard);
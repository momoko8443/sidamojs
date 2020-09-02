import {BaseElement} from '../BaseElement';
import css from "!!raw-loader!../../styles/News.css";
import template from  "!!raw-loader!../../templates/News.html";

export class News extends BaseElement{
    get source(){
        return JSON.parse(this.getAttribute('source'));
    }
    set source(val){
        if(val){
            this.setAttribute('source',JSON.stringify(val));
        }else{
            this.removeAttribute('source');
        }
    }
    get title(){
        return JSON.parse(this.getAttribute('title'));
    }
    set title(val){
        if(val){
            this.setAttribute('title',JSON.stringify(val));
        }else{
            this.removeAttribute('title');
        }
    }

    static get observedAttributes() {
        return ['source', 'title'];
    }
    constructor(){
        super(template,['news'],css);
        console.log('constructorCallback','called');
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
        if(name === "title"){
            const header:HTMLElement = this.shadowRoot.querySelector('h3') as HTMLElement;
           
            header.innerText = newValue;
        }
        if(name === "source"){
            this.renderList(JSON.parse(newValue));
        }
    }

    renderList(list:Array<any>){
        const container:HTMLElement = this.shadowRoot.querySelector('ul') as HTMLElement;
        container.innerHTML = '';
        list.forEach((item)=>{
            const li = document.createElement('li');
            li.innerHTML = "<span>" + item.title + "</span>";
            const vm = this;
            ((i)=>{
                li.addEventListener('click', (e)=>{
                    const itemClickEvent = new CustomEvent('itemclick',{detail:i});
                    vm.dispatchEvent(itemClickEvent);
                });
            })(item)
            
            container.appendChild(li);
        })
    }


}
customElements.define("serai-news", News);
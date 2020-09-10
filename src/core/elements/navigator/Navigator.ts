import {BaseElement} from '../BaseElement';
import css from "!!raw-loader!../../styles/navigator/navigator.css";
import template from  "!!raw-loader!../../templates/navigator/navigator.html";

export class Navigator extends BaseElement{
    public source:Array<any>;
    private currentIndex:number;

    static get observedAttributes() {
        return ['source'];
    }
    constructor(){
        super(template,css);
        this.source = [];
        this.buildAttributesSetterGetter();
    }
    connectedCallback(){ //当 custom element首次被插入文档DOM时，被调用
        console.log('connectedCallback','called');
        window.addEventListener('resize',()=>{
            this.switchTab(this.currentIndex);
        });
    }
    disconnectedCallback(){ //当 custom element从文档DOM中删除时，被调用
        console.log('disconnectedCallback','called');
    }
    adoptedCallback(){ //当 custom element被移动到新的文档时，被调用
        console.log('adoptedCallback','called');
    }
    sourceHandler(oldVal:any,newVal:any){
        console.log(newVal);
        this.renderList(newVal);
    }

    renderList(list:Array<any>){
        const container:HTMLElement = this.shadowRoot.querySelector('.anchorsBox') as HTMLElement;
        const slideDom:HTMLElement = this.shadowRoot.querySelector('#anchorSlide') as HTMLElement;
        // container.innerHTML = '';
        list.forEach((item, index)=>{
            const span = document.createElement('span');
            span.className = "sr-anchorBtn";
            span.innerHTML =  item.title ;
            const vm = this;
            ((i,ind)=>{
                span.addEventListener('click', (e)=>{
                    vm.switchTab(ind);
                });
            })(item,index)
            span.id = "srAnchor_" + index;
            
            container.insertBefore(span,slideDom);
        })
        this.switchTab(0);
    }

    switchTab(index:number){
        if(index < 0){
            return;
        }
        this.currentIndex = index;
        let tabButtonDOM = this.shadowRoot.querySelector('#srAnchor_'+index) as HTMLElement;
        if(tabButtonDOM) {
            const slideDom:HTMLElement = this.shadowRoot.querySelector('#anchorSlide') as HTMLElement;
            let slideWidth = tabButtonDOM.clientWidth;
            slideDom.style.width = slideWidth + "px";
            slideDom.style.left = tabButtonDOM.offsetLeft + 'px';
            //this.$emit('SrAnchorChanged', this.tabs[this.currentIndex]);
            const item = this.source[index];
            const itemClickEvent = new CustomEvent('itemclick',{detail: item});
            this.dispatchEvent(itemClickEvent);
        }
    }
}
customElements.define("serai-navigator", Navigator);
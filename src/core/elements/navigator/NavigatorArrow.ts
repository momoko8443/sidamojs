import {BaseElement} from '../BaseElement';
import css from "!!raw-loader!../../styles/navigator/navigator-arrow.css";
import template from  "!!raw-loader!../../templates/navigator/navigator-arrow.html";
import {isIE} from "../../../util/common";
//import rightArrow from '../../../assets/arrow/rigth_arrow.svg';

export class NavigatorArrow extends BaseElement{
    public source:Array<any>;
    private showRightArrow:boolean;
    private showLeftArrow:boolean;
    private timer:any;

    private rightArrow:HTMLElement;
    private leftArrow:HTMLElement;
    private wrapper:HTMLElement;
    private navigator:HTMLElement;
    static get observedAttributes() {
        return ['source'];
    }
    constructor(){
        super(template,css);
        this.source = [];
        this.showRightArrow = false;
        this.showLeftArrow = false;
        this.buildAttributesSetterGetter();
    }
    connectedCallback(){ //当 custom element首次被插入文档DOM时，被调用
        console.log('connectedCallback','called');
        this.leftArrow = this.shadowRoot.querySelector('div.arrowButton.l');
        this.leftArrow.addEventListener('click',()=>{
            this.moveLeft();
        });
        this.rightArrow = this.shadowRoot.querySelector('div.arrowButton.r');
        this.rightArrow.addEventListener('click',()=>{
            this.moveRight();
        });
        this.wrapper = this.shadowRoot.querySelector("#sr-anchor-scrollContainerWrapper");
        this.wrapper.addEventListener('scroll',()=>{
            this.scrollHandler();
        });
        this.navigator = this.shadowRoot.querySelector('#navigator');
        this.navigator.addEventListener('itemclick',(e:CustomEvent)=>{
            console.log(e.detail);
            const itemClickEvent = new CustomEvent('itemclick',{detail: e.detail});
            this.dispatchEvent(itemClickEvent);
        });
        window.addEventListener('resize',()=>{
            this.renderArrow();
        })
        
    }
    disconnectedCallback(){ //当 custom element从文档DOM中删除时，被调用
        console.log('disconnectedCallback','called');
    }
    adoptedCallback(){ //当 custom element被移动到新的文档时，被调用
        console.log('adoptedCallback','called');
    }
    sourceHandler(oldVal:any,newVal:any){
        console.log(newVal);
        (this.navigator as any).source = newVal;
        setTimeout(() => {
            this.renderArrow();
        }, 1000);
    }
    renderArrow() {
        const viewW = this.wrapper.clientWidth;
        const realW = this.wrapper.scrollWidth;
        if (realW > viewW) {
            this.showRightArrow = true;
            if (this.wrapper.scrollLeft > 0) {
                this.showLeftArrow = true;
            } else {
                this.showLeftArrow = false;
            }
            if(this.wrapper.scrollLeft == realW - viewW){
                this.showRightArrow = false;
            }else{
                this.showRightArrow = true;
            }
        } else {
            this.showRightArrow = false;
        }
        if(this.showRightArrow){
            this.rightArrow.style.visibility = 'visible';
        }else{
            this.rightArrow.style.visibility = 'hidden'
        }
        if(this.showLeftArrow){
            this.leftArrow.style.visibility = 'visible';
        }else{
            this.leftArrow.style.visibility = 'hidden'
        }
    }
    moveRight() {
        const currentScrollLeft = this.wrapper.scrollLeft;
        if(isIE()){
            this.wrapper.scrollLeft=currentScrollLeft+280
        }else{
            this.wrapper.scrollTo({
                left: currentScrollLeft + 280,
                behavior: "smooth",
            });
        }
    }
    moveLeft() {
        const currentScrollLeft = this.wrapper.scrollLeft;
        if(isIE()){
            this.wrapper.scrollLeft=currentScrollLeft-280
        }
        else{
            this.wrapper.scrollTo({
                left: currentScrollLeft - 280,
                behavior: "smooth",
            });
        }
    }
    scrollHandler(){
        if(!this.timer){
            this.timer = setTimeout(()=>{
                this.renderArrow();
                clearTimeout(this.timer);
                this.timer = null;
            },200)
        }
    }
}
customElements.define("serai-navigator-arrow", NavigatorArrow);
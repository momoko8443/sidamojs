export class BaseElement extends HTMLElement{
    shadow:ShadowRoot;
    template:string;
    styleContent:string;
    constructor(_template:string,_styleContent:string) {
        super();
        this.template = _template;
        this.styleContent = _styleContent;
        this.shadow = this.attachShadow({mode: 'open'});
        if(this.template){
            const templateEle:HTMLTemplateElement = document.createElement('template');
            templateEle.innerHTML = this.template;
            this.shadow.appendChild(templateEle.content);
        }      
        if(this.styleContent){
            const styleLink:HTMLStyleElement = document.createElement('style');
            this.styleContent = this.styleContent.replace(/[\r\n]/g,"");
            styleLink.innerText = this.styleContent;
            this.shadow.appendChild(styleLink);
        }
    }
    buildAttributesSetterGetter(){
        Object.getOwnPropertyNames(this).forEach((name)=>{
            if(name !== 'template' && name !== 'styleContent' && name !== 'shadow'){
                Object.defineProperty(this,name,{
                    get: ()=>{
                        return this.getAttribute(name);
                    },
                    set: (val)=>{
                        return this.setAttribute(name, val);
                    }
                })
            }
        })
    }
    attributeChangedCallback(name:string, oldValue:any, newValue:any){
        if((this as any)[name + 'Handler'] && typeof (this as any)[name + 'Handler'] === 'function'){
            (this as any)[name + 'Handler'].call(this,oldValue,newValue);
        }
    }

    render(){
        
    }
}


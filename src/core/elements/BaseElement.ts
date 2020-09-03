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
            this.defineTemplate(this.template);
        }      
        if(this.styleContent){
            this.defineStyle(this.styleContent);
        }
    }
    defineTemplate(template:string){
        const templateEle:HTMLTemplateElement = document.createElement('template');
        templateEle.innerHTML = template;
        this.shadow.appendChild(templateEle.content);
    }
    defineStyle(styleContent:string){
        const styleLink:HTMLStyleElement = document.createElement('style');
        styleContent = styleContent.replace(/[\r\n]/g,"");
        styleLink.innerText = styleContent;
        this.shadow.appendChild(styleLink);
    }
}


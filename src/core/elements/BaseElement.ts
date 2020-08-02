export class BaseElement extends HTMLElement{
    id:string;
    name:string;
    nodeName2:string;
    status:string;
    constructor(template:string,_classNames:Array<string>,_styleContent:string) {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const templateEle:HTMLTemplateElement = document.createElement('template');
        templateEle.innerHTML = template;
        shadow.appendChild(templateEle.content);
        shadow.children[0].setAttribute('class',_classNames.join(' '));
        if(_styleContent){
            const styleLink:HTMLStyleElement = document.createElement('style');
            _styleContent = _styleContent.replace(/[\r\n]/g,"");
            styleLink.innerText = _styleContent;
            shadow.appendChild(styleLink);
        }
    }
    render():void{
        console.log(this.name,'has been appended');
    }
    destory():void{
        console.log(this.name,'has been destoried');
    }
}


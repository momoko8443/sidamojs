export class BaseElement extends HTMLElement{
    id:string;
    name:string;
    nodeName2:string;
    status:string;
    constructor(_nodeName:string,_classNames:Array<string>,_styleContent:string) {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const nodeElement:HTMLElement = document.createElement(_nodeName);
        nodeElement.setAttribute('class',_classNames.join(' '));
        shadow.appendChild(nodeElement);
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


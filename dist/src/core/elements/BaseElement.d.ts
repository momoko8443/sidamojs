export declare class BaseElement extends HTMLElement {
    id: string;
    name: string;
    nodeName2: string;
    status: string;
    constructor(template: string, _classNames: Array<string>, _styleContent: string);
    render(): void;
    destory(): void;
}

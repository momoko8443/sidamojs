export declare class BaseElement extends HTMLElement {
    id: string;
    name: string;
    nodeName2: string;
    status: string;
    constructor(_nodeName: string, _stylePath: string);
    render(): void;
    destory(): void;
}

export declare class BaseElement extends HTMLElement {
    shadow: ShadowRoot;
    template: string;
    styleContent: string;
    constructor(_template: string, _styleContent: string);
    attributeChangedCallback(name: string, oldValue: any, newValue: any): void;
    render(): void;
}

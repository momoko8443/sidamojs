import { BaseElement } from '../BaseElement';
export declare class News extends BaseElement {
    get source(): any;
    set source(val: any);
    get title(): any;
    set title(val: any);
    static get observedAttributes(): string[];
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    adoptedCallback(): void;
    attributeChangedCallback(name: string, oldValue: any, newValue: any): void;
    renderList(list: Array<any>): void;
}

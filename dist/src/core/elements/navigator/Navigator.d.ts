import { BaseElement } from '../BaseElement';
export declare class Navigator extends BaseElement {
    source: Array<any>;
    private currentIndex;
    static get observedAttributes(): string[];
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    adoptedCallback(): void;
    customtitleHandler(oldVal: any, newVal: any): void;
    sourceHandler(oldVal: any, newVal: any): void;
    renderList(list: Array<any>): void;
    switchTab(index: number): void;
}

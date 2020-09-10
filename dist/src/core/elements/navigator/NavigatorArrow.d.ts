import { BaseElement } from '../BaseElement';
export declare class NavigatorArrow extends BaseElement {
    source: Array<any>;
    private currentIndex;
    static get observedAttributes(): string[];
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    adoptedCallback(): void;
    customtitleHandler(oldVal: any, newVal: any): void;
    sourceHandler(oldVal: any, newVal: any): void;
}

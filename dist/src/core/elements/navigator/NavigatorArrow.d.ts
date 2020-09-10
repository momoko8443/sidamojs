import { BaseElement } from '../BaseElement';
export declare class NavigatorArrow extends BaseElement {
    source: Array<any>;
    private showRightArrow;
    private showLeftArrow;
    private timer;
    private rightArrow;
    private leftArrow;
    private wrapper;
    private navigator;
    static get observedAttributes(): string[];
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    adoptedCallback(): void;
    sourceHandler(oldVal: any, newVal: any): void;
    renderArrow(): void;
    moveRight(): void;
    moveLeft(): void;
    scrollHandler(): void;
}

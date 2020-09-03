import { BaseElement } from '../BaseElement';
export declare class UserCard extends BaseElement {
    get image(): any;
    set image(val: any);
    get name(): any;
    set name(val: any);
    get email(): any;
    set email(val: any);
    static get observedAttributes(): string[];
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    adoptedCallback(): void;
    attributeChangedCallback(name: string, oldValue: any, newValue: any): void;
}

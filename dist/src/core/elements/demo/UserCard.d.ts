import { BaseElement } from '../BaseElement';
export declare class UserCard extends BaseElement {
    constructor(_template: string, _style: string);
    get image(): any;
    set image(val: any);
    get name(): any;
    set name(val: any);
    get email(): any;
    set email(val: any);
    static get observedAttributes(): string[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    adoptedCallback(): void;
    imageHandler(oldValue: any, newValue: any): void;
    nameHandler(oldValue: any, newValue: any): void;
    emailHandler(oldValue: any, newValue: any): void;
}

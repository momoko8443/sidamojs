import { BaseElement } from '../BaseElement';
export declare class UserCard extends BaseElement {
    image: string;
    name: string;
    email: string;
    constructor(_template: string, _style: string);
    static get observedAttributes(): string[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    adoptedCallback(): void;
    imageHandler(oldValue: any, newValue: any): void;
    nameHandler(oldValue: any, newValue: any): void;
    emailHandler(oldValue: any, newValue: any): void;
}

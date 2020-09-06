import { UserCard } from './UserCard';
export declare class MyUserCard extends UserCard {
    constructor();
    get address(): any;
    set address(val: any);
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, oldValue: any, newValue: any): void;
}

import { UserCard } from './UserCard';
export declare class MyUserCard extends UserCard {
    constructor();
    get address(): any;
    set address(val: any);
    get gender(): any;
    set gender(val: any);
    static get observedAttributes(): string[];
    nameHandler(oldValue: any, newValue: any): void;
    genderHandler(oldValue: any, newValue: any): void;
    addressHandler(oldValue: any, newValue: any): void;
    render(): void;
}

import { UserCard } from './UserCard';
export declare class MyUserCard extends UserCard {
    address: string;
    gender: string;
    constructor();
    static get observedAttributes(): string[];
    nameHandler(oldValue: any, newValue: any): void;
    genderHandler(oldValue: any, newValue: any): void;
    addressHandler(oldValue: any, newValue: any): void;
    render(): void;
}

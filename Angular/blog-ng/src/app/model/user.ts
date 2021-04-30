import { ComponentFactory } from "@angular/core";
import { Address } from "./addess";
import { Company } from "./company";

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;

    company: Company;
    address: Address;
}
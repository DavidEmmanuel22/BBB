
export interface Customer {
    customer?: CustomerClass;
    password?: string;
}

export interface CustomerClass {
    lastname?:  string;
    firstname?: string;
    email?:     string;
    addresses?: Address[];
}

export interface Address {
    defaultBilling?:  boolean;
    defaultShipping?: boolean;
    firstname?:       string;
    lastname?:        string;
    region?:          Region;
    countryId?:       string;
    postcode?:        string;
    city?:            string;
    street?:          string[];
    telephone?:       string;
}

export interface Region {
    regionCode?: string;
    regionId?:   number;
    region?:     string;
}

export class Convert {
    public static toCustomer(json: string): Customer {
        return JSON.parse(json);
    }

    public static customerToJson(value: Customer): string {
        return JSON.stringify(value);
    }
}

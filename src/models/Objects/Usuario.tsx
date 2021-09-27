
export interface Usuario {
    id?:                        number;
    group_id?:                  number;
    default_billing?:           string;
    default_shipping?:          string;
    created_at?:                Date;
    updated_at?:                Date;
    created_in?:                string;
    dob?:                       Date;
    email?:                     string;
    firstname?:                 string;
    lastname?:                  string;
    gender?:                    number;
    store_id?:                  number;
    website_id?:                number;
    addresses?:                 Address[];
    disable_auto_group_change?: number;
    extension_attributes?:      UsuarioExtensionAttributes;
    custom_attributes?:         CustomAttribute[];
}

export interface Address {
    id?:                   number;
    customer_id?:          number;
    region?:               Region;
    region_id?:            number;
    country_id?:           string;
    street?:               string[];
    telephone?:            string;
    postcode?:             string;
    city?:                 string;
    firstname?:            string;
    lastname?:             string;
    default_shipping?:     boolean;
    extension_attributes?: AddressExtensionAttributes;
    custom_attributes?:    CustomAttribute[];
}

export interface CustomAttribute {
    attribute_code?: string;
    value?:          string;
}

export interface AddressExtensionAttributes {
    neighborhood?: string;
}

export interface Region {
    region_code?: string;
    region?:      string;
    region_id?:   number;
}

export interface UsuarioExtensionAttributes {
    is_subscribed?: boolean;
}

export class Convert {
    public static toUsuario(json: string): Usuario {
        return JSON.parse(json);
    }

    public static usuarioToJson(value: Usuario): string {
        return JSON.stringify(value);
    }
}

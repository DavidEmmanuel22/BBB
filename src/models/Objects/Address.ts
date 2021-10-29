export interface Address {
  id?: number;
  customer_id?: number;
  region?: Region;
  region_id?: number;
  country_id?: string;
  street?: string[];
  telephone?: string;
  postcode?: string;
  city?: string;
  firstname?: string;
  lastname?: string;
  default_shipping?: boolean;
  extension_attributes?: AddressExtensionAttributes;
  custom_attributes?: CustomAttribute[];
}

export interface CustomAttribute {
  attribute_code?: string;
  value?: string;
}

export interface AddressExtensionAttributes {
  neighborhood?: string;
}

export interface Region {
  region_code?: string;
  region?: string;
  region_id?: number;
}

export interface Currency {
  global_currency_code: string;
  base_currency_code: string;
  store_currency_code: string;
  quote_currency_code: string;
  store_to_base_rate: number;
  store_to_quote_rate: number;
  base_to_global_rate: number;
  base_to_quote_rate: number;
}

export interface Address {
  id: number;
  region: string;
  region_id: number | string;
  region_code: number | string;
  country_id: number | string;
  street: Array<string>;
  telephone: number | string;
  postcode: number | string;
  city: string;
  firstname: string;
  lastname: string;
  email: string;
  same_as_billing: number;
  save_in_address_book: number;
}
export interface Customer {
  email?: string;
  firstname?: string;
  lastname?: string;
}

export interface CartObject {
  id: number;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  is_virtual: boolean;
  items: Array<any>;
  items_count: number;
  items_qty: number;
  customer: Customer;
  billing_address: Address;
  orig_order_id: number;
  currency: Currency;
  customer_is_guest: boolean;
  customer_note_notify: boolean;
  customer_tax_class_id: number;
  store_id: number;
  extension_attributes: any;
}

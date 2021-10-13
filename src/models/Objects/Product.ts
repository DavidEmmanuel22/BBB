import { ExtraAttributes } from './ProductByCategory';

export interface ProductDetail {
  id?: number;
  sku?: number;
  name?: string;
  price?: number;
  visibility?: number;
  status?: number;
  product_count?: number;
  chipItem?: any;
  custom_attributes: Array<ExtraAttributes>;
}

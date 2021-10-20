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
export interface ProductReview {
  id?: number;
  customer_id?: number;
  entity_pk_value?: number;
  nickname?: string;
  ratings?: Array<Rating>;
  detail?: string;
  product_count?: number;
  review_status?: any;
  title?: string;
  review_type?: number;
  created_at: string;
}

export interface Rating {
  vote_id?: number;
  rating_id?: number;
  percent?: number;
  value?: number;
  rating_name?: string;
}

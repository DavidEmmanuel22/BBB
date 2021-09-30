export interface Media {
  id: number;
  media_type?: string;
  label?: string;
  position: number;
  disabled: boolean;
  file: string;
}
export interface ExtraAttributes {
  attribute_code: string;
  value: string;
}

export interface ProductByCategory {
  id?: number;
  sku?: string;
  name?: string;
  attribute_set_id?: number;
  price?: number;
  status?: number;
  visibility?: number;
  type_id?: string;
  weight?: number;
  media_gallery_entries?: Media;
  custom_attributes: Array<ExtraAttributes>;
}

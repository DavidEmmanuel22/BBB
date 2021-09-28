export interface Categories {
  id?: number;
  parent_id?: number;
  name?: string;
  is_active?: boolean;
  position?: number;
  level?: number;
  product_count?: number;
  children_data: Array<Categories>;
}

export interface UsuarioExtensionAttributes {
  is_subscribed?: boolean;
}

export class Convert {
  public static toCategory(data: Array<any>): Array<Categories> {
    return data;
  }

  public static categoryToJson(value: Categories): string {
    return JSON.stringify(value);
  }
}

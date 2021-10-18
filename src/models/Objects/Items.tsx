// To parse this data:
//
//   import { Convert, Items } from "./file";
//
//   const items = Convert.toItems(json);

export interface Items {
  request: Request;
  placements: Placement[];
  message: string;
  status: string;
}

export interface Placement {
  searchTrackingUrl: string;
  rcs: string;
  docs: Doc[];
  entities: any[];
  numFound: number;
  merchandisingRuleIds: any[];
  links: Links;
  placement: string;
  metrics: Metrics;
  addtoCartParams: string;
  errors: string[];
  facets: Facet[];
}

export interface Doc {
  clickUrl: string;
  imageId: string;
  color: Color[];
  in_stock: boolean;
  has_promo: boolean;
  categoryName: string[];
  score: number;
  marca: string;
  linkId: string;
  product_findable: boolean;
  material?: string[];
  product_recommendable: boolean;
  name: string;
  priceCents: number;
  id: string;
  brand: string;
  categoryId: string[];
  image_two_url?: string;
  salePriceCents?: number;
  special_price?: number;
}

export enum Color {
  Café = 'Café',
}

export interface Facet {
  values: Value[];
  facet: string;
}

export interface Value {
  filter: string;
  count: number;
  value: string;
  child: null;
}

export interface Links {
  directlink: any[];
  banner: any[];
  sponsored: any[];
}

export interface Metrics {
  rrPsdScoreBand: string;
  rrPersonalizationInfluence: string;
  rrPsdScore: string;
}

export interface Request {
  apiKey: string;
  placements: string[];
  sessionId: string;
  userId: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toItems(json: string): Items {
    return JSON.parse(json);
  }

  public static itemsToJson(value: Items): string {
    return JSON.stringify(value);
  }
}

export interface codesByCategory {
  aggregations?: bucket;
}
export interface bucket {
  buckets?: value[];
}
export interface value {
  name?: string;
  values?: valueMetrics[];
}
export interface valueMetrics {
  value?: string;
  metrics?: number[];
}

export const BASE_URL = 'https://mcstaging.bedbathandbeyond.com.mx';
export const BASE_INDEX_V1 = '/index.php/rest/default/V1/';
export const BASE_URL_BARILLIANCE = 'https://api.barilliance.net/api/recommendations';

export const URL_LOGIN_ADMIN = `${BASE_INDEX_V1}integration/admin/token`;
export const URL_LOGIN_CUSTOMER = `${BASE_INDEX_V1}integration/customer/token`;
export const URL_Obtain_Data_User_ADMIN = `${BASE_URL}/rest/default/V1/customers/:custoerId`;
export const URL_Obtain_Data_User_CUSTOMER = '/rest/default/V1/customers/me';
export const URL_REGISTRAR = `${BASE_URL}/rest/default/V1/customers`;
export const URL_ORDERS = '/rest/default/V1/orders';
export const URL_CATEGORIES = `${BASE_URL}${BASE_INDEX_V1}categories?storeId=1`;
export const URL_CATEGORY = (id: number) => `${BASE_URL}${BASE_INDEX_V1}categories/${id}?storeId=1`;

export const SEARCH_CRITERIAL = 'searchCriteria[filter_groups][0][filters][0]';
export const SEARCH_ITEMS =
  'https://staging.richrelevance.com/rrserver/api/find/v1/ff0aca818f66c555?query={query}&log=true&lang=es-MX&sessionId={sessionId}&userId={userId}&rows={rows}&placement=search_page.find&start={start}&ssl=true';

export const URL_PRODUCT_BY_CATEGORY = (categoryId = 0, order = 'DESC', page = 1, pageSize = '30') =>
  `${BASE_URL}${BASE_INDEX_V1}products?${SEARCH_CRITERIAL}[field]=category_id&${SEARCH_CRITERIAL}[value]=${categoryId}&${SEARCH_CRITERIAL}[condition_type]=eq&searchCriteria[currentPage]=${page}&searchCriteria[pageSize]=${pageSize}&searchCriteria[sortOrders][][direction]=${order}`;
export const URL_MODIFY_DATA_CUSTOMER = `${BASE_URL}/rest/default/V1/customers/:customerId`;
export const C = `${BASE_URL}/rest/default/V1/customers/me/password?customerId=`;
export const URL_SLIDER1 = `${BASE_URL}/rest/V1/banner/get?seleccion`;
export const URL_PRODUCT_DETAIL = (sku = '') => `https://mcstaging.bedbathandbeyond.com.mx/rest/V1/products/${sku}`;
export const URL_PRODUCT_REVIEWS = (sku = '') =>
  `https://mcstaging.bedbathandbeyond.com.mx/index.php/rest/default/V1/products/${sku}/reviews`;
export const URL_CART = `${BASE_URL}${BASE_INDEX_V1}guest-carts`;
export const URL_GET_CART = (token = '') => `${BASE_URL}${BASE_INDEX_V1}guest-carts/${token}`;
export const URL_ADD_CART_GUEST = (token = '') => `${BASE_URL}${BASE_INDEX_V1}guest-carts/${token}/items`;
//Cart customer
export const URL_CART_CUSTOMER = `${BASE_URL}${BASE_INDEX_V1}carts/mine`;
export const URL_GET_CART_CUSTOMER = `${BASE_URL}${BASE_INDEX_V1}carts/mine/totals`;
export const URL_ADD_CART_CUSTOMER = `${BASE_URL}${BASE_INDEX_V1}carts/mine/items`;
export const URL_DIRECTIONS = (id = 0) => `${BASE_URL}/rest/default/V1/customers/${id}`;
export const URL_CODES_COLOR = `${BASE_URL}/index.php/rest/default/V1/products/attributes/color?fields=attribute_id,attribute_code,options`;
export const URL_CODES_SIZE = `${BASE_URL}/index.php/rest/default/V1/products/attributes/size?fields=attribute_id,attribute_code,options`;
export const URL_CODES_MATERIAL = `${BASE_URL}/index.php/rest/default/V1/products/attributes/material?fields=attribute_id,attribute_code,options`;
export const URL_ATRIBUTES_CATEGORY_HARD = (id = 0) =>
  `${BASE_URL}/index.php/rest/V1/search?searchCriteria[requestName]=catalog_view_container&searchCriteria[filterGroups][0][filters][0][field]=category_ids&searchCriteria[filterGroups][0][filters][0][value]=${id}&fields=total_count,aggregations[buckets]`;

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
export const URL_MODIFY_PASSWORD_CUSTOMER = `${BASE_URL}/rest/default/V1/customers/me/password?customerId=`;
export const URL_SLIDER1 = `${BASE_URL}/rest/V1/banner/get?seleccion`;
export const URL_PRODUCT_DETAIL = (sku = '') => `https://mcstaging.bedbathandbeyond.com.mx/rest/V1/products/${sku}`;
export const URL_PRODUCT_REVIEWS = (sku = '') =>
  `https://mcstaging.bedbathandbeyond.com.mx/index.php/rest/default/V1/products/${sku}/reviews`;

export const BASE_URL = 'https://mcstaging.bedbathandbeyond.com.mx';
export const BASE_INDEX_V1 = '/index.php/rest/default/V1/';
export const URL_LOGIN_ADMIN = `${BASE_URL}${BASE_INDEX_V1}integration/admin/token`;
export const URL_LOGIN_CUSTOMER = `${BASE_URL}${BASE_INDEX_V1}integration/customer/token`;
export const URL_Obtain_Data_User_ADMIN = `${BASE_URL}/rest/default/V1/customers/:custoerId`;
export const URL_Obtain_Data_User_CUSTOMER = `${BASE_URL}/rest/default/V1/customers/me`;
export const URL_REGISTRAR = `${BASE_URL}/rest/default/V1/customers`;

export const SEARCH_CRITERIAL = 'searchCriteria[filter_groups][0][filters][0]';

export const URL_PRODUCT_BY_CATEGORY = (
  categoryId = 0,
  order = 'DESC',
  page = 1,
  pageSize = '50',
) =>
  `${BASE_URL}${BASE_INDEX_V1}products?${SEARCH_CRITERIAL}[field]=category_id&${SEARCH_CRITERIAL}[value]=${categoryId}&${SEARCH_CRITERIAL}[condition_type]=eq&searchCriteria[currentPage]=${page}&searchCriteria[pageSize]=${pageSize}&searchCriteria[sortOrders][][direction]=${order}`;
export const URL_CATEGORIES = `${BASE_URL}/index.php/rest/default/V1/categories?storeId=1`;
export const URL_MODIFY_DATA_CUSTOMER =`${BASE_URL}/rest/default/V1/customers/:customerId`;
export const URL_MODIFY_PASSWORD_CUSTOMER =`${BASE_URL}/rest/default/V1/customers/me/password?customerId=`

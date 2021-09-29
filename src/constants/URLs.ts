export const BASE_URL = 'https://mcstaging.bedbathandbeyond.com.mx';

export const URL_LOGIN_ADMIN = `${BASE_URL}/index.php/rest/default/V1/integration/admin/token`;
export const URL_LOGIN_CUSTOMER = `${BASE_URL}/index.php/rest/default/V1/integration/customer/token`;
export const URL_Obtain_Data_User_ADMIN = `${BASE_URL}/rest/default/V1/customers/:custoerId`;
export const URL_Obtain_Data_User_CUSTOMER = `${BASE_URL}/rest/default/V1/customers/me`;
export const URL_REGISTRAR = `${BASE_URL}/rest/default/V1/customers`;
export const URL_CATEGORIES = `${BASE_URL}/index.php/rest/default/V1/categories?storeId=1`;
export const URL_MODIFY_DATA_CUSTOMER =`${BASE_URL}/rest/default/V1/customers/:customerId`
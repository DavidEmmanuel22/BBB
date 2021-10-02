import axios from 'axios';
import { useDispatch } from 'react-redux';
import { URL_PRODUCT_BY_CATEGORY } from '../constants/URLs';
import { setProducts } from '../store/slices/categorySlice';
import { ProductByCategory } from './Objects/ProductByCategory';
export const ProductByCategoryModel = () => {
  const dispatch = useDispatch();

  const GetProductsByCategory = async ({ id = 1, page = 1, order = 'DESC' }): Promise<Array<ProductByCategory>> => {
    let products: Array<ProductByCategory> = [];

    await axios({
      method: 'GET',
      headers: { 'content-type': 'application/json' },
      url: URL_PRODUCT_BY_CATEGORY(id, order, page),
    })
      .then(({ data }) => {
        const Payload = {
          items: data.items,
          total: data.total_count,
        };
        dispatch(setProducts(Payload));
      })
      .catch((error) => {
        console.log('error', error);
      });
    return products;
  };

  return {
    GetProductsByCategory,
  };
};

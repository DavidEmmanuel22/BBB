import axios from 'axios';
import { useDispatch } from 'react-redux';
import { URL_PRODUCT_DETAIL } from '../constants/URLs';
import { setProductDetail } from '../store/slices/productSlice';
export const ProductDetailModel = () => {
  const dispatch = useDispatch();

  const GetProductDetail = async (sku = ''): Promise<boolean> => {
    let productSuccess: boolean = false;

    await axios({
      method: 'GET',
      headers: { 'content-type': 'application/json' },
      url: URL_PRODUCT_DETAIL(sku),
    })
      .then(({ data }) => {
        dispatch(setProductDetail(data));
        productSuccess = true;
      })
      .catch((error) => {
        console.log('error', error);
        productSuccess = false;
      });
    return productSuccess;
  };

  return {
    GetProductDetail,
  };
};

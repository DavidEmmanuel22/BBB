import axios from 'axios';
import { useDispatch } from 'react-redux';
import { URL_PRODUCT_DETAIL, URL_PRODUCT_REVIEWS } from '../constants/URLs';
import { setProductDetail, setProductReview } from '../store/slices/productSlice';
import fetchHelper from '../utils/fetchHelper';

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
  const GetProductReviews = async (sku = ''): Promise<boolean> => {
    let reviewSuccess: boolean = false;
    await fetchHelper(URL_PRODUCT_REVIEWS(sku), {}, { useAdminToken: true })
      .then(({ data }) => {
        dispatch(setProductReview(data));
        reviewSuccess = true;
      })
      .catch((error) => {
        console.log('error', error);
        reviewSuccess = false;
      });
    return reviewSuccess;
  };

  return {
    GetProductDetail,
    GetProductReviews,
  };
};

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ProductDetailModel } from '../models/ProductDetailModel';
import { productDetail, productReviews } from '../store/slices/productSlice';

export const ProductDetailController = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { GetProductDetail, GetProductReviews } = ProductDetailModel();
  const product = useSelector(productDetail);
  const reviews = useSelector(productReviews);

  const initializeProduct = async (sku = '') => {
    setLoading(true);
    const success = await GetProductDetail(sku);
    setError(!success);
    setLoading(false);
    GetProductReviews(sku);
  };

  //Retorno de metodos y variables
  return {
    initializeProduct,
    product,
    reviews,
    loading,
    error,
  };
};

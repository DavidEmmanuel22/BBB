import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ProductDetailModel } from '../models/ProductDetailModel';
import { productDetail } from '../store/slices/productSlice';

export const ProductDetailController = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { GetProductDetail } = ProductDetailModel();
  const product = useSelector(productDetail);

  const initializeProduct = async (sku = '') => {
    setLoading(true);
    const success = await GetProductDetail(sku);
    setError(!success);
    setLoading(false);
  };

  //Retorno de metodos y variables
  return {
    initializeProduct,
    product,
    loading,
    error,
  };
};

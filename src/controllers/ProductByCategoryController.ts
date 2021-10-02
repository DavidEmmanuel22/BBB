import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ProductByCategoryModel } from '../models/ProductByCategoryModel';
import { selectProducts, selectTotalProducts } from '../store/slices/categorySlice';

export const ProductsByCategoryController = () => {
  const { GetProductsByCategory } = ProductByCategoryModel();

  const products = useSelector(selectProducts);
  const totalProducts = useSelector(selectTotalProducts);
  const totalPages = totalProducts / 50;
  const [idCategory, setIdCategory] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const initializeProducts = async (id: number) => {
    setIdCategory(id);
    setIsLoading(true);
    await GetProductsByCategory({ id, page: 1 });
    setIsLoading(false);
  };
  const changePage = async (page: number) => {
    await GetProductsByCategory({ id: idCategory, page });
  };
  const changeOrder = async (order: string) => {
    await GetProductsByCategory({ id: idCategory, order });
  };
  //Retorno de metodos y variables
  return {
    initializeProducts,
    products,
    totalPages,
    changePage,
    changeOrder,
    totalProducts,
    isLoading,
  };
};

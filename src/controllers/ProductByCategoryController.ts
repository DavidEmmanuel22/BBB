import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories } from '../models/Objects/Categories';
import { ProductByCategoryModel } from '../models/ProductByCategoryModel';
import { selectProducts, selectTotalProducts } from '../store/slices/categorySlice';
import { changeSubTitleHeader, changeTitleHeader } from '../store/slices/uiSlice';

export const ProductsByCategoryController = () => {
  const { GetProductsByCategory } = ProductByCategoryModel();

  const products = useSelector(selectProducts);
  const totalProducts = useSelector(selectTotalProducts);
  const totalPages = totalProducts / 50;
  const [idCategory, setIdCategory] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const initializeProducts = async (category: Categories, parentCategory: string) => {
    setIdCategory(category.id || 0);
    setIsLoading(true);
    setPage(1);
    await GetProductsByCategory({ id: category.id, page: 1 });
    setIsLoading(false);
    dispatch(changeTitleHeader(parentCategory));
    dispatch(changeSubTitleHeader(category.name || ''));
  };
  const changePage = async () => {
    if (page < totalPages) {
      await GetProductsByCategory({ id: idCategory, page: page + 1 });
      setPage(page + 1);
    }
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

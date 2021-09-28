import {useSelector} from 'react-redux';
import {CategoryModel} from '../models/CategoriesModel';
import {selectCategory} from '../store/slices/categorySlice';

export const CategoryController = () => {
  const {GetCategories} = CategoryModel();
  const categories = useSelector(selectCategory);

  const initializeCategory = async () => {
    await GetCategories();
  };

  //Retorno de metodos y variables
  return {
    initializeCategory,
    categories,
  };
};

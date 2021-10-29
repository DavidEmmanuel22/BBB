import { useSelector } from 'react-redux';
import { CategoryModel } from '../models/CategoriesModel';
import { selectCategory, selectBrands } from '../store/slices/categorySlice';
import { selectOutlet } from '../store/slices/outletSlice';

export const CategoryController = () => {
  const { GetCategories } = CategoryModel();
  const categories = useSelector(selectCategory);
  const zoneOutlet = useSelector(selectOutlet);
  const brands = useSelector(selectBrands);

  const initializeCategory = async () => {
    await GetCategories();
  };

  //Retorno de metodos y variables
  return {
    initializeCategory,
    categories,
    zoneOutlet,
    brands,
  };
};

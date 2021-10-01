import axios from 'axios';
import {useDispatch} from 'react-redux';
import {URL_CATEGORIES, URL_CATEGORY} from '../constants/URLs';
import {setCategories} from '../store/slices/categorySlice';
import {Categories} from './Objects/Categories';
export const CategoryModel = () => {
  const dispatch = useDispatch();

  const GetCategories = async (): Promise<Array<Categories>> => {
    let categories: Array<Categories> = [];

    await axios({
      method: 'GET',
      headers: {'content-type': 'application/json'},
      url: URL_CATEGORIES,
    })
      .then(({data}) => {
        categories = data.children_data[0].children_data;
        dispatch(setCategories(categories));
      })
      .catch(error => {
        console.log('error', error);
      });
    return categories;
  };
  const GetCategoryInfo = async (id: number): Promise<Categories> => {
    let categoryInfo: Categories = {};

    await axios({
      method: 'GET',
      headers: {'content-type': 'application/json'},
      url: URL_CATEGORY(id),
    })
      .then(({data}) => {
        categoryInfo = data;
      })
      .catch(error => {
        console.log('error', error);
      });
    return categoryInfo;
  };

  return {
    GetCategories,
    GetCategoryInfo,
  };
};

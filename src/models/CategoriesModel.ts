import axios from 'axios';
import {useDispatch} from 'react-redux';
import {URL_CATEGORIES} from '../constants/URLs';
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

  return {
    GetCategories,
  };
};

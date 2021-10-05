import React from 'react';
import { FlatList } from 'react-native';
import { Categories } from '../../models/Objects/Categories';

import CategoryCard from './categoryCard';
interface IProps {
  data: Array<Categories>;
}
const CategoryList: React.FC<IProps> = ({ data }) => {
  return (
    <FlatList
      keyExtractor={(item, index) => 'key' + index}
      renderItem={({ item }) => <CategoryCard data={item} />}
      data={data.filter((item) => item?.product_count > 0)}
    />
  );
};

export default CategoryList;

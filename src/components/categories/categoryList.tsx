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
      keyExtractor={(item: any, index: any) => 'key' + index}
      renderItem={({ item, index }: any) => <CategoryCard key={index} data={item} />}
      data={data.filter((item: any) => item?.product_count > 0)}
    />
  );
};

export default CategoryList;

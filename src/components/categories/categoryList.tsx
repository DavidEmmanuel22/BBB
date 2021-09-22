import React from 'react';
import {FlatList} from 'react-native';

import CategoryCard from './categoryCard';
interface IProps {
  data: Array<any>;
}
const CategoryList: React.FC<IProps> = ({data}) => {
  return (
    <FlatList
      keyExtractor={(item, index) => 'key' + index}
      renderItem={() => <CategoryCard data={[]} />}
      data={data}
    />
  );
};

export default CategoryList;

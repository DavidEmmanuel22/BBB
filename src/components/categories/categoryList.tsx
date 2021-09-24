import React from 'react';
import {FlatList} from 'react-native';

import CategoryCard from './CategoryCard';
interface IProps {
  data: Array<any>;
}
const CategoryList: React.FC<IProps> = ({data}) => {
  return (
    <FlatList
      keyExtractor={(item, index) => 'key' + index}
      renderItem={({item}) => <CategoryCard data={item} />}
      data={data}
    />
  );
};

export default CategoryList;

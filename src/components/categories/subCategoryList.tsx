import React from 'react';
import {FlatList} from 'react-native';

import SubCategoryCard from './subCategoryCard';
interface IProps {
  data: Array<any>;
}
const SubCategoryList: React.FC<IProps> = ({data}) => {
  return (
    <FlatList
      keyExtractor={(item, index) => 'key' + index}
      renderItem={({item}) => <SubCategoryCard item={item} />}
      data={data}
    />
  );
};

export default SubCategoryList;

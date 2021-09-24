import React from 'react';
import {FlatList} from 'react-native';
import {LIGHTER_BLUE} from '../../constants/colors';
import {getWidth} from '../../utils/interfaceDimentions';

import SubCategoryCard from './SubCategoryCard';
interface IProps {
  data: Array<any>;
}
const SubCategoryList: React.FC<IProps> = ({data}) => {
  return (
    <FlatList
      style={{
        backgroundColor: LIGHTER_BLUE,
        paddingHorizontal: getWidth(16),
        paddingVertical: getWidth(1),
      }}
      keyExtractor={(item, index) => 'key' + index}
      renderItem={({item}) => <SubCategoryCard item={item} />}
      data={data}
    />
  );
};

export default SubCategoryList;

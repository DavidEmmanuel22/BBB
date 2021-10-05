import React from 'react';
import { FlatList } from 'react-native';
import { LIGHTER_BLUE } from '../../constants/colors';
import { Categories } from '../../models/Objects/Categories';
import { getWidth } from '../../utils/interfaceDimentions';

import SubCategoryCard from './subCategoryCard';
interface IProps {
  data: Array<Categories>;
}
const SubCategoryList: React.FC<IProps> = ({ data }) => {
  return (
    <FlatList
      style={{
        backgroundColor: LIGHTER_BLUE,
        paddingHorizontal: getWidth(16),
        paddingVertical: getWidth(1),
      }}
      keyExtractor={(item, index) => 'key' + index}
      renderItem={({ item, index }) => <SubCategoryCard key={index} item={item} />}
      data={data}
    />
  );
};

export default SubCategoryList;

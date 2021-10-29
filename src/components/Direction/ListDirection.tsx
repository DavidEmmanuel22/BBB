import React from 'react';
import { FlatList } from 'react-native';
import { Address } from '../../models/Objects/Address';
import ContentListDirection from './ContentListDirection';

interface IProps {
  data: Array<Address>;
}
const ListDirection: React.FC<IProps> = ({ data }) => {
  return (
    <FlatList
      keyExtractor={(item: any, index: any) => 'key' + index}
      renderItem={({ item }: any) => <ContentListDirection data={item} />}
      data={data}
    />
  );
};
export default ListDirection;

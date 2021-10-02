import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type CategoryItem = {
  isSelected?: boolean;
  label?: string;
  onPress: () => void;
};

const CategoryItem = ({ isSelected, label, onPress }: CategoryItem) => {
  return (
    <TouchableOpacity style={isSelected && styles.active} onPress={onPress}>
      <Text style={[styles.text, isSelected && styles.textActive]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#6c757d',
    marginVertical: 12,
  },
  active: {
    borderBottomColor: '#147cd1',
    borderBottomWidth: 4,
  },
  textActive: {
    color: '#147cd1',
    fontWeight: '700',
  },
});

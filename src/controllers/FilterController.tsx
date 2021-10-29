import { useState } from 'react';
import { Options } from '../models/Objects/CodesColors';

export const FilterController = () => {
  const [rdbChecked, setrdbChecked] = useState(false);
  const [chbChecked, setchbChecked] = useState(false);
  const [allColors, setAllColors] = useState<Options[]>([]);
  const [allSizes, setAllSizes] = useState<Options[]>([]);
  const [allMaterials, setAllMaterials] = useState<Options[]>([]);

  const testMetodo = () => {
    console.log('click rdb');
    rdbChecked ? setrdbChecked(false) : setrdbChecked(true);
  };
  const testMetodoChb = () => {
    console.log('click chb');
    chbChecked ? setchbChecked(false) : setchbChecked(true);
  };
  const setColors = (colors: any) => {
    setAllColors(colors);
  };
  const setSizes = (sizes: any) => {
    setAllSizes(sizes);
  };
  const setMaterials = (material: any) => {
    setAllMaterials(material);
  };
  //Retorno de metodos y variables
  return {
    testMetodo,
    testMetodoChb,
    setColors,
    setSizes,
    setMaterials,
    allMaterials,
    allSizes,
    allColors,
    rdbChecked,
    chbChecked,
  };
};

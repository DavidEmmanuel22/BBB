import { useState } from 'react';

export const FilterController = () => {
  const [rdbChecked, setrdbChecked] = useState(false);
  const [chbChecked, setchbChecked] = useState(false);
  const testMetodo = () => {
    console.log('click rdb');
    rdbChecked ? setrdbChecked(false) : setrdbChecked(true);
  };
  const testMetodoChb = () => {
    console.log('click chb');
    chbChecked ? setchbChecked(false) : setchbChecked(true);
  };
  //Retorno de metodos y variables
  return {
    testMetodo,
    testMetodoChb,
    rdbChecked,
    chbChecked,
  };
};

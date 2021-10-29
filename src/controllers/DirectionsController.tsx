import { useState } from 'react';
import { DirectionsModel } from '../models/DirectionsModel';
import { Address } from '../models/Objects/Directions';
const { getDirections } = DirectionsModel();

export const DirectionsController = () => {
  const [rdbChecked, setrdbChecked] = useState(false);
  const [chbChecked, setchbChecked] = useState(false);
  const [address, setAddress] = useState<Address[]>([]);
  const [city, setCity] = useState('');

  const testMetodo = () => {
    console.log('click rdb');
    rdbChecked ? setrdbChecked(false) : setrdbChecked(true);
  };
  const testMetodoChb = () => {
    console.log('click chb');
    chbChecked ? setchbChecked(false) : setchbChecked(true);
  };
  const changeAddress = (address: any) => {
    setAddress(address);
  };
  const changeCity = (cityNuevo: string) => {
    setCity(cityNuevo);
  };
  const initializeDirections = async () => {
    await getDirections();
  };
  //Retorno de metodos y variables
  return {
    testMetodo,
    testMetodoChb,
    rdbChecked,
    chbChecked,
    initializeDirections,
    address,
    changeAddress,
    changeCity,
    city,
  };
};

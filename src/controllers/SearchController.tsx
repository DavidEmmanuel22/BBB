import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAuthContext from '../context/AuthContext';
import { Convert } from '../models/Objects/Items';
import { SearchModel } from '../models/SearchModel';
import { changeItems, selectMarcaClicked, setMarcaClicked, setMarcas } from '../store/slices/searchSlice';

export const SearchController = () => {
  const dispatch = useDispatch();
  const { user }: any = useAuthContext();

  const { findObjects } = SearchModel();

  const marcaClicked = useSelector(selectMarcaClicked);

  const [startAmount, setstartAmount] = useState(0);
  const [buscando, setBuscando] = useState(false);
  const [showModal, setshowModal] = useState(false);

  const findItems = async (text: string, amount: string) => {
    setBuscando(true);

    let response: string = '';
    if (user) {
      response = await findObjects(user.email, text, amount, startAmount + '');
    } else {
      response = await findObjects('', text, amount, startAmount + '');
    }

    let obj = Convert.toItems(response);
    if (!marcaClicked) {
      dispatch(setMarcas(obj.placements[0].facets[2].values));
    }
    dispatch(setMarcaClicked(false));
    dispatch(changeItems(obj));
    setBuscando(false);
  };

  return {
    findItems,
    buscando,
    showModal,
    setshowModal,
    startAmount,
    setstartAmount,
  };
};

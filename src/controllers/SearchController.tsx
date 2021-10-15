import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useAuthContext from '../context/AuthContext';
import { Convert } from '../models/Objects/Items';
import { SearchModel } from '../models/SearchModel';
import { changeItems } from '../store/slices/searchSlice';

export const SearchController = () => {
  const dispatch = useDispatch();
  const { user }: any = useAuthContext();

  const { findObjects } = SearchModel();

  const [buscando, setBuscando] = useState(false);
  const [showModal, setshowModal] = useState(false);

  const findItems = async (text: string) => {
    setBuscando(true);
    if (user) {
      let response = await findObjects(user.email, text, "150", "0");
      let obj = Convert.toItems(response);
      dispatch(changeItems(obj));
    } else {
      let response = await findObjects('', text, "150", "0");
      let obj = Convert.toItems(response);
      dispatch(changeItems(obj));
    }
    setBuscando(false);
  };

  return {
    findItems,
    buscando,
    showModal,
    setshowModal
  };
};

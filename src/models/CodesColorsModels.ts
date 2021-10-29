import axios from 'axios';
import { useDispatch } from 'react-redux';
import { URL_CODES_COLOR, URL_CODES_SIZE, URL_CODES_MATERIAL } from '../constants/URLs';
import { setCodes, setSize, setMaterial } from '../store/slices/CodesColorsSlice';

export const CodesColorsModel = () => {
  const dispatch = useDispatch();

  const getColorsCode = async (): Promise<boolean> => {
    let codesSucces: boolean = false;

    await axios({
      method: 'GET',
      headers: { 'content-type': 'application/json' },
      url: URL_CODES_COLOR,
    })
      .then(({ data }) => {
        dispatch(setCodes(data));
        codesSucces = true;
      })
      .catch((error) => {
        console.log('error', error);
        codesSucces = false;
      });
    return codesSucces;
  };
  const getSizeCode = async (): Promise<boolean> => {
    let codesSucces: boolean = false;

    await axios({
      method: 'GET',
      headers: { 'content-type': 'application/json' },
      url: URL_CODES_SIZE,
    })
      .then(({ data }) => {
        console.log('petition size');

        console.log(data);
        dispatch(setSize(data));
        codesSucces = true;
      })
      .catch((error) => {
        console.log('error petition', error);
        codesSucces = false;
      });
    return codesSucces;
  };
  const getMaterialCode = async (): Promise<boolean> => {
    let codesSucces: boolean = false;

    await axios({
      method: 'GET',
      headers: { 'content-type': 'application/json' },
      url: URL_CODES_MATERIAL,
    })
      .then(({ data }) => {
        dispatch(setMaterial(data));
        codesSucces = true;
      })
      .catch((error) => {
        console.log('error petition', error);
        codesSucces = false;
      });
    return codesSucces;
  };

  return {
    getColorsCode,
    getSizeCode,
    getMaterialCode,
  };
};

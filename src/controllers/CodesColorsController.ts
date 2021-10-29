import { useSelector } from 'react-redux';
import { codes, sizeCode, materialCode } from '../store/slices/CodesColorsSlice';
import { CodesColorsModel } from '../models/CodesColorsModels';

export const CodesColorsController = () => {
  const { getColorsCode, getSizeCode, getMaterialCode } = CodesColorsModel();

  const codesColor = useSelector(codes);
  const codesSize = useSelector(sizeCode);
  const codesMaterial = useSelector(materialCode);

  //Retorno de metodos y variables
  const initializeCodesColors = async () => {
    const successSize = await getSizeCode();
    const success = await getColorsCode();
    const successMaterial = await getMaterialCode();
    console.log(success);
    console.log(successSize);
    console.log(successMaterial);
  };
  return {
    codesColor,
    codesSize,
    codesMaterial,
    initializeCodesColors,
  };
};

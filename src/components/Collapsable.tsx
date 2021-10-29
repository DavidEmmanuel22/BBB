/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { getHeight, getWidth } from '../utils/interfaceDimentions';
import IconGeneric from '../components/IconGeneric';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { flexGeneric } from '../utils/stylesGenetic';
import Container from '../components/Container';
import InputRdbFilter from '../components/InputRdbFilter';
import { FilterController } from '../controllers/FilterController';
import { CodesCategory } from '../models/CodesCategory';
import { Options } from '../models/Objects/CodesColors';
import { CodesColorsController } from '../controllers/CodesColorsController';
import { Categories } from '../models/Objects/Categories';

const contentCard = (show: boolean): any => ({
  marginTop: -10,
  height: getHeight(40),
  alignItems: 'center',
  flexDirection: 'row',
});
interface IProps {
  category?: Categories;
}
const AnimateBox: React.FC<IProps> = ({ category = {} }) => {
  const [show, setShow] = useState(false);
  const [showOther, setShowOther] = useState(false);
  const { codesColor, codesSize, codesMaterial } = CodesColorsController();
  const { allColors, setColors, allSizes, setSizes, allMaterials, setMaterials } = FilterController();

  const { getCodesCategory } = CodesCategory();
  let colors: Array<Options> = [];
  let sizes: Array<Options> = [];
  let materials: Array<Options> = [];

  const getColorsMatch = async () => {
    await getCodesCategory(category.id!!).then((res) => {
      res.aggregations?.buckets?.map((item, index) => {
        item.values?.map((ite, ind) => {
          codesColor.options?.map((i, inde) => {
            if (ite.value === i.value) {
              colors.push({ value: i.value, label: i.label });
            }
          });
        });
      });
      setColors(colors);
    });
  };
  const getSizesMatch = async () => {
    await getCodesCategory(category.id!!).then((res) => {
      res.aggregations?.buckets?.map((item, index) => {
        item.values?.map((ite, ind) => {
          codesSize.options?.map((i, inde) => {
            if (ite.value === i.value) {
              sizes.push({ value: i.value, label: i.label });
            }
          });
        });
      });
      setSizes(sizes);
    });
  };
  const getMaterialsMatch = async () => {
    await getCodesCategory(category.id!!).then((res) => {
      res.aggregations?.buckets?.map((item, index) => {
        item.values?.map((ite, ind) => {
          codesMaterial.options?.map((i, inde) => {
            if (ite.value === i.value) {
              materials.push({ value: i.value, label: i.label });
            }
          });
        });
      });
      setMaterials(materials);
    });
  };
  useEffect(() => {
    getColorsMatch();
    getSizesMatch();
    getMaterialsMatch();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <Collapse
        onToggle={(isCollapse: boolean) => {
          setShow(isCollapse);
        }}
      >
        {/* Header del panel que se colapsa */}
        <CollapseHeader>
          <View style={{ ...contentCard(show) }}>
            <InputRdbFilter iconRdb={true} notIcon={true} icon={''} text={'Por color'} collapsable={true} />
          </View>
        </CollapseHeader>
        {/* Lista de categorías que se colapsa */}
        <CollapseBody>
          {allColors.map((item, index) => (
            <InputRdbFilter iconRdb={false} notIcon={true} icon={''} text={item.label} collapsable={false} />
          ))}
        </CollapseBody>
      </Collapse>

      <Collapse
        onToggle={(isCollapse: boolean) => {
          setShowOther(isCollapse);
        }}
      >
        {/* Header del panel que se colapsa */}
        <CollapseHeader>
          <View style={{ ...contentCard(showOther) }}>
            <InputRdbFilter iconRdb={true} notIcon={true} icon={''} text={'Por talla'} collapsable={true} />
          </View>
        </CollapseHeader>
        {/* Lista de categorías que se colapsa */}
        <CollapseBody>
          {allSizes.map((item, index) => (
            <InputRdbFilter iconRdb={false} notIcon={true} icon={''} text={item.label} collapsable={false} />
          ))}
        </CollapseBody>
      </Collapse>
      <Collapse
        onToggle={(isCollapse: boolean) => {
          setShowOther(isCollapse);
        }}
      >
        {/* Header del panel que se colapsa */}
        <CollapseHeader>
          <View style={{ ...contentCard(showOther) }}>
            <InputRdbFilter iconRdb={true} notIcon={true} icon={''} text={'Por material'} collapsable={true} />
          </View>
        </CollapseHeader>
        {/* Lista de categorías que se colapsa */}
        <CollapseBody>
          {allMaterials.map((item, index) => (
            <InputRdbFilter iconRdb={false} notIcon={true} icon={''} text={item.label} collapsable={false} />
          ))}
        </CollapseBody>
      </Collapse>
    </Container>
  );
};
export default AnimateBox;

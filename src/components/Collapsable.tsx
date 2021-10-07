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

const contentCard = (show: boolean): any => ({
  marginTop: -10,
  height: getHeight(40),
  alignItems: 'center',
  flexDirection: 'row',
});

const AnimateBox: React.FC = () => {
  const [show, setShow] = useState(false);
  const [showOther, setShowOther] = useState(false);

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
          <InputRdbFilter iconRdb={false} notIcon={true} icon={''} text={'Verde'} collapsable={false} />
          <InputRdbFilter iconRdb={false} notIcon={true} icon={''} text={'Azul'} collapsable={false} />
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
          <InputRdbFilter iconRdb={false} notIcon={true} icon={''} text={'Chica'} collapsable={false} />
          <InputRdbFilter iconRdb={false} notIcon={true} icon={''} text={'Mediano'} collapsable={false} />
          <InputRdbFilter iconRdb={false} notIcon={true} icon={''} text={'Grande'} collapsable={false} />
        </CollapseBody>
      </Collapse>
    </Container>
  );
};

export default AnimateBox;

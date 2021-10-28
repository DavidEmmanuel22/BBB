import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from '../screens/Menu';
import StaticView from '../components/StaticView';

import { WHITE } from '../constants/colors';

const Stack = createStackNavigator();

const screens: { [key: string]: string } = {
  'PaymentMethodsAndRefunds': 'me-todos-de-pago-y-reembolsos',
  'ShipmentsAndDeliveries': 'envios-y-politicas-de-entrega',
  'ReturnsAndCancellations':'devoluciones-y-cancelaciones',
  'ShopOnlineAndPickup':'compra-en-linea-recoge-en-tienda',
  'RecalledProducts':'productos-retirados-del-mercado',
  'PriceMatch':'igualacion-de-precios',
  'GiftWrap':'envoltura-para-regalo',
  'ElectronicBilling':'facturacion-electronica',
  'AboutUs':'acerca-de-nosotros',
  'CorporateResponsabilityReport':'informe-de-responsabilidad-corporativa',
  'MediaRelationship':'relacion-con-medios',
  'TermsAndConditions':'politica-de-privacidad',
  'Glosary':'glosario',
  'Accsessability':'accesibilidad',
  'NewProviders':'nuevos-proveedores',
};

const MenuStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{
        headerShown: false,
        headerMode: 'screen',
        cardStyle: { backgroundColor: WHITE },
      }}
    >
      <Stack.Screen name="Index" component={Menu} />
      { Object.keys(screens).map(screen => (
        <Stack.Screen key={screen} name={screen}>
          {() => <StaticView url={screens[screen]} /> }
        </Stack.Screen>
      )) }
    </Stack.Navigator>
  );
};

export default MenuStackNavigator;

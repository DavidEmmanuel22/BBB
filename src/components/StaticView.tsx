import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import { useQuery } from 'react-query';

import { getStaticData } from '../models/staticViewModel';
import Header from './Header';
import Title from './Title';


interface IProps {
  url: string
};

const StaticView: React.FC<IProps> = ({ url }) => {
  const { data: html, error, status } = useQuery(['staticData', url], () => getStaticData(url));

  const getMainData = (htmlString: any): string | undefined => {
    if (typeof htmlString === 'string' && error === null) {
      const styles = htmlString.match(/(<link.+\/>)/gm);
      const main = htmlString.match(/(<main id="maincontent" class="page-main-full-width">[\s\S]+<\/main>)/gm);
      if (styles !== null && main !== null) {
        return `<!doctype html><html><head>${styles.map(style => style)}<style>html,body{font-size: 32px;}.page-title{font-size:52px;}</style></head><body><div data-content-type="row" data-appearance="contained"${main[0]}</body></html>`;
      }
    }
  };

  return (
    <>
      <Header backButton={true}>
        <Image source={require('../assets/images/splash/BBB.png')} style={{ width: 130, height: 40 }} />
      </Header>
      <View style={styles.container}>
        { status === 'success' &&
          <WebView
            source={{ html: getMainData(html) }}
          />
        }
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 24,
    paddingLeft: 24
  }
});

export default StaticView;
import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Header } from 'react-native-elements';

export default function AppHeader(centerText) {
    return (
        <Header
        backgroundColor="#FFF"
        placement="center"
        leftComponent={<Image source={require("../../assets/figma.png")} style={styles.iconStyle} />}
        centerComponent={{text: centerText.centerText, style: styles.fontStyle}}
        containerStyle={styles.containerStyle}
        />
    );
  }
  const styles = StyleSheet.create({
  fontStyle: {
      color: 'black' ,
      fontSize: 28,
      fontWeight:"bold"
  },
  containerStyle:{
    height: 90
  },
  iconStyle:{
    flex: 1,
    height: 40,
    width: 40,
    margin: 10
  }
});

import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Header } from 'react-native-elements';

export default function AppHeader(centerText) {
    return (
        <Header
        backgroundColor="#FFF"
        placement="center"
        leftComponent={<Image source={require("../../assets/logo.jpg")} style={styles.iconStyle} />}
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
    height: 100
  },
  iconStyle:{
    flex: 1,
    height: 35,
    width: 35,
    margin: 10
  }
});

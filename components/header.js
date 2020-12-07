import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';
export default function AppHeader(centerText) {
    return (
        <Header
        backgroundColor="#FFECA3"
        placement="center"
        centerComponent={{text: centerText.centerText, style: styles.fontStyle}}
        />
    );
  }
  const styles = StyleSheet.create({
    fontStyle: {
        color: 'black' ,
        fontSize: 28
        }
});

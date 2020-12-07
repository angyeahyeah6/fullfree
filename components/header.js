import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
export default function AppHeader(centerText) {
    return (
        <Header
        backgroundColor="#FFECA3"
        placement="center"
        centerComponent={{ text: centerText.centerText, style: { color: 'black' , fontSize: 28} }}
        />
    );
  }
import React from 'react';
import { StyleSheet, Text, View , Dimensions} from 'react-native';
import PaymentSuccess from "./element/payment"
import AppHeader from './element/header';
export default function Search({navigation}) {
    return (
        
        <View style={styles.containerStyle}>
            <AppHeader centerText = "payment"></AppHeader>
        
        </View>
    );
  }
const styles = StyleSheet.create({
    containerStyle:{
        flex:1
    },
});

import React from 'react';
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import AppHeader from './element/header';
export default function Supplier({navigation}){
    return(
        <View style={styles.containerStyle}>
            <AppHeader centerText="Share Food"></AppHeader>
        </View>
    )
}
const styles = StyleSheet.create({
    containerStyle:{
        flex:1
    }
});

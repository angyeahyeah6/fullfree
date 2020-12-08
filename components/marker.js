import React from 'react';
import MapView from 'react-native-maps';
import AppHeader from './header';
import { StyleSheet, Image, Text, View , Alert} from 'react-native';
import {
    Marker,
    Callout,
    CalloutSubview,
    ProviderPropType,
  } from 'react-native-maps';
import CustomCallout from '../components/customCallOut'


export default function AppMarker({marker, index}) {
    return (
        <MapView.Marker key={index} coordinate={marker.coordinate}>
            <Image source={require("../assets/marker.png")} style = {styles.markerStyle}/>
            <Callout tooltip onPress={e => {Alert.alert('jump to food page');}}>
                <CustomCallout>
                    <Text style={styles.markerCallFontStyle}>
                         {marker.amount}
                    </Text> 
                    <Image source={marker.image} style={styles.markerCallPicStyle}></Image>
                    
                </CustomCallout>
            </Callout>
        </MapView.Marker>
)}
const styles = StyleSheet.create({
    containerStyle:{
        flex:1
    },
    mapStyle: {
        flex: 2
    },
    markerStyle:{
        flex: 1,
        width: 40,
        height: 40,
        alignSelf:'center'
    },
    markerCallStyle:{
        backgroundColor: "white"
    },
    markerCallFontStyle:{
        fontSize: 20,
        alignSelf:'center',
        color:"black"
    },
    markerCallPicStyle:{
        flex: 1,
        width: 50,
        height: 50,
        alignSelf:'center'
    }
});
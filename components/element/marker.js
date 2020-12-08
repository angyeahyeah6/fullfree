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
import CustomCallout from './customCallOut'


export default function AppMarker({marker, index}) {
    return (
        <MapView.Marker key={index} coordinate={marker.coordinate}>
            <Image source={require("../../assets/marker.png")} style = {styles.markerStyle}/>
            <Callout tooltip onPress={e => {Alert.alert('jump to food page');}}>
                <CustomCallout>
                    <View style={{padding: 10}}>
                        <Text style={styles.markerCallFontStyle}>
                            {marker.restaurantName}
                        </Text> 
                    </View>
                    <View style={{flexDirection: "row"}}> 
                        <Image source={{ uri: marker.images[0].image }} style={styles.markerCallPicStyle}></Image>
                        <View style={styles.markerCallInfoStyle}>
                            <Text style={styles.markerCallInfoTextStyle}>$ {marker.newPrice} /per</Text>
                            <Text style={styles.markerCallInfoTextStyle}>5 km </Text>
                            <Text style={styles.markerCallInfoTextStyle}>{marker.amount} portions</Text>
                        </View>
                    </View>
                    
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
        alignSelf:"center",
        color:"white"
    },
    markerCallPicStyle:{
        flex: 1,
        width: 150,
        height: 120,
        alignSelf:'center',
        borderBottomLeftRadius: 10,

    },
    markerCallInfoStyle:{
        width: 100,
        backgroundColor: "#004AAD",
        flexDirection: "column",
        borderBottomRightRadius: 10,
    },
    markerCallInfoTextStyle:{
        color: "white",
        fontSize: 15,
        alignSelf:"center",
        padding: 10
    }
});
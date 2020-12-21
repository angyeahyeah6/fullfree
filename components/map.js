import React, { useState } from 'react';
import MapView from 'react-native-maps';
import AppHeader from './element/header';
import { StyleSheet,  View, Dimensions, Text, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import AppMarker from './element/marker';
const markers = require('../data/foodPostData').foodPosts

export default function GoogleMap({sendDataToParent, navigation}) {
    return (
        <MapView showsUserLocation={true} zoomTapEnabled={false} style={styles.mapStyle}>
            <View style={styles.buttonContainerStyle}>
                <Button buttonStyle={styles.buttonStyle}  title="View Restaurants" titleStyle={styles.titleStyle} 
                onPress={() => sendDataToParent("foodBrowse")} />
                {markers.map((marker, index) => {
                    return (
                    <AppMarker marker={marker} index={index} sendDataToParent={sendDataToParent}/>
                    );
                })}
            </View>
        </MapView>
    );
  }
const styles = StyleSheet.create({
    containerStyle:{
        flex:1
    },
    mapStyle: {
        flex: 1,
    },
    markerStyle:{
        flex: 1,
        width: 30,
        height: 30
    },
    buttonContainerStyle:{
        paddingRight: Dimensions.get("window").width*0.02,
        paddingTop: Dimensions.get("window").height*0.02,
    },
    buttonStyle:{
        position: 'relative',//use absolute position to show button on top of the map
        alignSelf: 'flex-end', //for align to right
        backgroundColor: '#F1BC19',
        borderRadius: 10,
    },
    titleStyle:{
        color: "black"
    }
});

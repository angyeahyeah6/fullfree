import React from 'react';
import MapView from 'react-native-maps';
import AppHeader from './header';
import { StyleSheet,  View } from 'react-native';

import AppMarker from './marker';
const markers = require('../data/markerData').markers

export default function GoogleMap() {
    return (
        <View style={styles.containerStyle}>
            <AppHeader centerText="Share Food"></AppHeader>
            <MapView showsUserLocation={true} style={styles.mapStyle}>
                {markers.map((marker, index) => {
                    return (
                    <AppMarker marker={marker} index={index}/>
                    );
                })}
            </MapView>
        </View>
    );
  }
const styles = StyleSheet.create({
    containerStyle:{
        flex:1
    },
    mapStyle: {
        flex: 2
    },
    markerStyle:{
        flex: 1,
        width: 30,
        height: 30
    }
});

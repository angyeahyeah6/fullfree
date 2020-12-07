import React from 'react';
import MapView from 'react-native-maps';
import AppHeader from './header';
import { StyleSheet, Text, View , Dimensions} from 'react-native';

export default function GoogleMap() {
    return (
        <View style={styles.containerStyle}>
            <AppHeader centerText="Share Food"></AppHeader>
            <MapView showsUserLocation={true} style={styles.mapStyle} />
        </View>
    );
  }
const styles = StyleSheet.create({
    containerStyle:{
        flex:1
    },
    mapStyle: {
        flex: 2
    }
});

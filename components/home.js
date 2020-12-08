import React, { useState } from 'react';
import MapView from 'react-native-maps';
import AppHeader from './element/header';
import { StyleSheet,  View, Dimensions, Text, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import GoogleMap from './map';
import FoodBrowse from './foodBrowse';
import AppMarker from './element/marker';
const markers = require('../data/markerData').markers

export default function Home() {
    const [pageStatus, setPageStatus] = useState("map");
    const sendDataToParent = (pgStatus) => {
        setPageStatus(pgStatus)
      };
    _rederComponent = function(){
        if(pageStatus == "map"){
            return(
                <GoogleMap sendDataToParent={sendDataToParent}/>
            )
        }
        else if(pageStatus == "foodBrowse"){
            return(
                <FoodBrowse sendDataToParent={sendDataToParent}/>
            )
        }
    }
    return (
        <View style={styles.containerStyle}>
            <AppHeader centerText="Share Food"></AppHeader>
            {_rederComponent()}
        </View>
    );
  }
  const styles = StyleSheet.create({
    containerStyle:{
        flex:1
    }})

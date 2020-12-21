import React, { useState } from 'react';
import AppHeader from './element/header';
import { StyleSheet,  View, Dimensions, Text, Alert } from 'react-native';
import GoogleMap from './map';
import FoodBrowse from './foodBrowse';

export default function Home({navigation}) {
    const [pageStatus, setPageStatus] = useState("map");
    const sendDataToParent = (pgStatus) => {
        setPageStatus(pgStatus)
      };
    _renderComponent = function(){
        if(pageStatus == "map"){
            return(
                <GoogleMap sendDataToParent={sendDataToParent} navigation={navigation}/>
            )
        }
        else if(pageStatus == "foodBrowse"){
            return(    
                <FoodBrowse sendDataToParent={sendDataToParent} navigation={navigation}/>
            )
        }
    }
    _renderHeader = function(){
        if(pageStatus == "map"){
            return(
                <AppHeader centerText="Map"></AppHeader>
            )
        }
        else if(pageStatus == "foodBrowse"){
            return(    
                <AppHeader centerText="Discover"></AppHeader>
            )
        }
    }
    return (
        <View style={styles.containerStyle}>
            { _renderHeader()}
            {_renderComponent()}
        </View>
    );
  }
  const styles = StyleSheet.create({
    containerStyle:{
        flex:1
    }})

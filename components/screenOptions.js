import React from 'react';
import { StyleSheet, Image, Text, View , Dimensions} from 'react-native';
exports.screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconFoucus;
      let iconPath;
      if (route.name === 'Map') {
        iconFoucus = focused ? styles.navigatorTopFocusStyle : styles.navigatorTopStyle;
        iconPath = require('../assets/map.png')
      } 
      else if(route.name === 'Search'){
        iconFoucus = focused ? styles.navigatorTopFocusStyle : styles.navigatorTopStyle;
        iconPath = require('../assets/search.png')
      }
      return (
      <View style={iconFoucus}>
        <Image style={styles.iconStyle} source={iconPath}/>
      </View>);
    },
  })
  const styles = StyleSheet.create({
    container: {
      flex:5,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black'
    },
    navigatorStyle:{
      height:90,
      alignItems: 'center',
      justifyContent: 'center',
      color: "#004AAD"
    },
    navigatorTopFocusStyle:{
      width: 50,
      borderTopWidth: 2,
      borderTopColor: '#F6B93B'
    },
    navigatorTopStyle:{
      width: 50,
      borderTopWidth: 2,
      borderTopColor: '#004AAD'
    },
    iconStyle:{
      height: 30,
      width: 30,
      alignSelf: "center",
      margin: "auto",
      marginTop: 10,
    }
  });
  
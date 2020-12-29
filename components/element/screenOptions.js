import React from 'react';
import { StyleSheet, Image, Text, View , Dimensions} from 'react-native';
exports.screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      const img_path="../../assets/"
      let iconFoucus;
      let iconPath;
      if (route.name === 'Home') {
        iconFoucus = focused ? styles.navigatorTopFocusStyle : styles.navigatorTopStyle;
        iconPath = focused ? require(img_path + "yellow_home.png") : require(img_path + "black_home.png")
      } 
      else if(route.name === 'Search'){
        iconFoucus = focused ? styles.navigatorTopFocusStyle : styles.navigatorTopStyle;
        iconPath = focused ? require(img_path + "yellow_search.png") : require(img_path + "black_search.png")
      }
      else if(route.name === 'OrderList'){
        iconFoucus = focused ? styles.navigatorTopFocusStyle : styles.navigatorTopStyle;
        iconPath = focused ? require(img_path + "yellow_orderlist.png") : require(img_path + "black_orderlist.png")
      }
      else if(route.name === 'Profile'){
        iconFoucus = focused ? styles.navigatorTopFocusStyle : styles.navigatorTopStyle;
        iconPath = focused ? require(img_path + "yellow_profile.png") : require(img_path + "black_profile.png")
      }
      else if(route.name === 'Supplier'){
        iconFoucus = focused ? styles.navigatorTopFocusStyle : styles.navigatorTopStyle;
        iconPath = focused ? require(img_path + "yellow_supplier.png") : require(img_path + "black_supplier.png")
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
      color: "#000000"
    },
    navigatorTopFocusStyle:{
      width: 50,
    },
    navigatorTopStyle:{
      width: 50,
    },
    iconStyle:{
      height: 30,
      width: 30,
      alignSelf: "center",
      margin: "auto",
      marginTop: 10,
    }
  });
  
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View , Dimensions} from 'react-native';
import GoogleMap from './components/map'
import Home from './components/home'
import Search from './components/search'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const screenOptions = require('./components/element/screenOptions')

export default function App() {
  const Tab = createBottomTabNavigator();
  
  return ( 
    <NavigationContainer>
        <Tab.Navigator 
        screenOptions={screenOptions.screenOptions}
        tabBarOptions={{
          activeTintColor: "#004AAD",
          inactiveTintColor: 'gray',
          style : styles.navigatorStyle
        }}>
          <Tab.Screen name="Map" component={Home} />
          <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

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

// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import Home from './components/home'
import Search from './components/search'
import OrderList from './components/orderList'
import Supplier from './components/supplier'
import Profile from './components/profile'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PaymentSuccess from "./components/element/payment"
const screenOptions = require('./components/element/screenOptions')

export default function App() {
  const Tab = createBottomTabNavigator();
  
  return ( 
    <NavigationContainer>
        <Tab.Navigator 
        screenOptions={screenOptions.screenOptions}
        tabBarOptions={{
          activeTintColor: "#F6B93B",
          inactiveTintColor: "#000000",
          style : styles.navigatorStyle
        }}>
           <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="OrderList" component={OrderList} />
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Supplier" component={Supplier} />
          
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

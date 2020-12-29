// import { StatusBar } from 'expo-status-bar';
import React, { useState, useReducer } from 'react';
import { StyleSheet } from 'react-native';
import Home from './components/home'
import Search from './components/search'
import OrderList from './components/orderList'
import Supplier from './components/supplier'
import Profile from './components/profile'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const screenOptions = require('./components/element/screenOptions')
export default function App() {
  const Tab = createBottomTabNavigator();
  const [supplierBarVisible, setVisible] = useState(true)
  const [bannerVisible, setBannerVisible] = useState(false);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const sendVisibleToParent = (barVisible) => {
    setVisible(barVisible)
  };
  const [order, setOrder] = useState([]);
  const setOrderToConfirm = function(confirmList){
    var tmp = order;
    confirmList.map((idx, k) =>{
      tmp[idx]["confirm"] = true
    });
    setOrder(tmp);
  }
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
          <Tab.Screen name="OrderList" >
            {props => <OrderList order={order} setBannerVisible={setBannerVisible} setOrderToConfirm={setOrderToConfirm}/>}
          </Tab.Screen>
          <Tab.Screen name="Home"> 
            {props => <Home order={order} setOrder={setOrder} bannerVisible={bannerVisible} setBannerVisible={setBannerVisible}/>}
          </Tab.Screen>
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Supplier" options={{tabBarVisible: supplierBarVisible}}>
            {props => <Supplier sendVisibleToParent={sendVisibleToParent} />}
          </Tab.Screen>
          
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

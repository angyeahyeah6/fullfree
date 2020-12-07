// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View , Dimensions} from 'react-native';
import GoogleMap from './components/map'
import Search from './components/search'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  const Tab = createBottomTabNavigator();
  return ( 
    <NavigationContainer>
        <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconFoucus;
            let iconPath;
            if (route.name === 'Map') {
              iconFoucus = focused ? styles.navigatorTopFocusStyle : styles.navigatorTopStyle;
              iconPath = require('./assets/map.png')
            } 
            else if(route.name === 'Search'){
              iconFoucus = focused ? styles.navigatorTopFocusStyle : styles.navigatorTopStyle;
              iconPath = require('./assets/search.png')
            }
            return (
            <View style={iconFoucus}>
              <Image style={styles.iconStyle} source={iconPath}/>
            </View>);
          },
        })}
        tabBarOptions={{
          activeTintColor: "#004AAD",
          inactiveTintColor: 'gray',
          style : styles.navigatorStyle
        }}>
          <Tab.Screen name="Map" component={GoogleMap} />
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
    height:100,
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

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Dimensions} from 'react-native';
import AppHeader from './components/header';
// import GoogleMap from './Map';
import MapView from 'react-native-maps';
export default function App() {
  return (
    
    <View>
      <AppHeader centerText="Share Food" ></AppHeader>
      <MapView showsUserLocation={true} style={styles.mapStyle} />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  
});

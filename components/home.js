import React, { useState } from 'react';
import AppHeader from './element/header';
import { StyleSheet,  View, Dimensions, Text, Alert, Image } from 'react-native';
import GoogleMap from './map';
import FoodBrowse from './foodBrowse';
import { useNavigation } from '@react-navigation/native';
import { Banner } from 'react-native-paper';
export default function Home({order, setOrder, bannerVisible, setBannerVisible}) {
    const navigation = useNavigation();
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
                <FoodBrowse sendDataToParent={sendDataToParent} navigation ={ navigation} order={order} setOrder={setOrder}/>
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
    const _renderBanner = function(){
        console.log(bannerVisible)
        if(bannerVisible){
            return(
                <Banner
                visible={bannerVisible}
                actions={[
                  {
                    label: 'Close',
                    onPress: () => setBannerVisible(false),
                  },
                  {
                    label: 'Check ',
                    onPress: () => {setBannerVisible(false);navigation.navigate('OrderList');},
                  },
                ]}
                icon={({size}) => (
                  <Image
                    source={require("../assets/food.png")}
                    style={{
                      width: size,
                      height: size,
                    }}
                  />
                )}>
                You have order some food ! Don't forget to go and take it !
              </Banner>
            )
        }
    }
    return (
        <View style={styles.containerStyle}>
            { _renderHeader()}
            {_renderBanner()}
            {_renderComponent()}
        </View>
    );
  }
  const styles = StyleSheet.create({
    containerStyle:{
        flex:1
    }})

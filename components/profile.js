import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import AppHeader from './element/header';
import ProfileElement from './element/profileElement';
import Reservation from './element/reservation';

// Example
export default function Profile({navigation, order}){
    const [pageStatus, setPageStatus] = useState("Profile");
    const sendDataToParent = (pgStatus) => {
        setPageStatus(pgStatus);
      };
    _renderComponent = function(){
        if(pageStatus == "Profile"){
            return(
                <ProfileElement sendDataToParent={sendDataToParent} navigation={navigation} ></ProfileElement>
            )
        }
        else if(pageStatus == "Reservation"){
            // return(
            //     // <Confirmation pageStatus={pageStatus} sendDataToParent={sendDataToParent}></Confirmation>
            //     //<Reservation sendDataToParent={sendDataToParent} navigation={navigation} order={order} needContainer={needContainer} setNeed={setNeed}></Reservation>
            //     //<Reservation sendDataToParent={sendDataToParent} navigation={navigation} order={order}></Reservation>
            // )
            navigation.navigate('OrderList')
        }
        else if(pageStatus == "SupplierOrder"){
            navigation.navigate('SupplierOrder');
        }
    }
    return(
        <View style={styles.containerStyle}>
            <AppHeader centerText={pageStatus} ></AppHeader>
            {_renderComponent()}
        </View>
    )
}
const styles = StyleSheet.create({
    containerStyle:{
        flex:1
    }
});

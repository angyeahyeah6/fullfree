import React, {useState}from 'react';
import { StyleSheet, View, Image } from 'react-native';
import AppHeader from './element/header';
const payment = require("../data/foodPostData").foodPosts
import Reservation from './element/reservation';
export default function Orderlist({navigation}){
    const [pageStatus, setPageStatus] = useState("Reservation");
    const [needContainer, setNeed] = useState(false);
    const sendDataToParent = (pgStatus) => {
        setPageStatus(pgStatus)
      };
    return(
        <View>
            <AppHeader centerText={pageStatus} ></AppHeader>
            <Reservation pageStatus={pageStatus} sendDataToParent={sendDataToParent}></Reservation>
        </View>
    )
}
const styles = StyleSheet.create({
    containerStyle:{
        flex:1
    },
    
});

import React, {useState}from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import AppHeader from './element/header';
const payment = require("../data/foodPostData").foodPosts
import Reservation from './element/reservation';
import Confirmation from './element/confirmation';
import Payment from './element/payment';
import PaymentSuccess from './element/paymentSuccess';
import { useNavigation } from '@react-navigation/native';
export default function Orderlist({order, setBannerVisible, setOrderToConfirm}){
    const navigation = useNavigation();
    const [pageStatus, setPageStatus] = useState("Reservation");
    const [needContainer, setNeed] = useState(false);
    const sendDataToParent = (pgStatus) => {
        setPageStatus(pgStatus);
      };
      _renderComponent = function(){
        if(pageStatus == "Reservation"){
            return(
                // <Confirmation pageStatus={pageStatus} sendDataToParent={sendDataToParent}></Confirmation>
                <Reservation sendDataToParent={sendDataToParent} navigation={navigation} order={order} needContainer={needContainer} setNeed={setNeed}></Reservation>
            )
        }
        else if(pageStatus == "Confirmation"){
            return(
                <Confirmation sendDataToParent={sendDataToParent} order={order} needContainer={needContainer} setNeed={setNeed} ></Confirmation>
            )
        }
        else if(pageStatus == "Payment"){
            return(
                <Payment sendDataToParent={sendDataToParent} navigation={navigation}></Payment>
            )
        }
        else if(pageStatus == "PaymentSuccess"){
            return(
                <PaymentSuccess sendDataToParent={sendDataToParent} navigation={navigation} setBannerVisible={setBannerVisible} setOrderToConfirm={setOrderToConfirm} order={order}></PaymentSuccess>
            )
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
    },
    
});

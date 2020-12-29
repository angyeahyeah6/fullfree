import LottieView from "lottie-react-native";
import React from 'react';
export default function PaymentSuccess({sendDataToParent, navigation, setBannerVisible, setOrderToConfirm, order}) {
    var numberList = [];
    for (var i = 0; i < order.length; i++) {
        numberList.push(i);
    }
    setOrderToConfirm(numberList);
    setBannerVisible(true);
    setTimeout(() => {
        sendDataToParent("Reservation");
        navigation.navigate('Home');                
    }, 2000);
    return ( 
        <LottieView
        source={require("../../assets/lottie/15647-yellow-check.json")}
        loop
        autoPlay
        style={{width: 100, height: 100, alignSelf: "center", padding: 100}
        }
    />)
}
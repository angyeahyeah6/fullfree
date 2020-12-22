import LottieView from "lottie-react-native";
import React from 'react';
export default function PaymentSuccess({sendDataToParent, navigation}) {
    setTimeout(() => {
        sendDataToParent("Reservation");
        navigation.navigate('Home');                
    }, 2000);
    return ( 
        <LottieView
        source={require("../../assets/lottie/30116-tick-mark-circle.json")}
        loop
        autoPlay
        style={{width: 100, height: 100, alignSelf: "center", padding: 100}
        }
    />)
}
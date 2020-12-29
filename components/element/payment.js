import LottieView from "lottie-react-native";
import React from 'react';
import { StyleSheet, View, Image } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements'
// import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import {CreditCardInput} from 'react-native-payment-card'
export default function Payment({sendDataToParent, navigation}) {
    return ( 
        <View>
            <TouchableOpacity onPress={() => sendDataToParent("Reservation")}>
                <Image source={require("../../assets/back.png")} style={styles.backButtonStyle}></Image>
            </TouchableOpacity>
            <CreditCardInput />
            <Button
            buttonStyle={styles.paymentButtonStyle}
            title='Cofirm'
            titleStyle={{color:"#000000", fontWeight:"bold"}} 
            onPress={() => sendDataToParent("PaymentSuccess")}/> 
        </View>
    )
}
const styles = StyleSheet.create({
    containerStyle:{
        flex:1
    },
    backButtonStyle:{
        width: 30,
        height: 30,
        margin: 20
    },
    paymentButtonStyle:{
        width: 200,
        alignSelf:"flex-end",
        borderRadius: 10,
        paddingVertical:10,
        paddingHorizontal: 25,
        backgroundColor: "#F6C440",
        color: "#000000",
        margin: 10
    }
})
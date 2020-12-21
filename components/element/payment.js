import LottieView from "lottie-react-native";
import React from 'react';
import { StyleSheet, View } from "react-native";
import { Button } from 'react-native-elements'
// import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import {CreditCardInput} from 'react-native-payment-card'
export default function Payment({sendDataToParent, navigation}) {
    return ( 
        <View>
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
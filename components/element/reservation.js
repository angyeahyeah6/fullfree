import React, {useState}from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Image } from 'react-native';
import { Card, CheckBox, ListItem, Button, Icon, Text } from 'react-native-elements'
import FoodOrder from './foodOrder';
const payment = require("../../data/foodPostData").foodPosts
export default function Reservation({pageStatus, sendDataToParent}){
    const [needContainer, setNeed] = useState(false);
    _renderBack = function(){
        if(pageStatus == "Confirmation"){
            return(
                <Image source={require("../../assets/back.png")} style={styles.deleteStyle}
                onPress={() => {
                    sendDataToParent("Reservation");
                    console.log("hi");
                }}/>
            )
        }
    }
    _renderSum = function(){
        if(pageStatus == "Reservation"){
            return(
                <View>
                    <Button
                    buttonStyle={styles.shoppingButtonStyle}
                    title='Keep Shopping' onPress={() => navigation.navigate('Home')}
                    titleStyle={{fontWeight:"bold"}}/>
                    <Button
                    buttonStyle={styles.paymentButtonStyle}
                    title='Check Out' onPress={() => navigation.navigate('Search')}
                    titleStyle={{color:"#000000", fontWeight:"bold"}} 
                    onPress={() => sendDataToParent("Confirmation")}/>
                </View>
            )
        }
        else if(pageStatus == "Confirmation"){
            return(
                <Text></Text>
            )
        }
    }
    return(
        <View>
            <View style={{}}>
            {_renderBack()}
                <View style={styles.categoryTextContainerStyle}>
                    <Text style={styles.categoryTextStyle}>Product</Text>
                    <Text style={styles.categoryTextStyle}>Amount </Text>
                </View>
            </View>
            <ScrollView>
                {payment.map((pay) => {
                    return(
                        <FoodOrder pay={pay}/>
                    )
                })}
                <CheckBox
                containerStyle={styles.checkboxStyle}
                title='Container'
                checkedColor={"#F6C440"}
                checked={needContainer}
                onPress={() => setNeed(!needContainer)}
                />
                <View style={styles.buttonContainerStyle}>
                {_renderSum()}
                </View>
            </ScrollView>
        </View>
    
    )
}
const styles = StyleSheet.create({
    containerStyle:{
        flex:1
    },
    deleteStyle:{
        width: 30,
        height: 30,
        margin:10,
    },
    checkboxStyle:{
        backgroundColor: "transparent",
        borderColor: "transparent"
    },
    categoryTextContainerStyle:{
        alignSelf: "flex-end",
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    categoryTextStyle:{
        fontSize:24,
        fontWeight: "bold",
        borderColor: "transparent",
        marginHorizontal: 15,
        marginTop: 10
    },
    buttonContainerStyle:{
        padding: 20,
        flexDirection: "column",
    },
    shoppingButtonStyle:{
        width: 200,
        alignSelf:"flex-end",
        borderRadius: 10,
        paddingVertical:10,
        paddingHorizontal: 25,
        backgroundColor: "#000000",
        margin: 10
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
});

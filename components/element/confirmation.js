import React, {useState}from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Image } from 'react-native';
import { Card, CheckBox, ListItem, Button, Icon, Text } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import FoodOrder from './foodOrder';
const payment = require("../../data/foodPostData").foodPosts
export default function Confirmation({sendDataToParent, order, needContainer, setNeed}){
    const renderContainermoney = function(){
        if(needContainer){
            return(
                <Text style={styles.sumTextStyle}>5</Text>
            )
        }
    }
    const renderContainerTitle = function(){
        if(needContainer){
            return(
                <Text style={styles.sumTextStyle}>Container</Text>
            )
        }
    }
    return(
        <ScrollView>
            <TouchableOpacity onPress={() => sendDataToParent("Reservation")}>
                <Image source={require("../../assets/back.png")} style={styles.backButtonStyle}></Image>
            </TouchableOpacity>
            <View>
                <View style={styles.categoryTextContainerStyle}>
                    <Text style={styles.categoryTextStyle}>Product</Text>
                    <Text style={styles.categoryTextStyle}>Amount </Text>
                </View>
            </View>
            {order.map((pay) => {
                return(
                    <FoodOrder pay={pay}/>
                )
            })}
            <CheckBox
            containerStyle={styles.checkboxStyle}
            title='Container'
            checkedColor={"#F6C440"}
            checked={needContainer}
            />
            <View style={styles.buttonContainerStyle}>
                <View style={{alignSelf:"flex-end"}}>
                    <Text style={styles.sumTextStyle}>Total</Text>
                </View>
                <View style={{flex:3, flexDirection: "row"}}>
                    <View style={{flex:2}}>
                        <Text style={styles.sumTextStyle}>Food</Text>
                        <Text style={styles.sumTextStyle}>handling Fee</Text>
                        {renderContainerTitle()}
                    </View>
                    <View style={{flex:1}}>
                        <Text style={styles.sumTextStyle}>0</Text>
                        <Text style={styles.sumTextStyle}>{10*order.length}</Text>
                        {renderContainermoney()}
                    </View>
                </View>
                <View style={styles.lineStyle}></View>
                <View style={{flex:3, flexDirection: "row"}}>
                    <View style={{flex:2}}>
                        <Text style={styles.sumTextStyle}>Total</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={styles.sumTextStyle}>{10*order.length + Number(needContainer)*5}</Text>
                    </View>
                </View>
                <Button
                buttonStyle={styles.paymentButtonStyle}
                title='Go To Payment'
                titleStyle={{color:"#000000", fontWeight:"bold"}} 
                onPress={() => sendDataToParent("Payment")}/>
            </View>
        </ScrollView>
    
    )
}
const styles = StyleSheet.create({
    containerStyle:{
        flex:1
    },
    touchableStyle:{
        width: 30,
    },
    backButtonStyle:{
        width: 30,
        height: 30,
        margin: 20
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
    },
    sumTextStyle:{
        fontWeight: "bold",
        fontSize: 16,
        textAlign: 'right',
        margin:5
    },
    lineStyle:{
        borderColor: "black", 
        borderWidth:1, 
        margin: 10
    }
});

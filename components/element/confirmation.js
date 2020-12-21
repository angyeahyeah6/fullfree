import React, {useState}from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Image } from 'react-native';
import { Card, CheckBox, ListItem, Button, Icon, Text } from 'react-native-elements'
import FoodOrder from './foodOrder';
const payment = require("../../data/foodPostData").foodPosts
export default function Confirmation({sendDataToParent}){
    const [needContainer, setNeed] = useState(false);
    return(
        <ScrollView>
            <View>
                <View style={styles.categoryTextContainerStyle}>
                    <Text style={styles.categoryTextStyle}>Product</Text>
                    <Text style={styles.categoryTextStyle}>Amount </Text>
                </View>
            </View>
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
                <View style={{alignSelf:"flex-end"}}>
                    <Text style={styles.sumTextStyle}>Total</Text>
                </View>
                <View style={{flex:3, flexDirection: "row"}}>
                    <View style={{flex:2}}>
                        <Text style={styles.sumTextStyle}>Food</Text>
                        <Text style={styles.sumTextStyle}>handling Fee</Text>
                        <Text style={styles.sumTextStyle}>Container</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={styles.sumTextStyle}>0</Text>
                        <Text style={styles.sumTextStyle}>20</Text>
                        <Text style={styles.sumTextStyle}>5</Text>
                    </View>
                </View>
                <View style={styles.lineStyle}></View>
                <View style={{flex:3, flexDirection: "row"}}>
                    <View style={{flex:2}}>
                        <Text style={styles.sumTextStyle}>Total</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={styles.sumTextStyle}>25</Text>
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

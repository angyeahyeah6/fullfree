import React, {useState}from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Image } from 'react-native';
import { Card, CheckBox, ListItem, Button, Icon, Text, Divider } from 'react-native-elements'
import FoodOrder from './foodOrder';

const payment = require("../../data/foodPostData").foodPosts
export default function Reservation({sendDataToParent, navigation, order, needContainer, setNeed}){
    const _renderConfirm = function(){
        return(
            <View>
            <View style={{margin: 20}}>
                <Text style={styles.categoryTextStyle}>Confirm Order</Text>
                <Divider style={{ backgroundColor: 'black', height: 3 }} />
            </View>
            <View>
            <View style={styles.categoryTextContainerStyle}>
                <Text style={styles.categoryTextStyle}>Product</Text>
                <Text style={styles.categoryTextStyle}>Amount </Text>
            </View>
        </View>
        
            {order.map((pay) => {
                if(pay.confirm){
                    return(
                        <FoodOrder pay={pay}/>
                    )
                }
            })}
        </View>
        )
    }
    if(order.length > 0){
        return(
            
                <ScrollView>
                {_renderConfirm()}
                <View style={{margin: 20}}>
                    <Text style={styles.categoryTextStyle}>Current Order</Text>
                    <Divider style={{ backgroundColor: 'black', height: 3 }} />
                </View>
                <View>
                    <View style={styles.categoryTextContainerStyle}>
                        <Text style={styles.categoryTextStyle}>Product</Text>
                        <Text style={styles.categoryTextStyle}>Amount </Text>
                    </View>
                </View>
                
                    {order.map((pay) => {
                        if(!pay.confirm){
                            return(
                                <FoodOrder pay={pay}/>
                            )
                        }
                    })}
                    <CheckBox
                    containerStyle={styles.checkboxStyle}
                    title='Container'
                    checkedColor={"#F6C440"}
                    checked={needContainer}
                    onPress={() => setNeed(!needContainer)}
                    />
                    <View style={styles.buttonContainerStyle}>
                        <View>
                            <Button
                            buttonStyle={styles.shoppingButtonStyle}
                            title='Keep Shopping' onPress={() => navigation.navigate('Home')}
                            titleStyle={{fontWeight:"bold"}}/> 
                            <Button
                            buttonStyle={styles.paymentButtonStyle}
                            title='Check Out'
                            titleStyle={{color:"#000000", fontWeight:"bold"}} 
                            onPress={() => sendDataToParent("Confirmation")}/> 
                         </View>
                    </View>
                </ScrollView>
        
        )
    }
    else{
        return(
        <View>
            <ScrollView>
            <View style={styles.buttonContainerStyle}>
            <Text style={styles.categoryTextStyle}>Nothing in the bucket list, Go look for some food !</Text>
                        <View>
                            <Button
                            buttonStyle={styles.shoppingButtonStyle}
                            title='Keep Shopping' onPress={() => navigation.navigate('Home')}
                            titleStyle={{fontWeight:"bold"}}/> 
                         </View>
                    </View>
            </ScrollView>
        </View>
        )
    }
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

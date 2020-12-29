import React from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Image } from 'react-native';
import { Card, ListItem, Button, Icon, Text } from 'react-native-elements'
export default function FoodOrder({pay}){
return(
    <ScrollView>
    <View style={{flexDirection: "row", padding: 20}}>
    <Image source={{uri: pay.image}} style={styles.cardPicStyle}/>
    <View style={{flexDirection: "row"}}>
    <View style={styles.cardInfoContainerStyle}>
        <Text style={styles.cardInfoContainerTextStyle}> {pay.foodName}</Text>
    </View>
    <View style={styles.cardInfoContainerStyle}>
        <Text style={styles.cardInfoContainerTextStyle}> {pay.amount}</Text>
    </View>
    </View>
    </View>
    </ScrollView>
            )
}
const styles = StyleSheet.create({
    cardStyle:{
        flexDirection: 'row',
        backgroundColor: 'transparent',
        borderColor: "transparent"
    },
    cardPicStyle:{
        width: 150,
        height: 150,
        borderRadius: 20,
        shadowColor: "rgba(0,0,0, 0.3)",
        shadowOffset:{  width: 5,  height: 5 }
    },
    cardInfoContainerStyle:{
        flexDirection: "row",
        justifyContent:"center",
        width: 100,
        marginRight: 20
    },
    cardInfoContainerTextStyle:{
        justifyContent: "center",
        color: "black",
        fontSize: 20,
        marginHorizontal: 10
    },

});
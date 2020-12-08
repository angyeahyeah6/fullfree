import React from 'react';
import { StyleSheet, Image, Text, View , Dimensions, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {FlatListSlider} from 'react-native-flatlist-slider';
export default function FoodCard({post}){
    return(
        <Card containerStyle={styles.cardStyle}>
            <View style={styles.cardTitleContainerStyle}>
                <Card.Title style={styles.cardResStyle}>{post.restaurantName}</Card.Title>
                <View style={{width: Dimensions.get("screen").width*0.05}}></View>
                <Card.Title style={styles.cardFoodStyle}>{post.foodName}</Card.Title>
            </View>
            <View>
                <FlatListSlider data={post.images} imageKey={'image'} />
            </View>
            <View style={styles.cardInfoContainerStyle}>
                <View style={{flexDirection: "column"}}>
                    <Text style={styles.cardInfoPriceStyle}> $ {post.originPrice} / per </Text>
                    <Text style={styles.cardInfoDiscountPriceStyle}> $ {post.newPrice} / per</Text>
                </View>
                <View style={{width: Dimensions.get("screen").width*0.3}}></View>
                <Button
                    buttonStyle={styles.orderButtonStyle}
                    title='Order' />
                </View>
        </Card>
    )
}
const styles = StyleSheet.create({
    cardStyle:{
        flexDirection: 'column',
        backgroundColor: '#FFECA3',
        padding: 0,
        borderRadius:10,
        shadowColor: "rgba(0,0,0, 0.3)",
        shadowOffset:{  width: 5,  height: 5 }
    },
    cardTitleContainerStyle:{
        flexDirection: 'row',
        padding: 12,
        paddingBottom: 0
    },
    cardResStyle:{
        alignItems: 'flex-start',
        fontSize: 30
    },
    cardFoodStyle:{
        fontSize: 15,
        marginTop: 10,
    },
    cardInfoContainerStyle:{
        flexDirection:"row",
        padding: 12,
    },
    cardInfoPriceStyle:{
        fontSize: 20,
        textDecorationLine:"line-through"
    },
    cardInfoDiscountPriceStyle:{
        color: "#EA5167",
        fontSize: 20,
    },
    orderButtonStyle:{
        alignSelf:"flex-end",
        borderRadius: 10,
        paddingVertical:10,
        paddingHorizontal: 25,
        backgroundColor: "#004AAD",
        color: "white"
    }
});
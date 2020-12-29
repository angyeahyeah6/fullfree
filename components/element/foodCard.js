import { TabRouter } from '@react-navigation/native';
import React ,{ useState } from 'react';
import { StyleSheet, Image, Text, View , Dimensions, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {FlatListSlider} from 'react-native-flatlist-slider';
import InputSpinner from "react-native-input-spinner";
export default function FoodCard({post, index, navigation, order, setOrder}){
    const [count, setCount] = useState(0);
    console.log(order)
    return(
        <Card containerStyle={styles.cardStyle}>
            <View style={styles.cardTitleContainerStyle}>
                <Card.Title style={styles.cardResStyle}>{post.foodName}</Card.Title>
                <View style={{width: Dimensions.get("screen").width*0.05}}></View>
                <View style={{flex:1 , alignItems:"flex-end"}}>
                    <Button buttonStyle={styles.cardDetailButtonStyle} titleStyle={styles.cardDetailStyle} title="Detail" onPress={() => sendDataToParent("map")} />
                </View>
                {/* <Card.Title style={styles.cardFoodStyle}>{post.foodName}</Card.Title> */}
            </View>
            <View>
                <FlatListSlider data={post.images} imageKey={'image'} />
            </View>
            <View style={styles.cardInfoContainerStyle}>
                <View style={{flexDirection: "column"}}>
                <InputSpinner value={count} color={"#40c5f4"} 
                    buttonStyle={styles.orderPortionButtonStyle}
                    max={2}
                    min={0}
                    colorMax={"grey"}
                    colorMin={"grey"}
                    style={styles.orderPortionStyle}
                    onChange={(num) => {
                        setCount(num)
                    }}/>
                </View>
                <View style={{flex:1 , alignItems:"flex-end", paddingTop: 5}}>
                <Button
                    buttonStyle={styles.orderButtonStyle}
                    title='Reserve' onPress={() => {
                        setOrder(order.concat([{foodName: post.foodName, amount: count, image: post.images[0].image, confirm: false}]));
                        navigation.navigate('OrderList');
                    }}/>
                </View>
            </View>
        </Card>
    )
}
const styles = StyleSheet.create({
    cardStyle:{
        flexDirection: 'column',
        backgroundColor: '#F6C440',
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
    cardDetailButtonStyle:{
        backgroundColor: "white",
        alignSelf: "center",
        borderRadius: 10
    },
    cardDetailStyle:{
        color:"#000000",
        fontWeight: 'bold',
        marginHorizontal: 15
    },
    cardFoodStyle:{
        fontSize: 15,
        marginTop: 10,
    },
    cardInfoContainerStyle:{
        flexDirection:"row",
        padding: 12,
    },
    orderPortionStyle:{
        backgroundColor: "white",
        borderRadius:100,
        height: 50
    },
    orderPortionButtonStyle:{
        backgroundColor: "#000000",
    },
    orderButtonStyle:{
        alignSelf:"flex-end",
        borderRadius: 10,
        paddingVertical:10,
        paddingHorizontal: 25,
        backgroundColor: "#000000",
        color: "white"
    }
});
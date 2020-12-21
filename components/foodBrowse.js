import React from 'react';
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import FoodCard from './element/foodCard'
import mainGrey from './css/style';
const posts = require("../data/foodPostData").foodPosts
export default function FoodPay({sendDataToParent, navigation}){
    return(
    <ScrollView>
        <View style={styles.buttonContainerStyle}>
            <Button buttonStyle={styles.buttonStyle}  title="View Map" titleStyle={styles.titleStyle} 
            onPress={() => sendDataToParent("map")} />
            {posts.map((p, index) => {
                return ( <FoodCard post={p} index={index} navigation={navigation}/> );
            })}
        </View>
    </ScrollView>
    )
}
const styles = StyleSheet.create({
    containerStyle:{
        flex:1
    },
    mapStyle: {
        flex: 1,
    },
    markerStyle:{
        flex: 1,
        width: 30,
        height: 30
    },
    buttonContainerStyle:{
        paddingRight: Dimensions.get("window").width*0.02,
        paddingTop: Dimensions.get("window").height*0.02,
    },
    buttonStyle:{
        position: 'relative',//use absolute position to show button on top of the map
        alignSelf: 'flex-end', //for align to right
        backgroundColor: '#F1BC19',
        borderRadius: 10,
    },
    titleStyle:{
        color: "black",
        fontWeight: 'bold'
    }
});

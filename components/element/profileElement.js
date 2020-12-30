import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View , Dimensions, ScrollView, FlatList, TouchableOpacity, Image,Modal,TouchableHighlight} from 'react-native';
import { SearchBar,Card,Avatar, ListItem, Button } from 'react-native-elements';
import {FlatListSlider} from 'react-native-flatlist-slider';
import { useNavigation } from '@react-navigation/native';
// import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
export default function ProfileElement({sendDataToParent}) {
    const navigation = useNavigation();
    const buttons = [
        {
            name: "My orders",
            id: 1,
            location: "Reservation",
        },
        {
            name: "My posts",
            id: 2,
            location: "SupplierOrder"
        },
        {
            name: "Health Condition",
            id: 3,
            location: "HealthForm"
        }
    ]
    const ItemSeparatorView = () => {
        return (
          // Flat List Item Separator
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#C8C8C8',
            }}
          />
        );
      };    
    function getItem(item) {
        // Function for click on an item
        console.log(item);
        if (item == "Reservation") {
            navigation.navigate("OrderList")
        } else if (item == "SupplierOrder"){
            sendDataToParent("SupplierOrder");
        } else if (item == "HealthForm"){
        }
    }
    const ItemView = ({ item }) => {
        return (
          // Flat List Item
          <TouchableOpacity onPress={() => getItem(item.location)}>
            <ListItem containerStyle={styles.profileStyle}>
              <ListItem.Content>
                <ListItem.Title >{item.name}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          </TouchableOpacity>
        );
      };
    return ( 
        <View> 
            <Card containerStyle = {styles.cardStyle}>
                <ListItem containerStyle = {styles.cardStyle}>
                    <Avatar rounded size = "large" source= {{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAyd59Rdb-AVScBP7fCYxvtIpYvqYfsZ1V8Q&usqp=CAU"}}
                        avatarStyle={{borderColor: 'transparent'}}/>
                    <ListItem.Content style = {{flexDirection:'row'}}>
                        <ListItem.Title style={{ color: 'rgba(0,0,0,0.7)', fontWeight: 'bold', fontSize: 25 }}>Rebecca Liu</ListItem.Title>
                        <TouchableOpacity onPress={() => {sendDataToParent("None");}}>
                            <Image source={require("../../assets/edit.png")} style={styles.iconStyle}></Image>
                        </TouchableOpacity>
                    </ListItem.Content>
                </ListItem>
            </Card>
            <FlatList
                    style = {styles.list}
                    data = {buttons}
                    keyExtractor = {(item,index) => index.toString()}
                    ItemSeparatorComponent = {ItemSeparatorView}
                    renderItem = {ItemView}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    iconStyle:{
        width: 20,
        height: 20,
        margin: 10
    },
    text:{
        color: 'rgba(0,0,0,0.7)', 
        fontWeight: 'bold', 
        fontSize: 25 
    },
    listStyle:{
        flex:1,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    },
    cardStyle:{
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    },
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
import React, {useState}from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Image } from 'react-native';
import { Card, CheckBox, ListItem, Button, Icon, Text } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import OrderCard from "./orderCard";

export default function SupplierOrder({posts, navigation, sendVisibleToParent, sendDataToParent, setPost, removePost}){
    sendVisibleToParent(true)
    const [needContainer, setNeed] = useState(false);
    return(
        <View style={styles.containerStyle} >
            <View style={styles.stepContainerStyle}>
                <TouchableOpacity onPress={() => sendDataToParent("Profile")}>
                    <View style={{flexDirection:"row"}}>
                        <Image source={require("../../assets/back.png")} style={styles.backButtonStyle}></Image>
                        <Text style={styles.backTextStyle}>Profile</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.stepTextStyle}>My Food Post </Text>
                <View style={{justifyContent:"flex-end"}}>
                    <TouchableOpacity onPress={() => sendDataToParent("Camera")}>
                        <Image source={require("../../assets/add.png")} style={{width:60, height:60}}></Image>
                    </TouchableOpacity>
                </View>
            </View> 
            <ScrollView>
                {posts.map((p, k) => {
                    return(
                        <OrderCard post={p} index={k} sendDataToParent={sendDataToParent} removePost={removePost}/>
                    )
                })}
            </ScrollView>
        </View>
    
    )
}
const styles = StyleSheet.create({
    containerStyle:{
        flex:1
    },
    stepContainerStyle:{
        height:80,
        backgroundColor:"white",
        padding: 20,
        paddingHorizontal: 30,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    stepTextStyle:{
        fontSize: 20,
        color:"black",
        fontWeight:"bold"
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
    },
    backButtonStyle:{
        width: 20,
        height: 20,
        marginLeft: -20
    },
    backTextStyle:{
        fontWeight:"bold",
        fontSize: 13,
        textAlign: 'right',
        margin:3
    }
});

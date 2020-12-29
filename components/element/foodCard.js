import { TabRouter } from '@react-navigation/native';
import React ,{ useState } from 'react';
import { StyleSheet, Image, Text, View , Dimensions, ScrollView, Modal } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {FlatListSlider} from 'react-native-flatlist-slider';
import InputSpinner from "react-native-input-spinner";
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function FoodCard({post, index, navigation, order, setOrder}){
    const [count, setCount] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <Card containerStyle={styles.cardStyle}>
            <View style={styles.cardTitleContainerStyle}>
                <Card.Title style={styles.cardResStyle}>{post.foodName}</Card.Title>
                <View style={{width: Dimensions.get("screen").width*0.05}}></View>
                <View style={{flex:1 , alignItems:"flex-end"}}>
                    <Button buttonStyle={styles.cardDetailButtonStyle} titleStyle={styles.cardDetailStyle} title="Detail" onPress={() => setModalVisible(true)} />
                    <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    }} >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                        <View style={{alignSelf:"flex-end"}}>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Image source={require("../../assets/delete.png")} style={{width:30, height:30}}></Image>
                        </TouchableOpacity>
                        </View>
                        <Text style={styles.ModalTextStyle}>Product: {post.foodName} </Text> 
                        <Text style={styles.ModalTextStyle}>Restaurant Name: {post.restaurantName} </Text> 
                        <Text style={styles.ModalTextStyle}>Distance: 5.1 km </Text> 
                        <Text style={styles.ModalTextStyle}>Contain: pork, egg, cheese </Text>
                        <Text style={styles.ModalTextStyle}></Text> 
                        <Text style={styles.ModalTextStyle}>Take-out box provided </Text>
                        <View style={{flexDirection: "row", width: 300, justifyContent:"space-between"}}>
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
                            <Button
                            buttonStyle={styles.orderButtonStyle}
                            title='Reserve' onPress={() => {
                                setOrder(order.concat([{foodName: post.foodName, amount: count, image: post.images[0].image, confirm: false}]));
                                setModalVisible(false);
                                navigation.navigate('OrderList');
                            }}/>
                        </View>
                        </View>
                        
                    </View>
                    </Modal>
                </View>
                {/* <Card.Title style={styles.cardFoodStyle}>{post.foodName}</Card.Title> */}
            </View>
            <View>
                <FlatListSlider  data={post.images} imageKey={'image'} autoscroll={false} />
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
    ModalTextStyle:{
        fontSize: 20,
        color:"black",
        fontWeight:"bold",
        lineHeight: 20,
        marginVertical: 20
    },
    ModalThinTextStyle:{
        fontSize: 20,
        color:"black",
        lineHeight: 30
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "flex-start",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
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
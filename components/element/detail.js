import React, { useState, useEffect, useReducer } from 'react';
import { SearchBar } from 'react-native-elements';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';
import { StyleSheet, View, TouchableHighlight, ScrollView, Text, Alert, Modal, Image } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import { Input } from 'react-native-elements';
import InputSpinner from "react-native-input-spinner";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Detail({navigation, sendVisibleToParent, sendDataToParent, singlePost, posts, setPost}){
    const [filled, setFilled] = useState(
        {description: "",
        amount: 0,
        foodName: "",
        restaurantName:""})
    const [search, setSearch] = useState("")
    const [marker, setMarker] = useState(null)
    const [count, setCount] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const [checkList, setCheck] = useState([
        {"name": "奶製品", "checked": false},
        {"name": "豬肉", "checked": false},
        {"name": "牛肉", "checked": false},
        {"name": "花生", "checked": false},
        {"name": "海鮮", "checked": false} ])
    const update_check = function(k, bValue){
        let tmpCheckList = checkList
        tmpCheckList[k] = {"name": checkList[k].name, "checked": bValue}
        setCheck(tmpCheckList)
        forceUpdate();
    }
    const change_filled= function(name, value){
        var tmp = filled;
        tmp[name] = value;
        setFilled(tmp);
        console.log(filled);
        forceUpdate();
    }
    sendVisibleToParent(false)
    return(
        
            <View style={styles.containerStyle}>
            <View style={styles.stepContainerStyle}>
                <Text style={styles.stepTextStyle}>Describe your food</Text>
                <TouchableOpacity onPress={() => sendDataToParent("SupplierOrder")}>
                    <Image source={require("../../assets/delete.png")} style={{width:30, height:30}} />
                </TouchableOpacity>
            </View> 
            <ScrollView>
                <View style={styles.detailContainerStyle}>
                    <Text style={styles.titleStyle}>1. 食物名稱:</Text>
                    <Input onChangeText={text => change_filled("foodName",text)} containerStyle={styles.inputStyle} />
                    <Text style={styles.titleStyle}>2. 餐廳名稱:</Text>
                    <Input onChangeText={text => change_filled("restaurantName",text)} containerStyle={styles.inputStyle} />
                    <Text style={styles.titleStyle}>3. 食物份數:</Text>
                    <InputSpinner value={count} color={"#40c5f4"} 
                    buttonStyle={styles.orderPortionButtonStyle}
                    max={2}
                    min={0}
                    colorMax={"grey"}
                    colorMin={"grey"}
                    colorLeft={"#F6C440"}
                    colorRight={"#F6C440"}
                    style={styles.orderPortionStyle}
                    onChange={(num) => {
                        change_filled("amount",num)
                    }}/>
                    <Text style={styles.titleStyle}>3. 含有成份:</Text>
                    <Button buttonStyle={styles.yellowButtonStyle} titleStyle={styles.titleStyle} 
                    title="Add >" onPress={() => {setModalVisible(true);}} />   
                    <View style={styles.centeredView}>
                    <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    }} >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            {
                                checkList.map((obj, k) => {
                                    return(
                                        <CheckBox
                                        containerStyle={styles.checkboxStyle}
                                        title={obj.name}
                                        checkedColor={"#F6C440"}
                                        checked={obj.checked}
                                        onPress={() => update_check(k, !obj.checked)}
                                        />
                                    )
                                })
                            }
                            
                            <Button buttonStyle={styles.yellowButtonStyle} titleStyle={styles.titleStyle} 
                            title="Done" onPress={() => {setModalVisible(false);}} />   
                        </View>
                    </View>
                    </Modal>
                    </View>
                    <Text style={styles.titleStyle}>5. 簡單描述一下食物:</Text>
                    <Input onChangeText={text => change_filled("description",text)} containerStyle={styles.inputStyle} />
                </View>
            </ScrollView>
                <View style={styles.footerContainerStyle}>
                    <View style={{justifyContent:"space-between", flexDirection:"row"}}>
                        <View>
                            <Button buttonStyle={styles.yellowButtonStyle} titleStyle={styles.titleStyle} 
                            title="< Back" 
                            onPress={() => sendDataToParent("Address")} />   
                        </View>
                        <View style={{paddingTop:80}}>
                            <Text styles={styles.pageTextStyle}> 3 of 3 Pages</Text>
                        </View>
                        <View>
                            <Button buttonStyle={styles.yellowButtonStyle} titleStyle={styles.titleStyle} 
                            title="Finished"
                            onPress={async () => {
                                    await setPost(posts.concat([{...singlePost, ...filled}]))
                                    sendDataToParent("SupplierOrder");
                                }
                            }/>   
                        </View>
                    </View>
                </View>
            </View>
       
)};
const styles = StyleSheet.create({
    containerStyle:{
        flex:1
    },
    mapStyle: {
        flex: 1,
    },
    detailContainerStyle:{
        backgroundColor:"#ECECEC",
        padding: 30
    },
    inputStyle:{
        marginVertical:10
    },
    checkboxStyle:{
        backgroundColor: "transparent",
        borderColor:"transparent"
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
    orderPortionStyle:{
        backgroundColor: "white",
        borderRadius:100,
        height: 50,
        marginVertical: 20
    },
    footerContainerStyle:{
        height: "15%",
        backgroundColor: "white",
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    yellowButtonStyle:{
        borderRadius: 10,
        paddingVertical:10,
        paddingHorizontal: 30,
        backgroundColor: "#F6C440",
        color: "#000000",
        marginHorizontal: 20,
        marginVertical: 15,
        
    },
    stepContainerStyle:{
        height:80,
        backgroundColor:"white",
        padding: 15,
        paddingHorizontal: 20,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    stepTextStyle:{
        fontSize: 20,
        color:"black",
        fontWeight:"bold"
    },
    pageTextStyle:{
        color:"grey",
        fontSize: 16,
    },
    titleStyle:{
        color: "black",
        fontWeight: 'bold'
    }
});

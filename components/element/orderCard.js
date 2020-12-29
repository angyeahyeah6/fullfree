import React ,{ useState, useReducer }from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Image, Modal } from 'react-native';
import { Card, ListItem, Button, Icon, Text } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function OrderCard({post, index, sendDataToParent, removePost}){
    const [iconPath, setPath] = useState(require("../../assets/expand_down.png"));
    const [showPeople, setShow] = useState(false)
    const [names, setNames] = useState([{"name":"Rebeca Liu"}, {"name":"Authur Hua"}])
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const [modalVisible, setModalVisible] = useState(false);
    const deleteNames = function(k){
        var tmpNames = names;
        tmpNames.splice(k, 1);
        setNames(tmpNames);
        forceUpdate()
    }
    const _rendePeople = function(){
        if(showPeople == true){
            return(
                <View style={{paddingHorizontal:20}}>
                {names.map((p, k) => {
                    return(
                        <View style={styles.peopleContainerStyle}>
                            <Image source={require("../../assets/avatar.png")} style={styles.avatarStyle} />
                        <Text style={styles.avatarNameStyle}>{p.name}</Text>
                            <Button buttonStyle={styles.yellowButtonStyle} titleStyle={styles.titleStyle} 
                                title="Take Food"
                                onPress={(k) => deleteNames(k)}/>   
                        </View>
                    )
                })}
                </View>
            ) 
        }
        }
    const change_icon = function(){
        if(showPeople == true){
            setPath(require("../../assets/expand_down.png"));
        }
        else{
            setPath(require("../../assets/expand_up.png"));
        }
        forceUpdate()
    }
return(
    <View>
        <Card containerStyle={styles.cardStyle}>
            <View style={{flexDirection:"row"}}>
            <Image source={{uri: post.images[0].image}} style={styles.cardPicStyle}/>
            <View style={{padding:20, width:"50%"}}>
                <Card.Title style={styles.cardTextStyle}>{post.foodName}</Card.Title>
            </View>
            <View>
                <View style={{flex:1 , alignItems:"flex-end", justifyContent:"space-between"}}>
                    <View style={{flexDirection:"column"}}>
                        <TouchableOpacity onPress={() => {setModalVisible(true);}}>
                            <Image source={require("../../assets/trash.png")} style={styles.iconStyle}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {sendDataToParent("Detail");}}>
                            <Image source={require("../../assets/edit.png")} style={styles.iconStyle}></Image>
                        </TouchableOpacity>
                    </View>
                    <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    }} >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={{fontSize: 24, lineHeight: 40}}>Do you sure you want to delete the “pepperoni pizza” food post ?</Text>
                            <Text style={{lineHeight: 30}}>*notice: if people have already ordered, you will have to pay back.</Text>                            
                            <View style={{flexDirection:"row", justifyContent:"center", marginTop:30}}>
                                <Button buttonStyle={styles.yesButtonStyle} titleStyle={styles.whiteTitleStyle} 
                                title="Yes" onPress={async () => {
                                    await removePost(index);
                                    setModalVisible(false);
                                }} />   
                                <Button buttonStyle={styles.NoButtonStyle} titleStyle={styles.titleStyle} 
                                title="Cancel" onPress={() => {setModalVisible(false);}} />
                            </View>
                        </View>
                    </View>
                    </Modal>
                </View>
            </View>
                {/* <Card.Title style={styles.cardFoodStyle}>{post.foodName}</Card.Title> */}
            </View>
            <View style={{alignItems:"center"}}>
                <TouchableOpacity onPress={() => {
                    setShow(!showPeople);
                    change_icon();}}>
                    <Image source={iconPath} style={styles.expandIconStyle}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.cardInfoContainerStyle}>
            </View>
        </Card>
        {_rendePeople(post.orderPeople)}
    </View>
)}
const styles = StyleSheet.create({
    cardStyle:{
        padding: 20,
        flexDirection: 'row',
        backgroundColor: '#F6C440',
        borderRadius: 20
    },
    cardTextStyle:{
        fontSize: 24,
        fontWeight: "bold",
        color:"black",
        textAlign:"center"
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
    modelText1Style:{
        
    },
    modelText2Style:{

    },
    iconStyle:{
        width: 25,
        height: 25,
        margin: 10
    },
    expandIconStyle:{
        width: 30,
        height: 30,
        marginTop: 5
    },
    cardPicStyle:{
        width: 130,
        height: 130,
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
    editContainerStyle:{
        backgroundColor:"white",
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        padding: 10,
        shadowColor:"black",
        shadowOffset:{
            width: 5,  
            height: 5
        },
        marginBottom: 20
        
    },
    yellowButtonStyle:{
        borderRadius: 10,
        paddingVertical:10,
        paddingHorizontal: 10,
        backgroundColor: "#F6C440",
        color: "#000000",
        marginHorizontal: 20,
        marginVertical: 15,
        
    },
    yesButtonStyle:{
        borderRadius: 10,
        paddingVertical:10,
        paddingHorizontal: 10,
        backgroundColor: "black",
        color: "#000000",
        marginHorizontal: 20,
        marginVertical: 15,
        width: 100
    },
    NoButtonStyle:{
        borderRadius: 10,
        paddingVertical:10,
        paddingHorizontal: 10,
        backgroundColor: "#F6C440",
        color: "#000000",
        marginHorizontal: 20,
        marginVertical: 15,
        width: 100
        
    },
    peopleContainerStyle:{
        backgroundColor: "black",
        height: 100,
        flexDirection: "row",
        alignContent:"space-between"
    },
    titleStyle:{
        color: "black",
        fontWeight: 'bold',
        textAlign:"center",
        fontSize: 20
    },
    whiteTitleStyle:{
        color: "white",
        fontWeight: 'bold',
        textAlign:"center",
        fontSize: 20
    },
    avatarStyle:{
        height:60, 
        width:60,
        margin: 10
    },
    avatarNameStyle:{
        color: "white",
        fontWeight: 'bold',
        textAlign:"center",
        fontSize: 24,
        marginVertical:20
    }

});
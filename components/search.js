import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View , Dimensions, ScrollView, FlatList, TouchableOpacity, Modal,TouchableHighlight} from 'react-native';
import { SearchBar,Card,Avatar, ListItem, Button } from 'react-native-elements';
import {FlatListSlider} from 'react-native-flatlist-slider';
import AppHeader from './element/header';
export default function Search({navigation}) {
    const [search, setSearch] = useState('');
    const [filteredData, setfilteredData] = useState([]);
    const [mainData, setMainData] = useState([]);const [modalVisible, setModalVisible] = useState(false);
    const [profile, setProfile] = useState({});
    const [popupVisible, setpopupVisible] = useState(false);
    const [followed, setFollowed] = useState("Follow");

    const restaurants = require("../data/restaurantData").restaurantProfiles;
    useEffect(() => {
        setfilteredData([]);
        setMainData(restaurants);
    },[]);

    const searchFilterFunction = (text) => {
        if (text) {
          const newData = mainData.filter(function (item) {
            const itemData = item.name
              ? item.name.toUpperCase()
              : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          });
          setfilteredData(newData);
          setSearch(text);
        } else {
          setfilteredData([]);
          setSearch(text);
        }
      };
    //{{ uri: {item.avatar} }}
    const ItemView = ({ item }) => {
        return (
          // Flat List Item
          <TouchableOpacity onPress={() => getItem(item)}>
          <Card  containerStyle={styles.cardListStyle} >
            <ListItem containerStyle={styles.profileStyle}>
              <Avatar
                rounded
                size = "large"
                source= {{ uri: item.avatar}}
              />
              <ListItem.Content>
                <ListItem.Title style={{ color: 'rgba(0,0,0,0.7)', fontWeight: 'bold', fontSize: 25 }}>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.location}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </Card>
          </TouchableOpacity>
        );
      };
    
    const ItemSeparatorView = () => {
        return (
          // Flat List Item Separator
          <View
            style={{
              height: 20,
              width: '100%',
              backgroundColor: '#FFFFFF',
            }}
          />
        );
      };
    
    const getItem = (item) => {
        // Function for click on an item
        setModalVisible(true);
        setProfile(item);
      };

    return ( 
        
        <View style={styles.containerStyle}>
            <AppHeader centerText = "Search"></AppHeader>
            <ScrollView style={styles.scrollContainerStyle}>
                    <SearchBar
                    placeholder="Search for restaurants"
                    searchIcon={{ size: 24 }}
                    onChangeText={(text) => searchFilterFunction(text)}
                    onClear={(text) => searchFilterFunction('')}
                    value={search}
                    containerStyle = {styles.searchContainer}
                    inputContainerStyle = {styles.inputContainer}
                    />
                    <FlatList
                    style = {styles.list}
                    data = {filteredData}
                    keyExtractor = {(item,index) => index.toString()}
                    //ItemSeparatorComponent = {ItemSeparatorView}
                    renderItem = {ItemView}
                    />
                    <Modal
                      animationType="none"
                      transparent={true}
                      visible={modalVisible}
                      onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                      }}
                    >
                        <Card containerStyle={styles.cardStyle}>
                        <View style = {{flexDirection: "column", alignItems:'flex-end'}}>
                        <TouchableHighlight style={{ ...styles.openButton}}
                            onPress={() => { setModalVisible(!modalVisible);}}>
                        <Text style={styles.textStyle}>X</Text>
                        </TouchableHighlight>
                        </View>
                         <View style={styles.cardTitleContainerStyle}>
                         <Avatar
                          rounded
                          size = "large"
                          source= {{ uri: profile.avatar}}/>
                        <Card.Title style={styles.cardResStyle}>{profile.name}</Card.Title>
                        <View style={{width: Dimensions.get("screen").width*0.05}}></View>

                        <View style={{flex:1 , alignItems:"flex-end"}}>
                            <Button buttonStyle={{alignSelf: "center", borderRadius: 10, marginTop: 20, backgroundColor: 'white'}} 
                             titleStyle={styles.cardDetailStyle} title={followed}onPress = {() => {
                                setpopupVisible(true);
                                setFollowed("Following");
                            }} />
                        </View>
                      </View>
                      <View style={styles.cardInfoContainerStyle}>
                      <View style={{flexDirection: "column"}}>
                        <Text style = {{fontWeight:'bold', marginBottom:7}}>{profile.location}
                        </Text>
                        <FlatListSlider data = {profile.images}/>
                      </View>
                    <View style={{flex:1 , alignItems:"flex-end", paddingTop: 5}}>
                    </View>
                    </View>

                    <Modal animationType="slide" transparent={true} visible={popupVisible}
                        onRequestClose={() => {
                        Alert.alert("Modal has been closed.");}}>
                        <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>You will now receive notification from the restaurant!</Text>
                                <TouchableHighlight style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                    onPress={() => {
                                    setpopupVisible(!popupVisible);}}>
                                    <Text style={styles.textStyle}>GOT IT</Text>
                                </TouchableHighlight>
                        </View>
                        </View>
                    </Modal>
                    </Card>
                  </Modal>
            </ScrollView>
        </View>
    );
  }
const styles = StyleSheet.create({
    containerStyle:{
        flex:1
    },
    profileStyle:{
        backgroundColor: "transparent",
        paddingHorizontal: 0,
        paddingVertical:0
    },
    cardListStyle:{
        marginHorizontal:0,
         backgroundColor: '#F6C440',
         borderRadius:10,
         shadowColor: "rgba(0,0,0, 0.3)",
         shadowOffset:{  width: 5,  height: 5 },
         shadowOpacity: 1.0,
     },
    list:{
       overflow: 'visible',
     },
    scrollContainerStyle:{
        paddingHorizontal: 15,
        overflow:'visible'
    },
    itemStyle: {
        padding: 10,
    },
    searchContainer:{
        backgroundColor: '#F6C440',
        justifyContent: 'center',
        paddingHorizontal: 15,
        padding: 0,
        borderRadius:10,
        shadowOffset:{  width: 5,  height: 5 },
        shadowColor: "rgba(0,0,0, 0.3)",
        shadowOpacity: 1.0,
        height: Dimensions.get("window").height * 0.12,
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
    },
    inputContainer:{
        backgroundColor: '#FFFFFF',
        borderRadius:10,
        alignItems:'center', 
        justifyContent:'center',
        height: Dimensions.get("window").height * 0.075,
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
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "black" ,
        borderRadius: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 10,
        marginTop: 10,
      },
      textStyle: {
        fontSize:20,
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 20
      },
       cardStyle:{
          marginTop: Dimensions.get("window").height * 0.14,
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
            paddingBottom: 0,
            paddingTop:0
        },
        cardResStyle:{
            alignItems: 'flex-start',
            fontSize: 30,
            marginTop: 15,
            marginLeft: 15,
            alignSelf: 'center'
        },
        cardDetailButtonStyle:{
            backgroundColor: "white",
            alignSelf: "center",
            borderRadius: 10,
            marginTop: 20,
        },
        cardDetailStyle:{
            color:"#000000",
            fontWeight: 'bold',
            marginHorizontal: 8,
            fontSize: 15
        },
        cardFoodStyle:{
            fontSize: 15,
            marginTop: 10,
        },
        cardInfoContainerStyle:{
            flexDirection:"row",
            padding: 12,
        },
});

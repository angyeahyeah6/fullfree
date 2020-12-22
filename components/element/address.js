import React, { useState} from 'react';
import { SearchBar } from 'react-native-elements';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';
import { StyleSheet, View, Dimensions, ScrollView, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

function randomColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
export default function Address({navigation, sendVisibleToParent, sendDataToParent}){
    const [search, setSearch] = useState("")
    const [marker, setMarker] = useState(null)
    sendVisibleToParent(false)
    const updateSearch = function(s){
        setSearch(s)
    }
    const onMapPress= (e) =>  {
        setMarker({
            coordinate: e.nativeEvent.coordinate,
            key: 0,
            color: randomColor(),
          },)
      };
    const render_Marker = function(){
        if(marker != null){
            return(
                <Marker key={marker.key} coordinate={marker.coordinate} pinColor={marker.color}/>
            )
        }     
    }
    return(
            <View style={styles.containerStyle}>
                <View style={styles.stepContainerStyle}>
                    <Text style={styles.stepTextStyle}>Tap or Enter the place</Text>
                    <TouchableOpacity onPress={() => sendDataToParent("SupplierOrder")}>
                        <Image source={require("../../assets/delete.png")} style={{width:30, height:30}} />
                    </TouchableOpacity>
                </View> 
                <SearchBar
                    placeholder="搜尋..."
                    onChangeText={updateSearch}
                    value={search}
                    platform="ios"
                    round
                    searchIcon={{ size: 24 }}
                    onClear={(e) => setSearch("")}
                />  
                <MapView 
                    showsUserLocation={true} 
                    zoomTapEnabled={false} 
                    style={styles.mapStyle} 
                    onPress={e => onMapPress(e)}>
                        {render_Marker()}
                </MapView>
            <View style={styles.footerContainerStyle}>
                <View style={{justifyContent:"space-between", flexDirection:"row"}}>
                    <View>
                        <Button buttonStyle={styles.yellowButtonStyle} titleStyle={styles.titleStyle} title="< Back" 
                        onPress={() => sendDataToParent("Camera")} />   
                    </View>
                    <View style={{paddingTop:80}}>
                        <Text styles={styles.pageTextStyle}> 2 of 3 Pages</Text>
                    </View>
                    <View>
                        <Button buttonStyle={styles.yellowButtonStyle} titleStyle={styles.titleStyle} title="Next  >"
                        onPress={() => sendDataToParent("Detail")}/>   
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
    footerContainerStyle:{
        height: "15%",
        backgroundColor: "transparent",
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    stepContainerStyle:{
        height:"7%",
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
    yellowButtonStyle:{
        borderRadius: 10,
        paddingVertical:10,
        paddingHorizontal: 30,
        backgroundColor: "#F6C440",
        color: "#000000",
        marginHorizontal: 20,
        marginVertical: 15
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

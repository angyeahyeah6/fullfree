import React, { useState} from 'react';
import { SearchBar } from 'react-native-elements';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';
import { StyleSheet, View, Dimensions, ScrollView, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Geocoder from 'react-native-geocoding';


function randomColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
export default function Address({navigation, sendVisibleToParent, sendDataToParent, singlePost, setSinglePost}){
    const [search, setSearch] = useState("")
    const [marker, setMarker] = useState(null)
    const [searchMarker, setSearchMarker] = useState([])
    const api_key = "c3827273858236463c97aee5b3990493"
    sendVisibleToParent(false)
    
    const updateSearch = function(s){
        setSearch(s)
        return (fetch("http://api.positionstack.com/v1/forward?access_key=c3827273858236463c97aee5b3990493&query=" + search)
        .then((response) => response.json()))
        .then((json) => {
            console.log(json.data.length);
            if(json == null){
                return [];
            }
            var tmp_markers = []
            json.data.map((d, k) => {
                tmp_markers.push({
                    coordinate:{
                        latitude: d.latitude,
                        longitude: d.longitude,
                    },
                    addressName: d.label,
                    key: k,
                    color: randomColor()
                })
            }
            )
            setSearchMarker(tmp_markers);
          })
          .catch((error) => {
            console.error(error);
          });
    }
    const onMapPress= (e) =>  {
        setMarker({
            coordinate: e.nativeEvent.coordinate,
            key: 0,
            color: "red",
          },)
          searchMarker.map((sm) => {
              if(sm.coordinate.latitude == e.nativeEvent.coordinate.latitude && sm.coordinate.longitude == e.nativeEvent.coordinate.longitude){
                setSearch(sm.addressName)
              }
          })
      };
    const render_tap_Marker = function(){
        if(marker != null){
            return(
                <Marker key={marker.key} coordinate={marker.coordinate} pinColor={marker.color}/>
            )
        }
    }
    const render_Marker = function(){
        return(
            searchMarker.map((m, k) => {
                return(
                    <Marker key={k} coordinate={m.coordinate} pinColor={"black"}/>
                )
            })
        )
           
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
                    followsUserLocation={true} 
                    showsUserLocation={true} 
                    zoomTapEnabled={false} 
                    style={styles.mapStyle} 
                    onPress={e => onMapPress(e)}>
                        {render_Marker()}
                        {render_tap_Marker()}
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
                        onPress={async () => {
                            await setSinglePost({...singlePost, ...marker.coordinate})
                            console.log(singlePost)
                            sendDataToParent("Detail");
                        }}/>   
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

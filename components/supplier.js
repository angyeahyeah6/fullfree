import React, { useState} from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native';
import AppHeader from './element/header';
import MapView from 'react-native-maps';
import AppCamera from './camera';
import AppGallery from './element/gallery';
import { SearchBar } from 'react-native-elements';
export default function Supplier({navigation, sendVisibleToParent}){
    const [pageStatus, setPageStatus] = useState("Map");
    const [search, setSearch] = useState("")
    const sendDataToParent = (pgStatus) => {
        setPageStatus(pgStatus)
      };
    const updateSearch = function(search){
        setSearch(search)
    };
    _renderComponent = function(){
        if(pageStatus == "Camera"){
            return(
                <AppCamera navigation={navigation} sendVisibleToParent={sendVisibleToParent} sendDataToParent={sendDataToParent}/>
            )
            
        }
        else if(pageStatus == "Gallery"){
            return(
                <AppGallery navigation={navigation} sendVisibleToParent={sendVisibleToParent} sendDataToParent={sendDataToParent} />
            )
        }
        else if(pageStatus == "Map"){
            return(
                <View style={{flex:1}}>
                <View style={styles.stepContainerStyle}>
                        <Text style={styles.stepTextStyle}>Tap or Enter the place</Text>
                    </View> 
                    <SearchBar
                        placeholder="Type Here..."
                        onChangeText={updateSearch}
                        value={search}
                        platform="ios"
                    />  
                <MapView showsUserLocation={true} zoomTapEnabled={false} style={styles.mapStyle} >
                
                </MapView>
                </View>
            )
        }
    }
    return(
        <View style={styles.containerStyle}>
            <AppHeader centerText="Supplier"></AppHeader>
            {_renderComponent()}
        </View>
    )
}
const styles = StyleSheet.create({
    containerStyle:{
        flex:1
    },
    mapStyle: {
        flex: 1,
    },
    stepContainerStyle:{
        height:"7%",
        backgroundColor:"white",
        padding: 15,
        paddingHorizontal: 20
    },
    stepTextStyle:{
        fontSize: 20,
        color:"black",
        fontWeight:"bold"
    },
});

import React, { useState} from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native';
import AppHeader from './element/header';
import Address from './element/address';
import AppCamera from './camera';
import AppGallery from './element/gallery';
import Detail from './element/detail';
import SupplierOreder from './element/supplierOrder';
export default function Supplier({navigation, sendVisibleToParent}){
    const [pageStatus, setPageStatus] = useState("SupplierOrder");
    const sendDataToParent = (pgStatus) => {
        setPageStatus(pgStatus)
      };
    
    _renderComponent = function(){
        if (pageStatus == "SupplierOrder"){
            return(
                <SupplierOreder navigation={navigation} sendVisibleToParent={sendVisibleToParent} sendDataToParent={sendDataToParent}/>
            )
        }
        else if(pageStatus == "Camera"){
            return(
                <AppCamera navigation={navigation} sendVisibleToParent={sendVisibleToParent} sendDataToParent={sendDataToParent}/>
            )
            
        }
        else if(pageStatus == "Gallery"){
            return(
                <AppGallery navigation={navigation} sendVisibleToParent={sendVisibleToParent} sendDataToParent={sendDataToParent} />
            )
        }
        else if(pageStatus == "Address"){
            return(
                <Address navigation={navigation} sendVisibleToParent={sendVisibleToParent} sendDataToParent={sendDataToParent}/>
            )
        }
        else if(pageStatus == "Detail"){
            return(
                <Detail navigation={navigation} sendVisibleToParent={sendVisibleToParent} sendDataToParent={sendDataToParent}/>
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
    
});

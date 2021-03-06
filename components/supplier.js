import React, { useState, useEffect, useReducer} from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native';
import AppHeader from './element/header';
import Address from './element/address';
import AppCamera from './camera';
import AppGallery from './element/gallery';
import Detail from './element/detail';
import SupplierOreder from './element/supplierOrder';
import ProfileElement from './element/profileElement';

export default function Supplier({navigation, sendVisibleToParent}){
    const [pageStatus, setPageStatus] = useState("Profile");
    const [posts, setPost] = useState(require("../data/foodPostData").foodPosts)
    const [singlePost, setSinglePost] = useState({index: posts.length})
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const sendDataToParent = (pgStatus) => {
        setPageStatus(pgStatus)
    };
    const removePost = function(index){
        var tmp = posts;
        posts.splice(index, 1);
        setPost(posts);
        forceUpdate();
    }
    const _renderComponent = function(){
        if(pageStatus == "Profile"){
            return(
                <ProfileElement sendDataToParent={sendDataToParent} />
            )
        }
        else if (pageStatus == "SupplierOrder"){
            return(
                <SupplierOreder posts={posts} 
                    navigation={navigation} 
                    sendVisibleToParent={sendVisibleToParent} 
                    sendDataToParent={sendDataToParent}
                    setPost={setPost}
                    removePost={removePost}/>
            )
        }
        else if(pageStatus == "Camera"){
            return(
                <AppCamera navigation={navigation} sendVisibleToParent={sendVisibleToParent} sendDataToParent={sendDataToParent}/>
            )
            
        }
        else if(pageStatus == "Gallery"){
            return(
                <AppGallery navigation={navigation} 
                    sendVisibleToParent={sendVisibleToParent} 
                    sendDataToParent={sendDataToParent} 
                    singlePost = {singlePost}
                    setSinglePost={setSinglePost}/>
            )
        }
        else if(pageStatus == "Address"){
            return(
                <Address navigation={navigation} 
                    sendVisibleToParent={sendVisibleToParent} 
                    sendDataToParent={sendDataToParent}
                    singlePost = {singlePost}
                    setSinglePost={setSinglePost}/>
            )
        }
        else if(pageStatus == "Detail"){
            return(
                <Detail navigation={navigation} 
                    sendVisibleToParent={sendVisibleToParent} 
                    sendDataToParent={sendDataToParent}
                    singlePost = {singlePost}
                    setSinglePost={setSinglePost}
                    posts = {posts}
                    setPost = {setPost}/>
            )
        }
    }
    const _renderHearder = function(){
        if(pageStatus == "Profile"){
            return(
                <AppHeader centerText="Profile"></AppHeader>
            )
        }
        else{
            return(
                <AppHeader centerText="Share Food"></AppHeader>
            )
        }
    }
    return(
        <View style={styles.containerStyle}>
            {_renderHearder()}
            {_renderComponent()}
        </View>
    )
}
const styles = StyleSheet.create({
    containerStyle:{
        flex:1
    },
    
});

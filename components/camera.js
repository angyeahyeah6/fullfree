// import { RNCamera, FaceDetector } from 'react-native-camera';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import CameraPreview  from './cameraPreview';
import { Button } from 'react-native-elements';
import * as MediaLibrary from 'expo-media-library';


export default function AppCamera({navigation, sendVisibleToParent, sendDataToParent}) {
    const [hasPermission, setHasPermission] = useState(null);
    // const [type, setType] = useState(Camera.Constants.Type.back);
    const [previewVisible, setPreviewVisible] = useState(false)
    const [capturedImage, setCapturedImage] = useState(null)
    const [cameraRef, setCameraRef] = useState(null)
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
    sendVisibleToParent(false)
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    _renderCapture = function(){
        if(previewVisible && capturedImage){
            return(
                <View>
                    <CameraPreview photo={capturedImage} sendDataToParent={sendDataToParent}/>
                </View>
           )
        }
        
    }
    return (
      <View style={styles.container}>
        <View style={styles.stepContainerStyle}>
            <Text style={styles.stepTextStyle}>Take a picture of your food</Text>
        </View>
        <View style={styles.cameraContainerStyle}>
        <Camera style={styles.camera}
        ref={ref => {setCameraRef(ref);}} autoFocus="on"
        >
          <View style={styles.buttonContainer}>
            {/* <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={styles.text}> Flip </Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.pressTouchStyle} 
            onPress={async() => 
            {
                if(cameraRef){
                    let photo = await cameraRef.takePictureAsync("photo");
                    MediaLibrary.saveToLibraryAsync(photo.uri)
                    console.log("photo", photo);
                    setPreviewVisible(true)
                    setCapturedImage(photo)
                    console.log(capturedImage)
                    // navigation.navigate("Image",{"photo":photo});
                }
            }
            }>
            <View style={styles.outerCircleStyle}>
                <View style={styles.innerCircleStyle} />
            </View>
            </TouchableOpacity>
            
          </View>
        </Camera>
        </View>
        <View style={styles.footerContainerStyle}>
            <View>
                { _renderCapture()}
            </View>
            <View style={{justifyContent:"space-between", flexDirection:"row"}}>
                <View style={{paddingTop: 80}}>
                    <Text styles={styles.pageTextStyle}> 1 of 3 Pages</Text>
                </View>
                <View>
                    <Button buttonStyle={styles.yellowButtonStyle} titleStyle={styles.titleStyle} title="Next  >"/>   
                </View>
            </View>
        </View>
        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        justifyContent:"flex-end",
        flex: 1,
        backgroundColor:"white"
    },
    stepContainerStyle:{
        height:"7%",
        backgroundColor:"white",
        padding: 10,
        paddingHorizontal: 20
    },
    stepTextStyle:{
        fontSize: 20,
        color:"black",
        fontWeight:"bold"
    },
    cameraContainerStyle:{
        justifyContent:"flex-end",
        flex: 1,
        paddingHorizontal: 20
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
        top: "150%",
        alignItems: 'center',
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
    pressTouchStyle:{
        backgroundColor:'transparent',
        flex:1,
        alignItems:"center"
    },
    outerCircleStyle:{
        borderWidth: 10,
        borderRadius:50,
        borderColor: "grey",
        height: 70,
        width:70,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    innerCircleStyle:{
        borderWidth: 2,
        borderRadius:50,
        borderColor: "white",
        height: 50,
        width:50,
        backgroundColor: "white"
    },
    footerContainerStyle:{
        height: "15%",
        backgroundColor: "transparent",
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
        marginHorizontal: 30,
        marginTop:40
    },
    pageTextStyle:{
        color:"grey",
        fontSize: 16,
    }
  });

  
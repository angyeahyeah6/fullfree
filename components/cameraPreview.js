import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity  } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';


export default function CameraPreview ({photo, sendDataToParent}) {
    return (
        <View style={styles.imageContainerStyle}>
            <TouchableOpacity onPress={() => sendDataToParent("Gallery")}>
            <Image
            source={{uri: photo && photo.uri}}
            style={styles.imageStyle}/>
            </TouchableOpacity>
        </View>
    )
  }
  const styles = StyleSheet.create({
      imageContainerStyle:{
            height: 100, 
            padding:20
      },
      imageStyle:{
        width: 80,
        height: 80,
        borderRadius: 10
      }
  })
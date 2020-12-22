import React,{useState} from 'react';
import { ImageBrowser } from 'expo-image-picker-multiple';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator';
export default function AppGallery({navigation, sendVisibleToParent, sendDataToParent}){
  const [pickCount, setCount] = useState(0);
  imagesCallback = (callback) => {
    callback.then(async (photos) => {
      const cPhotos = [];
      for(let photo of photos) {
        const pPhoto = await _processImageAsync(photo.uri);
        cPhotos.push({
          uri: pPhoto.uri,
          name: photo.filename,
          type: 'image/jpg'
        })
      }
      navigation.navigate('Main', {photos: cPhotos});
    })
    .catch((e) => console.log(e));
  };
  _processImageAsync = async(uri) => {
    const file = await ImageManipulator.manipulateAsync(
      uri,
      [{resize: { width: 1000 }}],
      { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG }
    );
    return file;
  };

  renderDoneButton = (count, onSubmit) => {
    return (
      <TouchableOpacity title={'Done'} onPress={() => sendDataToParent("Map")}>
        <Text style={styles.stepTextStyle} >Done</Text>
      </TouchableOpacity>
    )
  }

  renderSelectedComponent = (number) => (
    <View style={styles.countBadge}>
      <Text style={styles.countBadgeText}>{number}</Text>
    </View>
  );

    const emptyStayComponent = <Text style={styles.emptyStay}>Empty =(</Text>;

    return (
      

      
      <View style={[styles.flex, styles.container]}>
        <View style={styles.stepContainerStyle}>
            <Text style={styles.stepTextStyle}>Choose the photo to upload</Text>
            {renderDoneButton()}
        </View>
        <ImageBrowser
          max={4}
          onChange={renderDoneButton}
          callback={imagesCallback}
          renderSelectedComponent={renderSelectedComponent}
          emptyStayComponent={emptyStayComponent}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    position: 'relative'
  },
  emptyStay:{
    textAlign: 'center',
  },
  stepContainerStyle:{
    height:"7%",
    backgroundColor:"white",
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent:"space-between"
  },
  stepTextStyle:{
      fontSize: 20,
      color:"black",
      fontWeight:"bold",
  },
  countBadge: {
    paddingHorizontal: 8.6,
    paddingVertical: 5,
    borderRadius: 50,
    position: 'absolute',
    right: 3,
    bottom: 3,
    justifyContent: 'center',
    backgroundColor: '#0580FF'
  },
  countBadgeText: {
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 'auto',
    color: '#ffffff'
  }
});
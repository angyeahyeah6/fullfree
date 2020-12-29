import React, { Component } from 'react';
import { ImageBrowser } from 'expo-image-picker-multiple';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator'; 
export default class AppGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localComponent:null};
  }

  imagesCallback = (callback) => {
    callback.then(async (photos) => {
      
      const cPhotos = [];
      for(let photo of photos) {
        const pPhoto = await this._processImageAsync(photo.uri);
        cPhotos.push({
          image: pPhoto.uri,
          name: photo.filename
        })
      }
      this.props.setSinglePost({...this.props.singlePost, images :cPhotos});
      this.props.sendDataToParent("Address");
      console.log(this.props.singlePost);
    })
    .catch((e) => console.log(e));
  };

  async _processImageAsync(uri) {
    const file = await ImageManipulator.manipulateAsync(
      uri,
      [{resize: { width: 1000 }}],
      { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG }
    );
    return file;
  };

  _renderDoneButton = (count, onSubmit) => {
    this.setState({
      localComponent: 
      <TouchableOpacity onPress={onSubmit} title={'Done'}>
      <Text style={styles.stepTextStyle}>Done</Text>
    </TouchableOpacity>
    });
  }

  renderSelectedComponent = (number) => (
    <View style={styles.countBadge}>
      <Text style={styles.countBadgeText}>{number}</Text>
    </View>
  );

  render() {
    const emptyStayComponent = <Text style={styles.emptyStay}>Empty =(</Text>;
    return(
      <View style={[styles.flex, styles.container]}>
        <View style={styles.stepContainerStyle}>
        <Text style={styles.stepTextStyle}>Choose the photo to upload</Text>
            {this.state.localComponent}
        </View>
        <ImageBrowser
          max={4}
          onChange={this._renderDoneButton}
          callback={this.imagesCallback}
          renderSelectedComponent={this.renderSelectedComponent}
          emptyStayComponent={emptyStayComponent}
        />
      </View>
    )
  }
};

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
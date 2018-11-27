import * as React from 'react';
import { View, Text, Button, TextInput, ScrollView } from 'react-native';
//
import { Input } from "../components/Input";
import { MyImagePicker } from "../components/MyImagePicker";
import { PickLocation } from "../components/PickLocation";
import { createLocation, deleteAllLocations } from '../api';

class AddPlaceScreen extends React.Component {
  static navigationOptions = {
    title: 'Add Place!',
  };

  constructor() {
    super();
    this.state = {
      placeImage: null,
      placeLocation: null
    }
  }
  handlePickImage = base64 => {
    // console.log(base64)
    this.setState({
      placeImage: base64,
    })
  };

  handlePickLocation = coords => {
    this.setState({
      placeLocation: coords,
    })
  };

  saveLocation = async () => {
    const { placeImage, placeLocation } = this.state;
    try {
      const res = await createLocation({
        picture: placeImage,
        location: placeLocation,
        name: 'place#: '+Math.random() * 1000 + 1,
      })
      alert(JSON.stringify(res.data))
    } catch (e) {
      alert(e.message)
    }
  }
  render() {
    const { navigation } = this.props;
    const { placeImage } = this.state;
    return (
      <ScrollView
        >
        <Input placeholder="Location Name" style={{}}  />
        <MyImagePicker source={placeImage} onPickImage={this.handlePickImage} />
        <PickLocation onPickLocation={this.handlePickLocation} />
        <Button title="Save" onPress={this.saveLocation} />
      </ScrollView>
    );
  }
}

export { AddPlaceScreen }

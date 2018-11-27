import * as React from 'react';
import { View, Text, Button, TextInput, ScrollView } from 'react-native';
//
import { Input } from "../components/Input";
import { MyImagePicker } from "../components/MyImagePicker";
import { PickLocation } from "../components/PickLocation";

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

  render() {
    const { navigation } = this.props;
    const { placeImage } = this.state;
    return (
      <ScrollView
        >
        <Input placeholder="Location Name" style={{}}  />
        <MyImagePicker source={placeImage} onPickImage={this.handlePickImage} />
        <PickLocation onPickLocation={this.handlePickLocation} />
      </ScrollView>
    );
  }
}

export { AddPlaceScreen }

import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
//
import { Input } from "../components/Input";
import { MyImagePicker } from "../components/MyImagePicker";

class AddPlaceScreen extends React.Component {
  static navigationOptions = {
    title: 'Add Place!',
  };

  constructor() {
    super();
    this.state = {
      placeImage: null
    }
  }
  handlePickImage = base64 => {
    // console.log(base64)
    this.setState({
      placeImage: base64,
    })
  };
  render() {
    const { navigation } = this.props;
    const { placeImage } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MyImagePicker source={placeImage} onPickImage={this.handlePickImage} />
        <Input placeholder="Location Name" style={{}}  />
      </View>
    );
  }
}

export { AddPlaceScreen }

import * as React from 'react';
import { View, Text, Button, TextInput, ScrollView, ActivityIndicator } from 'react-native';
//
import { Input } from "../components/Input";
import { MyImagePicker } from "../components/MyImagePicker";
import { PickLocation } from "../components/PickLocation";
import { Location } from "../services";

class AddPlaceScreen extends React.Component {
  static navigationOptions = {
    title: 'Add Place!',
  };

  constructor() {
    super();
    this.state = {
      placeImage: null,
      placeLocation: null,
      placeName: null,
      loading: false
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

  submitPlace = async () => {
    try {
      this.setState({
        loading: true
      })
      const data = {
        name: this.state.placeName,
        picture: this.state.placeImage,
        location: this.state.placeLocation
      };
      const res = await Location.createLocation(data);
      console.log(res.data)
      // alert(JSON.stringify(res.ds))
    } catch (e) {
      alert(e.message)
    }
    this.setState({
      loading: false
    })
  }
  render() {
    const { navigation } = this.props;
    const { placeImage } = this.state;
    return (
      <ScrollView
        >
        <Input
          placeholder="Location Name"
          onChangeText={txt => {
            this.setState({
              placeName: txt,
            })
          }}
        />
        <MyImagePicker source={placeImage} onPickImage={this.handlePickImage} />
        <PickLocation onPickLocation={this.handlePickLocation} />
        {
          this.state.loading && <ActivityIndicator size="large" />
        }
        {
          !this.state.loading && <Button title="Submit" onPress={this.submitPlace} />
        }

      </ScrollView>
    );
  }
}

export { AddPlaceScreen }

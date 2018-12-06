import * as React from 'react';
import { View, Text, Button, TextInput, ScrollView, ActivityIndicator } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//
import { Input } from "../components/Input";
import { MyImagePicker } from "../components/MyImagePicker";
import { PickLocation } from "../components/PickLocation";
import { Location } from "../services";
import { addPlace } from "../redux/actions/places";
import { ADD_PLACE_LOADING } from "../redux/actionsTypes";

class AddPlaceScreenC extends React.Component {
  static navigationOptions = {
    title: 'Add Place!',
  };

  constructor() {
    super();
    this.state = {
      placeImage: null,
      placeLocation: null,
      placeName: null,
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

  submitPlace = () => {
    const data = {
      name: this.state.placeName,
      picture: this.state.placeImage,
      location: this.state.placeLocation
    };
    this.props.addPlaceAction(data)
  };

  render() {
    const { navigation, isLoading } = this.props;
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
          isLoading && <ActivityIndicator size="large" />
        }
        {
          !isLoading && <Button title="Submit" onPress={this.submitPlace} />
        }

      </ScrollView>
    );
  }
}

const mapState = ({ loading }) => ({
  isLoading: !!loading[ADD_PLACE_LOADING]
});

const mapDispatch = dispatch => bindActionCreators({
  addPlaceAction: addPlace,
}, dispatch);


// {
//   return {
//     addPlaceAction: payload => dispatch(addPlace(payload)),
//
//   }
// }

const AddPlaceScreen = connect(mapState, mapDispatch)(AddPlaceScreenC);
export { AddPlaceScreen }

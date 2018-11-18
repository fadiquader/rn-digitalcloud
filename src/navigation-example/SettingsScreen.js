import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
//
import { Input } from "../components/Input";

class AddPlaceScreen extends React.Component {
  static navigationOptions = {
    title: 'Add Place!',
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Input placeholder="Location Name" style={{}}  />
      </View>
    );
  }
}

export { AddPlaceScreen }

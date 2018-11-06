import * as React from 'react';
import { View, Text, Button } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home!',
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go To Details"
          onPress={() => navigation.push('Details')}
        />
        <Button
          title="Go Back"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
  }
}

export { HomeScreen }

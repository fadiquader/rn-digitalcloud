import * as React from 'react';
import { View, Text, Button } from 'react-native';

class ProfileScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ProfileScreen Screen</Text>
        <Button
          title="Go To Home"
          onPress={() => navigation.push('Home')}
        />
        <Button
          title="Go Back"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
  }
}

export { ProfileScreen }

import * as React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    // const itemName = navigation.getParam('name', 'NO-Name');
    const params = navigation.state.params;
    return {
      title: params.name,
      headerRight: (
        <TouchableOpacity
          style={{
            paddingHorizontal: 16,
          }}
        >
          <Icon color="red" name="ios-trash" size={20} />
        </TouchableOpacity>
      )
    }
  };

  render() {
    const { navigation } = this.props;
    const params = navigation.state.params;

    return (
      <ScrollView>
        <Text>
          {params.name}
        </Text>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            style={styles.img}
            source={{ uri: params.image }} />
        </View>
        <View style={styles.mapViewContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.mapView}
            initialRegion={params.location}
          >
            <Marker coordinate={params.location} />
          </MapView>
        </View>
        <Button
          title="Go To Home"
          onPress={() => navigation.push('Home')}
        />
        <Button
          title="Go Back"
          onPress={() => navigation.popToTop()}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imgContainer: {
  },
  mapViewContainer: {
    width: '100%',
    height: 300
  },
  mapView: {
    flex: 1,
    backgroundColor: '#b5b5b5'
  },
  img: {
    width: '100%',
    height: 300
  }
});

export { DetailsScreen }

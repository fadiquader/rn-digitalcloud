import * as React from 'react';
import {
  View, Text, Button, StyleSheet,
  Image, TouchableOpacity, ScrollView,
  ActivityIndicator
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
//
import { Location } from "../services";

class DetailsScreen extends React.Component {
  state = {
    loading: true,
    data: {
      name: '',
      picture: '',
      location: {
        coordinates: [],
        type: "Point",
      }
    },
    error: ''
  };

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
  componentDidMount() {
    this.getPlaceData();
  }
  getPlaceData = async () => {
    const id = this.props.navigation.getParam('_id', '');
    try {
      const res = await Location.getLocationById(id);
      this.setState({
        loading: false,
        data: res.data.data
      });
      console.log('res.data ', res.data)
    } catch (e) {
      this.setState({
        loading: false,
        error: e.error,
      })
    }
  }
  render() {
    const { navigation } = this.props;
    const { loading, error, data } = this.state;
    const params = navigation.state.params;
    if(loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator
            color="#f00"
            size="large" />
        </View>
      )
    } else if(error) {
      return (
        <View>
          <Text>{error}</Text>
        </View>
      )
    }
    console.log('datadata ', data)
    const coords = {
      latitude: data.location.coordinates[0],
      longitude: data.location.coordinates[1],
    }
    return (
      <ScrollView>
        <Text>
          {data.name}
        </Text>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            style={styles.img}
            source={{ uri: data.picture }} />
        </View>
        <View style={styles.mapViewContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.mapView}
            initialRegion={coords}
          >
            <Marker coordinate={coords} />
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

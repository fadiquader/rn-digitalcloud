import * as React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import {StyleSheet, View, Button, Dimensions} from "react-native";

class PickLocation extends React.Component {
  map = React.createRef();
  state = {
    focusedLocation: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0122,
      longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122
    }
  };

  pickLocationHandler = event => {
    if(event.nativeEvent) {
      const coords = event.nativeEvent.coordinate;
      this.map.current.animateToRegion({
        ...this.state.focusedLocation,
        ...coords,

      });
      this.setState(prev => ({
        focusedLocation: {
          ...prev.focusedLocation,
          ...coords
        }
      }));
      this.props.onPickLocation(coords)
    }
    console.log(`event: `, )
    // this.setState(prev => {
    //   return {
    //     longitude: event.nativeEvent.coordinate.longitude,
    //     latitude: event.nativeEvent.coordinate.latitude,
    //   }
    // })

  }
  handleMyLocation = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      const event = {
        nativeEvent: {
          coordinate: {
            longitude: pos.coords.longitude,
            latitude: pos.coords.latitude,
          }
        }
      };
      this.pickLocationHandler(event);
    }, err => {

    })
  }
  render() {
    return (
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.mapView}
          initialRegion={this.state.focusedLocation}
          onPress={this.pickLocationHandler}
          ref={this.map}
          >
          <Marker coordinate={this.state.focusedLocation} />
        </MapView>
        <Button onPress={this.handleMyLocation} title="Pick Location" />
      </View>
    )
  }
}

export { PickLocation }


const styles = StyleSheet.create({
  mapContainer: {
    height: 300
  },
  mapView: {
    flex: 1,
    backgroundColor: '#b5b5b5'
  }
})

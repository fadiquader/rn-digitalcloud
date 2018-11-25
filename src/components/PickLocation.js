import * as React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {StyleSheet, View} from "react-native";

class PickLocation extends React.Component {

  render() {
    return (
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.mapView}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
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

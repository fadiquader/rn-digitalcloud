import * as React from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
//
// import { getAllPlaces } from '../api';

import { Location } from "../services";

class HomeScreenC extends React.Component {
  static navigationOptions = {
    title: 'Home!',
  };
  //
  // state = {
  //   places: [],
  //   loading: false,
  // }

  componentDidMount() {
    this.fetchPlaces();
  }

  fetchPlaces = async () => {
    try {
      this.setState({
        loading: true
      });
      const { data } = await Location.getAllLocations();
      // this.setState({
      //   places: data.locations,
      // })
      // alert(JSON.stringify(data))
      console.log('data ', data)
    } catch (err) {
      console.log('data ', err.response)
      // err.response
    }
    // this.setState({
    //   loading: false
    // });
  }

  renderPlaceItem = ({ item, index }) => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PlaceDetails', item)
        }}
        activeOpacity={0.8}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 16,
          borderBottomWidth: 1,
          borderBottomColor: '#f44'
        }}>
        <Image
          style={{
            width: 50,
            height: 50,
            marginRight: 16,
            borderRadius: 6
          }}
          source={{ uri: item.picture }}
        />
        <Text>
          {item.name}
        </Text>
      </TouchableOpacity>
    )
  };
  _keyExtractor = (item, index) => item._id;

  render() {
    const { navigation, placesData } = this.props;
    console.log(placesData)
    const footer = placesData.loading ? (
      <View style={{ justifyItems: 'center', padding: 16 }}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
    return (
      <FlatList
        data={placesData.places}
        renderItem={this.renderPlaceItem}
        keyExtractor={this._keyExtractor}
        ListFooterComponent={footer}
      />
    );
  }
}

const mapStateToProps = ({ places }) => {
  return {
    placesData: places
  }
};

// function hoc(Com) {
//   return class extends React.Component {
//     state = {
//       dummy: 'sdffds'
//     }
//     render() {
//
//       return (
//         <Com dummy={this.state.dummy} />
//       )
//     }
//   }
// }
//
// const DummyHOC = hoc(HomeScreenC)
const HomeScreen = connect(mapStateToProps,)(HomeScreenC);
export { HomeScreen }

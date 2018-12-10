import * as React from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//
import { fetchPlaces } from '../redux/actions/places';
import * as actions from '../redux/actionsTypes';

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
    this.props.fetchPlaces();
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
    const { navigation, places, isLoading } = this.props;
    // console.log(placesData)
    const footer = isLoading ? (
      <View style={{ justifyItems: 'center', padding: 16 }}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
    return (
      <FlatList
        data={places}
        renderItem={this.renderPlaceItem}
        keyExtractor={this._keyExtractor}
        ListFooterComponent={footer}
      />
    );
  }
}

const mapStateToProps = ({ places, loading }) => {
  return {
    places,
    isLoading: !!loading[actions.FETCH_PLACES_LOADING]
  }
};
const mapDispatch  = dispatch => bindActionCreators({
  fetchPlaces,
}, dispatch)
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
const HomeScreen = connect(mapStateToProps, mapDispatch)(HomeScreenC);
export { HomeScreen }

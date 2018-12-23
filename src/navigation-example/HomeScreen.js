import * as React from 'react';
import {
  FlatList, View, Text,
  Image, TouchableOpacity,
  ActivityIndicator, Animated,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import debounce from 'lodash.debounce';
//
import { fetchPlaces } from '../redux/actions/places';
import * as actions from '../redux/actionsTypes';
import {Input} from "../components/Input";
import {TextWithBold} from "../components/TextWithBold";
import {AnimatedItem} from "../components/AnimatedItem";

class HomeScreenC extends React.Component {
  static navigationOptions = {
    title: 'Home!',
  };
  //
  state = {
    searchText: '',
  }

  componentDidMount() {
    this.props.fetchPlaces();
  }

  renderPlaceItem = ({ item, index }) => {
    const { navigation } = this.props;
    return (
      <AnimatedItem delay={index * 200}>
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
          <TextWithBold value={item.name} filterValue={this.state.searchText} />
        </TouchableOpacity>
      </AnimatedItem>
    )
  };

  handleSearch = debounce((txt) => {
    this.setState({
      searchText: txt
    })
  }, 300);

  renderHeader = () => {
    return (
      <View>
        <Input
          placeholder="search"
          onChangeText={this.handleSearch}
        />
      </View>
    )
  }
  _keyExtractor = (item, index) => item._id;

  render() {
    const { navigation, places, isLoading } = this.props;
    // console.log(placesData)
    const { searchText } = this.state;
    const footer = isLoading ? (
      <View style={{ justifyItems: 'center', padding: 16 }}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
    const data = places.filter(place => searchText ? place.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 : true);
    return (
      <FlatList
        data={data}
        renderItem={this.renderPlaceItem}
        keyExtractor={this._keyExtractor}
        ListFooterComponent={footer}
        ListHeaderComponent={this.renderHeader}
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

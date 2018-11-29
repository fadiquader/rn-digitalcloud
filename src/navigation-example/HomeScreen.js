import * as React from 'react';
import { FlatList, View, Text, Image, TouchableOpacity } from 'react-native';
//
import { getAllPlaces } from '../api';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home!',
  };

  state = {
    places: []
  }

  componentDidMount() {
    this.fetchPlaces();
  }

  fetchPlaces = async () => {
    try {
      const { data } = await getAllPlaces();
      console.log(data.locations)
      this.setState({
        places: data.locations,
      })
      // alert(JSON.stringify(data))
    } catch (err) {
      // err.response
    }
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
    const { navigation } = this.props;

    return (
      <FlatList
        data={this.state.places}
        renderItem={this.renderPlaceItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}

export { HomeScreen }

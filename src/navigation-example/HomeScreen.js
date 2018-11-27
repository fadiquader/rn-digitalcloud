import * as React from 'react';
import { FlatList, View, Text, Image, TouchableOpacity } from 'react-native';
//
import { getAllLocations, deleteAllLocations } from '../api';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home!',
  };

  state = {
    locations: []
  }
  componentDidMount() {
    this.getLocations();
  }

  getLocations = async () => {
    try {
      // await deleteAllLocations();
      const res = await getAllLocations();
      console.log(res.data.locations)
      this.setState({
        locations: res.data.locations,
      });
    } catch (e) {
      alert(e.message)
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
          {item.name} {index +1 }
        </Text>
      </TouchableOpacity>
    )
  };
  _keyExtractor = (item, index) => item._id;

  render() {
    const { navigation } = this.props;
    const { locations } = this.state;
    return (
      <FlatList
        data={locations}
        renderItem={this.renderPlaceItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}

export { HomeScreen }

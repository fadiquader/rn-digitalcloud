import * as React from 'react';
import { FlatList, View, Text, Image, TouchableOpacity } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home!',
  };

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
          source={{ uri: item.image }}
        />
        <Text>
          {item.name} {index +1 }
        </Text>
      </TouchableOpacity>
    )
  };
  _keyExtractor = (item, index) => item.id;

  render() {
    const { navigation } = this.props;
    const dummyPlaces = [
      {
        id: 1,
        name: 'Place#1',
        image: 'http://via.placeholder.com/350x350',
      },
      {
        id: 2,
        name: 'Place#1',
        image: 'http://via.placeholder.com/350x350',
      },
      {
        id: 3,
        name: 'Place#1',
        image: 'http://via.placeholder.com/350x350',
      },
    ]

    return (
      <FlatList
        data={dummyPlaces}
        renderItem={this.renderPlaceItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}

export { HomeScreen }

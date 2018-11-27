import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
//
import { HomeScreen } from '../navigation-example/HomeScreen';
import { DetailsScreen } from '../navigation-example/DetailsScreen';
import { AddPlaceScreen } from '../navigation-example/AddPlaceScreen';
import { ProfileScreen } from '../navigation-example/ProfileScreen';
import { TodoList } from '../screens/TodoList';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
  PlaceDetails: DetailsScreen,
});

const SettingsStack = createStackNavigator({
  Settings: AddPlaceScreen,
  Profile: ProfileScreen,
});

export default createBottomTabNavigator(
  {
    Home: HomeStack,
    Add: SettingsStack,
  },
  {
    // initialRouteName: 'Add',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        }
        else if (routeName === 'Add') {
          iconName = `ios-add`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
      tabBarLabel: navigation.state.routeName === 'Home' ? 'Main' : 'Add'
    }),
    // tabBarComponent: TouchableOpacity,
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'red',
      // showLabel: false
      // showIcon: false
    },
  }
);

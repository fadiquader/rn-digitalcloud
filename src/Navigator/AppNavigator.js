import * as React from 'react';
import { TouchableOpacity, Animated, Easing } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
//
import { HomeScreen } from '../navigation-example/HomeScreen';
import { DetailsScreen } from '../navigation-example/DetailsScreen';
import { AddPlaceScreen } from '../navigation-example/AddPlaceScreen';
import { ProfileScreen } from '../navigation-example/ProfileScreen';
import { LaunchScreen } from '../navigation-example/LaunchScreen';
import { TodoList } from '../screens/TodoList';
import {LoginScreen} from "../navigation-example/LoginScreen";
import {Logout} from "../containers/Logout";


const defualtHeaderConfig = {
  defaultNavigationOptions: ({ navigation }) => {
    return {
      headerForceInset: { top: 'never', bottom: 'never' },
      // gesturesEnabled: false,
    }
  },
}
// const Logout = connect()

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  PlaceDetails: DetailsScreen,
}, {
  defaultNavigationOptions: ({ navigation }) => {
    return {
      headerRight: <Logout />,
      ...defualtHeaderConfig.defaultNavigationOptions({ navigation })
      // headerForceInset: { top: 'never', bottom: 'never' },
      // gesturesEnabled: false,
    }
  },
  // mode: 'modal',
  // // custom transition
  // transitionConfig: () => ({
  //   transitionSpec: {
  //     duration: 300,
  //     easing: Easing.out(Easing.poly(4)),
  //     timing: Animated.timing,
  //   },
  //   screenInterpolator: sceneProps => {
  //     const { layout, position, scene } = sceneProps;
  //     const { index } = scene;
  //
  //     const height = layout.initHeight;
  //     const translateY = position.interpolate({
  //       inputRange: [index - 1, index, index + 1],
  //       outputRange: [height, 0, 0],
  //     });
  //
  //     const opacity = position.interpolate({
  //       inputRange: [index - 1, index - 0.99, index],
  //       outputRange: [0, 1, 1],
  //     });
  //
  //     return { opacity, transform: [{ translateY }] };
  //   },
  // }),
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      return <Icon name="ios-home" size={horizontal ? 20 : 25} color={tintColor} />;
    },
    tabBarLabel: 'Home',
  }),
});

const SettingsStack = createStackNavigator({
  Settings: AddPlaceScreen,
  Profile: ProfileScreen,
}, {
  defaultNavigationOptions: ({ navigation }) => {
    return {
      ...defualtHeaderConfig.defaultNavigationOptions({ navigation })
    }
  },
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      return <Icon name="ios-add" size={horizontal ? 20 : 25} color={tintColor} />;
    },
    tabBarLabel: 'Add'
  }),
});

const AppScreens =  createBottomTabNavigator(
  {
    Home: HomeStack,
    Add: SettingsStack,
  },
  {
    // tabBarComponent: TouchableOpacity,
    tabBarOptions: {
      activeTintColor: '#ff4d4c',
      inactiveTintColor: '#2d2d2d',
      // showLabel: false
      // showIcon: false
    },
  }
);
const AuthScreens = createStackNavigator({
  Login: LoginScreen
}, {
});

const AppNavigator = createSwitchNavigator({
  Launch: LaunchScreen,
  Auth: AuthScreens,
  App: AppScreens,
}, );

export default createAppContainer(AppNavigator);

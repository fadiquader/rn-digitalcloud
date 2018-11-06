import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
//
import { HomeScreen } from '../navigation-example/HomeScreen';
import { DetailsScreen } from '../navigation-example/DetailsScreen';
import { SettingsScreen } from '../navigation-example/SettingsScreen';
import { ProfileScreen } from '../navigation-example/ProfileScreen';
import { TodoList } from '../screens/TodoList';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Profile: ProfileScreen,
});

export default createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
  }
);

import { createStackNavigator } from 'react-navigation';
//
import { HomeScreen } from '../navigation-example/stack/HomeScreen';
import { TodoList } from '../screens/TodoList';

export const StackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    // navigationOptions: ({ navigation }) =>  {
    //
    // }
  },
  TodoList: TodoList
}, {
  initialRouteName: 'Home',
  // headerMode: 'none'
});

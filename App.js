/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { Provider } from 'react-redux';
//
import { TodoList } from './src/screens/TodoList';
import AppContainer from './src/Navigator/AppNavigator';
import initAxios from './src/config/axios.config';
import configureStore from './src/redux/store';
import NavigationService from "./src/Navigator/NavigatorService";

initAxios();

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.container} forceInset={{'top': 'never'}}>
          <AppContainer
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';

import { TodoList } from './src/screens/TodoList';
import { StackNavigator } from './src/Navigator/AppNavigator';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/*<TodoList data={'dataaaaa'} />*/}
        <StackNavigator />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

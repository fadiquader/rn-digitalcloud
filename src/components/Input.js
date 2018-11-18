import * as React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export const Input = props => {
  return <TextInput {...props} style={[styles.input, props.style]} />
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ff4d4c',
    padding: 16,
    borderRadius: 100,
    fontSize: 20,
    margin: 8
  }
})

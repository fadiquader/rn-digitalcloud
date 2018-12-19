import * as React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export const Input = props => {
  return <TextInput {...props} style={[styles.input, props.style]} />
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#8d8d8d',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 100,
    fontSize: 20,
    margin: 8
  }
})

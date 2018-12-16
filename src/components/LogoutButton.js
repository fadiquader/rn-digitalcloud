import * as React from 'react';
import { TouchableOpacity }  from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LogoutButton = props => {
  return (
    <TouchableOpacity {...props}>
      <Icon name="ios-log-out" size={30} color="red" style={{ paddingHorizontal: 16}} />
    </TouchableOpacity>
  )
};

export { LogoutButton }

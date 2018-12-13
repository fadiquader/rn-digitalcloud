import * as React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
//
import { checkAuth } from '../redux/actions/auth';

class LaunchScreenC extends React.Component {
  componentDidMount() {
    this.props.checkAuth();
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

const mapDispatch = dispatch => bindActionCreators({
  checkAuth
}, dispatch);

const LaunchScreen = connect(null, mapDispatch)(LaunchScreenC);
export { LaunchScreen }

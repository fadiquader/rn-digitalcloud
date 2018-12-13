import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//
import { Input } from '../components/Input'
import { login } from '../redux/actions/auth';

class LoginScreenC extends React.Component {
  static navigationOptions = {
    title: 'Login'
  };
  state = {
    email: '',
    password: '',
    loading: false
  };
  toggleLoading = () => {
    this.setState(prev => ({
      loading: !prev.loading,
    }))
  }
  handleLogin = () => {
    this.props.login({
      ...this.state,
      toggleLoading: this.toggleLoading,
    })
  }
  render() {
    const { loading } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: '#c4c4c4', justifyContent: 'center' }}>
        <View>
          <View>
            <Input
              value={this.state.email}
              placeholder="E-mail"
              keyboardType="email-address"
              onChangeText={txt => this.setState({ email: txt })}
              autoCapitalize="none"
            />
            <Input
              value={this.state.password}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={txt => this.setState({ password: txt })}
              autoCapitalize="none"
            />
          </View>
          <View>
            <Button
              disabled={loading}
              title="Login"
              onPress={this.handleLogin}
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapDipatch = dispatch => bindActionCreators({
  login
}, dispatch);
const LoginScreen = connect(null, mapDipatch)(LoginScreenC);
export { LoginScreen }

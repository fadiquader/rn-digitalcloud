import * as React from 'react';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';
//
import { LogoutButton } from '../components/LogoutButton';
import { logout } from '../redux/actions/auth';

const mapDispatch = dispatch => bindActionCreators({
  logout
}, dispatch);

export const Logout = connect(null, mapDispatch)(props => {
  return <LogoutButton onPress={props.logout} />
});

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Routes from './src/Router';

export default class caraCoroa extends Component {
  render() {
    return (
      <Routes />
    );
  }
}

AppRegistry.registerComponent('caraCoroa', () => caraCoroa);

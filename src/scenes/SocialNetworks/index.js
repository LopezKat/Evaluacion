import React, { Component } from 'react';
import { WebView } from 'react-native';

class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.fcbarcelona.com/'}}
        style={{marginTop: 20}}
      />
    );
  }

  static navigationOptions = {
        title: 'WebView',
    }
}

export default MyWeb;
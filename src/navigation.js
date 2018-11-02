import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Team from './scenes/Teams';
import TeamDetail from './scenes/TeamDetail';
import WebViewSocial from './scenes/WebView';


export const StackTeams = createStackNavigator({
  TeamScreen: {screen: Team},
  TeamDetailScreen: {screen: TeamDetail},
  WebViewScreen: {screen: WebViewSocial,
    navigationOptions: () => ({
      title: 'Sitio Web'
    })
  }
},
{
  initialRouteName: 'TeamScreen'
});

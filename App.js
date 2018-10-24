import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';


import Team from './src/scenes/Teams';
import Players from './src/scenes/Players';
import PlayerDetail from './src/scenes/PlayerDetail';

const StackTeams = StackNavigator({
  TeamScreen: {screen: Team},
  PlayerScreen: {screen: Players},
  PlayerDetailScreen: {screen: PlayerDetail},
},
{
  initialRouteName: 'TeamScreen'
});

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      //Retorna un component
      <StackTeams />
    );
  }
}

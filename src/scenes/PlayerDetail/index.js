import React, { Component } from "react";
import { 
    View,FlatList
  } from 'react-native';

import DetailPlayer from "./components/player-detail";
import HttpTeam from '../../services/Team/http-teams';

class PlayerDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
          playerDetail:{}
        }
      }
    
      componentDidMount = () => {
        strPlayer = this.props.navigation.getParam('strPlayer', 'no-data');
        this.getPlayerById(strPlayer);
      }
      /**
       * Funcion para Obtener un jugador por su Identificador
       */
      async getPlayerById(strPlayer) {
        const data = await HttpTeam.getPlayerById(strPlayer);
        this.setState({
            playerDetail: data.player[0]
        })
        console.log(strPlayer);
        console.log(data.player);
      }
      static navigationOptions = {
        title: 'Detail Player',
    }

       
    render() {
        return (
            <View>
                <DetailPlayer navigation={this.props.navigation} playerDetail={this.state.playerDetail} />
            </View>
        );
    }
}
export default PlayerDetail;

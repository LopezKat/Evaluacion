import React, { Component } from 'react';
import {
  Button,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
}
  from 'react-native';
import HttpTeam from '../../../services/Team/http-teams';

class playerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: []
    }
  }

  componentDidMount = () => {
    strTeam = this.props.navigation.getParam('strTeam', 'no-data');
    this.getTeamsById(strTeam);
  }
  /**
   * Funcion para Obtener un jugador por su Identificador
   */
  async getTeamsById(strTeam) {
    const data = await HttpTeam.getTeamsById(strTeam);
    this.setState({
      player: data.player
    })
    console.log(data.player);
  }

  render() {
    return (
      <View>
        <View>          
          <Image style={styles.image} source={{ uri: this.state.player.strThumb }} />
          <Text style={styles.titleText}>Hola{this.state.player.strPlayer}</Text>
          <Text style={styles.titleText}>{this.state.player.dateBorn}</Text>
          <Text style={styles.descriptionText}>{this.state.player.strDescriptionEN} </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerCol: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  dataContainer: {
    color: '#3949AB',
    borderRadius: 5,
    borderWidth: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,

  },
  brand: {
    color: '#3949AB',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    color: '#3949AB',
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold"
  },
  titleText: {
    color: '#3949AB',
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold"
  },
  brandText: {
    color: '#3949AB',
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold"
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  price: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  priceText: {
    backgroundColor: '#3949AB',
    padding: 2,
    color: 'white',
    fontSize: 20,
    borderRadius: 10,
    alignItems: 'center',
    lineHeight: 30
  },
  description: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: 20,
  },
  descriptionText: {
    color: '#3949AB',
    fontSize: 20,
  },
  containerButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOpacity: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#3949AB',
    borderRadius: 20,
  },
  buttonTextOpacity: {
    padding: 20,
    color: 'white',
    fontSize: 18
  }
});

export default playerDetail;

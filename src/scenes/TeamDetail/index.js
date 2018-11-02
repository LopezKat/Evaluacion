import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ItemTeamLogo from './components/item-team-logo';
import PlayerOverview from "./components/player-overview";
import HttpTeam from '../../services/Team/http-teams';


export default class TeamDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamDetail: {},            
        };
    }

    componentDidMount = () => {
        idTeam = this.props.navigation.getParam('idTeam', 'no-data');        
        this.getTeamById(idTeam);       
    }    

    async getTeamById(idTeam) {
        const data1 = await HttpTeam.getTeamById(idTeam);
        this.setState({
            teamDetail: data1.teams[0]
        })
    }   

    static navigationOptions = {
        title: 'Team',
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerLogo}>
                    <ItemTeamLogo teamDetail={this.state.teamDetail} navigation={this.props.navigation}/>
                </View>
                <View>
                    <PlayerOverview player={this.state.playersList} navigation={this.props.navigation} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       
    }, 
    containerLogo: {
        height: 250,
        backgroundColor: '#3949AB',
    }   
});
import React, { Component } from 'react';

import { View, Text, Button, FlatList } from 'react-native';
import ItemTeam from './components/item-team';
import ItemSeparator from './components/item.separator';
import HttpTeam from '../../services/Team/http-teams';

class Team extends Component {

    constructor(props) {
        super(props);
        this.state = {
            teamList: []
        };
    }

    componentDidMount = () => {
        this.getTeams();
    };

    async getTeams() {
        const data = await HttpTeam.getTeams();
        this.setState({
            teamList: data.teams
        });
        console.log(data.teams);
    }

    static navigationOptions = {
        title: 'Teams',
    }

    renderItem = ({ item }) => <ItemTeam navigation={this.props.navigation} team={item} />
    separatorComponent = () => <ItemSeparator />
    emptyComponent = () => <Text>No hay equipos</Text>
    keyExtractor = item => item.idTeam.toString()

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.teamList}
                    renderItem={this.renderItem}
                    ListItemComponent={this.emptyComponent}
                    ItemSeparatorComponent={this.separatorComponent}
                    keyExtractor={this.keyExtractor}
                />

            </View>
        );
    }
}

export default Team;
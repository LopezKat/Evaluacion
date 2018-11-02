import React, { Component } from 'react';
import { ScrollView, FlatList } from 'react-native';
import ItemPlayer from '../../Players/components/item-player';
import ItemSeparator from '../../Players/components/item-separator';
import HttpTeam from '../../../services/Team/http-teams';

class PlayersOverview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playerList: [],
        };
    }

    componentDidMount = () => {
        strTeam = this.props.navigation.getParam('strTeam', 'no-data');
        this.getTeamsByName(strTeam);        
    }

    async getTeamsByName(strTeam) {
        const data = await HttpTeam.getTeamsByName(strTeam);
        this.setState({
            playerList: data.player
        })
    }

    renderItem = ({ item }) => <ItemPlayer navigation={this.props.navigation} player={item} />
    separatorComponent = () => <ItemSeparator />
    keyExtractor = item => item.idPlayer.toString()

    render() {
        return (<ScrollView>            
            <FlatList
                data={this.state.playerList}
                renderItem={this.renderItem}
                ItemSeparatorComponent={this.separatorComponent}
                keyExtractor={this.keyExtractor}
            />
        </ScrollView>
        );
    }
};

export default PlayersOverview;

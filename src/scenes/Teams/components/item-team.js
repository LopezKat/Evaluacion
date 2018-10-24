import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';

const ItemTeam = (props) => (
    <TouchableHighlight 
        onPress={( )=> props.navigation.navigate('PlayerScreen', { strTeam: props.team.strTeam })}
        underlayColor="#ccc"  
    >
        <View style={styles.container}>
            <View>
                <Image 
                    style={styles.image}
                    source={{ uri: props.team.strTeamLogo}}
                />           
            </View>
            <View style={styles.content}>
                <Text style={styles.contactName}>{props.team.strTeam}</Text>                
            </View>
        </View>
    </TouchableHighlight>
);
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    content: {
        paddingLeft: 10,
        justifyContent: 'center',
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35,
        padding: 5,
        margin: 5
    },
    contactName:{
        fontSize: 24,
        fontWeight: '200',
    }

});
export default ItemTeam;

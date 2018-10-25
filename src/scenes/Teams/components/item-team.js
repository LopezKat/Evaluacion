import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ItemTeam = (props) => (
    <TouchableHighlight 
        onPress={( )=> props.navigation.navigate('PlayerScreen', { strTeam: props.team.strTeam })}
        underlayColor="#ccc"  
    >
        <View style={styles.container}>
            <View style={styles.rows}>
            <View style={styles.contentImage}>
                <Image 
                    style={styles.image}
                    source={{ uri: props.team.strTeamBadge}}
                /> 
                <View style={styles.text}>
                    <Text style={styles.contactName}>{props.team.strTeam}</Text>                
                </View>
            </View>  
            <View style={styles.iconContent}>
                <Icon name="angle-right" size={24} color="#999"/>   
                </View>                   
            </View>
        </View>
    </TouchableHighlight>
);
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    contentImage: {        
        flexDirection: 'row',
    },
    text: {        
        justifyContent: 'center',
    },
    rows: {
         flexDirection: 'row',
         justifyContent: 'space-between',      
    },
    iconContent: {
        justifyContent: 'center',
        paddingRight: 10,
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

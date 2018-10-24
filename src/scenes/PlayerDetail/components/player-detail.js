import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';

const DetailPlayer = (props) => (
    <View style={styles.container}>
        <View style={styles.containerProfile}>
             <View>
                 <Text style={styles.titleName}>{props.playerDetail.strPlayer}</Text>
            </View>
            <View>
            <Text style={styles.titleName}>({props.playerDetail.dateBorn})</Text>
            </View>
            <View>
                <Image style={styles.image} source={{ uri: props.playerDetail.strThumb }} />
            </View>
            <View style={styles.containerRedes}>
                <View style={styles.redesWrapper}>
                    <Text style={styles.titleText}>Facebook{props.playerDetail.strFacebook}</Text>
                </View>
                <View style={styles.redesWrapper}>
                    <Text style={styles.titleText}>Twitter{props.playerDetail.strTwitter}</Text>
                </View>
                <View style={styles.redesWrapper}>
                    <Text style={styles.titleText}>instagram{props.playerDetail.strInstagram}</Text>
                </View>
            </View>
        </View>
        <View>            
            
            <Text style={styles.titleText}>Posición: {props.playerDetail.strPosition}</Text>
            <Text style={styles.titleText}>Estatura: {props.playerDetail.strHeight}</Text>
        </View>
        <View>
            <Text style={styles.titleText}>Historia: {props.playerDetail.strDescriptionEN}</Text>
        </View>
    </View>
);
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    containerProfile: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    containerRedes: {
        backgroundColor: '#33E6FF',
        flexDirection: 'row',
    },
    redesWrapper: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },    
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        padding: 5,
        margin: 5
    },
    titleText: {
        color: '#020202',
        fontSize: 15,
        marginBottom: 5,
        fontWeight: "bold"
    },
    titleName: {
        color: '#020202',
        fontSize: 25,
        marginBottom: 5,
        fontWeight: "bold"
        
    }
});

export default DetailPlayer;

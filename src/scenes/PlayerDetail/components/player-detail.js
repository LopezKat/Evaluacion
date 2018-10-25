import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

const DetailPlayer = (props) => (
    <View style={styles.container}>
        <View style={styles.containerProfile}>
            <View>
                <Text style={styles.titleName}>{props.playerDetail.strPlayer}</Text>
            </View>
            <View>
                <Text style={styles.titleText}>({props.playerDetail.dateBorn})</Text>
            </View>
            <View>
                <Text style={styles.titleText}>{props.playerDetail.strPosition}</Text>
            </View>
            <View>
                <Text style={styles.titleText}>{props.playerDetail.strHeight}</Text>
            </View>
            <View>
                <Image style={styles.image} source={{ uri: props.playerDetail.strThumb }} />
            </View>
            <View style={styles.containerRedes}>
                <View style={styles.redesWrapper}>
                    <Text style={styles.titleName}>Facebook{props.playerDetail.strFacebook}</Text>
                </View>
                <View style={styles.redesWrapper}>
                    <Text style={styles.titleName}>Twitter{props.playerDetail.strTwitter}</Text>
                </View>
                <View style={styles.redesWrapper}>
                    <Text style={styles.titleName}>Instagram{props.playerDetail.strInstagram}</Text>
                </View>
            </View>
        </View>
        <ScrollView style={styles.contentDescription}>            
                <Text style={styles.titleHistory}>{props.playerDetail.strDescriptionEN}</Text>            
        </ScrollView>
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
        backgroundColor: '#848484',
        flexDirection: 'row',
    },
    contentDescription:{
        marginHorizontal: 25,       
    },
    redesWrapper: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        padding: 5,
        margin: 5
    },
    titleText: {
        color: '#9e9a99',
        fontSize: 10,
        marginBottom: 5,
        fontWeight: "bold"
    },
    titleName: {
        color: '#9e9a99',
        fontSize: 20,
        marginBottom: 5,
        fontWeight: "bold"
    },
    titleHistory: {
        color: '#9e9a99',
        fontSize: 15,
        marginBottom: 5,
        textAlign: 'center'
    }
});

export default DetailPlayer;

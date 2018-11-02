import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

const DetailTeam = (props) => {
    return (<ScrollView>
        <View style={styles.container}>           

            <Text style={styles.title}>D.T</Text>
            <Text style={styles.text}>{props.teamDetail.strManager}</Text>

            <Text style={styles.title}>Formation Year</Text>
            <Text style={styles.text}>{props.teamDetail.intFormedYear}</Text>

            <Text style={styles.title}>Stadium</Text>
            <Text style={styles.text}>{props.teamDetail.strStadium} - {props.teamDetail.strStadiumLocation}</Text>

            <Text style={styles.title}>Capacity</Text>
            <Text style={styles.text}>{props.teamDetail.intStadiumCapacity}</Text>

            <Text style={styles.title}>History</Text>
            <Text style={styles.text}>{props.teamDetail.strDescriptionEN}</Text>
        </View>
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        color: '#d0efb1',
        fontSize: 16,
        marginBottom: 10,
    },
    title: {
        backgroundColor: '#fff',
        fontSize: 13,
        color: 'red',
        fontWeight: 'bold',
    },
});


export default DetailTeam;
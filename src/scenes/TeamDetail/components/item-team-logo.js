import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, Alert } from 'react-native';
import { SocialIcon,  } from 'react-native-elements';

const ItemTeamDetail = (props) => (
    
        <View style={styles.container}>
            <View style={styles.teamLogo}>
                <Text style={styles.title}>{props.teamDetail.strManager}</Text>
                <Text style={styles.title}> {props.teamDetail.intFormedYear} </Text>
                <Image style={styles.image} source={{ uri: props.teamDetail.strTeamBadge }} />
                <Text style={styles.title}>{props.teamDetail.strStadium} - {props.teamDetail.strStadiumLocation}</Text>
                <Text style={styles.title}>Capacity: {props.teamDetail.intStadiumCapacity}</Text>
            </View>
            <View style={styles.containerIcon}>
                <View style={styles.socialMediaWrapper}>                
                    <SocialIcon type='twitter'  
                        onPress={() => { props.navigation.navigate('WebViewScreen', { uriSocial: props.teamDetail.strTwitter }) }}
                      />                                    
                </View>
                <View style={styles.socialMediaWrapper}>
                    <SocialIcon type='instagram'
                        onPress={() => { props.navigation.navigate('WebViewScreen', { uriSocial: props.teamDetail.strInstagram }) }} />
                </View>
                <View style={styles.socialMediaWrapper}>
                    <SocialIcon type='facebook'
                        onPress={() => { props.navigation.navigate('WebViewScreen', { uriSocial: props.teamDetail.strFacebook }) }} />
                </View>
            </View>
        </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    containerIcon: {
        backgroundColor: '#3949AB',
        flexDirection: 'row'
    },
    socialMediaWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    teamLogo: {
        alignItems: 'center',
    },
    title: {
        fontSize: 15,
        color: '#fff',
    }
});


export default ItemTeamDetail;


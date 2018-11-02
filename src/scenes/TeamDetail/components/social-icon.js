import React from 'react';
import { TouchableHighlight, View, StyleSheet } from 'react-native';

import { SocialIcon } from 'react-native-elements'

const SocialNetwork = props => (
    <TouchableHighlight onPress={props.onPress}>
        <View style={styles.container}>
            <View style={styles.socialMediaWrapper}>
                <SocialIcon type='twitter'
                    onPress={() => { props.navigation.navigate('WebViewScreen', { navigation: props.navigation }) }} />
            </View>
            <View style={styles.socialMediaWrapper}>
                <SocialIcon type='instagram'
                    onPress={() => { props.navigation.navigate('WebViewScreen', { navigation: props.navigation }) }} />
            </View>
            <View style={styles.socialMediaWrapper}>
                <SocialIcon type='facebook'
                    onPress={() => { props.navigation.navigate('WebViewScreen', { navigation: props.navigation }) }} />
            </View>            
        </View>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    containerIcon: {
        backgroundColor: '#3949AB',
        flexDirection: 'row'
    },
    socialMediaWrapper: {
        flex: 1,
        alignItems: 'center',
    },
});

export default SocialNetwork;
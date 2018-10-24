import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';

const playerDetail = (props) => (
  <TouchableHighlight
    onPress={() => props.navigation.navigate('TeamScreen')}
    underlayColor="#ccc"
  >
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: props.player.strThumb }} />
        <Text style={styles.titleText}>{props.player.strPlayer}</Text>
        <Text style={styles.titleText}>{props.player.dateBorn}</Text>
        <Text style={styles.descriptionText}>{props.player.strDescriptionEN} </Text>
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
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    padding: 5,
    margin: 5
  },
  contactName: {
    fontSize: 24,
    fontWeight: '200',
  }

});
export default playerDetail;

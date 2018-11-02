import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ItemPlayer = (props) => (
  <TouchableHighlight
    onPress={() => props.navigation.navigate('TeamScreen', { strPlayer: props.player.strPlayer })}
    underlayColor="#ccc"
  >
    <View style={styles.container}>
      <View style={styles.rows}>
        <View style={styles.contentImage}>
          <Image style={styles.image} source={{ uri: props.player.strThumb }} />
          <View style={styles.text}>
            <Text style={styles.titleText}>{props.player.strPlayer}</Text>
            <Text style={styles.titleText}>{props.player.dateBorn}</Text>
            <Text style={styles.titlePosition}>{props.player.strPosition}</Text>
          </View>
        </View>
        <View style={styles.iconContent}>
          <Icon name="angle-right" size={24} color="#999" />
        </View>
      </View>
    </View>
  </TouchableHighlight>
);
const styles = StyleSheet.create({
  container: {
    
  },
  contentImage: {
    flexDirection: 'row',
  },
  rows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContent: {
    justifyContent: 'center',
    paddingRight: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    padding: 5,
    margin: 5
  },
  titleText: {
    color: '#9e9a99',
    fontSize: 15,
    marginBottom: 5,
  },
  titlePosition: {
    color: '#9e9a99',
    fontSize: 15,
    marginBottom: 5,
    fontWeight: "bold"
  },

});

export default ItemPlayer;

import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';

const ItemPlayer = (props) => (
  <TouchableHighlight
    onPress={() => props.navigation.navigate('PlayerDetailScreen', { strPlayer: props.player.strPlayer })}
    underlayColor="#ccc"
  >
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: props.player.strThumb }} />        
      </View>
      <View>
        <Text style={styles.titleText}>{props.player.strPlayer}</Text>
        <Text style={styles.titleText}>{props.player.dateBorn}</Text>
        <Text style={styles.titlePosition}>{props.player.strPosition}</Text>        
      </View>
    </View>
  </TouchableHighlight >
);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
},
image:{
    width: 70,
    height: 70,
    borderRadius: 35,
    padding: 5,
    margin: 5
},
titleText:{
  color: '#9e9a99',
  fontSize: 15,
  marginBottom: 5,
},
titlePosition:{
  color: '#9e9a99',
  fontSize: 15,
  marginBottom: 5,
  fontWeight: "bold"
} 
});

export default ItemPlayer;

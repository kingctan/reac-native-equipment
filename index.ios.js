'use strict';
import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
}
from 'react-native';

var MOCKED_MOVIES_DATA =[
  {
    title  : '标题',
    year : '2015',
    posters : {
      thumbnail : 'http://i.imgur.com/UePbdph.jpg'
    }
  }
]

class equipment extends Component {
  render() {
    const movie = MOCKED_MOVIES_DATA[0];
    console.log(movie.posters.thumbnail);
    return (
      <View style={styles.container}>
        <Text>{movie.title}</Text>
        <Text>{movie.year}</Text>
        <Image style={styles.thumbnail}
          source={{uri: movie.posters.thumbnail}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail :{
    width : 53,
    height : 81,
  }
});

AppRegistry.registerComponent('equipment', () => equipment);

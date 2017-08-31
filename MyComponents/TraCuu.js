import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

var styles = require('../styles/main');

export default class Apple extends Component {
  render() {
    return(
<<<<<<< HEAD
        <View style={styles.container}>
=======
        <View>
>>>>>>> 34922314f9c8658c69bde7e5e4e1a9c4b3bff202
          <Text style={{fontSize:20}}>Hello From second component</Text>
        </View>
    )
  }

  gotoPage(componentName, screenName) {
    this.props.navigator.push({ component: componentName, name: screenName });
  }
}
import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

var styles = require('../styles/main');

export default class Apple extends Component {
  render() {
    return(
        <View style={styles.container}>
          <Text style={{fontSize:20}}>Hello From second component</Text>
        </View>
    )
  }

  gotoPage(componentName, screenName) {
    this.props.navigator.push({ component: componentName, name: screenName });
  }
}
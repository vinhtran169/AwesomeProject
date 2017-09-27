import React, { Component } from 'react';
import { View, Alert, Text, TouchableHighlight, ListView, StyleSheet, AppRegistry, TextInput } from 'react-native';
import * as Progress from 'react-native-progress';

import Globals from '../globals';

var SQLite = require('react-native-sqlite-storage');

export default class ChiTietBenh extends Component {
  // Go Screen
  gotoPage(componentName, screenName) {
    this.props.navigator.push({ component: componentName, name: screenName });
  }

  // Render main
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.route.props.dataSend}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
  }
});
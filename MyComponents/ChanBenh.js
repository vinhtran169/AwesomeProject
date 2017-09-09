import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import TraCuu from './TraCuu';

var styles = require('../styles/main');

export default class ChanBenh extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={ () => this.gotoPage(TraCuu, 'TRA CỨU') }>
          <Text>Go to TraCuu Screen</Text>
        </TouchableHighlight>
      </View>
    )
  }

  gotoPage(componentName, screenName) {
    this.props.navigator.push({ component: componentName, name: screenName });
  }
}
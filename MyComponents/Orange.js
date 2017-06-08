import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class Orange extends Component {
  render() {
    return (
      <View>
        <Text>Orange</Text>
        <TouchableHighlight onPress={ () => this.goApple() }>
          <Text>Go to Apple</Text>
        </TouchableHighlight>
      </View>
    )
  }

  goApple() {
    this.props.navigator.push({ screen: 'Apple' });
  }
}
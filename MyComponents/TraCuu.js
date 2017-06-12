import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class Apple extends Component {
  render() {
    return(
        <View>
          <Text style={{fontSize:20}}>Hello From second component</Text>
        </View>
    )
  }

  goPage(page){
    this.props.navigator.push({ screen: page });
  }
}
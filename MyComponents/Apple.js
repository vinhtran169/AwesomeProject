import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class Apple extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor:'#ffF'}}>
        <Text>Apple</Text>
        <TouchableHighlight onPress={ () => this.goPage('Orange') }>
          <Text>Go to Orange</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={ () => this.goPage('Main') }>
          <Text>Go to Main</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={ () => this.goPage('List') }>
          <Text>Go to List</Text>
        </TouchableHighlight>
      </View>
    )
  }

  goPage(page){
    this.props.navigator.push({ screen: page });
  }
}
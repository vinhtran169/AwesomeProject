import React, { Component } from 'react';
import { View, Alert, Text, TouchableHighlight, ListView, StyleSheet, AppRegistry, TextInput, Image } from 'react-native';
import * as Progress from 'react-native-progress';

import Globals from '../globals';

// var styles = require('../styles/main');
var SQLite = require('react-native-sqlite-storage');
var propsData;

export default class ChiTietBenh extends Component {
  constructor(props){
    super(props);

    propsData = props.route.props.dataSend;
  }
  // Go Screen
  gotoPage(componentName, screenName) {
    this.props.navigator.push({ component: componentName, name: screenName });
  }

  // Render main
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleDetailBackground}>
          <Text style={styles.titleDetail}>{propsData.TENBENH.toUpperCase()}</Text>
        </View>

        <View style={styles.ImageDetailBackground}>
          <Image source={require('../images/doctor.png')} style={styles.ImageDetail}></Image>
        </View>

        <View style={styles.contentBorder}>
          <View style={styles.contentBackground}>
            <Text style={styles.contentText}>{propsData.MOTACHITIET}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
  },
  titleDetailBackground: {
    backgroundColor: '#ccc',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  titleDetail:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  ImageDetailBackground: {
    alignItems: 'center',
  },
  ImageDetail: {
    width: 100,
    height: 100,
  },
  contentBorder: {
    margin: 10,
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  contentBackground:{
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 30,
    paddingLeft: 10,
  },
  contentText:{
    color: '#000',
  }
});
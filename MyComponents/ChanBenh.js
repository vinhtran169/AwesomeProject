import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Alert } from 'react-native';

import TraCuu from './TraCuu';

var styles = require('../styles/main');
var SQLite = require('react-native-sqlite-storage');

var db = null;

export default class ChanBenh extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>TEST SQLite ============================</Text>
        <TouchableHighlight onPress={() => this.testSQLite()} >
          <Text>CLICK</Text>
        </TouchableHighlight>
      </View>
    )
  }

  constructor(props) {
    super(props);
    db = SQLite.openDatabase({name : 'MyDB.db', createFromLocation : '~ReactDB.db'}, this.successCB, this.errorCB);
    // db = SQLite.openDatabase({name : 'test02.db', createFromLocation : '~ReactDB.db', location: 'Library'}, this.successCB, this.errorCB);
  }

  testSQLite(){
    // SQLite.deleteDatabase({name : 'MyDB.db'}, this.successCB, this.errorCB);
    db.transaction((tx) => {
      var sql = 'SELECT * FROM DS_BENH';
      var params = [];

      // sql = 'CREATE TABLE IF NOT EXISTS Users2(id INTEGER PRIMARY KEY NOT NULL, name VARCHAR(30))';
      // sql = 'INSERT INTO DS_BENH (name, description) VALUES(?,?)';
      // params = ['test insert', 'test insert description'];
      // tx.executeSql(sql, params, (tx, results) => {
      //   console.log('SUCCESS SQL');
      // }, (error) => {
      //   console.log(error.message);
      // });

      tx.executeSql(sql, params, (tx, results) => {
        var len = results.rows.length;
        for (let i = 0; i < len; i++) {
          console.log('---------------------------------------------');
          let row = results.rows.item(i);
          console.log(`Name: ${row.name}, Des: ${row.description}`);
        }
      }, (error) => {
        console.log(error.message);
      });
    });
  }

  errorCB() {
    Alert.alert('MESSAGE', 'ERROR CB');
  }
  
  successCB() {
    Alert.alert('MESSAGE', 'SUCCESS CB');
  }

  gotoPage(componentName, screenName) {
    this.props.navigator.push({ component: componentName, name: screenName });
  }
}
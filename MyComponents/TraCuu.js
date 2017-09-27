import React, { Component } from 'react';
import { View, Alert, Text, TouchableHighlight, ListView, StyleSheet, AppRegistry, TextInput } from 'react-native';
import * as Progress from 'react-native-progress';

import Globals from '../globals';
import SectionHeader from './SectionHeader';
import Footer from './Footer';
import ChiTietBenh from './ChiTietBenh';

var styles = require('../styles/main');
var SQLite = require('react-native-sqlite-storage');

export default class TraCuu extends Component {
  constructor(props) {
    super(props)

    this.getDS_BENH();
    this.state = {
      loadScreen: false,
      dataSource: []
    }
  }

  // Get data listview
  getDS_BENH(searchText = ''){
    try {
      var sql = 'select * from DANHSACHBENH where TENBENH like ?';
      var params = ['%' + searchText + '%'];

      var db = SQLite.openDatabase({name: Globals.dbName},() => {
        console.log('SUCCESS');
        db.transaction((tx) => {
          tx.executeSql(sql, params, (tx, results) => {
            var dataList = [];
            var len = results.rows.length;
            for (let i = 0; i < len; i++) {
              dataList[i] = results.rows.item(i);
            }
            console.log('SUCCESS EXEC');
            this.reloadScreen(dataList);
          }, (err) => {
            console.log(err.message);
          });
        });
      }, (err)=>{console.log(err.message)});

    } catch (err) { }
  }

  // Reload data screen
  reloadScreen(dataList){
    const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
    const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
      getSectionData,
      getRowData,
    });

    const { dataBlob, sectionIds, rowIds } = this.formatData(dataList);

    this.setState({
      loadScreen: true,
      dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds)
    });

    this.render();
  }

  // Format data
  formatData(data) {
    // We're sorting by alphabetically so we need the alphabet
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    // Need somewhere to store our data
    const dataBlob = {};
    const sectionIds = [];
    const rowIds = [];

    // Each section is going to represent a letter in the alphabet so we loop over the alphabet
    for (let sectionId = 0; sectionId < alphabet.length; sectionId++) {
      // Get the character we're currently looking for
      const currentChar = alphabet[sectionId];

      // Get users whose first name starts with the current letter
      // const users = data.filter((user) => user.name.first.toUpperCase().indexOf(currentChar) === 0);
      const users = data.filter((row) => row.TENBENH.toUpperCase().indexOf(currentChar) === 0);

      // If there are any users who have a first name starting with the current letter then we'll
      // add a new section otherwise we just skip over it
      if (users.length > 0) {
        // Add a section id to our array so the listview knows that we've got a new section
        sectionIds.push(sectionId);

        // Store any data we would want to display in the section header. In our case we want to show
        // the current character
        dataBlob[sectionId] = { character: currentChar };

        // Setup a new array that we can store the row ids for this section
        rowIds.push([]);

        // Loop over the valid users for this section
        for (let i = 0; i < users.length; i++) {
          // Create a unique row id for the data blob that the listview can use for reference
          const rowId = `${sectionId}:${i}`;

          // Push the row id to the row ids array. This is what listview will reference to pull
          // data from our data blob
          rowIds[rowIds.length - 1].push(rowId);

          // Store the data we care about for this row
          dataBlob[rowId] = users[i];
        }
      }
    }
    return { dataBlob, sectionIds, rowIds };
  }

  // Render Header
  _renderHeader(){
    return(
      <View style={styles.containerSearchBar}>
        <TextInput
          style={styles.input}
          placeholder="Tìm kiếm..."
          onChangeText={(text) => this.getDS_BENH(text)}
        />
      </View>
    );
  }

  // Render Row
  _renderRow(data){
    return(
      <TouchableHighlight onPress={() => this.gotoPage(ChiTietBenh, 'CHI TIẾT', data.MOTACHITIET)}>
        <View style={styles.containerRow}>
            <Text style={styles.letter}>{data.TENBENH.charAt(0).toUpperCase()}</Text>
            <Text style={styles.content}>{data.TENBENH}</Text>
        </View>
      </TouchableHighlight>
    );
  }
  
  // Go Screen
  gotoPage(componentName, screenName, dataSend) {
    this.props.navigator.push({
      component: componentName, 
      name: screenName,
      props: {
        dataSend: dataSend
      }
    });
  }

  // Render main
  render() {
    if (!this.state.loadScreen){
      return (
        <View style={styles.containerProgress}>
          <Progress.CircleSnail style={styles.circleProgress} thickness={6} size={100} />
        </View>
      );
    } else {
      return (
          <ListView
            style={styles.containerListView}
            dataSource={this.state.dataSource}
            renderRow={(data) => this._renderRow(data)}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            renderHeader={() => this._renderHeader()}
            renderFooter={() => <Footer />}
            renderSectionHeader={(sectionData) => <SectionHeader {...sectionData} />}
          />
      );
    }
  }
}
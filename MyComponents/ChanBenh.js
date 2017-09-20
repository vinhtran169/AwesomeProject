import React, { Component } from 'react';
import { AppRegistry, StyleSheet, ListView, Text, View, TextInput, Button} from 'react-native';

import Row from './Row'
import Header from './Header'
import SectionHeader from './SectionHeader'
import Footer from './Footer'
import demoData from './../data'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import TokenAutocomplete from 'react-token-autocomplete';
import TagInput from 'react-native-tag-input';
import AutoTags from 'react-native-tag-autocomplete';

var styles = require('../styles/main');

export default class ChanBenh extends Component {
  constructor(props) {
    super(props)

    const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
    const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
      getSectionData,
      getRowData,
    });

    const { dataBlob, sectionIds, rowIds } = this.formatData(demoData);

    this.state = {
      tags: ["vinh"],
      suggestions : [ {name:'Mickey Mouse'},{name:'Vinh'}, {name:'Mickey Halu'},],
      tagsSelected : [],
      dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds)
    }

    
  }

  handleDelete = index => {
    let tagsSelected = this.state.tagsSelected;
    tagsSelected.splice(index, 1);
    this.setState({ tagsSelected });
 }
 
 handleAddition = suggestion => {  
  if (this.state.tagsSelected.indexOf(suggestion) === -1) {
    // element doesn't exist in array
    //alert("add OK");
    this.setState({ tagsSelected: this.state.tagsSelected.concat([suggestion]) });
  }
    
 }

  onChangeTags = (tags) => {
    this.setState({
      tags,
    });
  };

  
    render() {
      const inputProps = {
        keyboardType: 'default',
        placeholder: 'email',
        autoFocus: true,
      };

    return (
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row', }}>
              <View style={{ flex: 0.25, justifyContent: 'flex-start', flexDirection: 'column', marginLeft: 5, marginTop:5 }} >
                <EvilIcons name="search" size={40} color='red' />  
              </View>
              <View style={{ flex: 2, justifyContent: 'flex-start', flexDirection: 'column' }} >
                <View style={styles.autocompleteContainer}>
                  <AutoTags                          
                          suggestions={this.state.suggestions}
                          tagsSelected={this.state.tagsSelected}
                          handleAddition={this.handleAddition}
                          handleDelete={this.handleDelete} 
                          placeholder="thêm triệu chứng..." />              
              </View>
            </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end',}}>
          <View style={{ flex: 1, flexDirection: 'row', }}>
            <View style={{ flex: 2, justifyContent: 'flex-end', flexDirection: 'column' }} >
              {/* <button value="Chẩn đoán" Text="Chẩn đoán"/> */}
              {/* <TouchableHighlight onPress={() => this.chanBenh()} ></TouchableHighlight> */}
              <Button
                  onPress={() => this.chanBenh()}
                  title={"Chẩn đoán"}
                  style={styles.buttonStyle}>Chẩn đoán</Button>
            </View>
           
          </View>
      </View>
       
      </View>
    );
  }

  chanBenh() {
    this.state.tagsSelected.forEach(function(element) {
      alert(element.name);
    });
  }

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
      const users = data.filter((user) => user.name.first.toUpperCase().indexOf(currentChar) === 0);

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


}
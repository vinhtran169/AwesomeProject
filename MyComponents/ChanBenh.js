
import { AppRegistry, StyleSheet, ListView, Text, View, TextInput, Button, TouchableHighlight, Alert} from 'react-native';
import React, { Component, PropTypes } from 'react';

import Row from './Row'
import Header from './Header'
import SectionHeader from './SectionHeader'
import Footer from './Footer'
import demoData from './../data'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import TokenAutocomplete from 'react-token-autocomplete';
import TagInput from 'react-native-tag-input';
import AutoTags from 'react-native-tag-autocomplete';
import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';
import ChanBenhKetQua from '../MyComponents/ChanBenhKetQua'

var styles = require('../styles/main');
var SQLite = require('react-native-sqlite-storage');

var db = null;

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

    this.state = {
      tags: ["vinh"],
      suggestions : [ {name:'Mickey Mouse'},{name:'Vinh'}, {name:'Mickey Halu'},],
      tagsSelected : [],
      download: 'download',
      downloadProgress: 0,      
    }

    this.download = this.download.bind(this);
    this.downloaded = this.downloaded.bind(this);

    
  }

  download() {
    this.setState({ download: 'downloading', downloadProgress: 0 });
    const intervalId = setInterval(() => {
      // TODO: add this.chanBenh()
      
      if (this.state.downloadProgress < 100) {
        this.setState({ downloadProgress: this.state.downloadProgress + 10 });
      } else {
        clearInterval(intervalId);

        this.chanBenh();
        //alert('xong roi');
      }
    }, 50);
  }

  downloaded() {
    this.setState({ download: 'download' });
  }

  handleDelete = index => {
    let tagsSelected = this.state.tagsSelected;
    alert(index);
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

 handleDeleteAll(){    
  this.setState({ tagsSelected: [] });
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
        <View style={{ flexDirection: 'row', height:30 }}>
            <View style={{ flex: 2, flexDirection: 'row', marginLeft: 5}}>             
              <Text style={styles.childTitleTextBlue}>Các triệu chứng đã chọn</Text>            
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end',}}>           
              <Text style={styles.childTitleTextRedRight} onPress={() => this.handleDeleteAll()}>XÓA TÁT CẢ</Text>
            </View>
        </View>
        {/* need to add delete all text */}
        <View style={{ flex: 1, flexDirection: 'row',}}>
              
        
              <View style={{ flex: 0.25, justifyContent: 'flex-start', flexDirection: 'column', marginLeft: 5}} >
                <EvilIcons name="search" size={40} color='red' />  
              </View>
              <View style={{ flex: 2, justifyContent: 'flex-start', flexDirection: 'column' }} >
                <View style={styles.autocompleteContainer}>
                  <AutoTags                          
                          suggestions={this.state.suggestions}
                          tagsSelected={this.state.tagsSelected}
                          handleAddition={this.handleAddition}
                          handleDelete={this.handleDelete} 
                          placeholder="thêm triệu chứng..." 
                          autoFocus={false}                          
                          />              
              </View>
            </View>

        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end',}}>    
             <View style={{ flex: 0.5}}></View>
            <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'column', alignItems:'center', width:50, marginBottom:5 }} >
              <RoundButton
                  type="primary"
                  states={{
                    download: {
                      text: 'Chẩn đoán',
                      backgroundColors: ['#4DC7A4', '#66D37A'],
                      onPress: this.download,
                    },
                    downloading: {
                      backgroundColors: ['#6A6AD5', '#6F86D9'],
                      progressBackgroundColor: '#F0F0F0',
                      text: 'Đang chẩn đoán',
                      progress: true,
                      progressWidth: 2,
                      progressFill: this.state.downloadProgress,
                      onPress: this.downloaded,
                    },
                  }}
                  buttonState={this.state.download}
                />
            </View>    
            <View style={{ flex: 0.5}}></View>
         </View>
      
      </View>
    );
  }

  chanBenh() {
    this.state.tagsSelected.forEach(function(element) {
      //alert(element.name);
     
    });

    this.props.navigator.push({
      component: ChanBenhKetQua,
      name: 'Kết quả',
    });
  }

 


}
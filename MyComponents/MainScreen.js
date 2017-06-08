import React, { Component } from 'react'
import { View, ListView, Text, Image, TouchableHighlight, Alert } from 'react-native'

var styles = require('../css/style');
var mainPageData = require('../json/mainpage.json');

export default class MainScreen extends Component {
	render(){
		return(
	      <View style={styles.mainPageContainer}>
	        <MainPage dataSource = {mainPageData[0]} />
	        <MainPage dataSource = {mainPageData[1]} />
	        <MainPage dataSource = {mainPageData[2]} />
	        <MainPage dataSource = {mainPageData[3]} />
	      </View>
	   );
	}
}
import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } from 'react-native-nav'

var styles = require('../styles/main');

export default class CustomNavigationBar extends Component{
    render(){
        return(
            <View style={styles.navbarContainer}>
                <NavButton style={styles.containerButtonLeft} onPress={() => this.props.navigator.pop()}>
                    <Image source={require('../images/back-button.png')} style={styles.imgButtonLeft}></Image>
                </NavButton>

                <View style={styles.containerNavTitle}>
                    <Text>Screen</Text>
                </View>

                <NavButton style={styles.containerButtonRight}>
                    <Icon name="ios-menu" size={30} color='black' />
                </NavButton>
            </View>
        );
    }
}
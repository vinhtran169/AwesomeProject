/**
 * chanbenh app v1.0
 * pro react team 06-2017
 */
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, StatusBar, Image, Button, Alert, TouchableHighlight, Navigator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } from 'react-native-nav';
import Drawer from 'react-native-drawer';

import TraCuu from './MyComponents/TraCuu'
import Chanbenh from './MyComponents/ChanBenh'

var styles = require('./styles/main');


//export default
class App extends Component {
  constructor(props) {
    super(props);
    // height of advertising banner
    this.state = { footHeight: 0 };
  }

  // Pop/Push navigator
  gotoPage(componentName, screenName) {
    this.props.navigator.push({
      component: componentName,
      name: screenName,
    });
  }

  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };


  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableHighlight style={styles.row1} onPress={() => this.gotoPage(TraCuu, 'TRA CỨU')} >
            <View style={{ flex: 1, flexDirection: 'row', }}>
              <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', marginLeft: 5 }} >
                <Image source={require('./images/doctor1.png')} style={styles.ImageMedium}></Image>
              </View>
              <View style={{ flex: 2, justifyContent: 'center', flexDirection: 'column' }} >
                <Text style={styles.fullWidthButtonText}>
                  TRA CỨU BỆNH
                    </Text>
                <Text style={styles.childText}>Tra cứu bệnh lí và cách chữa trị</Text>
              </View>
              <View style={{ flex: 0.5, justifyContent: 'center', flexDirection: 'column' }} >
                <EvilIcons name="arrow-right" size={40} color='white' />
              </View>
            </View>
          </TouchableHighlight>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableHighlight style={styles.row2} onPress={() => this.gotoPage(Chanbenh, 'CHẨN BỆNH')} >
            <View style={{ flex: 1, flexDirection: 'row', }}>
              <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', marginLeft: 2 }} >
                <Image source={require('./images/search4.png')} style={styles.ImageLarger}></Image>
              </View>
              <View style={{ flex: 2, justifyContent: 'center', flexDirection: 'column' }} >
                <Text style={styles.fullWidthButtonText}>
                  CHẨN BÊNH
                    </Text>
                <Text style={styles.childText}>Chẩn đoán bênh dựa trên triệu chứng</Text>
              </View>
              <View style={{ flex: 0.5, justifyContent: 'center', flexDirection: 'column' }} >
                <EvilIcons name="arrow-right" size={40} color='white' />
              </View>
            </View>
          </TouchableHighlight>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableHighlight style={styles.row3}
            onPress={() => Alert.alert('Alert Title', 'khon co chi', )}>
            <View style={{ flex: 1, flexDirection: 'row', }}>
              <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', marginLeft: 2 }} >
                <Image source={require('./images/test2.png')} style={styles.ImageSmall}></Image>
              </View>
              <View style={{ flex: 2, justifyContent: 'center', flexDirection: 'column' }} >
                <Text style={styles.fullWidthButtonText}>BÀI TEST</Text>
                <Text style={styles.childText}>Làm bài kiểm tra sức khỏe</Text>
              </View>
              <View style={{ flex: 0.5, justifyContent: 'center', flexDirection: 'column' }} >
                <EvilIcons name="arrow-right" size={40} color='white' />
              </View>
            </View>
          </TouchableHighlight>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableHighlight style={styles.row4} onPress={() => Alert.alert('Alert Title', 'khon co chi 2', )}>
            <View style={{ flex: 1, flexDirection: 'row', }}>
              <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', marginLeft: 2 }} >
                <Image source={require('./images/info.png')} style={styles.ImageSmall}></Image>
              </View>
              <View style={{ flex: 2, justifyContent: 'center', flexDirection: 'column' }} >
                <Text style={styles.fullWidthButtonText}>
                  THÔNG TIN
                    </Text>
                <Text style={styles.childText}>Cập nhật thông tin cá nhân, để dự đoán bệnh chính xác hơn</Text>
              </View>
              <View style={{ flex: 0.5, justifyContent: 'center', flexDirection: 'column' }} >
                <EvilIcons name="arrow-right" size={40} color='white' />
              </View>
            </View>
          </TouchableHighlight>
        </View>

        <View style={{ flexDirection: 'row', height: this.state.footHeight }}>
          <TouchableHighlight style={styles.row5}
            onPress={() => this._navigate()}>
            <Image source={require('./images/advertise.png')}></Image>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

class AwesomeProject extends React.Component {
  render() {
    var NavigationBarRouteMapper = {
      LeftButton: (route, navigator, index, navState) => {
        if (true) {
          return (
            <NavButton style={styles.containerButtonLeft} onPress={() => navigator.pop()}>
                <Image source={require('./images/back-button.png')} style={styles.imgButtonLeft}></Image>
            </NavButton>
          );
        }
      },

      RightButton: (route, navigator, index, navState) => {
        return(
          <NavButton style={styles.containerButtonRight}>
              <Icon name="ios-menu" size={30} color='black' />
          </NavButton>
        );
      },

      Title: (route, navigator, index, navState) =>{
        return (
          <NavTitle  style={styles.navTitle}>
            <Text>{route.name}</Text>
          </NavTitle>
        );
      }
    };


    return (
      <Navigator
        initialRoute={{ name: 'HOME', component: App, index: 0 }}
        renderScene={(route, navigator) => {
          if (route.component) {
            return React.createElement(route.component, { ...this.props, ...route.passProps, navigator, route });
          }
        }}
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navbarContainer}
            navigationStyles={Navigator.NavigationBar.StylesIOS}
            routeMapper={NavigationBarRouteMapper}
          />
        }
      />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
/**
 * chanbenh app v1.0
 * pro react team 06-2017
 */
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, StatusBar, Image, Button, Alert, TouchableHighlight, Navigator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } from 'react-native-nav'

import TraCuu from './MyComponents/TraCuu'
import Chanbenh from './MyComponents/Orange'

var styles = require('./styles/main');

//export default 
class App extends Component {
  constructor(props) {
    super(props);
    // height of advertising banner
    this.state = { footHeight: 0 };
  }

  gotoNext(myVar) {
    let screenName;
    switch (myVar) {
      case 1:
        screenName = TraCuu
        break;
      case 2:
        screenName = Chanbenh
        break;
      default:
        screenName = TraCuu
        break;
    }

    this.props.navigator.push({
      component: screenName,
      passProps: {
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar style={styles}>
          <NavButton>
            <NavButtonText>
              <Image source={require('./images/heart.png')} style={styles.ImageNav}></Image>
            </NavButtonText>
          </NavButton>
          <NavTitle style={styles.title}>
            {"BÁC SĨ GIA ĐÌNH"}
          </NavTitle>
          <NavButton>
            <NavButtonText style={styles.buttonText}>
              <Icon name="ios-menu" size={30} color='white' />
            </NavButtonText>
          </NavButton>
        </NavBar>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableHighlight style={styles.row1} onPress={() => this.gotoNext(1)} >
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
          <TouchableHighlight style={styles.row2} onPress={() => this.gotoNext(2)} >
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
                <Text style={styles.fullWidthButtonText}>
                  BÀI TEST
                    </Text>
                <Text style={styles.childText}>Làm bài kiểm tra sức khỏe</Text>
              </View>
              <View style={{ flex: 0.5, justifyContent: 'center', flexDirection: 'column' }} >
                <EvilIcons name="arrow-right" size={40} color='white' />
              </View>
            </View>
          </TouchableHighlight>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableHighlight style={styles.row4} onPress={() => this._navigate()}>
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
    return (
      <Navigator
        style={{ flex: 1 }}
        initialRoute={{ name: 'App', component: App, index: 0 }}
        renderScene={(route, navigator) => {
          if (route.component) {
            return React.createElement(route.component, { ...this.props, ...route.passProps, navigator, route });
          }
        }}
        navigationBar={
          <Navigator.NavigationBar routeMapper={NavigationBarRouteMapper} />
        } />
    );
  }
}


var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if (index > 0) {
      return (
        <View style={styles.container}>
          <NavBar style={styles}>
            <NavButton
              onPress={() => {
                if (index > 0) {
                  navigator.pop();
                }
              }}>
              <NavButtonText>
                <Image source={require('./images/heart.png')} style={styles.ImageNav}></Image>
              </NavButtonText>
            </NavButton>
            <NavTitle style={styles.title}>
              {"BÁC SĨ GIA ĐÌNH"}
            </NavTitle>
            <NavButton>
              <NavButtonText style={styles.buttonText}>
                <Icon name="ios-menu" size={30} color='white' />
              </NavButtonText>
            </NavButton>
          </NavBar>
          <TouchableHighlight style={{ marginTop: 20 }}
            onPress={() => {
              if (index > 0) {
                navigator.pop();
              }
            }}>
            <Text>Back</Text>
          </TouchableHighlight>
        </View>
      )
    } else {
      return null
    }
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return null
  }
};


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
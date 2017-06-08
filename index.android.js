/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, StatusBar, Image, Button, Alert, TouchableHighlight, Navigator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } from 'react-native-nav'

import Apple from './MyComponents/Apple'

var styles = require('./style');
const myIcon = (<Icon name="rocket" size={30} color="#900" />)

export default class AwesomeProject extends Component {
    constructor(props) {
      super(props);
      this.state = {footHeight: 0};

      setInterval(() => {
          this.setState({ 
            //footHeight : this.state.footHeight > 0 ? 0 : 50
          });
        }, 1000);
    }

    render() {
        let showLeft = 1 == 1 ? 'Trờ về' : '';
        let pageTitle = 'Chẩn bệnh';
        let left = 1 == 1 ? {
            icon: "ios-arrow-back",
            label: showLeft,
            onPress: () => {
                alert('Go back!')
            }
        } : '';
        
        return (
            <View style={styles.container}>
             <NavBar style={styles}>
              <NavButton>
                <NavButtonText>
                 <Image  source={require('./images/heart.png')} style={styles.ImageNav}></Image>
                </NavButtonText>
              </NavButton>
              <NavTitle style={styles.title}>
                {"BÁC SĨ GIA ĐÌNH"}            
              </NavTitle>
              <NavButton>
                <NavButtonText style={styles.buttonText}>
                  <Icon name="ios-menu" size={30} color='white'/>
                </NavButtonText>
              </NavButton>
            </NavBar>
            <View style={{flex: 1, flexDirection: 'row'}}>
              
                <TouchableHighlight  style={styles.row1} onPress={ () => {return this.renderScene("Apple", "1")}} >
                <View style={{flex: 1, flexDirection: 'row',}}> 
                  <View style={{flex: 1, justifyContent: 'center', flexDirection: 'column', marginLeft: 5}} >
                    <Image  source={require('./images/doctor1.png')} style={styles.ImageMedium}></Image>
                  </View>
                  <View style={{flex: 2, justifyContent: 'center', flexDirection: 'column'}} >                    
                    <Text style={styles.fullWidthButtonText}>                      
                      TRA CỨU BỆNH                        
                    </Text>
                    <Text style={styles.childText}>Tra cứu bệnh lí và cách chữa trị</Text>
                                        
                  </View>
                   <View style={{flex: 0.5, justifyContent: 'center', flexDirection: 'column'}} >
                    <EvilIcons name="arrow-right" size={40} color='white'/>
                  </View>
                </View>
                </TouchableHighlight> 
              
            </View>
             <View style={{flex: 1, flexDirection: 'row'}}>
              
                <TouchableHighlight  style={styles.row2} 
                                        onPress={() => Alert.alert(
                                          'Alert Title',
                                          'khon co chi',
                                        )}>
                <View style={{flex: 1, flexDirection: 'row',}}> 
                  <View style={{flex: 1, justifyContent: 'center', flexDirection: 'column', marginLeft: 2}} >
                    <Image  source={require('./images/search4.png')} style={styles.ImageLarger}></Image>
                  </View>
                  <View style={{flex: 2, justifyContent: 'center', flexDirection: 'column'}} >                    
                    <Text style={styles.fullWidthButtonText}>                      
                      CHẨN BÊNH                      
                    </Text>
                    <Text style={styles.childText}>Chẩn đoán bênh dựa trên triệu chứng</Text>
                                        
                  </View>
                 <View style={{flex: 0.5, justifyContent: 'center', flexDirection: 'column'}} >
                    <EvilIcons name="arrow-right" size={40} color='white'/>
                  </View>
                </View>
                </TouchableHighlight> 
              
            </View>
             <View style={{flex: 1, flexDirection: 'row'}}>
              
                <TouchableHighlight  style={styles.row3} 
                                        onPress={() => Alert.alert(
                                          'Alert Title',
                                          'khon co chi',
                                        )}>
                <View style={{flex: 1, flexDirection: 'row',}}> 
                  <View style={{flex: 1, justifyContent: 'center', flexDirection: 'column', marginLeft: 2}} >
                    <Image  source={require('./images/test2.png')} style={styles.ImageSmall}></Image>
                  </View>
                  <View style={{flex: 2, justifyContent: 'center', flexDirection: 'column'}} >                    
                    <Text style={styles.fullWidthButtonText}>                      
                      BÀI TEST                      
                    </Text>
                    <Text style={styles.childText}>Làm bài kiểm tra sức khỏe</Text>                                        
                  </View>
                  <View style={{flex: 0.5, justifyContent: 'center', flexDirection: 'column'}} >
                    <EvilIcons name="arrow-right" size={40} color='white'/>
                  </View>
                </View>
                </TouchableHighlight>               
            </View>*/} 
            <View style={{flex: 1, flexDirection: 'row'}}>              
                <TouchableHighlight  style={styles.row4} 
                                        onPress={ () => this._navigate() }>
                <View style={{flex: 1, flexDirection: 'row',}}> 
                  <View style={{flex: 1, justifyContent: 'center', flexDirection: 'column', marginLeft: 2}} >
                    <Image  source={require('./images/info.png')} style={styles.ImageSmall}></Image>
                  </View>
                  <View style={{flex: 2, justifyContent: 'center', flexDirection: 'column'}} >                    
                    <Text style={styles.fullWidthButtonText}>                      
                      THÔNG TIN                      
                    </Text>
                    <Text style={styles.childText}>Cập nhật thông tin cá nhân, để dự đoán bệnh chính xác hơn</Text>                                        
                  </View>
                  <View style={{flex: 0.5, justifyContent: 'center', flexDirection: 'column'}} >
                    <EvilIcons name="arrow-right" size={40} color='white'/>
                  </View>
                </View>
                </TouchableHighlight>        
            </View>
            <View style={{flexDirection: 'row', height: this.state.footHeight}}>              
                <TouchableHighlight  style={styles.row5} 
                                        onPress={() => this._navigate()}>                  
                    <Image  source={require('./images/advertise.png')}></Image>       
                </TouchableHighlight>              
            </View>

            <Navigator 
                    initialRoute={{screen: 'Apple'}} 
                    renderScene={(route, nav) => {return this.renderScene(route, nav)}} 
                />
          </View>
        );
    }

    _navigate(){
      this.props.navigator.push({
        screen: 'Apple', // Matches route.name
      })
    }
    
    renderScene = (route,nav) => {
        switch (route.screen) {
            case 'Main':
                return <MainPage dataSource={mainPageData} navigator={nav} />
            case 'List':
                return <MainList dataSource={this.state.dataSource} navigator={nav} />
            case 'Apple':
                return <Apple navigator={nav} />
            case 'Orange':
                return <Orange navigator={nav} />
        }
    }
}



AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

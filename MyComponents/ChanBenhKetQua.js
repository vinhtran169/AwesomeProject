import React, { Component } from 'react';
import { AppRegistry, StyleSheet, ListView, Text, View, TextInput, Button} from 'react-native';
import AnimatedBar from "react-native-animated-bar";
import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';

var styles = require('../styles/main');

export default class ChanBenhKetQua extends Component {
  constructor(props) {
    super(props)  }  
    state = {
      progress: 0.9,
      progress2: 0.7,
      progress3: 0.2,
    };

    

    render() {
      const inputProps = {
        keyboardType: 'default',
        placeholder: 'email',
        autoFocus: true,
      };

    return (
      <View style={styles.container}>
        <View style={[styles.row, styles.center]}>
        <Text>BẠN CÓ NHỮNG TRIỆU CHỨNG CỦA</Text></View>
        <View style={[styles.row, styles.center]}><Text>PARKISON</Text></View>
        <AnimatedBar
          progress={this.state.progress}
          height={null}
          borderColor="#DDD"
          barColor="#FF0000"
          borderRadius={5}
          borderWidth={5}
          duration={500}>
          <View style={[styles.row, styles.center]}>
            <Text style={[styles.barText, { fontSize: 30 }]}>
            PARKISON {Math.round(this.state.progress * 100)}%
            </Text>
          </View>
      </AnimatedBar>
      <AnimatedBar
          progress={this.state.progress2}
          height={null}
          borderColor="#DDD"
          barColor="#FFA125"
          borderRadius={5}
          borderWidth={5}
          duration={500}>
          <View style={[styles.row, styles.center]}>
            <Text style={[styles.barText, { fontSize: 30 }]}>
              THAN KINH TAY {Math.round(this.state.progress2 * 100)}%
            </Text>
          </View>
      </AnimatedBar>
      <AnimatedBar
          progress={this.state.progress3}
          height={null}
          borderColor="#DDD"
          barColor="#3399FF"
          borderRadius={5}
          borderWidth={5}
          duration={500}>
          <View style={[styles.row, styles.center]}>
            <Text style={[styles.barText, { fontSize: 30 }]}>
              ROI LOAN {Math.round(this.state.progress3 * 100)}%
            </Text>
          </View>
      </AnimatedBar>
      <View style={[styles.row]}>
        <Text>Với các triệu chứng: </Text></View>
        <View><Text>nôn mửa, khó ngủ, run tay chân khó kiểm soát.</Text></View>
        <View style={[styles.row]}>
        <Text>Kha nang cao ban da mac PARKISON</Text></View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginTop: 5}}>    
        
            <View style={{ flex: 0.5}}></View>
            <View style={{ flex: 1, flexDirection: 'column', alignItems:'center', width:50, marginTop:5 }} >
                  <RoundButton
                          text="Button"
                          type="primary"
                          shape="rectangle"
                          backgroundColors={['#4DC7A4', '#66D37A']}
                          gradientStart={{ x: 0.5, y: 1 }}
                          gradientEnd={{ x: 1, y: 1 }}                          
                          onPress={() => {}}              
                        >
                  </RoundButton>
                </View>   
            <View style={{ flex: 0.5}}></View>
          </View>
        </View>
    );
  } 
}
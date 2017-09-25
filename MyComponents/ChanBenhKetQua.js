import React, { Component } from 'react';
import { AppRegistry, StyleSheet, ListView, Text, View, TextInput, Button} from 'react-native';
import AnimatedBar from "react-native-animated-bar";

var styles = require('../styles/main');

export default class ChanBenhKetQua extends Component {
  constructor(props) {
    super(props)
    
     }

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
              {Math.round(this.state.progress * 100)}%
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
              {Math.round(this.state.progress2 * 100)}%
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
              {Math.round(this.state.progress3 * 100)}%
            </Text>
          </View>
      </AnimatedBar>
      </View>
    );
  }

 
}
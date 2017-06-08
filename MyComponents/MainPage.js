import React, { Component } from 'react'
import { View, ListView, Text, Image, TouchableHighlight, Alert } from 'react-native'

var styles = require('../css/style');

export default class MainPage extends Component {
   render(){
      let data = this.props.dataSource;
      let imgURL = require('../images/doctor1.png');

      return(
         /*
         <TouchableHighlight style={styles.mainPageContainer} onPress={ () => this.goPage() } >
            <View style={[{backgroundColor:[data.color]}, styles.listItem]}>
               <View style={styles.block_column1}>
                  <Image source={imgURL} style={styles.iconMainPage} />
               </View>

               <View style={styles.block_column2}>
                  <Text>{data.title}</Text>
                  <Text>{data.descript}</Text>
               </View>
               
               <View style={styles.block_column3}>
                  <Text>BUTTON</Text>
               </View>
            </View>
         </TouchableHighlight>
         */

         <View style={styles.mainPageContainer}>
            <TouchableHighlight style={styles.mainPageContainer} onPress={ () => this.goPage() } >
               <View style={[{backgroundColor:[data[0].color]}, styles.listItem]}>
                  <View style={styles.block_column1}>
                     <Image source={imgURL} style={styles.iconMainPage} />
                  </View>

                  <View style={styles.block_column2}>
                     <Text>{data[0].title}</Text>
                     <Text>{data[0].descript}</Text>
                  </View>
                  
                  <View style={styles.block_column3}>
                     <Text>BUTTON</Text>
                  </View>
               </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.mainPageContainer} onPress={ () => this.goPage() } >
               <View style={[{backgroundColor:[data[1].color]}, styles.listItem]}>
                  <View style={styles.block_column1}>
                     <Image source={imgURL} style={styles.iconMainPage} />
                  </View>

                  <View style={styles.block_column2}>
                     <Text>{data[1].title}</Text>
                     <Text>{data[1].descript}</Text>
                  </View>
                  
                  <View style={styles.block_column3}>
                     <Text>BUTTON</Text>
                  </View>
               </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.mainPageContainer} onPress={ () => this.goPage() } >
               <View style={[{backgroundColor:[data[2].color]}, styles.listItem]}>
                  <View style={styles.block_column1}>
                     <Image source={imgURL} style={styles.iconMainPage} />
                  </View>

                  <View style={styles.block_column2}>
                     <Text>{data[2].title}</Text>
                     <Text>{data[2].descript}</Text>
                  </View>
                  
                  <View style={styles.block_column3}>
                     <Text>BUTTON</Text>
                  </View>
               </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.mainPageContainer} onPress={ () => this.goPage() } >
               <View style={[{backgroundColor:[data[3].color]}, styles.listItem]}>
                  <View style={styles.block_column1}>
                     <Image source={imgURL} style={styles.iconMainPage} />
                  </View>

                  <View style={styles.block_column2}>
                     <Text>{data[3].title}</Text>
                     <Text>{data[3].descript}</Text>
                  </View>
                  
                  <View style={styles.block_column3}>
                     <Text>BUTTON</Text>
                  </View>
               </View>
            </TouchableHighlight>
         </View>
      )
   }

   goPage(){
      this.props.navigator.push({ screen: 'List' });
   }

}
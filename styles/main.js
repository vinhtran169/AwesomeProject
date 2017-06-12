
'use strict';
var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    /*justifyContent: 'center',
    alignItems: 'center',*/
    backgroundColor: '#F5FCFF',
  },
  statusBar: {
    backgroundColor: '#3343BD',
  },
  navBar: {
    backgroundColor: '#8C4648',
  },
  title: {
    color: 'white',
  },
  navGroup: {
    justifyContent: 'center',
  },
  navButton: {
    flex: 1,
  },
  inputsContainer: {
    flex: 1
  },
  row1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#E45454',

  },
  row2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#598B7F'
  },
  row3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#525E6A'
  },
  row4: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F3AD2E'
  },
  row5: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  fullWidthButtonText: {
    fontSize: 24,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold'
  },
  childText: {
    fontSize: 18,
    color: 'white',
  },
  ImageSmall: {
    width: 70,
    height: 68,
  },
  ImageMedium: {
    width: 70,
    height: 80,
  },
  ImageLarger: {
    width: 90,
    height: 100,
  },
  ImageNav: {
    width: 70,
    height: 70,
  },  
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});
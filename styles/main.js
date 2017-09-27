
'use strict';
var React = require('react-native');

var {
  StyleSheet,
  Navigator,
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 50,
    // marginTop: Navigator.NavigationBar.Styles.General.TotalNavHeight,
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

  /*=============== Style q_thinh ==============*/
  //Navigator.NavigationBar
  navbarContainer: {
    height: 70,
    backgroundColor: '#8C4648',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
    
  },

  containerButtonLeft:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 0,
    marginTop: 5,
  },

  imgButtonLeft: {
    width: 40,
    height: 40,
  },

  containerButtonRight:{
    justifyContent: 'center',
    flex: 1,
    marginRight: 10,
    marginTop: 5,
  },

  navTitle: {
    position: 'absolute',
    top: 15,
    left: 0,
    right: 0,
    alignItems: 'center',
    color: 'white',
  },

  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  },

  containerListView: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
  },

  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },

  containerSearchBar: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C1C1C1',
  },

  input: {
    height: 40,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },

  circleProgress:{
    alignItems: 'center',
  },

  containerProgress: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  containerRow: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  content: {
    marginLeft: 12,
    fontSize: 16,
  },

  letter: {
    padding: 10, 
    margin: 5,
    color: '#333', 
    width: 40, 
    height: 40, 
    textAlign: 'center',
  }

});
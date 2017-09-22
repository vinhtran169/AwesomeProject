var React = require('react-native');
var SQLite = require('react-native-sqlite-storage');

class Globals{
  static db = null;
  static dbName = 'MyDB.db';

  static openDB(){
    this.db = SQLite.openDatabase(
      {name : this.dbName, createFromLocation: '~ReactDB.db'}, 
      () => {console.log('====Success open database')},
      () => {console.log('====Error open database')});
    return this.db;
  }

  static closeDB(){
    this.db.close();
  }

}

module.exports = Globals;
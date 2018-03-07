import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Font} from 'expo';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class App extends React.Component {
 async componentWillMount(){
  await Font.loadAsync({
      'open-sans-bold': require('./assests/font/OpenSans-Bold.`ttf'),
    })
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Header headerTitle={'Albums'}/>
        <AlbumList/>
      </View>
    );
  }
}



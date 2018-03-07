import React, { Component } from 'react';
import {  View, Text, ScrollView,Linking} from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
    state = { albums:[] }

    componentWillMount(){
        const apiUrl = 'https://rallycoding.herokuapp.com/api/music_albums'
        axios.get(apiUrl)
            .then(response => this.setState({albums: response.data}))
    }
    __onBuyEvent(url,e){
      console.log('Buying.....')
      Linking.openURL(url).catch(error=>console.error('An error occurred', error))
    }
    __renderAlbums(){
       return this.state.albums.map((album,i)=><AlbumDetail album={album} onBuy={this.__onBuyEvent} key={i} />)
    }
  render() {
    return (
      <ScrollView>
        <View>
          {this.__renderAlbums()}
       </View>
      </ScrollView>
    );
  }
}

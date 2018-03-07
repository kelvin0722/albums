import React, { Component } from 'react';
import {  View, Text, ScrollView,Linking} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import  *as actions  from '../actions/actionCreators'
import AlbumDetail from './AlbumDetail';
import AppContainer from '../../AppContainer';

class AlbumList extends Component {
    componentWillMount(){
      this.props.actions.albumRequest()
        
    }
    __onBuyEvent(url,e){
      console.log('Buying.....')
     // this.props.actions
      Linking.openURL(url).catch(error=>console.error('An error occurred', error))
    }
    __renderAlbums(){
       return this.props.albums.map((album,i)=><AlbumDetail album={album} onBuy={this.__onBuyEvent} key={i} />)
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

const mapDispatchToProps = (dispatch) => {
  return {
    actions:bindActionCreators(actions,dispatch)
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AlbumList)
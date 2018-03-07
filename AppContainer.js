import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Text, View } from 'react-native';

import store from './src/store/store';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import * as actions  from './src/actions/actionCreators'


class AppContainer extends React.Component {
 async componentWillMount(){
  await  this.props.actions.loadFonts()
 }
  render() {
    console.log(store.getState())
    return (
      <View style={{flex:1}}>
        <Header headerTitle={'Albums'}/>
        <AlbumList/>
      </View>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
   actions:bindActionCreators(actions,dispatch)
  }
}

export default connect(null,mapDispatchToProps) (AppContainer) ;


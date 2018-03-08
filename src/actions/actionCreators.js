import {Linking} from 'react-native';
import axios from 'axios';
import  actionsTypes  from './actionTypes';
import {Font} from 'expo';


export const albumRequest = ()=>{
    return(dispatch)=>{
        // setting fetching true
        dispatch(fetching())
        //making an api call
        const apiUrl = 'https://rallycoding.herokuapp.com/api/music_albums'
        axios.get(apiUrl)
            .then(response => dispatch(albumAvailable(response.data)) )

    }
}

export const albumAvailable = (albumsArray) => {
    return{
        type:actionsTypes.ALBUM_AVAILABLE,
        payload:{
            isFetching:false,
            albums:[...albumsArray]
            
        }
    }
  
}

export const albumRedirect = (url='')=>{
    return(dispatch)=>{
        console.log('Buying.....')
        Linking.openURL(url).then(()=>dispatch(albumRedirectSuccess('message redirect successful!!')))
                .catch(error=>dispatch(albumRedirectFailure('sorry redirect has failed')))

    }
}

export const albumRedirectSuccess = (msg='') =>{
  return {
      type:actionsTypes.ALBUM_REDIRECT_SUCCESS,
      payload:{
          message:msg
      }
  }
}

export const albumRedirectFailure = (msg='') =>{
    return {
        type:actionsTypes.ALBUM_REDIRECT_FAILURE,
        payload:{
            message:msg
        }
    }
  }

export const loadFonts = ()=> {
    return (dispatch)=>{

        // setting fetching to true
        dispatch(fetching())
        // make  call to load fonts
         Font.loadAsync({
            'open-sans-bold': require('../../assests/font/OpenSans-Bold.ttf'),
          })
        dispatch(loadFontsSuccess())

    }
  }

  export const loadFontsSuccess = () =>{
        return{
            type:actionsTypes.LOAD_FONTS_SUCCESS,
            payload:{
                isLoadFont:true,
                isFetching:false
            }
        }

  }
export const fetching = () =>{
    return {
        type:actionsTypes.FETCHING,
        payload:{
            isFetching:true
        }
    }
}
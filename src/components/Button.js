import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button  =({buttonText, url, onBuyEvent}) =>{
    const {buttonStyle, textButtonStyle} = styles;
    
return (
    <TouchableOpacity onPress={e=>onBuyEvent(url)} style ={buttonStyle}>
        <Text style={textButtonStyle} >{buttonText}</Text>
    </TouchableOpacity>
)
}

export default Button;

const styles = StyleSheet.create({
    buttonStyle:{
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor:'#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor:'#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textButtonStyle:{
        marginLeft: 5,
        marginRight: 5,
        fontFamily: "open-sans-bold",  
        alignSelf: 'center',
        fontSize: 16,
        paddingTop:10,
        paddingBottom:10,
        color:'#007aff',
        fontWeight: '600',
    }
})

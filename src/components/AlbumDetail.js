import React, { Component } from 'react';
import { View, Text ,StyleSheet,Image} from 'react-native';
import CardSection from './CardSection';
import Button from './Button';

import Card from './Card';

const AlbumDetail  =({album,onBuy}) =>
{
 const {title,artist,url,thumbnail_image,image}  = album;
 const {textContainer, 
        thumbnailStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;
 return(
    <Card>
        <CardSection>
            <View style={thumbnailContainerStyle}>
                <Image style={thumbnailStyle} source={{uri:thumbnail_image}}/>
            </View>
            <View style={textContainer}>
                <Text style={headerTextStyle}>{title}</Text>
                <Text >{artist}</Text>
            </View>
        </CardSection>   

        <CardSection>
            <Image style={imageStyle} source={{uri:image}} />
        </CardSection>

        <CardSection>
            <Button buttonText={"Buy Now"} url={url} onBuyEvent={onBuy}/>
        </CardSection>
        
    </Card> 
)
}


const styles = StyleSheet.create({
    textContainer:{
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle:{
        fontWeight: 'normal',
        fontFamily: "open-sans-bold",  
        fontSize:18
    },
    thumbnailStyle:{
        height:50,
        width: 50
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    imageStyle:{
        height:400,
        flex: 1,
        width:null
    },
    contentStyle:{
        fontFamily: "open-sans-bold"
    }
})


export default AlbumDetail;

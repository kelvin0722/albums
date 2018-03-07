import React from 'react';
import { View , Text, StyleSheet } from 'react-native';


const Header = ({headerTitle}) =>(
    <View style={styles. headerContainer}>
        <Text style={styles.textStyles}>{headerTitle}</Text>
    </View>
)

export default Header;

const styles = StyleSheet.create({
    headerContainer :{
        backgroundColor: '#F8F8F8',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:20,
        height:70,
        shadowColor: '#000',
        shadowOffset: {width: 0,height: 4},
        shadowOpacity: 0.2,
        elevation:2
    },
    textStyles:{
        fontSize: 20
    }
})
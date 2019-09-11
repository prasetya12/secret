import React,{Component} from 'react'
import {Text,View,StyleSheet} from 'react-native'

const Header = ()=>(
    <View style={styles.header}>

    </View>
)

const styles = StyleSheet.create({
    header:{
        backgroundColor:'white',
        height:55,
        borderBottomRightRadius:50,
        borderBottomLeftRadius:50,
        elevation:5
    }
})

export default Header
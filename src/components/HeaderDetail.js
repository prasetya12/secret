import React,{Component} from 'react'
import {Text,View,StyleSheet} from 'react-native'
import { Icon } from 'native-base'

const HeaderDetail = (props)=>(
    <View style={styles.header}>
        <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
            <Icon name="menu" type="MaterialCommunityIcons" style={{fontSize:25,color:"#737373"}}/>
        </View>
        <View style={{flex:3,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontWeight:'bold'}}>{props.title}</Text>
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
            
        </View>
    </View>
)

const styles = StyleSheet.create({
    header:{
        backgroundColor:'white',
        height:55,
        elevation:5,
        flexDirection:'row',
        paddingLeft:16,
        paddingRight:16
    }
})

export default HeaderDetail
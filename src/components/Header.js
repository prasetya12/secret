import React,{Component} from 'react'
import {Text,View,StyleSheet} from 'react-native'
import { Icon } from 'native-base'

const Header = ()=>(
    <View style={styles.header}>
        <View
  style={{
    backgroundColor: '#00BCD4',
    height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
  }}>
  <StatusBar
    translucent
    backgroundColor="#00BCD4"
    barStyle="light-content"
  />
</View>
        <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
            <Icon name="menu" type="MaterialCommunityIcons" style={{fontSize:25,color:"#737373"}}/>
        </View>
        <View style={{flex:3}}>
            
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
            <Icon name="comment-text-multiple-outline" type="MaterialCommunityIcons" style={{fontSize:25,color:"#30375A"}}/>
            
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

export default Header
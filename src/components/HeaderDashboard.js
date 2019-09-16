import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {Icon} from 'native-base'
import { TextInput } from 'react-native-gesture-handler'

const HeaderDashboard =()=>(
    <View style={styles.header}>
        <View style={{flex:4,justifyContent:'center',alignItems:'flex-start'}}>
            <View style={{width:'100%',height:40,backgroundColor:'#EAECEE',flexDirection:'row',alignItems:'center',paddingLeft:10,borderRadius:20}}>
                <Icon name='search' type='FontAwesome' style={{fontSize:20,color:'#c4c4c4'}}/>
                <TextInput
                    style={{width:'100%',height:40,paddingLeft:10,color:'#02052B'}}
                    placeholder={"Search Post"}
                />
            </View>
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
        borderBottomRightRadius:25,
        borderBottomLeftRadius:25,
        elevation:5,
        flexDirection:'row',
        paddingLeft:16,
        paddingRight:16
    }
})

export default HeaderDashboard


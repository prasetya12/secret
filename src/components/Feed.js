import React,{Component} from 'react'
import {View,Text} from 'react-native'

import {Icon} from 'native-base'

const Feed = (props)=>(
    <View style={{flexDirection:'row',backgroundColor:'white',marginTop:16,paddingRight:16,paddingTop:10,paddingBottom:10}}>
        <View style={{paddingRight:8,paddingLeft:8}}>
            <View style={{height:70,width:40,backgroundColor:'#F2F2F2',borderRadius:16,alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:"rgba(2,5,43,0.4)",fontSize:18,fontWeight:'bold',marginBottom:5}}>{props.like_count}</Text>
                <Icon name={props.is_Liked?"heart":"hearto"} type='AntDesign' style={{color:props.is_Liked?"red":"rgba(2,5,43,0.4)",fontSize:25,marginTop:5}} onPress={props.onPress}/>

            </View>
        </View>
        <View style={{flex:4,flexDirection:'column'}}>
            <View style={{flex:3}}>
                <Text style={{fontSize:16,fontWeight:'bold',color:'rgb(2,5,43)'}}>
                    {props.content}
                </Text>
            </View>
            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontSize:12,color:"rgba(2,5,43,0.4)",fontWeight:'bold'}}>Bandung,1m ago</Text>
                {props.comment_count==0?(<View/>):(<View style={{flexDirection:'row'}}><Icon name="forward" type="Entypo" style={{fontSize:16,marginLeft:10,color:"rgba(2,5,43,0.4)"}}/>
                <Text style={{fontSize:12,color:"rgba(2,5,43,0.4)",fontWeight:'bold',marginLeft:5}}>0</Text></View>)}
            </View>
        </View>
        <View style={{flex:1,alignItems:'flex-end'}}>
            <Icon name="dots-three-vertical" type="Entypo" style={{fontSize:20,color:"rgba(2,5,43,0.4)"}}/>
        </View>

    </View>
)

export default Feed
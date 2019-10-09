import React,{Component} from 'react'
import {View,Text,Image} from 'react-native'
import {Icon} from 'native-base'

class Comment extends Component{
    render(){
        return(
            <View style={{backgroundColor:'white',height:70,flexDirection:'row',paddingRight:16,paddingLeft:10}}>
                <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
                    <Image source={require('../assets/emoji/002.png')} style={{width:40,height:40}}/>
                </View>
                <View style={{flex:7,paddingTop:10}}>
                    <View>
                        <Text style={{fontWeight:'bold'}}>Budi Prasetyo</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:12,color:'#999696'}}>Gimana kemaren kerjanya</Text>
                    </View>
                    <View style={{marginTop:5}}>
                        <Text style={{fontSize:8,color:"rgba(2,5,43,0.4)"}}>Just Now</Text>
                    </View>
                </View>
                <View style={{flex:1,alignItems:'flex-end',paddingTop:10}}>
                    <Icon name="dots-three-vertical" type="Entypo" style={{fontSize:20,color:"rgba(2,5,43,0.4)"}}/>
                </View>
                
            </View>
        )
    }
}

export default Comment
import React,{Component} from 'react'
import {View,Text,TouchableOpacity,Dimensions,ActivityIndicator} from 'react-native'
import Illustration from '../assets/welcome.svg'
import Logo from '../assets/main_logo.svg'
import LinearGradient from 'react-native-linear-gradient'
import axios from 'axios'

import qs from 'qs'

import API from '../constant/constant'

class LoadingScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            clientId:1,
            accessToken:"",
            accountId:"",
            isLoading:false
            
        }
    }




    
    render(){

        const width = Dimensions.get('window').width
        const height = Dimensions.get('window').height
        return(
            
            <View style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <View style={{flex:3}}>
                    <Illustration width={width*1.7} height={height*1.7} style={{marginTop:height*-0.7}}/>
                </View>
                <View style={{flex:3}} >
                    <Logo width={width*0.5} height={height*0.5} style={{marginTop:height*-0.1}}/>
                </View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <ActivityIndicator size="large" color="#0000ff"/>
                </View>
            </View>
        )
    }
}

export default LoadingScreen
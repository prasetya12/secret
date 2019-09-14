import React,{Component} from 'react'
import {View,Text,Dimensions,TextInput,KeyboardAvoidingView} from 'react-native'
import Carousel from '../components/Carousel'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import Illustration from '../assets/registration.svg'
import LinearGradient from 'react-native-linear-gradient'
import { Icon } from 'native-base'


class Registration extends Component{
    render(){
        const width = Dimensions.get('window').width
        const height = Dimensions.get('window').height

        return(
                <ScrollView style={{flex:1}}>
                    <View style={{alignItems:'center',flex:1}}>
                        <View style={{flex:1}}>
                            <Illustration style={{height:height*0.1,width:width*0.1,marginTop:-172}}/>
                        </View>
                        <View style={{flex:1,alignItems:'center',marginTop:-150}}>
                            <Text style={{color:'rgba(0,0,0,0.5)',marginBottom:10,fontWeight:'bold'}}>OTP Verification</Text>
                                <Text style={{color:'rgba(0,0,0,0.5)'}}>We will send you an <Text style={{fontWeight:'bold'}}>One Time Password</Text></Text>
                                <Text style={{color:'rgba(0,0,0,0.5)'}}>on this mobile phone number</Text>
                                <View style={{marginTop:50,alignItems:'center'}}>
                                    <Text style={{color:'rgba(0,0,0,0.5)',marginBottom:10}}>
                                        Enter Phone Number
                                    </Text>
                                    <TextInput
                                        style={{height:40,borderBottomWidth:1,borderBottomColor:'black',width:200,alignItems:'center',textAlign:'center'}}
                                    />
                                </View>
                        </View>
                    </View>
                    <View style={{alignItems:'center',flex:1,marginTop:height*0.05,bottom:0}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Registration')}>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#6B56FC', '#5511A3']} style={{borderRadius:50,height:50,width:200,justifyContent:'flex-end',alignItems:'center',flexDirection:'row'}}>
                                    <View style={{flex:1}}>
                                        <Text style={{color:'white',fontWeight:'bold',alignSelf:'center'}}>GET OTP</Text>

                                    </View>
                                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#8340C7', '#541D96']} style={{borderRadius:50,height:50,width:50,alignSelf:'flex-end',position:'absolute',alignItems:'center',justifyContent:'center'}}>
                                        <Icon name="arrow-right" type="Feather" style={{color:'white'}} fontSize={20}/>
                                    </LinearGradient>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    
                </ScrollView>
        )
    }
}

export default Registration
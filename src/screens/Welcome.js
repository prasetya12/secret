import React,{Component} from 'react'
import {View,Text,TouchableOpacity,Dimensions} from 'react-native'
import Illustration from '../assets/welcome.svg'
import Logo from '../assets/main_logo.svg'
import LinearGradient from 'react-native-linear-gradient'

class Welcome extends Component{
    
    render(){
        const width = Dimensions.get('window').width
        const height = Dimensions.get('window').height
        return(
            
            <View style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <View style={{flex:3}}>
                    <Illustration width={width*1.7} height={height*1.7} style={{marginTop:height*-0.7}}/>
                </View>
                <View style={{flex:3}} >
                    <Logo width={width*0.6} height={height*0.6} style={{marginTop:height*-0.2}}/>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Registration')}>
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#6B56FC', '#5511A3']} style={{borderRadius:50,height:50,width:200,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{color:'white',fontWeight:'bold'}}>ENTER</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                
                

            </View>
        )
    }
}

export default Welcome
import React,{Component} from 'react'
import{View,Text,ScrollView,Dimensions,TouchableOpacity} from 'react-native'
import Illustration from '../assets/verification.svg'
import CodeInput from 'react-native-confirmation-code-input';
import LinearGradient from 'react-native-linear-gradient'
import { Icon } from 'native-base'



class Verification extends Component{
    _onFulfill=(code)=>{
        if(code){
            this.props.navigation.navigate('Login')   
        }
    }

    render(){
        const width = Dimensions.get('window').width
        const height = Dimensions.get('window').height

        return(
            <ScrollView style={{flex:1}}>
                <View style={{alignItems:'center',flex:1}}>
                    <View style={{flex:1}}>
                            <Illustration style={{height:height*0.1,width:width*0.1,marginTop:-189}}/>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Text style={{fontWeight:'bold'}}>
                            Enter the 4 digit OTP
                        </Text>
                        <CodeInput
                            ref="codeInputRef1"
                            secureTextEntry
                            keyboardType="numeric"
                            className={'border-box'}
                            activeColor='#6B56FC'
                            inactiveColor='#5511A3'
                            compareWithCode='1111'
                            codeLength={4}
                            space={1}
                            size={50}
                            inputPosition='left'
                            onFulfill={(code) => this._onFulfill(code)}
                            />
                            
                    </View>
                </View>
                <View style={{alignItems:'center',flex:1,marginTop:height*0.05}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
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

export default Verification
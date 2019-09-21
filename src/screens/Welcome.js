import React,{Component} from 'react'
import {View,Text,TouchableOpacity,Dimensions,AsyncStorage} from 'react-native'
import Illustration from '../assets/welcome.svg'
import Logo from '../assets/main_logo.svg'
import LinearGradient from 'react-native-linear-gradient'
import axios from 'axios'

import qs from 'qs'

import API from '../constant/constant'

class Welcome extends Component{
    constructor(props){
        super(props)
        this.state={
            clientId:1,
            accessToken:"",
            accountId:"",
            isLoading:false
        }
    }

    tsLong = new Date().getTime()
    A = this.tsLong.toString();
    facebookId = this.A;
    getUserSecret = "s" + this.A;
    getPassSecret = this.A;
    getEmailSecret = "secret+" + this.A + "@Gmail.com";

    onClick = ()=>{
        this.setState({isLoading:true})

        axios.post(`${API}/account.signUp.inc.php`, qs.stringify({
            clientId: this.state.clientId,
            username: this.getUserSecret,
            password: this.getPassSecret,
            email: this.getEmailSecret
        })).then(response =>{

                accessToken = JSON.stringify(response.data.accessToken)
                accountId = JSON.stringify(response.data.accountId)

                  AsyncStorage.multiSet([
                    ["accessToken", accessToken],
                    ["accountId", accountId]
                ]).then(() => {
                    this.setState({ isLoading: false });
                    this.props.navigation.push("Dashboard");
                  });
    
          }).catch(function (error) {
            alert(error);
          })
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
                <View style={{flex:1}}>
                    <TouchableOpacity onPress={()=>this.onClick()}>
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
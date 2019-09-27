import React,{Component} from 'react'
import {AsyncStorage,View,Text} from 'react-native'
import Dashboard from '../screens/Dashboard'
import Welcome from '../screens/Welcome'
import LoadingScreen from '../screens/LoadingScreen'
import axios from 'axios'

import qs from 'qs'

class Auth extends Component{

    constructor(props){
        super(props)
        this.state={
            clientId:1,
            accessToken:"",
            accountId:"",
            isLoading:false,
            tl:0
        }
    }

    tsLong = new Date().getTime()
    A = this.tsLong.toString();
    facebookId = this.A;
    getUserSecret = "s" + this.A;
    getPassSecret = this.A;
    getEmailSecret = "secret+" + this.A + "@Gmail.com";

    onClick = ()=>{
        // await AsyncStorage.removeItem("accessToken");
        // await AsyncStorage.removeItem("accountId");
        this.setState({isLoading:true})

        axios.post(`${API}/account.signUp.inc.php`, qs.stringify({
            clientId: this.state.clientId,
            username: this.getUserSecret,
            password: this.getPassSecret,
            email: this.getEmailSecret
        })).then(response =>{

                if(response.data.error==false){
                    accessToken = JSON.stringify(response.data.accessToken)
                    accountId = JSON.stringify(response.data.accountId)

                    AsyncStorage.multiSet([
                        ["accessToken", accessToken],
                        ["accountId", accountId]
                    ]).then(() => {
                        this.setState({ isLoading: false });
                        this.props.navigation.push("Auth")

                        
                    });
                }else{
                    alert("incorect")
                }
    
          }).catch(error => {
            alert(error);
          })
        }
    // async checkRegister(){
    //     try {
    //         let token = await AsyncStorage.getItem('accessToken');
    //         if (token != null){
    //             alert(token)
    //            return(<Dashboard/>)
    //         }
    //         else {
    //             alert(" tidak ada token")
    //            return(<Welcome/>)
    //        }
    //      } catch (error) {
    //        alert(error)
    //      }
    // }

    componentDidMount(){
        this.setState({isLoading:true})
        try{
            AsyncStorage.getItem('accountId').then(
                (accountId)=>{
                    this.setState({accountId:accountId})
                }
            )
            AsyncStorage.getItem('accessToken').then(
                (token) => {
                    if(token != null){
                        this.setState({accessToken:token,isLoading:false})
                    }else{
                        this.setState({accessToken:null,isLoading:false})
                    }
                }
                )
        }catch(error){
            alert(error)
        }
    }

   


    render(){
        return(
            this.state.isLoading?(<LoadingScreen/>):(this.state.accessToken==null?(<Welcome onPress={()=>this.onClick()}/>):(<Dashboard onPress={()=>this.props.navigation.navigate('Home',{
                accessToken:this.state.accessToken,
                accountId:this.state.accountId,
                clientId:this.state.clientId
            })}/>))
            
            
        )
    }
}

export default Auth
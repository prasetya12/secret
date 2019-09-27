import React,{Component} from 'react'
import {AsyncStorage,View,Text} from 'react-native'
import Dashboard from '../screens/Dashboard'
import Welcome from '../screens/Welcome'
import LoadingScreen from '../screens/LoadingScreen'

class Auth extends Component{

    constructor(props){
        super(props)
        this.state={
            clientId:1,
            accessToken:"",
            accountId:"",
            isLoading:false
        }
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
            this.state.isLoading?(<LoadingScreen/>):(this.state.accessToken==null?(<Welcome/>):(<Dashboard onPress={()=>this.props.navigation.navigate('Home',{
                accessToken:this.state.accessToken,
                accountId:this.state.accountId,
                clientId:this.state.clientId
            })}/>))
            
            
        )
    }
}

export default Auth
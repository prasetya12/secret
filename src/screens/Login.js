import React,{Component} from 'react'
import {View,Text} from 'react-native'
import { Button,Container} from 'native-base'

class Login extends Component{
    render(){
        return(
            <Container>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Button style={{backgroundColor:'blue',alignItems:'center',justifyContent:'center',width:100,height:50}} onPress={()=>this.props.navigation.navigate('Root')}>
                        <Text style={{color:'white'}}>
                            Login
                        </Text>
                    </Button>
                </View>
            </Container>
        )
    }
}

export default Login
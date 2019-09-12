import React,{Component} from 'react'
import {View,Text} from 'react-native'
import Carousel from '../components/Carousel'
import { TouchableOpacity } from 'react-native-gesture-handler'

class Dashboard extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Carousel/>
                <View style={{height:50,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity>
                        <View>
                            <Text>Login</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Dashboard
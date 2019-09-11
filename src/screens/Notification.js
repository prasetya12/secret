import React,{Component} from 'react'
import {View,Text} from 'react-native'
import Header from '../components/Header'

class Notification extends Component{
    render(){
        return(
            <View>
                <Header/>
                <Text>
                    Notification Screen 
                </Text>
            </View>
        )
    }
}

export default Notification
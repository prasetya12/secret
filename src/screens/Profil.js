import React,{Component} from 'react'
import {View,Text} from 'react-native'
import Header from '../components/Header'

class Profil extends Component{
    render(){
        return(
            <View>
                <Header/>
                <Text>
                    Profil Screen 
                </Text>
            </View>
        )
    }
}

export default Profil
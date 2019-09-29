import React,{Component} from 'react'
import {View,Text,SafeAreaView} from 'react-native'
import Header from '../components/Header'

class Profil extends Component{
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={{backgroundColor:'#EAECEE',flex:1}}>
                    <Header/>
                    <Text>
                        Profil Screen 
                    </Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default Profil
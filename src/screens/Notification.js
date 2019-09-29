import React,{Component} from 'react'
import {View,Text,SafeAreaView} from 'react-native'
import Header from '../components/Header'

class Notification extends Component{
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={{backgroundColor:'#EAECEE',flex:1}}>
                    <Header/>
                    <Text>
                        Notification Screen 
                    </Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default Notification
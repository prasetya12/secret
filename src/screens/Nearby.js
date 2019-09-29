import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,SafeAreaView} from 'react-native'
import Header from '../components/Header'

class Nearby extends Component{
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={{backgroundColor:'#EAECEE',flex:1}}>
                    <Header/>
                    <Text>Nearby</Text>
                </View>
            </SafeAreaView>
        )
    }
}




export default Nearby
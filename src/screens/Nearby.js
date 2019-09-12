import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import Header from '../components/Header'

class Nearby extends Component{
    render(){
        return(
            <View style={{backgroundColor:'#EAECEE',flex:1}}>
                <Header/>
                <Text>Nearby</Text>
            </View>
        )
    }
}




export default Nearby
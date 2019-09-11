import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import Header from '../components/Header'
import { YellowBox } from 'react-native';

class Home extends Component{
    render(){
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
          ]);
        return(
            <View style={{backgroundColor:'#EAECEE',flex:1}}>
                <Header/>
                <Text>Home</Text>
            </View>
        )
    }
}




export default Home
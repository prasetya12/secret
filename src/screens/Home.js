import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import Header from '../components/Header'
import { YellowBox } from 'react-native';

class Home extends Component{
    constructor(props) { 
        super(props); 
        console.disableYellowBox = true;
      }
    render(){
        return(
            <View style={{backgroundColor:'#EAECEE',flex:1}}>
                <Header/>
                <Text>Home</Text>
            </View>
        )
    }
}




export default Home
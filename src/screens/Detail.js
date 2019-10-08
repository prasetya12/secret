import React,{Component} from 'react'
import {View,Text} from 'react-native'
import Header from '../components/Header'


class Detail extends Component{
    render(){
        return(
            <View style={{backgroundColor:'#EAECEE',flex:1}}>
                <Header
                    title='Detail'
                />
            </View>
        )
    }
}

export default Detail
import React,{Component} from 'react'
import {View,StatusBar,Platform,StyleSheet} from 'react-native'

class CustomStatusBar extends Component{
    render(){
        return(
            <View style={styles.statusBar}>

            </View>
        )
    }
}

export default CustomStatusBar

const styles = StyleSheet.create({
    statusBar:{
        height:(Platform.OS==='ios')?30:0,
        backgroundColor:'white'
    }
})
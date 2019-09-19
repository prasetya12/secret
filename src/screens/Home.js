import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import Header from '../components/Header'
import { YellowBox } from 'react-native';
import{Icon} from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';
import Feed from '../components/Feed'

class Home extends Component{
    
    constructor(props) { 
        super(props); 
        console.disableYellowBox = true;
        this.state={
            is_Liked:false,
            like_count:0,
        }
      }
      onPress = ()=>(
            this.setState({is_Liked:!this.state.is_Liked,like_count:this.state.is_Liked?0:1})
        )
    render(){
        

        return(
            
            <View style={{backgroundColor:'#EAECEE',flex:1,marginBottom:54}}>
                <Header/>
                <ScrollView>
                    <Feed
                        is_Liked={this.state.is_Liked}
                        onPress={this.onPress}
                        content="Hari ini gajian"
                        like_count={this.state.like_count}
                    />
                    
                </ScrollView>
                
            </View>
        )
    }
}




export default Home
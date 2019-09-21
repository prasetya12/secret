import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import Header from '../components/Header'
import { YellowBox } from 'react-native';
import { connect } from 'react-redux'
import{Icon} from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';
import Feed from '../components/Feed'

import {GET_TEST} from '../redux/actions/Test'

import axios from 'axios'

import qs from 'qs'

import API from '../constant/constant'

class Home extends Component{

    
    constructor(props) { 
        super(props); 
        // console.disableYellowBox = true;
        this.state={
            is_Liked:false,
            like_count:0,
            data:{},
            clientId:1,
            accessToken:"",
            accountId:""

        }
      }
    onPress = ()=>(
        this.setState({is_Liked:!this.state.is_Liked,like_count:this.state.is_Liked?0:1})
    )


    componentDidMount(){
        // await this.props.dispatch(GET_TEST());
        // this.setState({data:this.props.test.data})
        // const token = await AsyncStorage.getItem("accessToken");
        // const accountId = await AsyncStorage.getItem("accountId");

        // this.setState({accessToken:token})
        // this.setState({accountId})

        axios.post(`${API}/stream.get.inc.php`, qs.stringify({
            clientId: 1,
            accessToken:"4df09339129adc6d7c5419945422cdf7",
            accountId:51
        })).then(response =>{
            alert(JSON.stringify(response))
          }).catch(function (error) {
            alert(error);
          })
    }


    render(){
        return(
            
            <View style={{backgroundColor:'#EAECEE',flex:1,marginBottom:54}}>
                <Header/>
                <ScrollView>
                
                
                    <Feed
                        is_Liked={this.state.is_Liked}
                        onPress={this.onPress}
                        content={this.state.data.title}
                        like_count={this.state.like_count}
                    />
                    
                </ScrollView>
                
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      test: state.testReducers,

    }
  }

export default connect(mapStateToProps)(Home)


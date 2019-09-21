import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import Header from '../components/Header'
import { YellowBox } from 'react-native';
import { connect } from 'react-redux'
import{Icon} from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';
import Feed from '../components/Feed'

import {GET_TEST} from '../redux/actions/Test'

class Home extends Component{

    
    constructor(props) { 
        super(props); 
        // console.disableYellowBox = true;
        this.state={
            is_Liked:false,
            like_count:0,
            data:{}
        }
      }
    onPress = ()=>(
        this.setState({is_Liked:!this.state.is_Liked,like_count:this.state.is_Liked?0:1})
    )


    async componentDidMount(){
        await this.props.dispatch(GET_TEST());
        this.setState({data:this.props.test.data})
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


import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,FlatList,ActivityIndicator} from 'react-native'
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
            data:[],
            clientId:1,
            accessToken:"",
            accountId:"",
            itemId:0,
            isLoading:false,

        }
      }
    onPress = ()=>(
        this.setState({is_Liked:!this.state.is_Liked,like_count:this.state.is_Liked?0:1})
    )

    retrieveData=(bottomrefresh=false)=>{
        if(this.state.itemId<0){
            null;
        }else{
            axios.post(`${API}/stream.get.inc.php`, qs.stringify({
                clientId: this.state.clientId,
                accessToken:this.state.accessToken,
                accountId:this.state.accountId,
                itemId:this.state.itemId
            })).then(response =>{
                this.setState({
                    data:[...this.state.data,...response.data.items],
                    itemId:response.data.itemId
                })
                // this.setState({data:response.data.items,
                //                 itemId:response.data.itemId-20})
                // alert(JSON.stringify(response.data.items))
    
    
              }).catch(function (error) {
                alert(error);
              })
        }

       
    }


    // onScroll = ()=>{
    //     alert(this.state.itemId)
    //     this.setState({itemId:this.state.itemId-1})
    // }



    componentDidMount(){
        // await this.props.dispatch(GET_TEST());
        // this.setState({data:this.props.test.data})
        // const token = await AsyncStorage.getItem("accessToken");
        // const accountId = await AsyncStorage.getItem("accountId");

        // this.setState({accessToken:token})
        // this.setState({accountId})
        this.setState({
            accessToken:this.props.navigation.getParam('accessToken'),
            accountId:this.props.navigation.getParam('accountId'),
            clientId:this.props.navigation.getParam('clientId')
        })

        this.retrieveData();

        
    }

    _renderFooter = () => {
        if (!this.state.isLoading) return null;
    
        return (
          <View
            style={{
              position: 'relative',
              width: width,
              height: height,
              paddingVertical: 20,
              borderTopWidth: 1,
              marginTop: 10,
              marginBottom: 10,
              borderColor: 'blue'
            }}
          >
            <ActivityIndicator animating size="large" />
          </View>
        );
      };


    render(){
        return(
            
            <View style={{backgroundColor:'#EAECEE',flex:1,marginBottom:54}}>
                <Header/>
                <FlatList
                     renderItem={({ item ,index}) => (
                        <Feed
                        is_Liked={this.state.like_count}
                        onPress={this.onPress}
                        content={item.id}
                        like_count={item.likesCount}
                        comment_count={item.commentsCount}
                        key={index}
                    />
                    
                      )}
                      data={this.state.data}   
                      keyExtractor={item => item.id}
                    //   ListFooterComponent={this._renderFooter}
                      onEndReached={()=>this.retrieveData()}
                      
                />
                {/* <ScrollView>
                    {this.state.data.map((item,index)=>(
                        <Feed
                        is_Liked={this.state.is_Liked}
                        onPress={this.onPress}
                        content={item.post}
                        like_count={this.state.like_count}
                        index={index}
                    />
                    ))}
                    
                </ScrollView> */}


                
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


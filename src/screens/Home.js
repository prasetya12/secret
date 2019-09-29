import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,FlatList,ActivityIndicator,SafeAreaView} from 'react-native'
import Header from '../components/Header'
import { YellowBox } from 'react-native';
import { connect } from 'react-redux'
import{Icon} from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';
import Feed from '../components/Feed'
import { NavigationEvents } from "react-navigation";

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
            clientId:this.props.navigation.getParam('clientId'),
            accessToken:JSON.parse(this.props.navigation.getParam('accessToken')),
            accountId:JSON.parse(this.props.navigation.getParam('accountId')),
            itemId:0,
            refreshing:false

        }
      }
    onPress = ()=>(
        this.setState({is_Liked:!this.state.is_Liked,like_count:this.state.is_Liked?0:1})
    )


    

    retrieveData=()=>{
        
        if(this.state.itemId>=0){
            axios.post(`${API}/items.get.inc.php`, qs.stringify({
              clientId:this.state.clientId ,
              accessToken:this.state.accessToken,
              accountId:this.state.accountId,
              itemId:this.state.itemId
            })).then(response =>{
              const listData = this.state.data
              const data = listData.concat(response.data.items)
              this.setState({
                    data:data,
                    itemId:response.data.itemId,
                    refreshing: false
                })
              }).catch(function (error) {
                this.setState({refreshing:false})
                alert(error);
              })
        } 
    }

    onRefresh=()=>{
        axios.post(`${API}/items.get.inc.php`, qs.stringify({
          clientId:this.state.clientId ,
          accessToken:this.state.accessToken,
          accountId:this.state.accountId,
          itemId:0
        })).then(response =>{
          this.setState({
                data:response.data.items,
                itemId:response.data.itemId,
                refreshing: false
            })
          }).catch(function (error) {
            this.setState({refreshing:false})
            alert(error);
          })
    
    }

    scrollTop=()=>{
      this.flatListRef.scrollToOffset({animated:true,offset:0})
    }


    componentDidMount(){
      // this.retrieveData(false);

      const { navigation } = this.props;
      this.focusListener = navigation.addListener("didFocus", () => {
        this.handleRefresh()
      });

      
    }

    componentWillUnmount() {
      this.focusListener.remove();
    }



    handleRefresh = () => {
        this.setState({
            refreshing: true,
        }, () => {
          this.onRefresh();
          this.scrollTop()
        })
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
            <SafeAreaView style={{flex:1}}>
              <NavigationEvents
                onDidFocus={()=>alert('onfocus')}
              />
              <View style={{backgroundColor:'#EAECEE',flex:1,marginBottom:54}}>
                  <Header/>
                  <FlatList
                      ref={(ref)=>{this.flatListRef=ref;}}
                      renderItem={({ item ,index}) => (
                          <Feed
                          is_Liked={this.state.like_count}
                          onPress={this.onPress}
                          content={item.post}
                          like_count={item.likesCount}
                          comment_count={item.commentsCount}
                          key={index}
                          
                      />
                      
                        )}
                        data={this.state.data}   
                        keyExtractor={item => item.id}
                        ListFooterComponent={this._renderFooter}
                        onEndReached={()=>this.retrieveData()}
                        refreshing= {this.state.refreshing}
                        onRefresh={()=>this.onRefresh()}      
                        
                  />
              </View>
            </SafeAreaView>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      test: state.testReducers,

    }
  }

export default connect(mapStateToProps)(Home)


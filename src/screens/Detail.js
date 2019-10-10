import React,{Component} from 'react'
import {View,Text,AsyncStorage,FlatList,TextInput} from 'react-native'
import Header from '../components/Header'
import StatusBar from '../components/StatusBar'
import Feed from '../components/Feed'
import Comment from '../components/Comment'

import axios from 'axios'
import API from '../constant/constant'
import qs from 'qs'




class Detail extends Component{
    constructor(props) { 
        super(props);
        this.state={
            myLike:false,
            likeCount:0,
            postContent:"",
            timeAgo:"",
            accessToken:this.props.navigation.getParam('accessToken'),
            accountId:this.props.navigation.getParam('accountId'),
            clientId:this.props.navigation.getParam('clientId'),
            itemId:this.props.navigation.getParam('itemId'),
            dataComments:[]

        }
    }

    btnLike = ()=>{
        this.setState({
            myLike:!this.state.myLike,
            likeCount:this.state.myLike==false?parseInt(this.state.likeCount)+1:parseInt(this.state.likeCount)-1
        })

        axios.post(`${API}/items.like.inc.php`,qs.stringify({
            accessToken:this.state.accessToken,
            accountId:this.state.accountId,
            itemId:this.state.itemId
          })).then(response=>{
          }).catch(function(error){
            alert(error)
          })
    }


    componentDidMount(){
        axios.post(`${API}/item.get.inc.php`, qs.stringify({
            clientId:this.state.clientId ,
            accessToken:this.state.accessToken,
            accountId:this.state.accountId,
            itemId:this.state.itemId
          })).then(response =>{
              var data = response.data.items[0]
            //   alert(JSON.stringify(data))
            this.setState({
                  myLike:data.myLike,
                  likeCount:data.likesCount,
                  postContent: data.post,
                  timeAgo:data.timeAgo,
                  dataComments:response.data.comments.comments
              })
            }).catch(function (error) {
              this.setState({refreshing:false})
              alert(error);
            })


    }

    render(){
        return(
            <View style={{backgroundColor:'#EAECEE',flex:1}}>
                <StatusBar/>
                <Header
                    title='Post'
                />
                <Feed
                    is_Liked={this.state.myLike}
                    btnLike={()=>this.btnLike()}
                    content={this.state.postContent}
                    like_count={this.state.likeCount}
                    comment_count={0}
                    timeAgo={this.state.timeAgo}
                    
                />
                <View>
                    <FlatList
                        ref={(ref)=>{this.flatListRef=ref;}}
                        renderItem={({ item ,index}) => (
                            <Comment
                                commentText={item.comment}
                                timeAgo={item.timeAgo}
                                avatar={item.image}
                            />
                        
                            )}
                            data={this.state.dataComments}        
                            
                    />
                </View>
                <View style={{backgroundColor:'#EAECEE',height:50,width:'100%',bottom:0,position:'absolute',elevation:10,flex:1,alignItems:'center',flexDirection:'row'}}>
                    <View style={{width:300, height:50,backgroundColor:'white',flexDirection:'row',alignItems:'center',paddingLeft:10,flex:3}}>
                        <TextInput
                            style={{width:'100%',height:50,paddingLeft:10,color:'#02052B'}}
                            placeholder={"Type a comment ..."}
                            autoFocus={true}
                        />
                    </View>
                    <View style={{width:70,height:50,backgroundColor:'#30375A',alignItems:'center',justifyContent:'center',elevation:5}}>
                        <Text style={{color:'white'}}>Send</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Detail
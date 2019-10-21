import React,{Component} from 'react'
import {View,Text,AsyncStorage,FlatList,TextInput,ScrollView,RefreshControl} from 'react-native'
import HeaderDetail from '../components/HeaderDetail'
import StatusBar from '../components/StatusBar'
import Feed from '../components/Feed'
import Comment from '../components/Comment'

import axios from 'axios'
import API from '../constant/constant'
import qs from 'qs'
import { TouchableOpacity } from 'react-native-gesture-handler'




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
            dataComments:[],
            comment:"",
            refreshing:false

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


    onpost =()=>{
        this.setState({
            refreshing:true
        })
        axios.post(`${API}/comments.new.inc.php`, qs.stringify({
            clientId:this.state.clientId ,
            accessToken:this.state.accessToken,
            accountId:this.state.accountId,
            itemId:this.state.itemId,
            commentText:this.state.comment
          })).then(response=>{
            this.onRefresh()
            this.setState({
                comment:""
            })
          }).catch(function(error){
              alert(error)
          })


        // newPost = {
        //     comment:"supri",
        //     timeAgo:"Just now"

        // }

        // const listComment = this.state.dataComments
        // const data = listComment.concat(newPost)
        
        // this.setState({
        //     dataComments:[...this.state.dataComments,newPost]
        // })
    }

    componentDidMount(){
        this.setState({
            refreshing:true
        })
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
            this.setState({
                refreshing:false
            })
            }).catch(function (error) {
              this.setState({refreshing:false})
              alert(error);
            })
    }

    onRefresh =()=>{
        this.setState({
            refreshing:true
        })
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
            this.setState({
                refreshing:false
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
                <HeaderDetail
                    title='Post'
                    onBack={()=>this.props.navigation.goBack()}
                />
                <ScrollView style={{marginBottom:50}} refreshControl={
                    <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
                    }>
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
                                />
                            
                                )}
                                data={this.state.dataComments}        
                                
                        />
                    </View>
                </ScrollView>
                <View style={{backgroundColor:'#EAECEE',height:50,width:'100%',bottom:0,position:'absolute',elevation:10,flex:1,alignItems:'center',flexDirection:'row'}}>
                    <View style={{width:300, height:50,backgroundColor:'white',flexDirection:'row',alignItems:'center',paddingLeft:10,flex:3}}>
                        <TextInput
                            style={{width:'100%',height:50,paddingLeft:10,color:'#02052B'}}
                            placeholder={"Type a comment ..."}
                            onChangeText={(text)=>{this.setState({comment:text})}}
                            value={this.state.comment}
                        />
                    </View>
                    <TouchableOpacity onPress={this.onpost}>
                        <View style={{width:70,height:50,backgroundColor:'#30375A',opacity:this.state.comment.replace(/\s/g, '').length>0?1:0.5,alignItems:'center',justifyContent:'center',elevation:5}}>
                            <Text style={{color:'white'}}>Send</Text>
                        </View>
                    </TouchableOpacity>
                </View>
        </View>
        )
    }
}

export default Detail
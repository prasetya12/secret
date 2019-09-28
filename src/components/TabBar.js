import React,{Component} from 'react'
import {View,TouchableOpacity,TouchableWithoutFeedback,Text,TouchableHighlight,TextInput,AsyncStorage} from 'react-native'
import Modal from "react-native-modal";
import {Button,Icon} from 'native-base'
import axios from 'axios'
import qs from 'qs'





const DisplayModal = (props)=>(
    <Modal isVisible={props.display} backdropOpacity={0.5}>
        <View style={{backgroundColor:'white',height:200,borderRadius:10,paddingRight:16,paddingTop:10,paddingLeft:16}}>
            <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                <TouchableOpacity onPress={props.hidemodal}>
                    <Icon name="md-close" type="Ionicons" style={{color:'rgba(2,5,43,0.4)',fontSize:20}} />
                </TouchableOpacity>

            </View>
            <View style={{marginTop:5,height:100}}>
                <TextInput maxLength={40} placeholder={"What's on your mind"} multiline={true}  style={{fontWeight:'bold'}} onChangeText={props.changeText} value={props.value}/>
            </View>
            <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                <View style={{justifyContent:'center',marginRight:5}}>
                    <Text style={{fontSize:12,fontWeight:'bold',color:'rgba(2,5,43,0.4)'}}>
                        {props.countText}
                    </Text>
                </View>
                <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
                    <View style={{height:40,width:70,backgroundColor:'#30375A',opacity:props.opacity,borderRadius:10,elevation:5,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'white',fontWeight:'bold'}}>Post</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
)



class TabBar extends Component {
    constructor(props){
        super(props)
        this.state={
            modalVisible: false,
            accountId:"",
            accessToken:"",
            clientId:1,
            post:"",
            countText:300
        }
    }

    componentDidMount(){
        this.setState({isLoading:true})
        try{
            AsyncStorage.getItem('accountId').then(
                (accountId)=>{
                    this.setState({accountId:accountId})
                }
            )
            AsyncStorage.getItem('accessToken').then(
                (token) => {
                    if(token != null){
                        this.setState({accessToken:token,isLoading:false})
                    }else{
                        this.setState({accessToken:null,isLoading:false})
                    }
                }
                )
        }catch(error){
            alert(error)
        }
    }

    triggerModal = ()=>{
        this.setState({modalVisible:true})
    }
    closeModal = ()=>{
        this.setState({modalVisible:!this.state.modalVisible})
    }

    onPost = ()=>{
        axios.post(`${API}/items.new.inc.php`, qs.stringify({
            clientId: this.state.clientId,
            accountId: JSON.parse(this.state.accountId),
            accessToken: JSON.parse(this.state.accessToken),
            postText: this.state.post
        })).then(response =>{
            alert(JSON.stringify(response))
                // if(response.data.error==false){
                //     accessToken = JSON.stringify(response.data.accessToken)
                //     accountId = JSON.stringify(response.data.accountId)

                //     AsyncStorage.multiSet([
                //         ["accessToken", accessToken],
                //         ["accountId", accountId]
                //     ]).then(() => {
                //         this.setState({ isLoading: false });
                //         this.props.navigation.push("Auth")

                        
                //     });
                // }else{
                //     alert("incorect")
                // }
    
          }).catch(error => {
            alert(error);
          })
    
    }

    render(){
        const {renderIcon,getLabelText,activeTintColor,inactiveTintColor,onTabPress,onTabLongPress,getAccessibilityLabel,navigation}=this.props;
        const {routes,index:activeRouteIndex} = navigation.state;
        return(
            <View style={{flexDirection:"row",height:52}}>
                {/* ()=>{onTabPress({route})
                            } */}
    
                <DisplayModal 
                    display={this.state.modalVisible} 
                    hidemodal={()=>this.closeModal()} 
                    onPress={()=>this.onPost()} 
                    changeText={(text)=>this.setState({post:text,countText:300-text.length})} 
                    value={this.state.post} 
                    opacity={this.state.post.replace(/\s/g, '').length>0?1:0.5} 
                    disabled={this.state.post.replace(/\s/g, '').length>0?false:true}
                    countText={this.state.countText}
                    />
                
                {routes.map((route,routeIndex)=>{
                    const isRouteActive = routeIndex === activeRouteIndex;
                    const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
    
                    if(routeIndex==2){
                        return(
                            <TouchableWithoutFeedback onPress={()=>this.triggerModal()} key={routeIndex} >
                                <View style={{backgroundColor:'#DA3037',elevation:3,height:60,width:60,borderRadius:50,marginTop:-20,alignItems:'center',justifyContent:'center'}} >
                                    {renderIcon({route,focused:isRouteActive})}
    
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    }else{
                        return(
                            <TouchableOpacity 
                                key={routeIndex}
                                style={{flex:1,justifyContent:'center',alignItems:'center'}}
                                onPress={()=>{
                                    onTabPress({route});
                                }}
                                onLongPress={()=>{
                                    onTabLongPress({route})
                                }}
                                accessibilityLabel={getAccessibilityLabel({route})}
                                >
                                    {renderIcon({route,focused:isRouteActive,tintColor})}
                            </TouchableOpacity>
                        );
                    }
    
                    
                })}  
            </View>
        )
    }

    


}


export default TabBar
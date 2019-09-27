import React,{Component} from 'react'
import {View,TouchableOpacity,TouchableWithoutFeedback,Text,TouchableHighlight,TextInput} from 'react-native'
import Modal from "react-native-modal";
import {Button,Icon} from 'native-base'




const DisplayModal = (props)=>(
    <Modal isVisible={props.display} backdropOpacity={0.5}>
        <View style={{backgroundColor:'white',height:200,borderRadius:10,paddingRight:16,paddingTop:10,paddingLeft:16}}>
            <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                <Icon name="md-close" type="Ionicons" style={{color:'rgba(2,5,43,0.4)',fontSize:20}} onPress={props.hidemodal}/>
            </View>
            <View style={{marginTop:10,height:100}}>
                <TextInput maxLength={40} placeholder={"What's on your mind"} multiline={true}  style={{fontWeight:'bold'}}/>
            </View>
            <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                <View style={{height:40,width:70,backgroundColor:'#30375A',borderRadius:10,elevation:5,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white',fontWeight:'bold'}}>Post</Text>
                </View>
            </View>
        </View>
    </Modal>
)



class TabBar extends Component {
    constructor(props){
        super(props)
        this.state={
            modalVisible: false
        }
    }

    triggerModal = ()=>{
        this.setState({modalVisible:true})
    }
    closeModal = ()=>{
        this.setState({modalVisible:!this.state.modalVisible})
    }

    render(){
        const {renderIcon,getLabelText,activeTintColor,inactiveTintColor,onTabPress,onTabLongPress,getAccessibilityLabel,navigation}=this.props;
        const {routes,index:activeRouteIndex} = navigation.state;
        return(
            <View style={{flexDirection:"row",height:52}}>
                {/* ()=>{onTabPress({route})
                            } */}
    
                <DisplayModal display={this.state.modalVisible} hidemodal={()=>this.closeModal()}/>
                
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
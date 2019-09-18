import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import Header from '../components/Header'
import { YellowBox } from 'react-native';
import{Icon} from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';

class Home extends Component{
    constructor(props) { 
        super(props); 
        console.disableYellowBox = true;
        this.state={
            is_Liked:false,
            like_count:0
        }
      }
    render(){
        return(
            
            <View style={{backgroundColor:'#EAECEE',flex:1,marginBottom:54}}>
                <Header/>
                <ScrollView>
                    <View style={{height:100,flexDirection:'row',backgroundColor:'white',marginTop:16,paddingRight:16,paddingTop:10,paddingBottom:10}}>
                        <View style={{paddingRight:8,paddingLeft:8}}>
                            <View style={{height:70,width:40,backgroundColor:'#F2F2F2',borderRadius:16,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{color:"rgba(2,5,43,0.4)",fontSize:18,fontWeight:'bold',marginBottom:5}}>{this.state.like_count}</Text>
                                <Icon name={this.state.is_Liked?"heart":"hearto"} type='AntDesign' style={{color:this.state.is_Liked?"red":"rgba(2,5,43,0.4)",fontSize:25,marginTop:5}} onPress={()=>this.setState({is_Liked:!this.state.is_Liked,like_count:this.state.is_Liked?0:1})}/>

                            </View>
                        </View>
                        <View style={{flex:4,flexDirection:'column'}}>
                            <View style={{flex:3}}>
                                <Text style={{fontSize:16,fontWeight:'bold',color:'color:"rgba(2,5,43)"'}}>
                                    tanggal segini yang belum gajian masih ada ? 
                                </Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <Text style={{fontSize:12,color:"rgba(2,5,43,0.4)",fontWeight:'bold'}}>Bandung,1m ago</Text>
                                <Icon name="forward" type="Entypo" style={{fontSize:16,marginLeft:10,color:"rgba(2,5,43,0.4)"}}/>
                                <Text style={{fontSize:12,color:"rgba(2,5,43,0.4)",fontWeight:'bold',marginLeft:5}}>0</Text>
                            </View>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <Icon name="dots-three-vertical" type="Entypo" style={{fontSize:20,color:"rgba(2,5,43,0.4)"}}/>
                        </View>

                    </View>
                    <View style={{height:100,flexDirection:'row',backgroundColor:'white',marginTop:16,paddingRight:16,paddingTop:10,paddingBottom:10}}>
                        <View style={{paddingRight:8,paddingLeft:8}}>
                            <View style={{height:70,width:40,backgroundColor:'#F2F2F2',borderRadius:16,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{color:"rgba(2,5,43,0.4)",fontSize:18,fontWeight:'bold',marginBottom:5}}>{this.state.like_count}</Text>
                                <Icon name={this.state.is_Liked?"heart":"hearto"} type='AntDesign' style={{color:this.state.is_Liked?"red":"rgba(2,5,43,0.4)",fontSize:25,marginTop:5}} onPress={()=>this.setState({is_Liked:!this.state.is_Liked,like_count:this.state.is_Liked?0:1})}/>

                            </View>
                        </View>
                        <View style={{flex:4,flexDirection:'column'}}>
                            <View style={{flex:3}}>
                                <Text style={{fontSize:16,fontWeight:'bold',color:'color:"rgba(2,5,43)"'}}>
                                    tanggal segini yang belum gajian masih ada ? 
                                </Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <Text style={{fontSize:12,color:"rgba(2,5,43,0.4)",fontWeight:'bold'}}>Bandung,1m ago</Text>
                                <Icon name="forward" type="Entypo" style={{fontSize:16,marginLeft:10,color:"rgba(2,5,43,0.4)"}}/>
                                <Text style={{fontSize:12,color:"rgba(2,5,43,0.4)",fontWeight:'bold',marginLeft:5}}>0</Text>
                            </View>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <Icon name="dots-three-vertical" type="Entypo" style={{fontSize:20,color:"rgba(2,5,43,0.4)"}}/>
                        </View>

                    </View>
                    <View style={{height:100,flexDirection:'row',backgroundColor:'white',marginTop:16,paddingRight:16,paddingTop:10,paddingBottom:10}}>
                        <View style={{paddingRight:8,paddingLeft:8}}>
                            <View style={{height:70,width:40,backgroundColor:'#F2F2F2',borderRadius:16,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{color:"rgba(2,5,43,0.4)",fontSize:18,fontWeight:'bold',marginBottom:5}}>{this.state.like_count}</Text>
                                <Icon name={this.state.is_Liked?"heart":"hearto"} type='AntDesign' style={{color:this.state.is_Liked?"red":"rgba(2,5,43,0.4)",fontSize:25,marginTop:5}} onPress={()=>this.setState({is_Liked:!this.state.is_Liked,like_count:this.state.is_Liked?0:1})}/>

                            </View>
                        </View>
                        <View style={{flex:4,flexDirection:'column'}}>
                            <View style={{flex:3}}>
                                <Text style={{fontSize:16,fontWeight:'bold',color:'color:"rgba(2,5,43)"'}}>
                                    tanggal segini yang belum gajian masih ada ? 
                                </Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <Text style={{fontSize:12,color:"rgba(2,5,43,0.4)",fontWeight:'bold'}}>Bandung,1m ago</Text>
                                <Icon name="forward" type="Entypo" style={{fontSize:16,marginLeft:10,color:"rgba(2,5,43,0.4)"}}/>
                                <Text style={{fontSize:12,color:"rgba(2,5,43,0.4)",fontWeight:'bold',marginLeft:5}}>0</Text>
                            </View>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <Icon name="dots-three-vertical" type="Entypo" style={{fontSize:20,color:"rgba(2,5,43,0.4)"}}/>
                        </View>

                    </View>
                    <View style={{height:100,flexDirection:'row',backgroundColor:'white',marginTop:16,paddingRight:16,paddingTop:10,paddingBottom:10}}>
                        <View style={{paddingRight:8,paddingLeft:8}}>
                            <View style={{height:70,width:40,backgroundColor:'#F2F2F2',borderRadius:16,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{color:"rgba(2,5,43,0.4)",fontSize:18,fontWeight:'bold',marginBottom:5}}>{this.state.like_count}</Text>
                                <Icon name={this.state.is_Liked?"heart":"hearto"} type='AntDesign' style={{color:this.state.is_Liked?"red":"rgba(2,5,43,0.4)",fontSize:25,marginTop:5}} onPress={()=>this.setState({is_Liked:!this.state.is_Liked,like_count:this.state.is_Liked?0:1})}/>

                            </View>
                        </View>
                        <View style={{flex:4,flexDirection:'column'}}>
                            <View style={{flex:3}}>
                                <Text style={{fontSize:16,fontWeight:'bold',color:'color:"rgba(2,5,43)"'}}>
                                    tanggal segini yang belum gajian masih ada ? 
                                </Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <Text style={{fontSize:12,color:"rgba(2,5,43,0.4)",fontWeight:'bold'}}>Bandung,1m ago</Text>
                                <Icon name="forward" type="Entypo" style={{fontSize:16,marginLeft:10,color:"rgba(2,5,43,0.4)"}}/>
                                <Text style={{fontSize:12,color:"rgba(2,5,43,0.4)",fontWeight:'bold',marginLeft:5}}>0</Text>
                            </View>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <Icon name="dots-three-vertical" type="Entypo" style={{fontSize:20,color:"rgba(2,5,43,0.4)"}}/>
                        </View>

                    </View>
                    <View style={{height:100,flexDirection:'row',backgroundColor:'white',marginTop:16,paddingRight:16,paddingTop:10,paddingBottom:10}}>
                        <View style={{paddingRight:8,paddingLeft:8}}>
                            <View style={{height:70,width:40,backgroundColor:'#F2F2F2',borderRadius:16,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{color:"rgba(2,5,43,0.4)",fontSize:18,fontWeight:'bold',marginBottom:5}}>{this.state.like_count}</Text>
                                <Icon name={this.state.is_Liked?"heart":"hearto"} type='AntDesign' style={{color:this.state.is_Liked?"red":"rgba(2,5,43,0.4)",fontSize:25,marginTop:5}} onPress={()=>this.setState({is_Liked:!this.state.is_Liked,like_count:this.state.is_Liked?0:1})}/>

                            </View>
                        </View>
                        <View style={{flex:4,flexDirection:'column'}}>
                            <View style={{flex:3}}>
                                <Text style={{fontSize:16,fontWeight:'bold',color:'color:"rgba(2,5,43)"'}}>
                                    tanggal segini yang belum gajian masih ada ? 
                                </Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <Text style={{fontSize:12,color:"rgba(2,5,43,0.4)",fontWeight:'bold'}}>Bandung,1m ago</Text>
                                <Icon name="forward" type="Entypo" style={{fontSize:16,marginLeft:10,color:"rgba(2,5,43,0.4)"}}/>
                                <Text style={{fontSize:12,color:"rgba(2,5,43,0.4)",fontWeight:'bold',marginLeft:5}}>0</Text>
                            </View>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <Icon name="dots-three-vertical" type="Entypo" style={{fontSize:20,color:"rgba(2,5,43,0.4)"}}/>
                        </View>

                    </View>
                    <View style={{height:100,flexDirection:'row',backgroundColor:'white',marginTop:16,paddingRight:16,paddingTop:10,paddingBottom:10}}>
                        <View style={{paddingRight:8,paddingLeft:8}}>
                            <View style={{height:70,width:40,backgroundColor:'#F2F2F2',borderRadius:16,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{color:"rgba(2,5,43,0.4)",fontSize:18,fontWeight:'bold',marginBottom:5}}>{this.state.like_count}</Text>
                                <Icon name={this.state.is_Liked?"heart":"hearto"} type='AntDesign' style={{color:this.state.is_Liked?"red":"rgba(2,5,43,0.4)",fontSize:25,marginTop:5}} onPress={()=>this.setState({is_Liked:!this.state.is_Liked,like_count:this.state.is_Liked?0:1})}/>

                            </View>
                        </View>
                        <View style={{flex:4,flexDirection:'column'}}>
                            <View style={{flex:3}}>
                                <Text style={{fontSize:16,fontWeight:'bold',color:'color:"rgba(2,5,43)"'}}>
                                    tanggal segini yang belum gajian masih ada ? 
                                </Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <Text style={{fontSize:12,color:"rgba(2,5,43,0.4)",fontWeight:'bold'}}>Bandung,1m ago</Text>
                                <Icon name="forward" type="Entypo" style={{fontSize:16,marginLeft:10,color:"rgba(2,5,43,0.4)"}}/>
                                <Text style={{fontSize:12,color:"rgba(2,5,43,0.4)",fontWeight:'bold',marginLeft:5}}>0</Text>
                            </View>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <Icon name="dots-three-vertical" type="Entypo" style={{fontSize:20,color:"rgba(2,5,43,0.4)"}}/>
                        </View>

                    </View>
                    <View style={{height:100,flexDirection:'row',backgroundColor:'white',marginTop:16,paddingRight:16,paddingTop:10,paddingBottom:10}}>
                        <View style={{paddingRight:8,paddingLeft:8}}>
                            <View style={{height:70,width:40,backgroundColor:'#F2F2F2',borderRadius:16,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{color:"rgba(2,5,43,0.4)",fontSize:18,fontWeight:'bold',marginBottom:5}}>{this.state.like_count}</Text>
                                <Icon name={this.state.is_Liked?"heart":"hearto"} type='AntDesign' style={{color:this.state.is_Liked?"red":"rgba(2,5,43,0.4)",fontSize:25,marginTop:5}} onPress={()=>this.setState({is_Liked:!this.state.is_Liked,like_count:this.state.is_Liked?0:1})}/>

                            </View>
                        </View>
                        <View style={{flex:4,flexDirection:'column'}}>
                            <View style={{flex:3}}>
                                <Text style={{fontSize:16,fontWeight:'bold',color:'color:"rgba(2,5,43)"'}}>
                                    tanggal segini yang belum gajian masih ada ? 
                                </Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <Text style={{fontSize:12,color:"rgba(2,5,43,0.4)",fontWeight:'bold'}}>Bandung,1m ago</Text>
                                <Icon name="forward" type="Entypo" style={{fontSize:16,marginLeft:10,color:"rgba(2,5,43,0.4)"}}/>
                                <Text style={{fontSize:12,color:"rgba(2,5,43,0.4)",fontWeight:'bold',marginLeft:5}}>0</Text>
                            </View>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <Icon name="dots-three-vertical" type="Entypo" style={{fontSize:20,color:"rgba(2,5,43,0.4)"}}/>
                        </View>

                    </View>
                </ScrollView>
                
            </View>
        )
    }
}




export default Home
import React,{Component} from 'react'
import {View,Text,ScrollView,TouchableOpacity,AsyncStorage} from 'react-native'
import { Button,Container} from 'native-base'
import Carousel from '../components/Carousel'
import HeaderDashboard from '../components/HeaderDashboard'
import LinearGradient from 'react-native-linear-gradient'
import Menu1 from '../assets/menu1.svg'
import Menu2 from '../assets/menu2.svg'
import Menu3 from '../assets/menu3.svg'
import Menu4 from '../assets/menu4.svg'




class Dashboard extends Component{
    constructor(props) { 
        super(props); 
        console.disableYellowBox = true;
        this.state={
            accessToken:"",
            accountId:""
        }
      }


    async componentDidMount(){
        const token = await AsyncStorage.getItem("accessToken");
        const accountId = await AsyncStorage.getItem("accountId");

        this.setState({accessToken:token})
        this.setState({accountId})

    }

    render(){
        return(
            <Container>
                <HeaderDashboard/>
                <View style={{height:280}}>
                    <Carousel/>
                </View>
                <View style={{justifyContent:'center'}}>
                    <ScrollView horizontal={true} style={{height:120}} showsHorizontalScrollIndicator={false}>
                        <View style={{alignItems:'center',justifyContent:'center',marginLeft:16,marginRight:8}}>
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Root')}>
                                    <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
            locations={[0,0.5,0.6]} colors={['#3B0AFF', '#020549']} style={{width:65,height:65,borderRadius:20,elevation:5,justifyContent:'center',alignItems:'center'}}>
                                            <Menu1/>
                                        </LinearGradient>
                                </TouchableOpacity>
                        </View>
                        <View style={{alignItems:'center',justifyContent:'center',marginLeft:8,marginRight:8}}>
                                <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
    locations={[0,0.5,0.6]} colors={['#EC0000', '#B20040']} style={{width:65,height:65,borderRadius:20,elevation:5,justifyContent:'center',alignItems:'center'}}>
                                    <Menu2/>
                                </LinearGradient>
                        </View>
                        <View style={{alignItems:'center',justifyContent:'center',marginLeft:8,marginRight:8}}>
                            <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
    locations={[0,0.5,0.6]} colors={['#067BBD', '#001833']} style={{width:65,height:65,borderRadius:20,elevation:5,justifyContent:'center',alignItems:'center'}}>
                                    <Menu3/>
                                </LinearGradient>
                        </View>
                        <View style={{alignItems:'center',justifyContent:'center',marginLeft:8,marginRight:8}}>
                                <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
    locations={[0,0.5,0.6]} colors={['#E900C3', '#8A006C']} style={{width:65,height:65,borderRadius:20,elevation:5,justifyContent:'center',alignItems:'center'}}>
                                    <Menu4/>
                                </LinearGradient>
                        </View>
                        <View style={{alignItems:'center',justifyContent:'center',marginLeft:8,marginRight:16}}>
                                <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
    locations={[0,0.5,0.6]} colors={['#FFD704', '#BE7E00']} style={{width:65,height:65,borderRadius:20,elevation:5,justifyContent:'center',alignItems:'center'}}>
                                </LinearGradient>
                        </View>
                    </ScrollView>
                </View>
                <View style={{paddingLeft:16,paddingRight:16}}>
                    <View style={{backgroundColor:'#F6F6F6',elevation:5,borderRadius:20,height:200,flexDirection:'row'}}>
                        <View style={{flex:2,alignItems:'center',justifyContent:'center',paddingLeft:8}}>
                            <View style={{height:120,width:120,backgroundColor:'#EE6565',borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                                <Text>Image</Text>
                                <Text>100 x 100</Text>
                            </View>
                        </View>
                        <View style={{flex:3,paddingLeft:8,paddingRight:16,justifyContent:'center',justifyContent:'space-between'}}>
                            <View style={{marginTop:30}}>
                                <Text style={{fontWeight:'bold'}}>
                                    Headline
                                </Text>
                            </View>
                            <View>
                                <Text style={{fontSize:12}}>
                                Content news, news will be updated
                                from admin panel can with or without
                                image
                                </Text>
                            </View>
                            <View style={{marginBottom:60}}>
                                <View style={{flex:1}}>
                                    <Text style={{fontSize:10}}>
                                        11 September 2019
                                    </Text>
                                </View>
                                <View style={{flex:1,alignItems:'flex-end'}}>
                                    <Text style={{fontSize:10}}>
                                        View More
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                
            </Container>
        )
    }
}

export default Dashboard
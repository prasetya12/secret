import React,{Component} from 'react'
import {View,Text,ScrollView} from 'react-native'
import { Button,Container} from 'native-base'
import Carousel from '../components/Carousel'
import HeaderDashboard from '../components/HeaderDashboard'
import LinearGradient from 'react-native-linear-gradient'
import Menu1 from '../assets/menu1.svg'
import Menu2 from '../assets/menu2.svg'
import Menu3 from '../assets/menu3.svg'
import Menu4 from '../assets/menu4.svg'




class Login extends Component{
    constructor(props) { 
        super(props); 
        console.disableYellowBox = true;
      }

    render(){
        return(
            <Container>
                <HeaderDashboard/>
                <Carousel/>
                <View style={{height:100,justifyContent:'center'}}>
                    <ScrollView horizontal={true} style={{height:120}} showsHorizontalScrollIndicator={false}>
                        <View style={{alignItems:'center',justifyContent:'center',marginLeft:16,marginRight:16}}>
                                <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
        locations={[0,0.5,0.6]} colors={['#3B0AFF', '#020549']} style={{width:80,height:80,borderRadius:20,elevation:5,justifyContent:'center',alignItems:'center'}}>
                                        <Menu1/>
                                    </LinearGradient>
                        </View>
                        <View style={{alignItems:'center',justifyContent:'center',marginLeft:16,marginRight:16}}>
                            <View style={{width:80,height:80,borderRadius:20,backgroundColor:"red"}}>
                                <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
    locations={[0,0.5,0.6]} colors={['#EC0000', '#B20040']} style={{width:80,height:80,borderRadius:20,elevation:5,justifyContent:'center',alignItems:'center'}}>
                                    <Menu2/>
                                </LinearGradient>
                            </View>
                        </View>
                        <View style={{alignItems:'center',justifyContent:'center',marginLeft:16,marginRight:16}}>
                            <View style={{width:80,height:80,borderRadius:20,backgroundColor:"red"}}>
                            <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
    locations={[0,0.5,0.6]} colors={['#067BBD', '#001833']} style={{width:80,height:80,borderRadius:20,elevation:5,justifyContent:'center',alignItems:'center'}}>
                                    <Menu3/>
                                </LinearGradient>
                            </View>
                        </View>
                        <View style={{alignItems:'center',justifyContent:'center',marginLeft:16,marginRight:16}}>
                            <View style={{width:80,height:80,borderRadius:20,backgroundColor:"red"}}>
                                <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
    locations={[0,0.5,0.6]} colors={['#E900C3', '#8A006C']} style={{width:80,height:80,borderRadius:20,elevation:5,justifyContent:'center',alignItems:'center'}}>
                                    <Menu4/>
                                </LinearGradient>
                            </View>
                        </View>
                        <View style={{alignItems:'center',justifyContent:'center',marginLeft:16,marginRight:16}}>
                            <View style={{width:80,height:80,borderRadius:20,backgroundColor:"red"}}>
                                <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
    locations={[0,0.5,0.6]} colors={['#FFD704', '#BE7E00']} style={{width:80,height:80,borderRadius:20,elevation:5,justifyContent:'center',alignItems:'center'}}>
                                </LinearGradient>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Button style={{backgroundColor:'blue',alignItems:'center',justifyContent:'center',width:100,height:50}} onPress={()=>this.props.navigation.navigate('Root')}>
                        <Text style={{color:'white'}}>
                            Login
                        </Text>
                    </Button>
                </View>
            </Container>
        )
    }
}

export default Login
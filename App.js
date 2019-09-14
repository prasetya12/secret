import React,{Component} from 'react'
import Home from './src/screens/Home'
import Notification from './src/screens/Notification'
import Login from './src/screens/Login'
import Registration from './src/screens/Registration'
import Add from './src/screens/Add'
import Nearby from './src/screens/Nearby'
import Profil from './src/screens/Profil'
import Welcome from './src/screens/Welcome'
import { Icon, View } from 'native-base';
import TabBar from './src/components/TabBar'


import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'


const HomeStack = createStackNavigator({
  Home:{
    screen:Home,
    navigationOptions:{
      header:null
    }
  }
})


const NotificationStack = createStackNavigator({
  Notification:{
    screen:Notification,
    navigationOptions:{
      header:null
    }
  }
})

const AddStack = createStackNavigator({
  Add:{
    screen:Add,
    navigationOptions:{
      header:null
    }
  }
})

const NearbyStack= createStackNavigator({
  Nearby:{
    screen:Nearby,
    navigationOptions:{
      header:null
    }
  }
})

const ProfilStack = createStackNavigator({
  Profil:{
    screen:Profil,
    navigationOptions:{
      header:null
    }
  }
})

HomeStack.navigationOptions = {
  tabBarIcon : ({tintColor})=>(
    <Icon name='home' type='Entypo' style={{color:tintColor || 'black',fontSize:25}}/>

  )
}

NotificationStack.navigationOptions = {
  tabBarIcon : ({tintColor})=>(
    <Icon name='notifications' type='MaterialIcons' style={{color:tintColor || 'black',fontSize:25}}/>

  )
}

AddStack.navigationOptions = {
  tabBarIcon : ({tintColor})=>(
    <Icon name='plus' type='Entypo' style={{color:'white',fontSize:25}}/>

  )
}

NearbyStack.navigationOptions = {
  tabBarIcon : ({tintColor})=>(
    <Icon name='map-marker' type='MaterialCommunityIcons'  style={{color:tintColor || 'black',fontSize:25}}/>

  )
}

ProfilStack.navigationOptions = {
  tabBarIcon : ({tintColor})=>(
    <Icon name='md-person' type='Ionicons'  style={{color:tintColor || 'black',fontSize:25}}/>
    
    )
}

const BottomNavigation = createBottomTabNavigator({
  Home:HomeStack,
  Notification:NotificationStack,
  Add:AddStack,
  Nearby:NearbyStack,
  Profil:ProfilStack
},{
  initialRouteName:'Home',
  animationEnabled:false,
  tabBarPosition:'bottom',
  tabBarComponent:props=>{
    return(
      <View style={{backgroundColor:'#F7F8FA',height:52,borderTopColor:'grey',elevation:2,borderTopRightRadius:25,borderTopLeftRadius:25,left:0,right:0,bottom:0,position:'absolute'}}>
        <TabBar {...props}/>
      </View>
    )
  },
  tabBarOptions: {
    activeTintColor: "#30375A",
    inactiveTintColor: "#EAECEE",
  },
  
})


const AppNavigator = createStackNavigator({
  Welcome:{
    screen:Welcome,
    navigationOptions:{
      header:null
    }
  },
  Registration:{
    screen:Registration,
    navigationOptions:{
      header:null
    }
  },
  Login:{
    screen:Login,
    navigationOptions:{
      header:null
    }
  },
  Root:{
    screen:BottomNavigation,
    navigationOptions:{
      header:null,
    }
  }
},{
  initialRouteName:"Registration"
});

export default createAppContainer(AppNavigator)

 
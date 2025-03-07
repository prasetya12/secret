import React,{Component} from 'react'
import Home from '../screens/Home'
import Auth from '../screens/Auth'
import Notification from '../screens/Notification'
import Dashboard from '../screens/Dashboard'
import Registration from '../screens/Registration'
import Verification from '../screens/Verification'
import Add from '../screens/Add'
import Nearby from '../screens/Nearby'
import Profil from '../screens/Profil'
import Welcome from '../screens/Welcome'
import Detail from '../screens/Detail'
import { Icon, View } from 'native-base'
import TabBar from '../components/TabBar'
import {Animated,Easing} from 'react-native'

import {AsyncStorage} from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'


const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {      
      const { layout, position, scene } = sceneProps

      const thisSceneIndex = scene.index
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      })

      return { transform: [ { translateX } ] }
    },
  }
}

const HomeStack = createStackNavigator({
  Home:{
    screen:Home,
    navigationOptions:{
      header:null
    }
  },
  Detail:{
    screen:Detail,
    navigationOptions:{
      header:null
    }
  }
  
},{
  transitionConfig
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

// HomeStack.navigationOptions = {
//   tabBarIcon : ({tintColor})=>(
//     <Icon name='home' type='Entypo' style={{color:tintColor || 'black',fontSize:25}}/>

//   )
// }

HomeStack.navigationOptions=({navigation})=>{
  let tabBarVisible = true;
  let routeName= navigation.state.routes[navigation.state.index].routeName

  if(routeName=='Detail'){
    tabBarVisible=false
  }

  return{
    tabBarIcon : ({tintColor})=>(
      <Icon name='home' type='Entypo' style={{color:tintColor || 'black',fontSize:25}}/>
    ),

    tabBarVisible
  }
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
      <View style={{backgroundColor:'#F7F8FA',height:52,borderTopColor:'grey',elevation:2,left:0,right:0,bottom:0,position:'absolute'}}>
        <TabBar {...props}/>
      </View>
    )
  },
  tabBarOptions: {
    activeTintColor: "#30375A",
    inactiveTintColor: "#EAECEE",
  },
  
})

// initialRoute = ()=>{
//   return 'Dashboard'

//   // try{
//     //   AsyncStorage.getItem('accessToken').then((token) => {
//     //     if(token!==null){
//     //       return 'Dashboard'
//     //     }else{
//     //       return 'Welcome'
//     //     }
//     //   })
//     // }catch(error){
//     //     alert('error')
//     // }
// }





const AppNavigator = createStackNavigator({
  Welcome:{
    screen:Welcome,
    navigationOptions:{
      header:null
    }
  },
  Auth:{
    screen:Auth,
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
  Verification:{
    screen:Verification,
    navigationOptions:{
      header:null
    }
  },
  Dashboard:{
    screen:Dashboard,
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
  initialRouteName:'Auth'
});

export default createAppContainer(AppNavigator)

 
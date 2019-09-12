import React from 'react'
import {View,TouchableOpacity,TouchableWithoutFeedback} from 'react-native'


const TabBar = (props)=>{
    const {renderIcon,getLabelText,activeTintColor,inactiveTintColor,onTabPress,onTabLongPress,getAccessibilityLabel,navigation}=props;
    const {routes,index:activeRouteIndex} = navigation.state;

    return(
        <View style={{flexDirection:"row",height:52}}>
            
                
            
            {routes.map((route,routeIndex)=>{
                const isRouteActive = routeIndex === activeRouteIndex;
                const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

                if(routeIndex==2){
                    return(
                        <TouchableWithoutFeedback onPress={()=>{onTabPress({route});
                        }} key={routeIndex} >
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

export default TabBar
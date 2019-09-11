import React from 'react'
import {View,TouchableOpacity} from 'react-native'


const TabBar = (props)=>{
    const {renderIcon,getLabelText,activeTintColor,inactiveTintColor,onTabPress,onTabLongPress,getAccessibilityLabel,navigation}=props;
    const {routes,index:activeRouteIndex} = navigation.state;

    return(
        <View style={{flexDirection:"row",height:52}}>
            {routes.map((route,routeIndex)=>{
                const isRouteActive = routeIndex === activeRouteIndex;
                const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;


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
            })}
        </View>
    )
}

export default TabBar
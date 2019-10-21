import React,{Component} from 'react'
import {View,Text,Image} from 'react-native'
import {Icon} from 'native-base'


const convertUri=(uri)=>{
    const randomNumber = Math.ceil(Math.random()*53)

    const newUri = "https://old.secretly.tech/img/avatars/"+randomNumber+".png"

    return newUri
}


const nameRandom=()=>{
    const firstName = ["Shirly","Hildred","Lyle","Yukiko","Phylicia","Pamala","Chelsie","Cinderella","Glendora","Lelah","Darryl","Audrea","Nidia","Mac","Tillie","Ramonita","Newton","Heidy","Letty","Eduardo","Arthur","Henry","Geraldo","Darron","Louisa","Jacquelyne","Rich","Lorriane","Lauran","Ed","Jody",'Galen',"Corrinne","Taunya","Geneva","Jerica","Malisa","Sherly","Aurelio","Berneice","Dewey","Miss","Jamison","Lettie","Sunshine","Annabel","Delilah","Lewis","Samatha","Isaiah" ]
    const secondName = ["Fernandez","Osborne","Roberts","Ross","Hubbard",'Mendoza','Pollard',"Hoover","Ball","Villegas","Frye","James","Schaefer","Herring","Leach","Lin","Shelton","Alvarado","Church","Weaver","Olsen","Carr","Chambers","Knox","Mcpherson",'Mosley','Castillo',"Randall","Barajas","Bell","Hicks","Grant","Cooke","Gay","Mcneil","Wall","Atkins","Spears","Bishop","Davis","Roach","Melton","Joseph","Shea","Marshall","Weber","Mcguire","Elliott","Skinner","Juarez"]

    return firstName[Math.ceil(Math.random()*firstName.length)] + " " + secondName[Math.ceil(Math.random()*secondName.length)]
}

const Comment = (props)=>(
    
    <View style={{backgroundColor:'white',flexDirection:'row',paddingRight:16,paddingLeft:2,paddingTop:8,paddingBottom:8,marginTop:5}}>
        <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
            <Image source={{uri:convertUri(props.avatar)}} style={{width:40,height:40}}/>
        </View>
        <View style={{flex:7,paddingTop:10}}>
            <View>
                <Text style={{fontWeight:'bold'}}>{nameRandom()}</Text>
            </View>
            <View>
                <Text style={{fontSize:12,color:'#999696'}}>{props.commentText}</Text>
            </View>
            <View style={{marginTop:5}}>
                <Text style={{fontSize:8,color:"rgba(2,5,43,0.4)"}}>{props.timeAgo}</Text>
            </View>
        </View>
        <View style={{flex:1,alignItems:'flex-end',paddingTop:10}}>
            <Icon name="dots-three-vertical" type="Entypo" style={{fontSize:20,color:"rgba(2,5,43,0.4)"}}/>
        </View>
        
    </View>
)


export default Comment


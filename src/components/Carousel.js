import React,{Component} from 'react'
import {StyleSheet,Text,View,Image} from 'react-native'

import Swiper from 'react-native-swiper'
import Content from '../assets/image1.svg'



const Carousel = (props)=>{
    return(
        <Swiper style={styles.wrapper} activeDotColor={"#30375A"} >
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <View style={styles.slide1}>
                <Content width={320} height={350} />
              </View>
            </View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <View style={styles.slide2}>
                <Text style={styles.text}>Beautiful</Text>
              </View>
            </View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <View style={styles.slide3}>
                <Text style={styles.text}>And simple</Text>
              </View>
            </View>
        </Swiper>
        
        )
}
 
const styles = StyleSheet.create({
  wrapper: {
    alignItems:'center',
    justifyContent:'center',
    height:250,
  },
  slide1: {
    width:320,
    height:220,
    justifyContent: 'center',
    alignItems: 'center',
    elevation:10,
    borderRadius:20
  },
  slide2: {
    width:320,
    height:220,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
    elevation:5,
    borderRadius:20

  },
  slide3: {
    width:320,
    height:220,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
    elevation:5,
    borderRadius:20

  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default Carousel


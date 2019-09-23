import React,{Component} from 'react'
import Route from './src/routes'
import store from './src/redux/store'
import {Provider} from 'react-redux'


export default class App extends Component{
  render(){
    return(  
      <Provider store={store}>
        <Route/>
      </Provider>
      )
  }
}
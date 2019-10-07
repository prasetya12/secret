import testReducers from './testReducers'
import Feed from './Feed'
import {combineReducers} from 'redux'



const someApp= combineReducers({
    Feed
})

export default someApp
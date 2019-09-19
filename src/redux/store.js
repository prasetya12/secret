import {createStore,applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import reducers from '../redux/reducer'

export default createStore(
    reducers,
    applyMiddleware(
        promiseMiddleware
    )
)
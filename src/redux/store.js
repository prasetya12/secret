import {createStore,applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import someApp from '../redux/reducer'

export default createStore(
    someApp,
    applyMiddleware(
        promiseMiddleware
    )
)
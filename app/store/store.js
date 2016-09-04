import {createStore, compse, applyMiddleware} from 'redux'
import {syncHistoryWithStore} from 'react-router-redux'
import {browserHistory} from 'react-router'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import axios from 'axios'

import mainReducer from 'mainReducer'


let middleware;
if (process.env.production) {
	middleware = applyMiddleware(promise(), thunk)
} else {
	middleware = applyMiddleware(promise(), thunk, logger())

}
const store = createStore(mainReducer, middleware)


export const history = syncHistoryWithStore(browserHistory, store)

export default store

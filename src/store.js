import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import { timerReducer } from './reducers'


export default createStore(
  combineReducers({
    timer: timerReducer
  }),
  applyMiddleware(thunk)
)

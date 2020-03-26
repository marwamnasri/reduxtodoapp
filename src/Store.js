import {createStore,combineReducers} from 'redux'
import InputReducer from './reducers/Inputreducer.js'
import MainReducer from './reducers/Mainreducers.js'
const store=createStore(combineReducers({
  input:InputReducer,
  main:MainReducer
}))
export default store
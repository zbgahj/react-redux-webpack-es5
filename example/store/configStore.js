/**
 * Created by hujiong on 17-6-1.
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'

const store = createStore(reducer,applyMiddleware(thunk))
export default store;
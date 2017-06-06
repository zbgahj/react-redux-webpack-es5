/**
 * Created by hujiong on 17-6-2.
 */
import { combineReducers } from 'redux'
import { getData} from './getUrl'

const rootReducer = combineReducers({
    getData
})

export default rootReducer;
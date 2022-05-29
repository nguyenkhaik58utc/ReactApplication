import { combineReducers } from 'redux';
import {reducer} from './Product/Reducers'
const rootReducer = combineReducers({
    product : reducer
})
export default rootReducer;
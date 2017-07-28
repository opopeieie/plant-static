import createReducer from './baseReducers'
import * as accountTypes from '../actions/acountTypes'
import {combineReducers} from 'redux'
import { routerReducer as routing } from 'react-router-redux';

let account = {
    accountName:'',
    accountPassword:''
};
const accountAdd = createReducer(account,{
    [accountTypes.ADD_TODO](state,action){
        return Object.assign({},state,{accountName:'cxq',accountPassWord:'7777777'});
    }
});

const rootReducer = combineReducers({
    accountAdd,
    routing
});

export default rootReducer;
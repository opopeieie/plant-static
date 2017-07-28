import {makeActionCreator} from './baseAction'
import * as accountTypes from './acountTypes'


let addTodo = makeActionCreator(accountTypes.ADD_TODO,'account');
let delTodo = makeActionCreator(accountTypes.DEL_TOTO,'id');
let updateTodo = makeActionCreator(accountTypes.UPDATE_TODO,'id','account');

export const addAccountTodo = (text) => dispatch(addTodo(text));
export const deleteAccountTodo = (id) => dispatch(delTodo(id));
export const updateAccountTodo = (id,account) => dispatch(updateTodo(id,account));
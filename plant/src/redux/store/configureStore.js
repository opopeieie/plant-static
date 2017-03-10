import { createStore } from 'redux';
import rootReducer from '../reducers/accountReducers';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState
    );
}

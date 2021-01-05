import { combineReducers } from 'redux';
import loggedReducer from '../reducers/isLogged';
import counterReducer from '../reducers/counter';

const rootReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
});

export default rootReducer;

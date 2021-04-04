import loginReducer from './reducers';
import {combineReducers} from 'redux';

export const reducer = combineReducers({
  loginReducer: loginReducer,
});

export {LOGIN, LOGIN_SAGA, FETCHING_TOKEN, LOGIN_FAILURE} from './actionTypes';

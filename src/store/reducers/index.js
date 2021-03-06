import { combineReducers } from 'redux';
import appReducer from './app';
import userReducer from './user';

export default combineReducers({
  app: appReducer,
  user: userReducer,
});

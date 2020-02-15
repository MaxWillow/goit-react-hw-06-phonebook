import { combineReducers } from 'redux';
import phoneBookReducer from './reducers';

const rootReducer = combineReducers({
  phoneBook: phoneBookReducer,
});

export default rootReducer;

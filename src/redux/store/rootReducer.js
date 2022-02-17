import { combineReducers } from 'redux';
import messageReducer from '../reducer/message';

const rootReducer = combineReducers({
  messages: messageReducer,
});

export default rootReducer;
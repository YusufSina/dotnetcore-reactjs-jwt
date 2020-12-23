import { combineReducers } from 'redux';

import counterReducer from './Counter/counter.reducer';
import userReducer from './User/user.reducer';
import authReducer from './Auth/auth.reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  auth: authReducer,
});

export default rootReducer;

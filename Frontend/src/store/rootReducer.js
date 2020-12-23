import { combineReducers } from 'redux';

import userReducer from './User/user.reducer';
import authReducer from './Auth/auth.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
});

export default rootReducer;

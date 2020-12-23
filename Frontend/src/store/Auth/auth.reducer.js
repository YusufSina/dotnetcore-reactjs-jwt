import { SET_AUTH_LOADING, SET_AUTH_ERRORS, SET_AUTH_USER } from './auth.types';

const INITIAL_STATE = {
  loading: false,
  error: [],
  hasError: false,
  user: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_AUTH_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_AUTH_ERRORS:
      return {
        ...state,
        error: action.payload,
        hasError: action.payload.length !== 0,
      };
    case SET_AUTH_USER:
      return {
        ...state,
        user: action.payload,
      };
    default: return state;
  }
};

export default reducer;

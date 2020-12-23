import { SET_LOADING, SET_ERRORS, SET_USER } from './auth.types';

const INITIAL_STATE = {
  loading: false,
  error: [],
  hasError: false,
  user: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ERRORS:
      return {
        ...state,
        error: action.payload,
        hasError: action.payload.length !== 0,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default: return state;
  }
};

export default reducer;

import { SET_LOADING, SET_ERRORS } from './user.types';

const INITIAL_STATE = {
  loading: false,
  error: [],
  hasError: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state, loading: action.payload,
      };
    case SET_ERRORS:
      return {
        ...state,
        error: action.payload,
        hasError: action.payload.length !== 0,
      };
    default: return state;
  }
};

export default reducer;

import userService from '../../services/userService';
import history from '../../history/history';
import { SET_USER_LOADING, SET_USER_ERRORS } from './user.types';

export const createUser = user => async dispatch => {
  dispatch({ type: SET_USER_LOADING, payload: true });
  dispatch({ type: SET_USER_ERRORS, payload: [] });

  try {
    const response = await userService.create(user);

    if (response.data.hasError) {
      dispatch({ type: SET_USER_ERRORS, payload: Object.values(response.data.errors) });
    }

    dispatch({ type: SET_USER_LOADING, payload: false });

    if (!response.data.hasError) {
      dispatch({ type: SET_USER_ERRORS, payload: [] });
      history.push('login');
    }
  } catch (error) {
    dispatch({ type: SET_USER_ERRORS, payload: ['Something went wrong!'] });
    dispatch({ type: SET_USER_LOADING, payload: false });
  }
};

export const clearErrors = () => async dispatch => {
  dispatch({ type: SET_USER_LOADING, payload: false });
  dispatch({ type: SET_USER_ERRORS, payload: [] });
};

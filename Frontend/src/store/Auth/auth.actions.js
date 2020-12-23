import authService from '../../services/authService';
import history from '../../history/history';
import { SET_AUTH_LOADING, SET_AUTH_ERRORS, SET_AUTH_USER } from './auth.types';

export const login = user => async dispatch => {
  dispatch({ type: SET_AUTH_LOADING, payload: true });
  dispatch({ type: SET_AUTH_ERRORS, payload: [] });

  try {
    const response = await authService.login(user);

    if (response.data.hasError) {
      dispatch({ type: SET_AUTH_ERRORS, payload: Object.values(response.data.errors) });
    }

    dispatch({ type: SET_AUTH_LOADING, payload: false });

    if (!response.data.hasError) {
      await localStorage.setItem('token', response.data.data.token);
      dispatch({ type: SET_AUTH_USER, payload: response.data.data });
      dispatch({ type: SET_AUTH_ERRORS, payload: [] });
      history.push('dashboard');
    }
  } catch (error) {
    dispatch({ type: SET_AUTH_ERRORS, payload: ['Something went wrong!'] });
    dispatch({ type: SET_AUTH_LOADING, payload: false });
  }
};

export const logout = () => async dispatch => {
  dispatch({ type: SET_AUTH_LOADING, payload: true });
  dispatch({ type: SET_AUTH_ERRORS, payload: [] });

  try {
    await authService.logout();

    dispatch({ type: SET_AUTH_LOADING, payload: false });
    dispatch({ type: SET_AUTH_USER, payload: {} });

    await localStorage.removeItem('token');
    history.push('login');
  } catch (error) {
    dispatch({ type: SET_AUTH_ERRORS, payload: ['Something went wrong!'] });
    dispatch({ type: SET_AUTH_LOADING, payload: false });
  }
};

export const clearErrors = () => async dispatch => {
  dispatch({ type: SET_AUTH_LOADING, payload: false });
  dispatch({ type: SET_AUTH_ERRORS, payload: [] });
};

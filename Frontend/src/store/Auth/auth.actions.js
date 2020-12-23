import authService from '../../services/authService';
import history from '../../history/history';
import { SET_LOADING, SET_ERRORS, SET_USER } from './auth.types';

export const login = user => async dispatch => {
  dispatch({ type: SET_LOADING, payload: true });
  dispatch({ type: SET_ERRORS, payload: [] });

  try {
    const response = await authService.login(user);
    if (response.data.hasError) {
      dispatch({ type: SET_ERRORS, payload: Object.values(response.data.errors) });
    }

    dispatch({ type: SET_LOADING, payload: false });

    if (!response.data.hasError) {
      localStorage.setItem('token', response.data.data.token);
      dispatch({ type: SET_USER, payload: response.data.data });
      dispatch({ type: SET_ERRORS, payload: [] });
      history.push('dashboard');
    }
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: ['Something went wrong!'] });
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const logout = () => async dispatch => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    await authService.logout();

    dispatch({ type: SET_LOADING, payload: false });
    dispatch({ type: SET_USER, payload: {} });

    await localStorage.removeItem('token');
    history.push('login');
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: ['Something went wrong!'] });
    dispatch({ type: SET_LOADING, payload: false });
  }
};

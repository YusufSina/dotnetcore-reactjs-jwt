import axios from 'axios';

async function login(user) {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, user);
}

async function logout() {
  const token = localStorage.getItem('token');

  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/auth/logout`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export default {
  login,
  logout,
};

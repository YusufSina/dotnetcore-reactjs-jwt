import axios from 'axios';

async function create(user) {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/`, user);
}

export default {
  create,
};

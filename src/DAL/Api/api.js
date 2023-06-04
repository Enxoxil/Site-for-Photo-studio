import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_URL,
});

export const api = {
  async saveUser({ email, tel, name }) {
    return await instance.post('users.json', {
      tel, email, name,
    });
  },
};

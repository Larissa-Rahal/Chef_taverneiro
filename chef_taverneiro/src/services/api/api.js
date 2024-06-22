import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000' // Ajuste conforme necessário
});

export default api;
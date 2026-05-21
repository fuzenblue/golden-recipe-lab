import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:7002';
const VERIFIER_API_URL = import.meta.env.VITE_VERIFIER_API_URL || 'http://localhost:7003';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const verifierClient = axios.create({
  baseURL: VERIFIER_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const authInterceptor = {
  request: (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  response: (response) => response,
  responseError: (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
};

apiClient.interceptors.request.use(authInterceptor.request);
apiClient.interceptors.response.use(authInterceptor.response, authInterceptor.responseError);

verifierClient.interceptors.request.use(authInterceptor.request);
verifierClient.interceptors.response.use(authInterceptor.response, authInterceptor.responseError);
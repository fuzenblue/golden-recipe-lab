import { apiClient } from './client';

export const authApi = {
  login: async (credentials) => {
    const response = await apiClient.post('/api/auth/login', credentials);
    return response.data;
  },
  register: async (data) => {
    const response = await apiClient.post('/api/auth/register', data);
    return response.data;
  },
  getCurrentUser: async () => {
    const response = await apiClient.get('/api/auth/me');
    return response.data;
  },
};
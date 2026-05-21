import { apiClient } from './client';

export const walletApi = {
  getCredentials: async () => {
    const response = await apiClient.get('/api/wallet/credentials');
    return response.data;
  },
  getCredentialById: async (id) => {
    const response = await apiClient.get(`/api/wallet/credentials/${id}`);
    return response.data;
  },
  requestCredential: async (data) => {
    const response = await apiClient.post('/api/wallet/credentials/request', data);
    return response.data;
  },
};
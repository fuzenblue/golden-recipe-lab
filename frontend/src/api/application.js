import { apiClient } from './client';

export const applicationApi = {
  getApplications: async () => {
    const response = await apiClient.get('/api/applications');
    return response.data;
  },
  getPositions: async () => {
    const response = await apiClient.get('/api/positions');
    return response.data;
  },
  createApplication: async (data) => {
    const response = await apiClient.post('/api/applications', data);
    return response.data;
  },
};
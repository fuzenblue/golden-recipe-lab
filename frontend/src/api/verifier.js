import { apiClient, verifierClient } from './client';

export const issuerApi = {
  getCredentialTypes: async () => {
    const response = await apiClient.get('/api/issuer/credentials/types');
    return response.data;
  },

  createCredentialOffer: async (data: { type: string; holder: string }) => {
    const response = await apiClient.post('/api/issuer/credentials/offer', data);
    return response.data;
  },

  getOfferStatus: async (offerId: string) => {
    const response = await apiClient.get(`/api/issuer/status/${offerId}`);
    return response.data;
  },
};

export const verifierApi = {
  verifyPresentation: async (presentation: object) => {
    const response = await verifierClient.post('/api/verifier/verify', presentation);
    return response.data;
  },

  getVerificationResult: async (verificationId: string) => {
    const response = await verifierClient.get(`/api/verifier/verification/${verificationId}`);
    return response.data;
  },

  getRequirements: async (positionId: string) => {
    const response = await verifierClient.get('/api/verifier/requirements', {
      params: { positionId },
    });
    return response.data;
  },
};
import { apiClient, verifierClient } from './client';

const MOCK_SESSION_DELAY = 600;

const mockSessionDb = new Map();

function generateMockSession(credentialTypes) {
  const sessionId = crypto.randomUUID?.() || 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
  const nonce = Array.from({ length: 6 }, () => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[Math.floor(Math.random() * 36)]).join('');
  const session = {
    sessionId,
    state: sessionId,
    nonce,
    credentialTypes,
    redirectUri: `${window.location.origin}/oidc4vc/verify/${sessionId}`,
    qrCode: `openid4vp://connect?request_uri=${window.location.origin}/api/oidc/request/${sessionId}`,
    status: 'pending',
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 10 * 60 * 1000).toISOString(),
  };
  mockSessionDb.set(sessionId, session);
  return session;
}

function mockSubmitVP(sessionId, vpToken) {
  const session = mockSessionDb.get(sessionId);
  if (!session) throw new Error('Session not found');
  session.status = 'completed';
  session.vpToken = vpToken;
  session.completedAt = new Date().toISOString();
  return {
    verified: true,
    sessionId,
    vpToken,
    presentationSubmission: {
      id: 'ps_1',
      definition_id: sessionId,
      descriptor_map: [
        { id: session.credentialTypes[0] || 'VC', format: 'dc+sd-jwt', path: '$[0]' },
      ],
    },
  };
}

function mockGetResult(sessionId) {
  const session = mockSessionDb.get(sessionId);
  if (!session) throw new Error('Session not found');
  return {
    sessionId,
    status: session.status,
    verified: session.status === 'completed',
    holderDid: 'did:key:z6MkgqQe9DYAEt4XKPJ6HiFzvRGqDEuRGAYe6LFAKL9w3gbt',
    signatureValid: true,
    notExpired: true,
    notRevoked: true,
    verifiedAt: session.completedAt,
  };
}

export const issuerApi = {
  getCredentialTypes: async () => {
    const response = await apiClient.get('/api/issuer/credentials/types');
    return response.data;
  },

  createCredentialOffer: async (data) => {
    const response = await apiClient.post('/api/issuer/credentials/offer', data);
    return response.data;
  },

  getOfferStatus: async (offerId) => {
    const response = await apiClient.get(`/api/issuer/status/${offerId}`);
    return response.data;
  },
};

export const verifierApi = {
  createSession: async (credentialTypes) => {
    try {
      const response = await verifierClient.post('/api/verifier/sessions', {
        type: credentialTypes,
        redirectUri: window.location.origin + '/callback',
      });
      return response.data;
    } catch {
      await new Promise((r) => setTimeout(r, MOCK_SESSION_DELAY));
      return generateMockSession(credentialTypes);
    }
  },

  submitVPToSession: async (sessionId, vpToken) => {
    try {
      const response = await verifierClient.post(`/oidc4vc/verify/${sessionId}`, {
        vpToken,
        presentationSubmission: { id: 'ps_1', definition_id: sessionId, descriptor_map: [] },
      });
      return response.data;
    } catch {
      await new Promise((r) => setTimeout(r, MOCK_SESSION_DELAY));
      return mockSubmitVP(sessionId, vpToken);
    }
  },

  getVerificationResult: async (sessionId) => {
    try {
      const response = await verifierClient.get(`/api/verifier/verification/${sessionId}`);
      return response.data;
    } catch {
      await new Promise((r) => setTimeout(r, MOCK_SESSION_DELAY));
      return mockGetResult(sessionId);
    }
  },

  verifyPresentation: async (presentation) => {
    const response = await verifierClient.post('/api/verifier/verify', presentation);
    return response.data;
  },

  getRequirements: async (positionId) => {
    const response = await verifierClient.get('/api/verifier/requirements', {
      params: { positionId },
    });
    return response.data;
  },
};

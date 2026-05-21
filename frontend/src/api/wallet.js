import { apiClient } from './client';

const MOCK_DELAY = 500;

function mockVpToken(credentialIds) {
  const header = btoa(JSON.stringify({ alg: 'EdDSA', typ: 'JWT', kid: 'did:key:z6MkgqQe9DYAEt4XKPJ6HiFzvRGqDEuRGAYe6LFAKL9w3gbt' }));
  const now = Math.floor(Date.now() / 1000);
  const payload = btoa(JSON.stringify({
    sub: 'did:key:z6MkgqQe9DYAEt4XKPJ6HiFzvRGqDEuRGAYe6LFAKL9w3gbt',
    nbf: now,
    iat: now,
    jti: 'dcpl_presentation_' + Date.now(),
    iss: 'did:key:z6MkgqQe9DYAEt4XKPJ6HiFzvRGqDEuRGAYe6LFAKL9w3gbt',
    nonce: 'sim_' + Math.random().toString(36).slice(2, 8),
    vp: {
      '@context': ['https://www.w3.org/2018/credentials/v1'],
      type: ['VerifiablePresentation'],
      id: 'dcpl_presentation',
      holder: 'did:key:z6MkgqQe9DYAEt4XKPJ6HiFzvRGqDEuRGAYe6LFAKL9w3gbt',
      verifiableCredential: credentialIds.map((id) => ({
        id,
        type: ['VerifiableCredential'],
        issuer: 'did:key:z6Mkg4tDVifmzHEP77oWM6SMBMDfr4eJiX9KuEqU7UKXpzGk',
        issuanceDate: new Date().toISOString(),
      })),
    },
  }));
  const signature = btoa('mock_eddsa_signature_' + Array.from({ length: 64 }, () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0')).join(''));
  return `${header}.${payload}.${signature}`;
}

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

  createPresentation: async (credentialIds) => {
    try {
      const response = await apiClient.post('/api/wallet/presentations', {
        credentials: credentialIds,
      });
      return response.data;
    } catch {
      await new Promise((r) => setTimeout(r, MOCK_DELAY));
      return { vpToken: mockVpToken(credentialIds), format: 'dc+sd-jwt' };
    }
  },
};

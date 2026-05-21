import { useAppSelector } from './useAppDispatch';
import type { CredentialType, CredentialStatus } from '../types';

export interface CredentialSummary {
  type: CredentialType;
  count: number;
  statusCounts: Record<CredentialStatus, number>;
}

export const useCredentials = () => {
  const { items, requests, selectedCredential, isLoading, error, filter } = useAppSelector(
    (state) => state.credentials
  );

  const getFilteredCredentials = () => {
    return items.filter((cred) => {
      if (filter.type !== 'all' && cred.type !== filter.type) return false;
      if (filter.status !== 'all' && cred.status !== filter.status) return false;
      if (filter.issuer !== 'all' && cred.issuer !== filter.issuer) return false;
      return true;
    });
  };

  const getCredentialsByType = (type: CredentialType) => {
    return items.filter((cred) => cred.type === type);
  };

  const getCredentialSummary = (): CredentialSummary[] => {
    const types: CredentialType[] = ['VC1', 'VC2', 'VC3', 'VC4', 'VC5', 'VC6'];
    return types.map((type) => {
      const typeCredentials = items.filter((cred) => cred.type === type);
      const statusCounts = typeCredentials.reduce(
        (acc, cred) => {
          acc[cred.status] = (acc[cred.status] || 0) + 1;
          return acc;
        },
        {} as Record<CredentialStatus, number>
      );
      return {
        type,
        count: typeCredentials.length,
        statusCounts: {
          pending: statusCounts.pending || 0,
          received: statusCounts.received || 0,
          verified: statusCounts.verified || 0,
          ready: statusCounts.ready || 0,
          expired: statusCounts.expired || 0,
          revoked: statusCounts.revoked || 0,
        },
      };
    });
  };

  const getPendingRequests = () => {
    return requests.filter((req) => req.status === 'pending' || req.status === 'sent');
  };

  const getExpiringCredentials = (daysThreshold: number = 30) => {
    const thresholdDate = new Date();
    thresholdDate.setDate(thresholdDate.getDate() + daysThreshold);
    return items.filter((cred) => {
      if (!cred.expiresAt) return false;
      return new Date(cred.expiresAt) <= thresholdDate;
    });
  };

  return {
    items,
    requests,
    selectedCredential,
    isLoading,
    error,
    filter,
    getFilteredCredentials,
    getCredentialsByType,
    getCredentialSummary,
    getPendingRequests,
    getExpiringCredentials,
  };
};
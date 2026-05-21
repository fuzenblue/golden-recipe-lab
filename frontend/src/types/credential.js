export type CredentialType = 'VC1' | 'VC2' | 'VC3' | 'VC4' | 'VC5' | 'VC6';

export type CredentialStatus = 'pending' | 'received' | 'verified' | 'ready' | 'expired' | 'revoked';

export interface CredentialRequest {
  id: string;
  credentialType: CredentialType;
  issuer: string;
  requestedAt: string;
  status: 'pending' | 'sent' | 'responded' | 'accepted' | 'rejected';
  responseAt?: string;
  message?: string;
}

export interface VC1PersonalIdentity {
  id: string;
  type: 'VC1';
  title: string;
  issuer: string;
  issuerLogo?: string;
  status: CredentialStatus;
  issuedAt: string;
  expiresAt?: string;
  metadata?: Record<string, unknown>;
  claims: {
    fullName: string;
    thaiId: string;
    dateOfBirth: string;
    birthPlace: string;
    gender: string;
    nationality: string;
    address: string;
  };
}

export interface VC2EmploymentHR {
  id: string;
  type: 'VC2';
  title: string;
  issuer: string;
  issuerLogo?: string;
  status: CredentialStatus;
  issuedAt: string;
  expiresAt?: string;
  metadata?: Record<string, unknown>;
  claims: {
    personnelStatus: string;
    position: string;
    appointmentDate: string;
    faculty: string;
    department: string;
    salaryScale: string;
    employmentHistory: Array<{
      position: string;
      startDate: string;
      endDate: string;
    }>;
  };
}

export interface VC3TeachingRecord {
  id: string;
  type: 'VC3';
  title: string;
  issuer: string;
  issuerLogo?: string;
  status: CredentialStatus;
  issuedAt: string;
  expiresAt?: string;
  metadata?: Record<string, unknown>;
  claims: {
    academicYear: string;
    courses: Array<{
      courseCode: string;
      courseName: string;
      credits: number;
      studentsEnrolled: number;
      schedule: string;
      teachingHours: number;
    }>;
    totalUnits: number;
    teachingEvaluationScore: number;
  };
}

export interface VC4ResearchPublication {
  id: string;
  type: 'VC4';
  title: string;
  issuer: string;
  issuerLogo?: string;
  status: CredentialStatus;
  issuedAt: string;
  expiresAt?: string;
  metadata?: Record<string, unknown>;
  claims: {
    title: string;
    journal: string;
    ISSN: string;
    DOI: string;
    publicationDate: string;
    scopusLevel?: string;
    tciLevel?: string;
    authors: string[];
    authorPosition: number;
  };
}

export interface VC5CoAuthorContribution {
  id: string;
  type: 'VC5';
  title: string;
  issuer: string;
  issuerLogo?: string;
  status: CredentialStatus;
  issuedAt: string;
  expiresAt?: string;
  metadata?: Record<string, unknown>;
  claims: {
    publicationTitle: string;
    coAuthorName: string;
    coAuthorEmail: string;
    contributionPercentage: number;
    confirmedAt: string;
  };
}

export interface VC6Consolidated {
  id: string;
  type: 'VC6';
  title: string;
  issuer: string;
  issuerLogo?: string;
  status: CredentialStatus;
  issuedAt: string;
  expiresAt?: string;
  metadata?: Record<string, unknown>;
  claims: {
    aggregatedCredentials: string[];
    generatedAt: string;
    forPosition: string;
  };
}

export type Credential = VC1PersonalIdentity | VC2EmploymentHR | VC3TeachingRecord | VC4ResearchPublication | VC5CoAuthorContribution | VC6Consolidated;
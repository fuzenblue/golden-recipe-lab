export type PositionLevel = 'assistant' | 'associate' | 'full';
export type RequestMethod = 'regular' | 'special';

export interface Position {
  id: string;
  level: PositionLevel;
  titleTh: string;
  titleEn: string;
  minYearsExperience: number;
  requiredCredentials: string[];
  description: string;
}

export type ApplicationStatus = 'draft' | 'submitted' | 'reviewing' | 'evaluating' | 'decision_pending' | 'approved' | 'rejected';

export interface Application {
  id: string;
  userId: string;
  position: Position;
  credentials: string[];
  status: ApplicationStatus;
  submittedAt?: string;
  createdAt: string;
  updatedAt: string;
  verificationStatus?: {
    documentationReview: boolean;
    teachingEvaluation: boolean;
    academicWorkEvaluation: boolean;
    committeeDecision: boolean;
  };
  feedback?: string;
}

export interface ApplicationTimeline {
  id: string;
  applicationId: string;
  status: ApplicationStatus;
  timestamp: string;
  description: string;
  isCompleted: boolean;
}
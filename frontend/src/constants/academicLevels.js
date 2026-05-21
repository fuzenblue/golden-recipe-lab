export const AcademicLevel = {
  NONE: 0,
  DOCTOR: 1,
  ASSISTANT_PROFESSOR: 2,
  ASSOCIATE_PROFESSOR: 3,
  PROFESSOR: 4,
};

export const ACADEMIC_LEVEL_LABELS = {
  [AcademicLevel.NONE]: 'อาจารย์',
  [AcademicLevel.DOCTOR]: 'ดร.',
  [AcademicLevel.ASSISTANT_PROFESSOR]: 'ผู้ช่วยศาสตราจารย์',
  [AcademicLevel.ASSOCIATE_PROFESSOR]: 'รองศาสตราจารย์',
  [AcademicLevel.PROFESSOR]: 'ศาสตราจารย์',
};

export const POSITION_TO_LEVEL = {
  'อาจารย์': AcademicLevel.NONE,
  'ดร.': AcademicLevel.DOCTOR,
  'ผู้ช่วยศาสตราจารย์': AcademicLevel.ASSISTANT_PROFESSOR,
  'ผู้ช่วยศาสตราจารย์ (ผศ.)': AcademicLevel.ASSISTANT_PROFESSOR,
  'รองศาสตราจารย์': AcademicLevel.ASSOCIATE_PROFESSOR,
  'รองศาสตราจารย์ (รศ.)': AcademicLevel.ASSOCIATE_PROFESSOR,
  'ศาสตราจารย์': AcademicLevel.PROFESSOR,
  'ศาสตราจารย์ (ศ.)': AcademicLevel.PROFESSOR,
};

export const ELIGIBLE_POSITIONS = {
  [AcademicLevel.NONE]: ['ast_prof'],
  [AcademicLevel.DOCTOR]: ['ast_prof'],
  [AcademicLevel.ASSISTANT_PROFESSOR]: ['assoc_prof'],
  [AcademicLevel.ASSOCIATE_PROFESSOR]: ['prof'],
  [AcademicLevel.PROFESSOR]: [],
};

export function getAcademicLevel(position) {
  return POSITION_TO_LEVEL[position] ?? AcademicLevel.NONE;
}

export function getEligiblePositionIds(level) {
  return ELIGIBLE_POSITIONS[level] ?? [];
}

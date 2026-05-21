const vc1Data = {
  personal_info: { ข้อมูลส่วนบุคคล: true },
  firstname: 'สมชาย',
  lastname: 'ทดสอบ',
  date_of_birth: '1985-06-20',
  age: '39',
  telephone: '081-234-5678',
  email: 'demo@grl.ac.th',
  university: 'โกลเดน เรสสิพี แล็ป',
  department: 'ภาควิชาคณิตศาสตร์',
  faculty: 'คณะวิทยาศาสตร์',
  higher_education: 'ปริญญาเอก',
  phd: 'คณิตศาสตร์',
  phd_year_of_graduation: '2560',
  master_of_science: 'คณิตศาสตร์',
  master_of_science_year_of_graduation: '2555',
  bachelor_of_science: 'คณิตศาสตร์',
  bachelor_of_science_year_of_graduation: '2553',
  institution_name_country: 'โกลเดน เรสสิพี แล็ป, ประเทศไทย',
};

const vc2Data = {
    university: 'โกลเดน เรสสิพี แล็ป',
  department: 'ภาควิชาคณิตศาสตร์',
  faculty: 'คณะวิทยาศาสตร์',
  educational_record: {
    level: 'ปริญญาเอก',
    field: 'คณิตศาสตร์',
  university: 'โกลเดน เรสสิพี แล็ป',
    year: '2560',
  },
  official_history: [
    { year: '2556-2559', position: 'อาจารย์', department: 'คณะวิทยาศาสตร์' },
    { year: '2559-ปัจจุบัน', position: 'ผู้ช่วยศาสตราจารย์', department: 'คณะวิทยาศาสตร์' },
  ],
  background_duties: 'ภาระงานสอน 12 ชั่วโมง/สัปดาห์',
  current_position: {
    position: 'ผู้ช่วยศาสตราจารย์',
    level: 'ค4',
    step: '4',
    salary: '35,000',
  },
  appointed_lecturer: { appointment_date: '2556-08-01' },
  appointed_assistant_professor: {
    field_of_study: 'คณิตศาสตร์',
    appointment_date: '2559-08-01',
  },
  years_of_service: { years: '8', months: '6' },
  teaching_work: [
    { 
      level_curriculum: 'ปริญญาตรี', 
      subject_taught: 'แคลคูลัส 1', 
      name_code: 'MATH101', 
      credits: '3', 
      theory_hours: '3', 
      practice_hours: '0' 
    },
    { 
      level_curriculum: 'ปริญญาตรี', 
      subject_taught: 'พีชคณิตเชิงเส้น', 
      name_code: 'MATH201', 
      credits: '3', 
      theory_hours: '3', 
      practice_hours: '0' 
    },
  ],
  thesis_supervision: 'ปริญญาโท 5 คน, ปริญญาเอก 2 คน',
  research_work: 'วิจัยเรื่องการประยุกต์ใช้ Machine Learning ในการศึกษา',
  academic_service_work: 'กรรมการวิชาการ, ตรวจสอบบทความวิชาการ',
  administrative_work: 'หัวหน้าภาควิชาคณิตศาสตร์',
};

const vc3Data = [
  {
    id: 'pub-001',
    title: 'Applications of Machine Learning in Education',
    journal: 'Journal of Educational Technology',
    published_date: '2023-06-15',
    doi: '10.1234/jed.2023.001',
    scopus_level: 'Q1',
    authors: ['สมชาย ทดสอบ', 'สมหญิง ตัวอย่าง'],
    author_position: 1,
    verified: true,
    verified_by: 'Scopus - Elsevier',
  },
  {
    id: 'pub-002',
    title: 'Data Analysis for Academic Performance',
    journal: 'Thai Journal of Science',
    published_date: '2022-12-01',
    doi: '10.5678/tjs.2022.045',
    tci_level: 'T1',
    authors: ['สมชาย ทดสอบ', 'วิชัย พัฒนา'],
    author_position: 1,
    verified: true,
    verified_by: 'TCI',
  },
];

export const getVC1Data = () => vc1Data;
export const getVC2Data = () => vc2Data;
export const getVC3Data = () => vc3Data;
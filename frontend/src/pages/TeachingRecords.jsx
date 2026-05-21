import { useAppSelector } from '../hooks';

const demoTeaching = [
  {
    year: '2566', sem: '1',
    courses: [
      { code: 'MATH101', name: 'แคลคูลัส 1', credits: 3, students: 120, hours: 3, score: 4.2 },
      { code: 'MATH201', name: 'พีชคณิตเชิงเส้น', credits: 3, students: 80, hours: 3, score: 4.5 },
    ]
  },
  {
    year: '2566', sem: '2',
    courses: [
      { code: 'MATH301', name: 'สมการเชิงอนุพันธ์', credits: 3, students: 60, hours: 3, score: 4.3 },
    ]
  },
  {
    year: '2565', sem: '1',
    courses: [
      { code: 'MATH101', name: 'แคลคูลัส 1', credits: 3, students: 115, hours: 3, score: 4.1 },
    ]
  },
];

const TeachingRecords = () => {
  const { items: credentials } = useAppSelector((state) => state.credentials);
  const teachingCred = credentials.find(c => c.type === 'VC3');

  const totalCourses = demoTeaching.reduce((acc, r) => acc + r.courses.length, 0);
  const avgScore = (demoTeaching.reduce((acc, r) => acc + r.courses.reduce((a, c) => a + c.score, 0), 0) / totalCourses).toFixed(1);
  const totalStudents = demoTeaching.reduce((acc, r) => acc + r.courses.reduce((a, c) => a + c.students, 0), 0);

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold">ประวัติการสอน</h1>
          <p className="text-caption text-base-content/50">Teaching Records</p>
        </div>
        <button className="btn btn-primary btn-sm">
          <i className="fa-solid fa-plus mr-1"></i>ขอประวัติ
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="bg-base-100 rounded-box border border-base-300 p-3 text-center">
          <p className="text-xs text-base-content/60">รายวิชา</p>
          <p className="text-lg font-bold text-primary">{totalCourses}</p>
        </div>
        <div className="bg-base-100 rounded-box border border-base-300 p-3 text-center">
          <p className="text-xs text-base-content/60">คะแนนเฉลี่ย</p>
          <p className="text-lg font-bold text-success">{avgScore}</p>
        </div>
        <div className="bg-base-100 rounded-box border border-base-300 p-3 text-center">
          <p className="text-xs text-base-content/60">นักศึกษา</p>
          <p className="text-lg font-bold text-warning">{totalStudents}</p>
        </div>
      </div>

      <div className="space-y-3">
        {demoTeaching.map((record, idx) => (
          <div key={idx} className="bg-base-100 rounded-box border border-base-300 overflow-hidden">
            <div className="flex items-center justify-between p-3.5 border-b border-base-200">
              <p className="text-sm font-medium">
                ปี {record.year} / ภาค {record.sem}
              </p>
              <span className="badge badge-primary badge-sm">{record.courses.length} รายวิชา</span>
            </div>
            {record.courses.map((course, cidx) => (
              <div key={cidx} className="flex items-center justify-between px-3.5 py-2.5 border-b border-base-200 last:border-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-base-content/40">{course.code}</span>
                  <span className="text-sm">{course.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-base-content/50">{course.students} คน</span>
                  <span className={`badge badge-sm ${course.score >= 4.0 ? 'badge-success' : 'badge-warning'}`}>
                    {course.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="bg-base-100 rounded-box border border-base-300 p-3.5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
            <i className="fa-solid fa-shield-halved text-xs"></i>
          </div>
          <div>
            <p className="text-xs text-base-content/50">VC3 Status:</p>
            <p className="text-sm">
              {teachingCred
                ? <span className="badge badge-success badge-sm"><i className="fa-solid fa-check mr-1"></i>มี VC3</span>
                : <span className="badge badge-warning badge-sm"><i className="fa-solid fa-hourglass-half mr-1"></i>ยังไม่มี VC3</span>
              }
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeachingRecords;
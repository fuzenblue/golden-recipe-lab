import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getVC1Data, getVC2Data, getVC3Data } from '../../data/vcData';

const ApplicationVerify = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);
  const [confirmed, setConfirmed] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const vc1 = getVC1Data();
  const vc2 = getVC2Data();
  const vc3 = getVC3Data();

  const handleSubmit = () => {
    setSubmitting(true);
    setTimeout(() => {
      alert('คำร้องของคุณถูกส่งเรียบร้อยแล้ว\n\nข้อมูล VC1, VC2, VC3 ถูกส่งไปยัง Verifier เรียบร้อย');
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <>
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/application/step3')} className="btn btn-ghost btn-sm btn-circle">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <div className="flex-1">
          <h1 className="text-base font-bold">ตรวจสอบและยืนยัน</h1>
          <p className="text-caption text-base-content/50">← กลับ / Back &nbsp; 100%</p>
        </div>
      </div>

      <div className="bg-base-100 rounded-box border border-base-300 p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-success flex items-center gap-1.5">
            <i className="fa-solid fa-circle-check"></i>
            พร้อมส่ง / Ready to Submit
          </span>
        </div>
        <div className="w-full h-2 bg-base-200 rounded-full overflow-hidden">
          <div className="h-full bg-success rounded-full" style={{ width: '100%' }}></div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary to-blue-600 rounded-box p-4 text-white">
        <p className="text-xs opacity-70"><i className="fa-solid fa-clipboard-list mr-1"></i> สรุปคำขอ / Application Summary</p>
        <p className="font-bold text-lg mt-1"><i className="fa-solid fa-bullseye mr-1"></i> ผู้ช่วยศาสตราจารย์</p>
        <p className="text-xs opacity-70">Assistant Professor</p>
      </div>

      <div className="space-y-2">
        <div className="bg-base-100 rounded-box border border-base-300 p-3.5">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <i className="fa-solid fa-id-card text-sm"></i>
              </div>
              <span className="text-sm font-medium">VC1: ข้อมูลส่วนตัว</span>
            </div>
            <span className="badge badge-success badge-sm">● verified</span>
          </div>
          <p className="text-xs text-base-content/60 ml-10">
            {vc1.firstname} {vc1.lastname} | {vc1.higher_education} | {vc1.university}
          </p>
        </div>

        <div className="bg-base-100 rounded-box border border-base-300 p-3.5">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary">
                <i className="fa-solid fa-briefcase text-sm"></i>
              </div>
              <span className="text-sm font-medium">VC2: ประวัติการทำงาน</span>
            </div>
            <span className="badge badge-success badge-sm">● verified</span>
          </div>
          <p className="text-xs text-base-content/60 ml-10">
            {vc2.current_position?.position} | {vc2.years_of_service?.years} ปี | {vc2.faculty}
          </p>
        </div>

        <div className="bg-base-100 rounded-box border border-base-300 p-3.5">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center text-success">
                <i className="fa-solid fa-newspaper text-sm"></i>
              </div>
              <span className="text-sm font-medium">VC3: ผลงานวิชาการ</span>
            </div>
            <span className="badge badge-success badge-sm">● verified</span>
          </div>
          <p className="text-xs text-base-content/60 ml-10">
            {vc3.length} ผลงาน | Scopus, IEEE, Springer
          </p>
        </div>
      </div>

      <div className="bg-base-100 rounded-box border border-base-300 p-3.5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-warning/10 rounded-lg flex items-center justify-center text-warning">
            <i className="fa-solid fa-building-columns text-sm"></i>
          </div>
          <div>
            <p className="text-sm font-medium"><i className="fa-solid fa-building-columns mr-1"></i> ผู้ตรวจสอบ / Verifier</p>
            <p className="text-xs text-base-content/60">{user?.institution || 'มหาวิทยาลัยศรีนครินทรวิโรฒ'}</p>
          </div>
        </div>
      </div>

      <div className="bg-base-100 rounded-box border border-base-300 p-4">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
          />
          <span className="text-sm"><i className="fa-solid fa-check mr-1"></i> ข้าพเจ้ายืนยันให้ส่งข้อมูลนี้เป็น Verifiable Presentation (VP) ไปยังผู้ตรวจสอบ</span>
        </label>
      </div>

      <button
        onClick={handleSubmit}
        className={`btn btn-primary btn-block text-btn ${submitting ? 'loading' : ''}`}
        disabled={!confirmed || submitting}
      >
        {submitting ? 'กำลังส่ง...' : <><i className="fa-solid fa-paper-plane mr-1"></i> ส่งใบสมัคร / Submit Application</>}
      </button>
    </>
  );
};

export default ApplicationVerify;
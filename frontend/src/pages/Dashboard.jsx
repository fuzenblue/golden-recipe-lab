import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks';
import { fetchDemoCredentials } from '../store/slices/credentialsSlice';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { items: credentials } = useAppSelector((state) => state.credentials);

  useEffect(() => {
    if (credentials.length === 0) {
      dispatch(fetchDemoCredentials());
    }
  }, [dispatch, credentials.length]);

  const activeApps = [];

  const activities = [
    { icon: 'fa-circle-check', color: 'text-success', bg: 'bg-success/10', text: 'คำร้องของคุณได้รับการอนุมัติแล้ว', time: '2 วันที่แล้ว' },
    { icon: 'fa-triangle-exclamation', color: 'text-warning', bg: 'bg-warning/10', text: 'เอกสารจะหมดอายุใน 30 วัน', time: '5 วันที่แล้ว' },
  ];

  return (
    <>
      <div className="bg-gradient-to-br from-primary to-blue-700 rounded-xl shadow-lg p-5 text-white">
        <div className="flex gap-4 mb-4">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <i className="fa-solid fa-user text-4xl text-white/80"></i>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold">{user?.name || 'ดร.สมชาย ใจดี'}</h2>
            <p className="text-sm text-white/80">ID: 1234567890123</p>
            <div className="flex items-center gap-1 mt-1">
              <i className="fa-solid fa-circle-check text-xs"></i>
              <span className="text-xs">ยืนยันแล้ว</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-white/70 text-xs flex items-center gap-1">
              <i className="fa-solid fa-building text-xs"></i> สังกัด
            </p>
            <p className="font-medium">{user?.department || 'คณะวิทยาศาสตร์'}</p>
          </div>
          <div>
            <p className="text-white/70 text-xs flex items-center gap-1">
              <i className="fa-solid fa-briefcase text-xs"></i> ตำแหน่ง
            </p>
            <p className="font-medium">{user?.position || 'ผู้ช่วยศาสตราจารย์'}</p>
          </div>
          <div>
            <p className="text-white/70 text-xs flex items-center gap-1">
              <i className="fa-solid fa-graduation-cap text-xs"></i> ภาควิชา
            </p>
            <p className="font-medium">วิทยาการคอมพิวเตอร์</p>
          </div>
          <div>
            <p className="text-white/70 text-xs flex items-center gap-1">
              <i className="fa-regular fa-calendar text-xs"></i> หมดอายุ
            </p>
            <p className="font-medium">15 มี.ค. 2570</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Link to="/applications" className="bg-base-100 rounded-lg p-4 shadow-sm border border-base-300 hover:shadow-md transition-shadow">
          <div className="flex flex-col items-center text-center gap-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <i className="fa-solid fa-pen text-xl text-primary"></i>
            </div>
            <div>
              <p className="font-semibold text-sm text-base-content">ส่งคำร้องใหม่</p>
              <p className="text-xs text-base-content/50">Submit Request</p>
            </div>
          </div>
        </Link>
        <Link to="/wallet" className="bg-base-100 rounded-lg p-4 shadow-sm border border-base-300 hover:shadow-md transition-shadow">
          <div className="flex flex-col items-center text-center gap-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <i className="fa-solid fa-folder-open text-xl text-primary"></i>
            </div>
            <div>
              <p className="font-semibold text-sm text-base-content">เอกสารของฉัน</p>
              <p className="text-xs text-base-content/50">My Documents</p>
            </div>
          </div>
        </Link>
        <Link to="/applications" className="bg-base-100 rounded-lg p-4 shadow-sm border border-base-300 hover:shadow-md transition-shadow">
          <div className="flex flex-col items-center text-center gap-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <i className="fa-solid fa-circle-check text-xl text-primary"></i>
            </div>
            <div>
              <p className="font-semibold text-sm text-base-content">ตรวจสอบคำขอ</p>
              <p className="text-xs text-base-content/50">Check Requests</p>
            </div>
          </div>
        </Link>
        <Link to="/help" className="bg-base-100 rounded-lg p-4 shadow-sm border border-base-300 hover:shadow-md transition-shadow">
          <div className="flex flex-col items-center text-center gap-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <i className="fa-solid fa-plus text-xl text-primary"></i>
            </div>
            <div>
              <p className="font-semibold text-sm text-base-content">เพิ่มเติม</p>
              <p className="text-xs text-base-content/50">More Services</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="bg-base-100 rounded-lg p-4 shadow-sm border border-base-300">
        <h3 className="font-semibold text-base-content mb-3">กิจกรรมล่าสุด</h3>
        <div className="space-y-3">
          {activities.map((act, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-full ${act.bg} flex items-center justify-center flex-shrink-0`}>
                <i className={`fa-solid ${act.icon} ${act.color} text-sm`}></i>
              </div>
              <div className="flex-1">
                <p className="text-sm text-base-content">{act.text}</p>
                <p className="text-xs text-base-content/50">{act.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="bg-base-100 rounded-lg p-4 shadow-sm border border-base-300">
        <h2 className="text-sm font-semibold text-base-content mb-3 flex items-center gap-2">
          <i className="fa-solid fa-file-circle-check text-sm"></i>
          APPLICATION STATUS
        </h2>
        {activeApps.length > 0 ? (
          <div className="space-y-2">
            {activeApps.map((app) => (
              <div key={app.id} className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-base-content">{app.position?.titleTh}</p>
                  <p className="text-xs text-base-content/60">{app.status}</p>
                </div>
                <span className="badge badge-warning badge-sm">กำลังดำเนินการ</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-base-200 flex items-center justify-center">
              <i className="fa-solid fa-pen text-xl text-base-content/40"></i>
            </div>
            <p className="text-sm text-base-content/70 mb-1">ไม่มีการสมัครงานที่กำลังดำเนินการ</p>
            <p className="text-xs text-base-content/50 mb-3">No active applications</p>
            <Link
              to="/applications"
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              สมัครตำแหน่งใหม่ / Apply for Position
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;

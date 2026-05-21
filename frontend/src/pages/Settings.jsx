import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks';
import { logout } from '../store/slices/authSlice';

const Settings = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
  });

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('hasPin');
    localStorage.removeItem('userPin');
    navigate('/login');
  };

  return (
      <>
        <h1 className="text-lg font-bold">โปรไฟล์</h1>

      <div className="bg-base-100 rounded-box border border-base-300 p-5 flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl flex-shrink-0">
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="font-bold text-base">{user?.name}</h2>
          <p className="text-sm text-base-content/60 truncate">{user?.email}</p>
          <p className="text-xs text-base-content/40">{user?.institution}</p>
        </div>
        <button className="btn btn-ghost btn-sm">
          <i className="fa-solid fa-pen"></i>
        </button>
      </div>

      <div>
        <p className="text-xs font-semibold text-base-content/60 mb-2"><i className="fa-solid fa-chart-bar mr-1"></i> สถิติ</p>
        <div className="grid grid-cols-3 gap-2">
          {['VC1', 'VC2', 'VC3'].map((vc) => (
            <div key={vc} className="bg-base-100 rounded-box border border-base-300 p-3 text-center">
              <p className="text-sm font-bold">{vc}</p>
              <span className="badge badge-success badge-xs mt-1">● active</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-base-100 rounded-box border border-base-300 overflow-hidden">
        <p className="text-xs font-semibold text-base-content/60 px-4 pt-3 pb-1">
          <i className="fa-solid fa-gear mr-1"></i> การตั้งค่า
        </p>
        <div className="divide-y divide-base-200">
          <div className="flex items-center justify-between px-4 py-3.5">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-lock text-base-content/40 w-4"></i>
              <span className="text-sm">เปลี่ยนรหัส PIN</span>
            </div>
            <i className="fa-solid fa-chevron-right text-xs text-base-content/30"></i>
          </div>
          <div className="flex items-center justify-between px-4 py-3.5">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-bell text-base-content/40 w-4"></i>
              <span className="text-sm">การแจ้งเตือน</span>
            </div>
            <input
              type="checkbox"
              className="toggle toggle-sm toggle-primary"
              checked={settings.pushNotifications}
              onChange={(e) => setSettings({...settings, pushNotifications: e.target.checked})}
            />
          </div>
          <div className="flex items-center justify-between px-4 py-3.5">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-envelope text-base-content/40 w-4"></i>
              <span className="text-sm">อีเมลแจ้งเตือน</span>
            </div>
            <input
              type="checkbox"
              className="toggle toggle-sm toggle-primary"
              checked={settings.emailNotifications}
              onChange={(e) => setSettings({...settings, emailNotifications: e.target.checked})}
            />
          </div>
          <div className="flex items-center justify-between px-4 py-3.5">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-globe text-base-content/40 w-4"></i>
              <span className="text-sm">ภาษา</span>
            </div>
            <span className="text-sm text-base-content/60">TH</span>
          </div>
          <div className="flex items-center justify-between px-4 py-3.5">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-mobile-screen text-base-content/40 w-4"></i>
              <span className="text-sm">อุปกรณ์ที่เชื่อมต่อ</span>
            </div>
            <i className="fa-solid fa-chevron-right text-xs text-base-content/30"></i>
          </div>
          <div className="flex items-center justify-between px-4 py-3.5">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-shield-halved text-base-content/40 w-4"></i>
              <span className="text-sm">ความปลอดภัย</span>
            </div>
            <i className="fa-solid fa-chevron-right text-xs text-base-content/30"></i>
          </div>
        </div>
      </div>

      <button onClick={handleLogout} className="btn btn-error btn-outline btn-block text-btn">
        <i className="fa-solid fa-right-from-bracket mr-2"></i>
        ออกจากระบบ
      </button>

      <div className="text-center">
        <p className="text-caption text-base-content/30"><i className="fa-solid fa-circle-info mr-1"></i> เวอร์ชัน 1.0.0 | Acard Academic</p>
      </div>
    </>
  );
};

export default Settings;
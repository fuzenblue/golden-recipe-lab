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

  const vcTypes = credentials.filter(c => ['VC1', 'VC2', 'VC3'].includes(c.type));
  const activeApps = [];

  const formatDate = () => {
    const d = new Date();
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  const getStatusIcon = (status) => {
    if (status === 'verified' || status === 'ready') return 'fa-circle-check text-success';
    if (status === 'pending') return 'fa-clock text-warning';
    return 'fa-circle-xmark text-error';
  };

  const getStatusText = (status) => {
    if (status === 'verified' || status === 'ready') return 'verified';
    if (status === 'pending') return 'pending';
    return 'missing';
  };

  return (
    <>
      <div className="bg-gradient-to-r from-primary to-blue-600 rounded-card p-5 text-white">
        <p className="text-sm opacity-80">👋 สวัสดี,</p>
        <h1 className="text-xl font-bold">{user?.name || 'ผู้ใช้งาน'}</h1>
        <p className="text-xs opacity-70 mt-1">{user?.institution || 'Srinakharinwirot University'}</p>
        <p className="text-xs opacity-50 mt-2">📅 {formatDate()}</p>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-base-content/70 mb-2 flex items-center gap-1.5">
          <i className="fa-solid fa-id-card"></i> หนังสือรับรอง / VERIFIABLE CREDENTIALS
        </h2>
        <div className="space-y-2">
          {vcTypes.map((cred) => (
            <Link
              key={cred.id}
              to="/wallet"
              className="bg-base-100 rounded-box border border-base-300 p-3.5 flex items-center justify-between hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <i className={`fa-solid ${cred.type === 'VC1' ? 'fa-id-card' : cred.type === 'VC2' ? 'fa-briefcase' : 'fa-newspaper'} text-sm`}></i>
                </div>
                <div>
                  <p className="text-sm font-medium">{cred.title}</p>
                  <p className="text-xs text-base-content/50">{getStatusText(cred.status)}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <i className={`fa-solid ${getStatusIcon(cred.status)}`}></i>
                <i className="fa-solid fa-chevron-right text-xs text-base-content/30"></i>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-base-content/70 mb-2 flex items-center gap-1.5">
          <i className="fa-solid fa-bolt"></i> รายการด่วน / QUICK ACTIONS
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <Link to="/applications" className="service-card">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xl">
              <i className="fa-solid fa-file-signature"></i>
            </div>
            <span className="text-sm font-medium text-center">สมัครตำแหน่ง</span>
            <span className="text-[10px] text-base-content/50 -mt-1">Apply Position</span>
          </Link>
          <Link to="/wallet" className="service-card">
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center text-success text-xl">
              <i className="fa-solid fa-id-card"></i>
            </div>
            <span className="text-sm font-medium text-center">ดูวุฒิบัตร</span>
            <span className="text-[10px] text-base-content/50 -mt-1">View Credentials</span>
          </Link>
        </div>
      </div>

      <div className="bg-base-100 rounded-box border border-base-300 p-4">
        <h2 className="text-sm font-semibold text-base-content/70 mb-2 flex items-center gap-1.5">
          <i className="fa-solid fa-chart-simple"></i> สถานะคำร้อง / APPLICATION STATUS
        </h2>
        {activeApps.length > 0 ? (
          <div className="space-y-2">
            {activeApps.map((app) => (
              <div key={app.id} className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
                <div>
                  <p className="text-sm font-medium">{app.position?.titleTh}</p>
                  <p className="text-xs text-base-content/60">{app.status}</p>
                </div>
                <span className="badge badge-warning badge-sm">กำลังดำเนินการ</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-4">
            <p className="text-sm text-base-content/50">📝 ไม่มีการสมัครงานที่กำลังดำเนินการ</p>
            <p className="text-xs text-base-content/40">No active applications</p>
            <Link to="/applications" className="btn btn-primary btn-sm mt-3">
              สมัครตำแหน่งใหม่ / Apply
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
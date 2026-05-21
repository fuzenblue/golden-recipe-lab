import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks';

const positions = [
  {
    level: 'assistant',
    title: 'ผู้ช่วยศาสตราจารย์',
    subtitle: 'Assistant Professor',
    icon: 'fa-graduation-cap',
    requirements: 'คุณสมบัติ: ปริญญาเอก + ผลงาน 2 ชิ้น',
  },
  {
    level: 'associate',
    title: 'รองศาสตราจารย์',
    subtitle: 'Associate Professor',
    icon: 'fa-chart-line',
    requirements: 'คุณสมบัติ: ปริญญาเอก + ผลงาน 5 ชิ้น + ประสบการณ์',
  },
  {
    level: 'full',
    title: 'ศาสตราจารย์',
    subtitle: 'Professor',
    icon: 'fa-star',
    requirements: 'คุณสมบัติ: ปริญญาเอก + ผลงาน 10 ชิ้น + ประสบการณ์',
  },
];

const Applications = () => {
  const navigate = useNavigate();
  const { items: applications } = useAppSelector((state) => state.applications);
  const [activeTab, setActiveTab] = useState('active');
  const [selected, setSelected] = useState('');

  const activeApps = applications.filter(a => !['approved', 'rejected'].includes(a.status));
  const pastApps = applications.filter(a => ['approved', 'rejected'].includes(a.status));

  const getStatusColor = (status) => {
    if (status === 'approved') return 'badge-success';
    if (status === 'rejected') return 'badge-error';
    if (status === 'reviewing') return 'badge-warning';
    return 'badge-primary';
  };

  const getStatusIcon = (status) => {
    if (status === 'approved') return 'fa-check-circle';
    if (status === 'rejected') return 'fa-times-circle';
    if (status === 'submitted') return 'fa-paper-plane';
    if (status === 'reviewing') return 'fa-magnifying-glass';
    return 'fa-file';
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">ประวัติการสมัคร</h1>
        <span className="text-caption text-base-content/50">Applications</span>
      </div>

      <div className="flex gap-1 bg-base-100 rounded-box p-1 border border-base-300">
        {['active', 'history'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab
                ? 'bg-primary text-white shadow-sm'
                : 'text-base-content/60 hover:text-base-content'
            }`}
          >
            {tab === 'active' ? 'เลือกตำแหน่ง' : 'ประวัติ'}
            <span className="ml-1 text-xs">
              ({tab === 'active' ? activeApps.length : pastApps.length})
            </span>
          </button>
        ))}
      </div>

      {activeTab === 'active' ? (
        <div className="space-y-3">
          <p className="text-sm text-base-content/60">
            <i className="fa-solid fa-clipboard-list mr-1"></i> เลือกตำแหน่งที่ต้องการสมัคร / Select Position to Apply
          </p>
          {positions.map((pos) => (
            <button
              key={pos.level}
              onClick={() => setSelected(pos.level)}
              className={`w-full text-left bg-base-100 rounded-box border p-4 transition-all ${
                selected === pos.level
                  ? 'border-primary ring-1 ring-primary'
                  : 'border-base-300 hover:border-primary/30'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  selected === pos.level ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                }`}>
                  <i className={`fa-solid ${pos.icon}`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    {selected === pos.level && (
                      <i className="fa-solid fa-circle-check text-primary text-xs"></i>
                    )}
                    <p className="font-medium text-sm">{pos.title}</p>
                  </div>
                  <p className="text-xs text-base-content/50">{pos.subtitle}</p>
                  <p className="text-[10px] text-base-content/40 mt-0.5">{pos.requirements}</p>
                </div>
              </div>
            </button>
          ))}

          <button
            onClick={() => selected && navigate('/application/step1')}
            className={`btn w-full text-btn ${
              selected ? 'btn-primary' : 'btn-disabled'
            }`}
            disabled={!selected}
          >
            {selected ? 'เริ่มการสมัคร / Start Application' : 'กรุณาเลือกตำแหน่ง'}
          </button>

          <div className="pt-2">
            <h2 className="text-sm font-semibold text-base-content/70 mb-2 flex items-center gap-1.5">
              <i className="fa-solid fa-clock-rotate-left"></i> ประวัติการสมัคร / Application History
            </h2>
            {pastApps.length > 0 ? (
              <div className="space-y-2">
                {pastApps.map((app) => (
                  <div key={app.id} className="bg-base-100 rounded-box border border-base-300 p-3 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{app.position?.titleTh}</p>
                      <p className="text-xs text-base-content/50">
                        {app.submittedAt ? new Date(app.submittedAt).toLocaleDateString('th-TH') : '-'}
                      </p>
                    </div>
                    <span className={`badge ${getStatusColor(app.status)} gap-1 badge-sm`}>
                      <i className={`fa-solid ${getStatusIcon(app.status)} text-xs`}></i>
                      {app.status}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-base-100 rounded-box border border-base-300 p-6 text-center">
                <i className="fa-solid fa-inbox text-3xl text-base-content/20 mb-2"></i>
                <p className="text-sm text-base-content/60">ไม่มีการสมัครงานที่ผ่านมา</p>
                <p className="text-xs text-base-content/40">No previous applications</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          {pastApps.length > 0 ? (
            pastApps.map((app) => (
              <div key={app.id} className="bg-base-100 rounded-box border border-base-300 p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{app.position?.titleTh}</p>
                    <p className="text-xs text-base-content/50">
                      {app.submittedAt ? new Date(app.submittedAt).toLocaleDateString('th-TH') : '-'}
                    </p>
                  </div>
                  <span className={`badge ${getStatusColor(app.status)} badge-sm`}>{app.status}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-base-100 rounded-box border border-base-300 p-8 text-center">
              <i className="fa-solid fa-inbox text-3xl text-base-content/20 mb-2"></i>
              <p className="text-sm text-base-content/60">ไม่มีประวัติการสมัคร</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Applications;
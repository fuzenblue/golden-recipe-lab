import { useState } from 'react';
import { useAppSelector } from '../hooks';
import { getVC1Data, getVC2Data, getVC3Data } from '../data/vcData';

const TABS = [
  { key: 'VC1', label: 'VC1', icon: 'fa-id-card' },
  { key: 'VC2', label: 'VC2', icon: 'fa-briefcase' },
  { key: 'VC3', label: 'VC3', icon: 'fa-newspaper' },
];

const Wallet = () => {
  const { items: credentials } = useAppSelector((state) => state.credentials);
  const [activeTab, setActiveTab] = useState('VC1');
  const [showModal, setShowModal] = useState(false);
  const [selectedCred, setSelectedCred] = useState(null);

  const vc1 = getVC1Data();
  const vc2 = getVC2Data();
  const vc3 = getVC3Data();

  const getStatusColor = (status) => {
    if (status === 'verified' || status === 'ready') return 'badge-success';
    if (status === 'pending') return 'badge-warning';
    return 'badge-ghost';
  };

  const getTabCount = (type) => credentials.filter(c => c.type === type).length;

  const renderVC1Content = () => (
    <div className="bg-base-100 rounded-box border border-base-300 p-4 shadow-sm">
      <div className="flex items-start gap-2 mb-3">
        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
          <i className="fa-solid fa-building-columns text-sm"></i>
        </div>
        <div>
          <p className="text-xs text-base-content/50"><i className="fa-solid fa-building-columns mr-1"></i> ออกโดย / Issued by:</p>
          <p className="text-sm font-medium">{vc1.university}</p>
        </div>
      </div>
      <div className="border-t border-base-200 pt-3 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="text-base-content/50 w-5 flex justify-center"><i className="fa-solid fa-user text-xs"></i></span>
          <span className="text-sm">ชื่อ-นามสกุล: <strong>{vc1.firstname} {vc1.lastname}</strong></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base-content/50 w-5 flex justify-center"><i className="fa-solid fa-cake-candles text-xs"></i></span>
          <span className="text-sm">วันเกิด: {vc1.date_of_birth}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base-content/50 w-5 flex justify-center"><i className="fa-solid fa-id-card text-xs"></i></span>
          <span className="text-sm">รหัสประจำตัว: <strong>1-2345-67890-12-3</strong></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base-content/50 w-5 flex justify-center"><i className="fa-solid fa-graduation-cap text-xs"></i></span>
          <span className="text-sm">การศึกษา: {vc1.higher_education} ({vc1.phd})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base-content/50 w-5 flex justify-center"><i className="fa-regular fa-envelope text-xs"></i></span>
          <span className="text-sm">{vc1.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base-content/50 w-5 flex justify-center"><i className="fa-solid fa-mobile-screen text-xs"></i></span>
          <span className="text-sm">{vc1.telephone}</span>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-base-200 flex items-center justify-between">
        <span className="badge badge-success badge-sm gap-1">
          <i className="fa-solid fa-circle-check text-xs"></i> verified
        </span>
        <span className="text-caption text-base-content/40">อัพเดท: 20 พ.ค. 2569 09:30</span>
      </div>
    </div>
  );

  const renderVC2Content = () => (
    <div className="bg-base-100 rounded-box border border-base-300 p-4 shadow-sm">
      <div className="flex items-start gap-2 mb-3">
        <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary">
          <i className="fa-solid fa-building-columns text-sm"></i>
        </div>
        <div>
          <p className="text-xs text-base-content/50"><i className="fa-solid fa-building-columns mr-1"></i> ออกโดย / Issued by:</p>
          <p className="text-sm font-medium">{vc2.university}</p>
        </div>
      </div>
      <div className="border-t border-base-200 pt-3 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="text-base-content/50 w-5 flex justify-center"><i className="fa-solid fa-briefcase text-xs"></i></span>
          <span className="text-sm">ตำแหน่ง: <strong>{vc2.current_position?.position}</strong></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base-content/50 w-5 flex justify-center"><i className="fa-solid fa-building text-xs"></i></span>
          <span className="text-sm">คณะ: {vc2.faculty}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base-content/50 w-5 flex justify-center"><i className="fa-solid fa-folder-open text-xs"></i></span>
          <span className="text-sm">ภาควิชา: {vc2.department}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base-content/50 w-5 flex justify-center"><i className="fa-solid fa-coins text-xs"></i></span>
          <span className="text-sm">เงินเดือน: {vc2.current_position?.salary} บาท</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base-content/50 w-5 flex justify-center"><i className="fa-regular fa-calendar text-xs"></i></span>
          <span className="text-sm">อายุราชการ: {vc2.years_of_service?.years} ปี {vc2.years_of_service?.months} เดือน</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base-content/50 w-5 flex justify-center"><i className="fa-solid fa-book text-xs"></i></span>
          <span className="text-sm">ภาระงานสอน: {vc2.background_duties}</span>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-base-200 flex items-center justify-between">
        <span className="badge badge-success badge-sm gap-1">
          <i className="fa-solid fa-circle-check text-xs"></i> verified
        </span>
        <span className="text-caption text-base-content/40">อัพเดท: 20 พ.ค. 2569 09:30</span>
      </div>
    </div>
  );

  const renderVC3Content = () => (
    <div className="space-y-3">
      {vc3.length > 0 ? (
        vc3.map((pub) => (
          <div key={pub.id} className="bg-base-100 rounded-box border border-base-300 p-3.5 shadow-sm">
            <div className="flex items-start justify-between mb-1.5">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center text-success mt-0.5">
                  <i className="fa-solid fa-file-lines text-sm"></i>
                </div>
                <div>
                  <p className="text-sm font-medium leading-tight">{pub.title}</p>
                  <p className="text-xs text-base-content/50">{pub.journal}</p>
                </div>
              </div>
              <span className="badge badge-primary badge-sm">{pub.scopus_level || pub.tci_level}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-base-content/40 ml-10">
              <span>DOI: {pub.doi}</span>
              <span>ปี: {pub.published_date?.split('-')[0]}</span>
            </div>
            <div className="ml-10 mt-1.5 pt-1.5 border-t border-base-200 flex items-center justify-between">
              <span className="text-xs text-success">
                <i className="fa-solid fa-shield-halved mr-1"></i>
                ยืนยันโดย: {pub.verified_by}
              </span>
              <span className="text-xs text-base-content/50">
                ลำดับที่ {pub.author_position}/{pub.authors.length}
              </span>
            </div>
          </div>
        ))
      ) : (
        <div className="bg-base-100 rounded-box border border-base-300 p-8 text-center shadow-sm">
          <i className="fa-solid fa-newspaper text-4xl text-base-content/20 mb-3"></i>
          <p className="text-sm text-base-content/60">ไม่มีผลงานทางวิชาการ</p>
          <p className="text-xs text-base-content/40 mt-1">No publications yet</p>
          <button className="btn btn-primary btn-sm mt-3">
            <i className="fa-solid fa-plus mr-1"></i>ขอ VC3
          </button>
        </div>
      )}
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'VC1': return renderVC1Content();
      case 'VC2': return renderVC2Content();
      case 'VC3': return renderVC3Content();
      default: return null;
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">กระเป๋าเอกสาร</h1>
        <span className="text-caption text-base-content/50">Wallet</span>
      </div>

      <div className="flex gap-1 bg-base-100 rounded-box p-1 border border-base-300">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.key
                ? 'bg-primary text-white shadow-sm'
                : 'text-base-content/60 hover:text-base-content'
            }`}
          >
            <div className="flex items-center justify-center gap-1.5">
              <i className={`fa-solid ${tab.icon} text-xs`}></i>
              <span>{tab.label}</span>
              {getTabCount(tab.key) > 0 && (
                <span className={`text-xs ${activeTab === tab.key ? 'text-white/70' : 'text-base-content/40'}`}>
                  ({getTabCount(tab.key)})
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      {renderTabContent()}

      <div className="flex gap-2">
        <button className="btn btn-outline btn-sm flex-1">
          <i className="fa-solid fa-share mr-1"></i> แชร์ / Share
        </button>
        <button className="btn btn-outline btn-sm flex-1">
          <i className="fa-solid fa-download mr-1"></i> ดาวน์โหลด / Download
        </button>
      </div>

      {showModal && selectedCred && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">{selectedCred.title}</h3>
            <div className="py-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-base-content/60">Type</span>
                <span className="badge badge-primary badge-sm">{selectedCred.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base-content/60">Status</span>
                <span className={`badge ${getStatusColor(selectedCred.status)} badge-sm`}>{selectedCred.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base-content/60">Issuer</span>
                <span className="text-sm">{selectedCred.issuer}</span>
              </div>
            </div>
            <div className="modal-action">
              <button className="btn btn-sm" onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
          <div className="modal-backdrop" onClick={() => setShowModal(false)}></div>
        </div>
      )}
    </>
  );
};

export default Wallet;
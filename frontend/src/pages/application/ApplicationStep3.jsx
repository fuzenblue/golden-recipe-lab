import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getVC3Data } from '../../data/vcData';

const ApplicationStep3 = () => {
  const navigate = useNavigate();
  const vc3List = getVC3Data();
  const [vc3] = useState(vc3List);
  const [showRequest, setShowRequest] = useState(false);
  const [selectedJournal, setSelectedJournal] = useState('');
  const [researchTopic, setResearchTopic] = useState('');
  const [confirmed, setConfirmed] = useState(true);

  const handleConfirm = () => {
    navigate('/application/verify');
  };

  const handleRequestVC3 = () => {
    if (selectedJournal && researchTopic) {
      alert(`กำลังส่งคำขอ VC3 ไปยัง ${selectedJournal}\nหัวข้อ: ${researchTopic}\nแนบ VC1 เพื่อยืนยันตัวตน`);
      setShowRequest(false);
      setSelectedJournal('');
      setResearchTopic('');
    }
  };

  const journals = [
    { id: 'scopus', name: 'Scopus', level: 'ฐานข้อมูลนานาชาติ' },
    { id: 'tci', name: 'TCI (Thai-Journal Citation Index)', level: 'T1-T2' },
    { id: 'sri', name: 'SRI (สถาบันวิจัยและพัฒนา)', level: 'National' },
  ];

  return (
    <>
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/application/step2')} className="btn btn-ghost btn-sm btn-circle">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <div className="flex-1">
          <h1 className="text-base font-bold">ขั้นตอนที่ 3/4</h1>
          <p className="text-caption text-base-content/50">← กลับ / Back &nbsp; 75%</p>
        </div>
      </div>

      <div className="bg-base-100 rounded-box border border-base-300 p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold">VC3: ผลงานวิชาการ / Academic Publications</span>
        </div>
        <div className="w-full h-2 bg-base-200 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
        </div>
      </div>

      {vc3.length > 0 ? (
        <>
          <div className="text-sm text-base-content/60 flex items-center gap-1">
            <i className="fa-solid fa-chart-simple"></i>
            สรุปผลงาน: {vc3.length} ผลงาน
          </div>

          <div className="space-y-3">
            {vc3.map((item) => (
              <div key={item.id} className="bg-base-100 rounded-box border border-base-300 p-3.5 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-2 flex-1 min-w-0">
                    <span className="text-primary mt-0.5"><i className="fa-solid fa-file-lines"></i></span>
                    <div>
                      <p className="text-sm font-medium leading-tight">{item.title}</p>
                      <p className="text-xs text-base-content/50">{item.journal}</p>
                    </div>
                  </div>
                  <span className="badge badge-success badge-sm gap-1">
                    <i className="fa-solid fa-circle-check text-xs"></i> verified
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-base-content/40 ml-7 mt-1.5">
                  <span>ปี: {item.published_date?.split('-')[0]} | Impact Factor</span>
                  <span>ผู้แต่งลำดับที่ {item.author_position}/{item.authors.length}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="bg-warning/10 border border-warning/20 rounded-box p-6 text-center">
            <i className="fa-solid fa-triangle-exclamation text-4xl text-warning"></i>
            <p className="text-sm font-medium text-warning mt-2">คุณยังไม่มี VC3</p>
            <p className="text-xs text-base-content/60 mt-1">You don't have VC3 yet</p>
            <p className="text-xs text-base-content/50 mt-2">
              กรุณาขอ VC3 จากสำนักพิมพ์เพื่อดำเนินการต่อ
            </p>
          </div>

          <div className="bg-base-100 rounded-box border border-base-300 p-4">
            <p className="text-sm font-semibold mb-3"><i className="fa-solid fa-upload mr-1"></i> ขอ VC3 ใหม่ / Request New VC3</p>

            <div className="space-y-3">
              <div>
                <label className="text-xs text-base-content/60 mb-1 block"><i className="fa-solid fa-building mr-1"></i> เลือกสำนักพิมพ์ / Select Publisher</label>
                <div className="space-y-2">
                  {journals.map((j) => (
                    <label
                      key={j.id}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer ${
                        selectedJournal === j.name
                          ? 'border-primary bg-primary/5'
                          : 'border-base-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="journal"
                        className="radio radio-primary radio-sm"
                        value={j.name}
                        checked={selectedJournal === j.name}
                        onChange={(e) => setSelectedJournal(e.target.value)}
                      />
                      <div>
                        <p className="text-sm font-medium">{j.name}</p>
                        <p className="text-xs text-base-content/50">{j.level}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs text-base-content/60 mb-1 block"><i className="fa-solid fa-pen mr-1"></i> หัวข้อวิจัย / Research Topic</label>
                <input
                  type="text"
                  className="input input-bordered w-full input-sm"
                  placeholder="การประยุกต์ใช้ AI ในการศึกษา"
                  value={researchTopic}
                  onChange={(e) => setResearchTopic(e.target.value)}
                />
              </div>

              <div role="alert" className="alert alert-info text-xs">
                <i className="fa-solid fa-link"></i>
                <span>VC1 จะถูกแนบโดยอัตโนมัติเพื่อยืนยันตัวตน</span>
              </div>

              <button
                onClick={handleRequestVC3}
                className="btn btn-primary btn-block btn-sm"
                disabled={!selectedJournal || !researchTopic}
              >
                <i className="fa-solid fa-cloud-arrow-up mr-1"></i>
                ขอ VC3 / Request VC3
              </button>
            </div>
          </div>
        </>
      )}

      {vc3.length > 0 && (
        <>
          <div className="bg-base-100 rounded-box border border-base-300 p-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
              />
              <span className="text-sm"><i className="fa-solid fa-check mr-1"></i> ข้าพเจ้ายืนยันว่าข้อมูลข้างต้นถูกต้อง</span>
            </label>
          </div>

          <button
            onClick={handleConfirm}
            className="btn btn-primary btn-block text-btn"
            disabled={!confirmed}
          >
            ถัดไป (ตรวจสอบและส่ง) / Next →
          </button>
        </>
      )}
    </>
  );
};

export default ApplicationStep3;
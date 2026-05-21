import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks';
import { fetchDemoCredentials } from '../store/slices/credentialsSlice';
import { STATUS_STAGES } from '../store/slices/applicationsSlice';
import BottomNav from '../components/BottomNav';
import logoSrc from '../logo.png';

function Dashboard() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { items: credentials } = useAppSelector((state) => state.credentials);
  const applications = useAppSelector((state) => state.applications.items);

  useEffect(() => {
    if (credentials.length === 0) {
      dispatch(fetchDemoCredentials());
    }
  }, [dispatch, credentials.length]);

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20">
      <header className="bg-white border-b border-[#E0E0E0] px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoSrc} alt="GRL" className="w-8 h-8 object-contain rounded-lg" />
            <div>
              <h1 className="text-base font-semibold text-[#333333]">
                Acard Academic
              </h1>
              <p className="text-xs text-[#999999]">present by golden recipe lab</p>
            </div>
          </div>
          <button className="w-8 h-8 rounded-full hover:bg-[#F5F5F5] flex items-center justify-center">
            <i className="fa-solid fa-bell text-[#666666]"></i>
          </button>
        </div>
      </header>

      <div className="px-4 py-6 space-y-6">
        <div className="bg-gradient-to-br from-[#0066CC] to-[#004C99] rounded-xl shadow-lg p-6 text-white">
          <div className="flex gap-4 mb-4">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <i className="fa-solid fa-user text-3xl text-white/80"></i>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold">{user?.name || 'สมชาย สาธิต'}</h2>
              <p className="text-sm text-white/80">ID: 1234567890123</p>
              <div className="flex items-center gap-1 mt-1">
                <i className="fa-solid fa-circle-check text-xs"></i>
                <span className="text-xs">ยืนยันตัวตนแล้ว</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-white/70 text-xs flex items-center gap-1">
                <i className="fa-solid fa-building-columns"></i> สังกัด
              </p>
              <p className="font-medium">คณะวิทยาศาสตร์และเทคโนโลยี</p>
            </div>
            <div>
              <p className="text-white/70 text-xs flex items-center gap-1">
                <i className="fa-solid fa-briefcase"></i> ตำแหน่ง
              </p>
              <p className="font-medium">{user?.position || 'ผู้ช่วยศาสตราจารย์'}</p>
            </div>
            <div>
              <p className="text-white/70 text-xs flex items-center gap-1">
                <i className="fa-solid fa-graduation-cap"></i> ภาควิชา
              </p>
              <p className="font-medium">วิทยาการคอมพิวเตอร์</p>
            </div>
            <div>
              <p className="text-white/70 text-xs flex items-center gap-1">
                <i className="fa-solid fa-calendar"></i> หมดอายุ
              </p>
              <p className="font-medium">15 มี.ค. 2570</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Link
            to="/submit-request"
            className="bg-white rounded-lg p-4 shadow-sm border border-[#E0E0E0] hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#E3F2FD] flex items-center justify-center">
                <i className="fa-solid fa-pen-to-square text-xl text-[#0066CC]"></i>
              </div>
              <div>
                <p className="font-semibold text-[#333333] text-sm">ส่งคำร้องใหม่</p>
              </div>
            </div>
          </Link>

          <Link
            to="/wallet"
            className="bg-white rounded-lg p-4 shadow-sm border border-[#E0E0E0] hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#E3F2FD] flex items-center justify-center">
                <i className="fa-solid fa-folder-open text-xl text-[#0066CC]"></i>
              </div>
              <div>
                <p className="font-semibold text-[#333333] text-sm">กระเป๋าเอกสาร</p>
              </div>
            </div>
          </Link>

          <Link
            to="/applications/history"
            className="bg-white rounded-lg p-4 shadow-sm border border-[#E0E0E0] hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#E3F2FD] flex items-center justify-center">
                <i className="fa-solid fa-circle-check text-xl text-[#0066CC]"></i>
              </div>
              <div>
                <p className="font-semibold text-[#333333] text-sm">ตรวจสอบคำขอ</p>
              </div>
            </div>
          </Link>

          <Link
            to="/profile"
            className="bg-white rounded-lg p-4 shadow-sm border border-[#E0E0E0] hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#E3F2FD] flex items-center justify-center">
                <i className="fa-solid fa-plus text-xl text-[#0066CC]"></i>
              </div>
              <div>
                <p className="font-semibold text-[#333333] text-sm">เพิ่มเติม</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-[#E0E0E0]">
          <h3 className="font-semibold text-[#333333] mb-3">กิจกรรมล่าสุด</h3>
          <div className="space-y-3">
            {applications.filter((a) => a.submittedAt).length > 0 ? (
              applications
                .filter((a) => a.submittedAt)
                .slice(0, 3)
                .map((app) => (
                  <div key={app.id} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0066CC]/10 flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-file-circle-check text-[#0066CC]"></i>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-[#333333]">
                        ส่งใบสมัครตำแหน่ง {app.position.titleTh} ผ่าน OIDC4VP
                      </p>
                      <p className="text-xs text-[#999999]">
                        {app.referenceId} | {
                          app.submittedAt
                            ? (() => {
                                const d = new Date(app.submittedAt);
                                const now = new Date();
                                const diff = Math.floor((now - d) / (1000 * 60));
                                if (diff < 1) return 'เมื่อสักครู่';
                                if (diff < 60) return `${diff} นาทีที่แล้ว`;
                                const hours = Math.floor(diff / 60);
                                if (hours < 24) return `${hours} ชั่วโมงที่แล้ว`;
                                return d.toLocaleDateString('th-TH');
                              })()
                            : ''
                        }
                      </p>
                    </div>
                  </div>
                ))
            ) : (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#00AA00]/10 flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-circle-check text-[#00AA00]"></i>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#333333]">คำร้องของคุณได้รับการอนุมัติแล้ว</p>
                  <p className="text-xs text-[#999999]">2 วันที่แล้ว</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] p-4">
          <h2 className="text-sm font-semibold text-[#333333] mb-3 flex items-center gap-2">
            <i className="fa-solid fa-clipboard text-[#0066CC]"></i>
            ข้อมูลประจำตัวที่ตรวจสอบได้
          </h2>
          <div className="space-y-2">
            {[
              { id: 'VC1', name: 'ข้อมูลส่วนตัว', status: 'verified' },
              { id: 'VC2', name: 'ประวัติการทำงาน', status: 'verified' },
              { id: 'VC3', name: 'ผลงานวิชาการ', status: 'pending' },
            ].map((vc) => (
              <Link
                key={vc.id}
                to="/wallet"
                className="flex items-center justify-between p-3 rounded border border-[#E0E0E0] hover:bg-[#F5F5F5] transition-colors"
              >
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-sm font-medium text-[#333333]">{vc.id}</span>
                  <span className="text-sm text-[#666666]">|</span>
                  <span className="text-sm text-[#666666]">{vc.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      vc.status === 'verified' ? 'bg-[#00AA00]' : 'bg-[#FF9900]'
                    }`}
                  />
                  <span
                    className={`text-xs ${
                      vc.status === 'verified' ? 'text-[#00AA00]' : 'text-[#FF9900]'
                    }`}
                  >
                    {vc.status === 'verified' ? 'ยืนยันแล้ว' : 'รอดำเนินการ'}
                  </span>
                  <i className="fa-solid fa-chevron-right text-[#999999]"></i>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <i className="fa-solid fa-bolt text-[#0066CC]"></i>
            การดำเนินการด่วน
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <Link
              to="/applications"
              className="bg-white rounded-lg p-4 shadow-sm border border-[#E0E0E0] hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#E3F2FD] flex items-center justify-center">
                  <i className="fa-solid fa-file-pen text-xl text-[#0066CC]"></i>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#333333]">สมัครตำแหน่ง</p>
                </div>
              </div>
            </Link>

            <Link
              to="/wallet"
              className="bg-white rounded-lg p-4 shadow-sm border border-[#E0E0E0] hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#E3F2FD] flex items-center justify-center">
                  <i className="fa-solid fa-folder-open text-xl text-[#0066CC]"></i>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#333333]">ดูวุฒิบัตร</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-[#E0E0E0]">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
              <i className="fa-solid fa-file-circle-check text-[#0066CC]"></i>
              สถานะการสมัคร
            </h2>
            {applications.length > 0 && (
              <Link to="/applications/history" className="text-xs text-[#0066CC] hover:underline">
                ดูทั้งหมด
              </Link>
            )}
          </div>

          {applications.length === 0 ? (
            <div className="text-center py-6">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[#F5F5F5] flex items-center justify-center">
                <i className="fa-solid fa-pen-to-square text-xl text-[#999999]"></i>
              </div>
              <p className="text-sm text-[#666666] mb-1">ไม่มีการสมัครที่กำลังดำเนินการ</p>
              <Link
                to="/applications/history"
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#0066CC] text-white text-sm font-medium hover:bg-[#0052A3] transition-colors"
              >
                เริ่มต้นสมัคร
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {applications.slice(0, 3).map((app) => {
                const currentStageIndex = STATUS_STAGES.findIndex((s) => s.key === app.stage);
                const stage = STATUS_STAGES[currentStageIndex] || STATUS_STAGES[0];

                return (
                  <Link
                    key={app.id}
                    to="/applications/history"
                    className="block border border-[#E0E0E0] rounded-lg p-3 hover:bg-[#F5F5F5] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-semibold text-[#333333]">{app.position.titleTh}</p>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                        {stage.label}
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2">
                      <div
                        className="bg-[#0066CC] h-1.5 rounded-full"
                        style={{
                          width: `${((currentStageIndex + 1) / STATUS_STAGES.length) * 100}%`,
                        }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs text-[#999999]">
                      <span>
                        <i className="fa-regular fa-clock mr-1"></i>
                {app.submittedAt
                  ? new Date(app.submittedAt).toLocaleDateString('th-TH')
                  : 'ยังไม่ส่ง'}
                      </span>
                      {app.referenceId && (
                        <span className="font-mono text-[#0066CC]">{app.referenceId}</span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

export default Dashboard;

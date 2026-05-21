import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { STATUS_STAGES } from '../store/slices/applicationsSlice';
import BottomNav from '../components/BottomNav';
import logoSrc from '../logo.png';

const STATUS_COLORS = {
  submitted: 'text-blue-700 bg-blue-100',
  reviewing: 'text-yellow-700 bg-yellow-100',
  approved: 'text-green-700 bg-green-100',
  rejected: 'text-red-700 bg-red-100',
};

const STATUS_LABELS = {
  submitted: 'สําเร็จ',
  reviewing: 'กำลังตรวจสอบ',
  approved: 'อนุมัติ',
  rejected: 'ปฏิเสธ',
};

function ApplicationHistory() {
  const applications = useAppSelector((state) => state.applications.items);

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20">
      <header className="bg-white border-b border-[#E0E0E0] px-4 py-3 sticky top-0 z-10">
        <div className="max-w-[432px] mx-auto flex items-center justify-between">
          <Link to="/dashboard" className="p-1 hover:bg-[#F5F5F5] rounded-full">
            <i className="fa-solid fa-arrow-left text-[#333333]"></i>
          </Link>
          <h1 className="text-lg font-semibold text-[#333333]">ตรวจสอบคำขอ</h1>
          <div className="w-8" />
        </div>
      </header>

      <div className="max-w-[432px] mx-auto px-4 py-6 space-y-4">
        {applications.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-[#E0E0E0] p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F5F5F5] flex items-center justify-center">
              <i className="fa-solid fa-file-circle-check text-3xl text-[#999999]"></i>
            </div>
            <p className="text-[#666666] mb-1">ยังไม่มีคำขอที่ส่ง</p>
            <p className="text-sm text-[#999999] mb-4">เริ่มสมัครตำแหน่งทางวิชาการของคุณ</p>
            <Link
              to="/applications"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0066CC] text-white text-sm font-medium hover:bg-[#0052A3] transition-colors"
            >
              <i className="fa-solid fa-plus"></i>
              สมัครตำแหน่งใหม่
            </Link>
          </div>
        ) : (
          applications.map((app) => {
            const currentStageIndex = STATUS_STAGES.findIndex((s) => s.key === app.stage);
            const stage = STATUS_STAGES[currentStageIndex] || STATUS_STAGES[0];
            const statusBadge = STATUS_COLORS[app.status] || STATUS_COLORS.submitted;
            const statusLabel = STATUS_LABELS[app.status] || 'ส่งแล้ว';

            return (
              <div
                key={app.id}
                className="bg-white rounded-xl shadow-sm border border-[#E0E0E0] overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-[#333333]">{app.position.titleTh}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${statusBadge}`}>
                          {statusLabel}
                        </span>
                      </div>
                      {app.referenceId && (
                        <p className="text-xs text-[#0066CC] font-mono">
                          <i className="fa-solid fa-hashtag mr-1"></i>
                          {app.referenceId}
                        </p>
                      )}
                    </div>
                    {app.holderDid && (
                      <div className="group relative">
                        <i className="fa-solid fa-shield-halved text-[#00AA00] text-lg"></i>
                        <div className="absolute right-0 top-full mt-1 bg-gray-800 text-white text-xs rounded-lg p-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                          {app.holderDid}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs text-[#999999]">
                      <span>{stage.label}</span>
                      <span>{stage.duration}</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="bg-[#0066CC] h-2 rounded-full transition-all"
                        style={{
                          width: `${((currentStageIndex + 1) / STATUS_STAGES.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#999999] pt-1">
                    <span>
                      <i className="fa-regular fa-calendar mr-1"></i>
                      ส่งเมื่อ:{' '}
                      {app.submittedAt
                        ? new Date(app.submittedAt).toLocaleDateString('th-TH', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })
                        : '-'}
                    </span>
                    {app.credentials?.length > 0 && (
                      <span>
                        <i className="fa-solid fa-file-lines mr-1"></i>
                        {app.credentials.length} รายการ
                      </span>
                    )}
                  </div>
                </div>

                <div className="border-t border-[#E0E0E0] bg-[#FAFAFA] px-4 py-3">
                  <div className="flex items-center gap-3">
                    {STATUS_STAGES.map((s, i) => (
                      <div key={s.key} className="flex-1 text-center">
                        <div
                          className={`w-6 h-6 mx-auto rounded-full flex items-center justify-center text-xs mb-1 ${
                            i <= currentStageIndex
                              ? 'bg-[#0066CC] text-white'
                              : 'bg-gray-200 text-gray-400'
                          }`}
                        >
                          {i <= currentStageIndex ? (
                            <i className="fa-solid fa-check"></i>
                          ) : (
                            i + 1
                          )}
                        </div>
                        <p
                          className={`text-[10px] leading-tight ${
                            i <= currentStageIndex ? 'text-[#0066CC] font-medium' : 'text-[#999999]'
                          }`}
                        >
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })
        )}

        {applications.length > 0 && (
          <div className="text-center pt-2">
            <Link
              to="/applications"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0066CC] text-white text-sm font-medium hover:bg-[#0052A3] transition-colors"
            >
              <i className="fa-solid fa-plus"></i>
              สมัครตำแหน่งใหม่
            </Link>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}

export default ApplicationHistory;

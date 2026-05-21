import BottomNav from '../components/BottomNav';
import { ArrowLeft, GraduationCap, FileText, BarChart, List } from 'lucide-react';
import { Link } from 'react-router-dom';

function SubmitRequest() {
  const requestTypes = [
    {
      id: 'promotion',
      icon: GraduationCap,
      title: 'คำขอเลื่อนตำแหน่ง',
      description: 'Request new position (ผช. → รศ. → ศ.)',
      vcs: ['vc1', 'vc2', 'vc3'],
    },
    {
      id: 'teaching',
      icon: FileText,
      title: 'ประเมินการสอน',
      description: 'Request teaching review',
      vcs: ['vc2'],
    },
    {
      id: 'research',
      icon: BarChart,
      title: 'ตรวจสอบงานวิชาการ',
      description: 'Request research review',
      vcs: ['vc3'],
    },
    {
      id: 'other',
      icon: List,
      title: 'คำร้องอื่น ๆ',
      description: 'Other official requests',
      vcs: [],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20">
      <header className="bg-white border-b border-[#E0E0E0] px-4 py-3 sticky top-0 z-10">
        <div className="max-w-[432px] mx-auto flex items-center gap-3">
          <Link to="/" className="p-1 hover:bg-[#F5F5F5] rounded-full">
            <ArrowLeft className="w-5 h-5 text-[#333333]" />
          </Link>
          <h1 className="text-lg font-semibold text-[#333333]">ส่งคำร้องใหม่</h1>
        </div>
      </header>

      <div className="max-w-[432px] mx-auto px-4 py-6 space-y-4">
        <p className="text-sm text-[#666666] mb-4">เลือกประเภทคำร้องที่ต้องการยื่น</p>

        {requestTypes.map((type) => {
          const Icon = type.icon;
          return (
            <Link
              key={type.id}
              to={type.vcs.length > 0 ? `/vc/${type.vcs[0]}` : '#'}
              className="block bg-white rounded-lg p-4 shadow-sm border border-[#E0E0E0] hover:shadow-md hover:border-[#0066CC] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E3F2FD] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-[#0066CC]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#333333] mb-1">{type.title}</h3>
                  <p className="text-sm text-[#666666]">{type.description}</p>
                  {type.vcs.length > 0 && (
                    <div className="flex gap-2 mt-2">
                      {type.vcs.map((vc) => (
                        <span
                          key={vc}
                          className="px-2 py-0.5 text-xs bg-[#E3F2FD] text-[#0066CC] rounded"
                        >
                          {vc.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="text-[#999999]">
                  <span className="text-lg">›</span>
                </div>
              </div>
            </Link>
          );
        })}

        <div className="bg-[#E3F2FD] border border-[#0066CC]/20 rounded-lg p-4 mt-6">
          <div className="flex gap-3">
            <span className="text-lg">ℹ</span>
            <div className="flex-1">
              <p className="text-sm text-[#333333] font-medium mb-1">เตรียมเอกสารที่จำเป็น</p>
              <p className="text-sm text-[#666666]">
                กรุณาเตรียม Verifiable Credentials (VC) ที่จำเป็นสำหรับคำร้องแต่ละประเภทก่อนการยื่น
              </p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

export default SubmitRequest;

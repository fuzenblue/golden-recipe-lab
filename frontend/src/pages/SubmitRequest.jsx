import BottomNav from '../components/BottomNav';
import { Link } from 'react-router-dom';

function SubmitRequest() {
  const requestTypes = [
    {
      id: 'promotion',
      icon: 'fa-graduation-cap',
      title: 'คำขอเลื่อนตำแหน่ง',
      description: 'คำขอเลื่อนตำแหน่งทางวิชาการ (ผช. → รศ. → ศ.)',
      vcs: ['vc1', 'vc2', 'vc3'],
    },
    {
      id: 'teaching',
      icon: 'fa-file-pen',
      title: 'ตรวจสอบประวัติการจ้างงานและภาระงาน',
      vcs: ['vc2'],
    },
    {
      id: 'research',
      icon: 'fa-chart-simple',
      title: 'ตรวจสอบงานวิชาการ',
      description: 'คำขอตรวจสอบผลงานวิชาการ',
      vcs: ['vc3'],
    },
    {
      id: 'other',
      icon: 'fa-list',
      title: 'คำร้องอื่น ๆ',
      description: 'คำร้องอื่น ๆ ตามที่กำหนด',
      vcs: [],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20">
      <header className="bg-white border-b border-[#E0E0E0] px-4 py-3 sticky top-0 z-10">
        <div className="max-w-[432px] mx-auto flex items-center gap-3">
          <Link to="/" className="p-1 hover:bg-[#F5F5F5] rounded-full">
            <i className="fa-solid fa-arrow-left text-[#333333]"></i>
          </Link>
          <h1 className="text-lg font-semibold text-[#333333]">ส่งคำร้องใหม่</h1>
        </div>
      </header>

      <div className="max-w-[432px] mx-auto px-4 py-6 space-y-4">
        <p className="text-sm text-[#666666] mb-4">เลือกประเภทคำร้องที่ต้องการยื่น</p>

        {requestTypes.map((type) => {
          return (
            <Link
              key={type.id}
              to={type.id === 'promotion' ? '/applications' : type.vcs.length > 0 ? `/vc/${type.vcs[0]}` : '#'}
              className="block bg-white rounded-lg p-4 shadow-sm border border-[#E0E0E0] hover:shadow-md hover:border-[#0066CC] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E3F2FD] flex items-center justify-center flex-shrink-0">
                  <i className={"fa-solid " + type.icon + " text-xl text-[#0066CC]"}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[#333333]">{type.title}</h3>

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
            <i className="fa-solid fa-circle-info text-[#0066CC] mt-0.5"></i>
            <div className="flex-1">
              <p className="text-sm text-[#333333] font-medium mb-1">เตรียมเอกสารที่จำเป็น</p>
              <p className="text-sm text-[#666666]">
                กรุณาเตรียมเอกสารสำคัญ (VC) ที่จำเป็นสำหรับคำร้องแต่ละประเภทก่อนการยื่น
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

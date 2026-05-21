import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import Button from '../components/ui/Button';
import { Clipboard, FileX } from 'lucide-react';

function Applications() {
  const navigate = useNavigate();
  const [selectedPosition, setSelectedPosition] = useState(null);

  const positions = [
    {
      id: 'assistant',
      title: 'ผู้ช่วยศาสตราจารย์ (Assistant Professor)',
      requirements: 'คุณสมบัติ: ปริญญาเอก + ผลงาน 2 ชิ้น',
    },
    {
      id: 'associate',
      title: 'รองศาสตราจารย์ (Associate Professor)',
      requirements: 'คุณสมบัติ: ปริญญาเอก + ผลงาน 5 ชิ้น + ประสบการณ์',
    },
    {
      id: 'professor',
      title: 'ศาสตราจารย์ (Professor)',
      requirements: 'คุณสมบัติ: ปริญญาเอก + ผลงาน 10 ชิ้น + ประสบการณ์',
    },
  ];

  const handleStartApplication = () => {
    if (selectedPosition) {
      navigate(`/application/step1?position=${selectedPosition}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20">
      <header className="bg-white border-b border-[#E0E0E0] px-4 py-3">
        <div className="max-w-[432px] mx-auto">
          <h1 className="text-lg font-semibold text-[#333333]">
            ประวัติการสมัคร / Applications
          </h1>
        </div>
      </header>

      <div className="max-w-[432px] mx-auto px-4 py-6 space-y-6">
        <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] p-4">
          <div className="mb-4">
            <h2 className="text-base font-semibold text-[#333333] flex items-center gap-2">
              <Clipboard className="w-5 h-5" />
              เลือกตำแหน่งที่ต้องการสมัคร
            </h2>
            <p className="text-sm text-[#999999]">Select Position to Apply</p>
          </div>

          <div className="space-y-3">
            {positions.map((position) => (
              <button
                key={position.id}
                onClick={() => setSelectedPosition(position.id)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  selectedPosition === position.id
                    ? 'border-[#0066CC] bg-[#E3F2FD]'
                    : 'border-[#E0E0E0] bg-white hover:border-[#0066CC]/50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center ${
                      selectedPosition === position.id
                        ? 'border-[#0066CC] bg-[#0066CC]'
                        : 'border-[#E0E0E0]'
                    }`}
                  >
                    {selectedPosition === position.id && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-[#333333] mb-1">
                      {position.title}
                    </p>
                    <p className="text-sm text-[#666666]">
                      {position.requirements}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <Button
          onClick={handleStartApplication}
          disabled={!selectedPosition}
          className="w-full bg-[#0066CC] hover:bg-[#0052A3] text-white disabled:bg-[#E0E0E0] disabled:text-[#999999] disabled:cursor-not-allowed"
        >
          เริ่มการสมัคร / Start Application
        </Button>

        <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] p-6">
          <h2 className="text-base font-semibold text-[#333333] mb-3 flex items-center gap-2">
            <Clipboard className="w-5 h-5" />
            ประวัติการสมัคร / Application History
          </h2>

          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[#F5F5F5] flex items-center justify-center">
              <FileX className="w-8 h-8 text-[#999999]" />
            </div>
            <p className="text-sm text-[#999999]">ไม่มีการสมัครงานที่ผ่านมา</p>
            <p className="text-xs text-[#999999]">No previous applications</p>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

export default Applications;

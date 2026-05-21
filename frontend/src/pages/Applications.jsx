import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { useAppSelector } from '../hooks';
import { getEligiblePositionIds, ACADEMIC_LEVEL_LABELS, AcademicLevel } from '../constants/academicLevels';

function Applications() {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);
  const userLevel = user?.academicLevel ?? AcademicLevel.NONE;
  const eligibleIds = getEligiblePositionIds(userLevel);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const positions = [
    {
      id: 'ast_prof',
      title: 'ผู้ช่วยศาสตราจารย์ (ผศ.)',
      requirements: 'วุฒิปริญญาโทขึ้นไป หรือมีผลงานทางวิชาการตามเกณฑ์ที่กำหนด',
    },
    {
      id: 'assoc_prof',
      title: 'รองศาสตราจารย์ (รศ.)',
      requirements: 'ดำรงตำแหน่งผู้ช่วยศาสตราจารย์มาแล้วไม่น้อยกว่า 2 ปี',
    },
    {
      id: 'prof',
      title: 'ศาสตราจารย์ (ศ.)',
      requirements: 'ดำรงตำแหน่งรองศาสตราจารย์มาแล้วไม่น้อยกว่า 2 ปี',
    },
  ];

  const handleStartApplication = () => {
    if (!selectedPosition) return;
    navigate('/applications/step1', { state: { position: selectedPosition } });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20">
      <header className="bg-white border-b border-[#E0E0E0] px-4 py-3 sticky top-0 z-10">
        <div className="max-w-[432px] mx-auto flex items-center gap-3">
          <Link to="/" className="p-1 hover:bg-[#F5F5F5] rounded-full">
            <i className="fa-solid fa-arrow-left text-[#333333]"></i>
          </Link>
          <h1 className="text-lg font-semibold text-[#333333]">สมัครตำแหน่งทางวิชาการ</h1>
        </div>
      </header>

      <div className="max-w-[432px] mx-auto px-4 py-6 space-y-6">
        <div className="bg-[#E3F2FD] border border-[#0066CC]/30 rounded-lg p-3 text-sm text-[#333333]">
          ตำแหน่งปัจจุบันของคุณ: <strong>{ACADEMIC_LEVEL_LABELS[userLevel]}</strong>
          {eligibleIds.length === 0 ? (
            <span className="text-[#CC0000] ml-1">— คุณอยู่ในตำแหน่งสูงสุดแล้ว</span>
          ) : (
            <span className="ml-1">— สามารถสมัครตำแหน่งที่เปิดให้คุณได้</span>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] p-4">
          <div className="mb-4">
            <h2 className="text-base font-semibold text-[#333333] flex items-center gap-2">
              <i className="fa-solid fa-clipboard text-[#0066CC]"></i>
              เลือกตำแหน่งที่ต้องการสมัคร
            </h2>
          </div>

          <div className="space-y-3">
            {positions.map((position) => {
              const isEligible = eligibleIds.includes(position.id);
              const isSelected = selectedPosition === position.id;

              return (
                <button
                  key={position.id}
                  onClick={() => {
                    if (!isEligible) return;
                    setSelectedPosition(isSelected ? null : position.id);
                  }}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    !isEligible
                      ? 'border-[#E0E0E0] bg-[#F5F5F5] opacity-60 cursor-not-allowed'
                      : isSelected
                        ? 'border-[#0066CC] bg-[#E3F2FD]'
                        : 'border-[#E0E0E0] bg-white hover:border-[#0066CC]/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center ${
                        !isEligible
                          ? 'border-[#CCCCCC] bg-[#F0F0F0]'
                          : isSelected
                            ? 'border-[#0066CC] bg-[#0066CC]'
                            : 'border-[#E0E0E0]'
                      }`}
                    >
                      {isSelected && isEligible && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={`font-semibold mb-1 ${isEligible ? 'text-[#333333]' : 'text-[#999999]'}`}>
                        {position.title}

                      </p>
                      <p className="text-sm text-[#666666]">
                        {position.requirements}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={handleStartApplication}
          disabled={!selectedPosition}
          className="w-full py-3 rounded-lg font-medium text-base transition-colors bg-[#0066CC] hover:bg-[#0052A3] text-white disabled:bg-[#E0E0E0] disabled:text-[#999999] disabled:cursor-not-allowed"
        >
          เริ่มการสมัคร
        </button>
      </div>

      <BottomNav />
    </div>
  );
}

export default Applications;

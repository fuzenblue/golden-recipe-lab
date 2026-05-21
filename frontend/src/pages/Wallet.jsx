import { useState } from 'react';
import Button from '../components/ui/Button';
import BottomNav from '../components/BottomNav';
import WalletVC1 from './wallet/WalletVC1';
import WalletVC2 from './wallet/WalletVC2';
import WalletVC3 from './wallet/WalletVC3';
import userMock from '../data/user-mock.json';

function Wallet() {
  const options = [
    { id: 'vc1', label: 'ข้อมูลส่วนบุคคลและการศึกษา' },
    { id: 'vc2', label: 'ตรวจสอบประวัติการจ้างงานและภาระงาน' },
    ...userMock.vc3.map((item, index) => ({
      id: `vc3-${index}`,
      label: item.research_works_title,
    })),
  ];

  const [selectedId, setSelectedId] = useState('vc1');
  const [isOpen, setIsOpen] = useState(false);

  const selectedLabel = options.find((o) => o.id === selectedId)?.label || options[0].label;

  const renderContent = () => {
    if (selectedId === 'vc1') return <WalletVC1 />;
    if (selectedId === 'vc2') return <WalletVC2 />;
    if (selectedId.startsWith('vc3-')) {
      const index = parseInt(selectedId.split('-')[1], 10);
      return <WalletVC3 initialIndex={index} />;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20">
      <header className="bg-white border-b border-[#E0E0E0] px-4 py-3 sticky top-0 z-10">
        <div className="max-w-[432px] mx-auto flex items-center justify-between">
          <h1 className="text-lg font-semibold text-[#333333]">
            กระเป๋าเอกสาร
          </h1>
          <span className="text-xs text-[#999999]">{options.length} รายการ</span>
        </div>
      </header>

      <div className="max-w-[432px] mx-auto px-4 py-6">
        <div className="relative mb-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between gap-2 bg-primary text-white border border-primary rounded-lg px-4 py-3 text-left transition-colors"
          >
            <div className="flex items-center gap-2 min-w-0">
              <i className="fa-solid fa-file text-white flex-shrink-0"></i>
              <span className="text-sm font-medium text-white truncate">
                {selectedLabel}
              </span>
            </div>
            <i className={`fa-solid fa-chevron-down text-white/70 text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
          </button>

          {isOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E0E0E0] rounded-lg shadow-lg z-20 max-h-64 overflow-y-auto">
                {options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setSelectedId(opt.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 px-4 py-3 text-left text-sm transition-colors hover:bg-primary/10 ${
                      opt.id === selectedId ? 'bg-primary text-white font-medium' : 'text-[#333333]'
                    }`}
                  >
                    <i className={`fa-solid ${opt.id.startsWith('vc3-') ? 'fa-file-lines text-xs' : 'fa-file'} ${opt.id === selectedId ? 'text-white' : 'text-[#999999]'}`}></i>
                    {opt.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="space-y-4">
          {renderContent()}
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1 border-[#0066CC] text-[#0066CC] hover:bg-[#E3F2FD]">
              <i className="fa-solid fa-share-nodes mr-2"></i>
              แชร์
            </Button>
            <Button variant="outline" className="flex-1 border-[#0066CC] text-[#0066CC] hover:bg-[#E3F2FD]">
              <i className="fa-solid fa-download mr-2"></i>
              ดาวน์โหลด
            </Button>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

export default Wallet;

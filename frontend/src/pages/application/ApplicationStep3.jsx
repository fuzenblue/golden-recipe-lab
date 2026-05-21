import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Checkbox from '../../components/ui/Checkbox';
import { RadioGroup, RadioGroupItem } from '../../components/ui/RadioGroup';
import Label from '../../components/ui/Label';
import Textarea from '../../components/ui/Textarea';
import userMock from '../../data/user-mock.json';

function ApplicationStep3() {
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState(false);
  const [hasVC3] = useState(true);
  const [selectedPublisher, setSelectedPublisher] = useState('');
  const [researchTopic, setResearchTopic] = useState('');
  const [showModal, setShowModal] = useState(false);
  const progress = 75;
  const vc3List = userMock.vc3;

  const handleNext = () => {
    if (hasVC3 && confirmed) {
      navigate('/applications/verify');
    }
  };

  const handleRequestVC3 = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <header className="bg-white border-b border-[#E0E0E0] px-4 py-3">
        <div className="max-w-[432px] mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#0066CC] hover:text-[#0052A3]"
          >
            <i className="fa-solid fa-arrow-left"></i>
            <span className="text-sm">กลับ</span>
          </button>
          <div className="text-sm text-[#999999]">{progress}%</div>
        </div>
      </header>

      <div className="max-w-[432px] mx-auto px-4 py-6 space-y-6">
        <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-base font-semibold text-[#333333]">ขั้นตอนที่ 3/4</h2>
            <span className="text-sm text-[#999999]">ผลงานวิชาการ</span>
          </div>
          <div className="w-full bg-[#E0E0E0] rounded-full h-2">
            <div
              className="bg-[#0066CC] h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {hasVC3 ? (
          <>
            <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-[#333333] flex items-center gap-2">
                  <i className="fa-solid fa-chart-simple"></i>
                  สรุปผลงาน
                </h3>
                <span className="text-sm text-[#00AA00] font-medium">{vc3List.length} ผลงาน (ครบ)</span>
              </div>
              <p className="text-xs text-[#999999] mb-4">ต้องมีอยางนอย 5 ผลงาน</p>

              <div className="space-y-3">
                {vc3List.map((item, index) => (
                  <div
                    key={index}
                    className="p-3 bg-[#F5F5F5] rounded border border-[#E0E0E0]"
                  >
                    <div className="flex items-start justify-between mb-1">
                      <p className="text-sm font-medium text-[#333333] flex-1 flex items-start gap-2">
                        <i className="fa-solid fa-file-lines mt-0.5"></i>
                        {index + 1}. &ldquo;{item.research_works_title}&rdquo;
                      </p>
                      <div className="w-2 h-2 rounded-full bg-[#00AA00] flex-shrink-0 mt-1.5" />
                    </div>
                    <p className="text-xs text-[#666666]">วารสาร: {item.journal_publication_journal_name}</p>
                    {item.journal_publication_impact_factor && (
                      <p className="text-xs text-[#999999]">Impact Factor: {item.journal_publication_impact_factor}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-[#E0E0E0]">
              <Checkbox
                checked={confirmed}
                onCheckedChange={(checked) => setConfirmed(checked)}
                className="mt-1"
              />
              <label className="text-sm text-[#333333] flex-1 cursor-pointer" onClick={() => setConfirmed(!confirmed)}>
                <span className="block">ข้าพเจ้ายืนยันว่าข้อมูลข้างต้นถูกต้อง</span>
              </label>
            </div>

            <Button
              onClick={handleNext}
              disabled={!confirmed}
              className="w-full bg-[#0066CC] hover:bg-[#0052A3] text-white disabled:bg-[#E0E0E0] disabled:text-[#999999] disabled:cursor-not-allowed"
            >
              ถัดไป
            </Button>
          </>
        ) : (
          <>
            <div className="bg-[#FF9900]/10 border border-[#FF9900] rounded-lg p-4">
              <div className="flex items-start gap-2 mb-3">
                <i className="fa-solid fa-triangle-exclamation text-2xl text-[#FF9900] flex-shrink-0"></i>
                <div>
                  <p className="font-semibold text-[#FF9900]">คุณยังไม่มี VC3</p>
                  <p className="text-xs text-[#999999] mt-1">กรุณาขอ VC3 จากสํานักพิมพเพื่อดำเนินการต่อ</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] p-4 space-y-4">
              <h3 className="font-semibold text-[#333333] flex items-center gap-2">
                <i className="fa-solid fa-file-lines"></i>
                ขอ VC3 ใหม่
              </h3>

              <div>
                <Label className="text-sm font-medium text-[#333333] mb-2 flex items-center gap-2">
                  <i className="fa-solid fa-building-columns"></i>
                  เลือกสํานักพิมพ
                </Label>
                <RadioGroup
                  value={selectedPublisher}
                  onValueChange={setSelectedPublisher}
                >
                  <div className="space-y-2">
                    {['Scopus', 'TCI (Thai-Journal Citation)', 'SRI'].map(
                      (publisher) => (
                        <RadioGroupItem key={publisher} value={publisher} id={publisher}>
                          <span className="text-sm">{publisher}</span>
                        </RadioGroupItem>
                      )
                    )}
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-sm font-medium text-[#333333] mb-2 flex items-center gap-2">
                  <i className="fa-solid fa-pen"></i>
                  หัวขอวิจัย
                </Label>
                <Textarea
                  value={researchTopic}
                  onChange={(e) => setResearchTopic(e.target.value)}
                  placeholder="การประยุกตใช AI ในการศึกษา"
                  className="w-full"
                  rows={3}
                />
              </div>

              <div className="bg-[#E3F2FD] border border-[#0066CC]/20 rounded p-3">
                <p className="text-xs text-[#666666] flex items-start gap-2">
                  <i className="fa-solid fa-link mt-0.5"></i>
                  VC1 จะถูกแนบโดยอัตโนมัติเพื่อยืนยันตัวตน
                </p>
              </div>

              <Button
                onClick={handleRequestVC3}
                disabled={!selectedPublisher || !researchTopic}
                className="w-full bg-[#0066CC] hover:bg-[#0052A3] text-white disabled:bg-[#E0E0E0] disabled:text-[#999999] disabled:cursor-not-allowed"
              >
                <i className="fa-solid fa-file-circle-plus mr-2"></i>
                ขอ VC3
              </Button>
            </div>
          </>
        )}

      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl shadow-xl p-6 w-full max-w-sm mx-auto text-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-[#00AA00]/10 flex items-center justify-center">
              <i className="fa-solid fa-check text-3xl text-[#00AA00]"></i>
            </div>
            <h2 className="text-lg font-bold text-[#333333]">ส่งคำขอ VC3 สำเร็จ</h2>
            <p className="text-sm text-[#666666]">
              คำขอ VC3 ของคุณถูกส่งไปยังสํานักพิมพเรียบร้อยแล้ว
            </p>
            <button
              onClick={closeModal}
              className="w-full px-4 py-3 bg-[#0066CC] text-white rounded-lg font-semibold hover:bg-[#0052A3] transition"
            >
              รับทราบ
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default ApplicationStep3;

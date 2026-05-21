import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { ArrowLeft, Send, Clipboard, FileText, Building2, Target } from 'lucide-react';
import Button from '../../components/ui/Button';
import Checkbox from '../../components/ui/Checkbox';

function ApplicationVerify() {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);
  const [confirmed, setConfirmed] = useState(false);
  const progress = 100;

  const handleSubmit = () => {
    if (confirmed) {
      alert('ใบสมัครถูกส่งเรียบร้อยแล้ว!\nApplication submitted successfully!');
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <header className="bg-white border-b border-[#E0E0E0] px-4 py-3">
        <div className="max-w-[432px] mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#0066CC] hover:text-[#0052A3]"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">กลับ / Back</span>
          </button>
          <div className="text-sm text-[#00AA00] font-medium">{progress}%</div>
        </div>
      </header>

      <div className="max-w-[432px] mx-auto px-4 py-6 space-y-6">
        <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-base font-semibold text-[#333333]">
              ตรวจสอบและยืนยัน / Review & Confirm
            </h2>
            <span className="text-sm text-[#00AA00] font-medium">✓ พร้อมส่ง</span>
          </div>
          <div className="w-full bg-[#00AA00]/20 rounded-full h-2">
            <div className="bg-[#00AA00] h-2 rounded-full w-full" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] p-4">
          <h3 className="font-semibold text-[#333333] mb-3 flex items-center gap-2">
            <Clipboard className="w-5 h-5" />
            สรุปคำขอ / Application Summary
          </h3>

          <div className="bg-[#0066CC]/5 border border-[#0066CC]/20 rounded-lg p-3 mb-4">
            <p className="text-xs text-[#999999] mb-1 flex items-center gap-1">
              <Target className="w-3 h-3" />
              ตำแหน่งที่สมัคร
            </p>
            <p className="text-sm font-semibold text-[#0066CC]">ผู้ช่วยศาสตราจารย์</p>
            <p className="text-xs text-[#999999]">Assistant Professor</p>
          </div>

          <div className="space-y-3">
            <div className="border border-[#E0E0E0] rounded-lg p-3">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm font-semibold text-[#333333]">VC1: ข้อมูลส่วนตัว</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#00AA00]" />
                  <span className="text-xs text-[#00AA00]">verified</span>
                </div>
              </div>
              <p className="text-xs text-[#666666] pl-7">ดร.สมชาย ใจดี | ปริญญาเอก | ม.จุฬาฯ</p>
            </div>

            <div className="border border-[#E0E0E0] rounded-lg p-3">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm font-semibold text-[#333333]">VC2: ประวัติการทำงาน</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#00AA00]" />
                  <span className="text-xs text-[#00AA00]">verified</span>
                </div>
              </div>
              <p className="text-xs text-[#666666] pl-7">ผศ. | 10 ปี | คณะวิทยาศาสตร์ | เงินเดือน 65,000</p>
            </div>

            <div className="border border-[#E0E0E0] rounded-lg p-3">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm font-semibold text-[#333333]">VC3: ผลงานวิชาการ</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#00AA00]" />
                  <span className="text-xs text-[#00AA00]">verified</span>
                </div>
              </div>
              <p className="text-xs text-[#666666] pl-7">5 ผลงาน | Scopus, IEEE, Springer</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] p-4">
          <div className="flex items-start gap-2">
            <Building2 className="w-6 h-6 text-[#0066CC]" />
            <div>
              <p className="text-sm font-semibold text-[#333333]">ผู้ตรวจสอบ / Verifier</p>
              <p className="text-sm text-[#666666]">
                {user?.institution || 'มหาวิทยาลัยศรีนครินทรวิโรฒ'}
              </p>
              <p className="text-xs text-[#999999]">Srinakharinwirot University</p>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-[#E0E0E0]">
          <Checkbox
            checked={confirmed}
            onCheckedChange={(checked) => setConfirmed(checked)}
            className="mt-1"
          />
          <label className="text-sm text-[#333333] flex-1 cursor-pointer" onClick={() => setConfirmed(!confirmed)}>
            <span className="block font-medium">
              ข้าพเจ้ายืนยันให้ส่งข้อมูลนี้เป็น Verifiable Presentation (VP) ไปยังผู้ตรวจสอบ
            </span>
            <span className="text-xs text-[#999999]">
              I confirm to submit this data as Verifiable Presentation (VP) to the verifier
            </span>
          </label>
        </div>

        <Button
          onClick={handleSubmit}
          disabled={!confirmed}
          className="w-full bg-[#00AA00] hover:bg-[#008800] text-white disabled:bg-[#E0E0E0] disabled:text-[#999999] disabled:cursor-not-allowed h-12 text-base font-semibold"
        >
          <Send className="w-5 h-5 mr-2" />
          ส่งใบสมัคร / Submit Application
        </Button>
      </div>
    </div>
  );
}

export default ApplicationVerify;

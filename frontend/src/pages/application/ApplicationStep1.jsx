import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Edit, User, GraduationCap, Phone, AlertTriangle } from 'lucide-react';
import Button from '../../components/ui/Button';
import Checkbox from '../../components/ui/Checkbox';

function ApplicationStep1() {
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState(false);
  const progress = 25;

  const handleNext = () => {
    if (confirmed) {
      navigate('/application/step2');
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
          <div className="text-sm text-[#999999]">{progress}%</div>
        </div>
      </header>

      <div className="max-w-[432px] mx-auto px-4 py-6 space-y-6">
        <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-base font-semibold text-[#333333]">
              ขั้นตอนที่ 1/4
            </h2>
            <span className="text-sm text-[#999999]">VC1: ข้อมูลส่วนตัว</span>
          </div>
          <div className="w-full bg-[#E0E0E0] rounded-full h-2">
            <div
              className="bg-[#0066CC] h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0]">
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#E0E0E0]">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-[#666666]" />
              <h3 className="font-semibold text-[#333333]">ข้อมูลส่วนตัว</h3>
            </div>
            <button className="flex items-center gap-1 text-sm text-[#0066CC] hover:underline">
              <Edit className="w-4 h-4" />
              แก้ไข
            </button>
          </div>

          <div className="p-4 space-y-4">
            <div>
              <p className="text-xs text-[#999999] mb-2">ชื่อ-นามสกุล</p>
              <p className="text-sm text-[#333333]">ดร.สมชาย ใจดี</p>
            </div>
            <div>
              <p className="text-xs text-[#999999] mb-2">วันเกิด</p>
              <p className="text-sm text-[#333333]">15 มีนาคม 2528</p>
            </div>
            <div>
              <p className="text-xs text-[#999999] mb-2">รหัสประจำตัวประชาชน</p>
              <p className="text-sm text-[#333333]">1-2345-67890-12-3</p>
            </div>

            <div className="h-px bg-[#E0E0E0]" />

            <div>
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="w-5 h-5 text-[#666666]" />
                <p className="text-sm font-semibold text-[#333333]">การศึกษา</p>
              </div>
              <div className="pl-7 space-y-1">
                <p className="text-sm text-[#333333]">
                  <span className="text-[#999999]">ปริญญา:</span> ดุษฎีบัณฑิต (Ph.D.)
                </p>
                <p className="text-sm text-[#333333]">
                  <span className="text-[#999999]">สาขา:</span> วิทยาการคอมพิวเตอร์
                </p>
                <p className="text-sm text-[#333333]">
                  <span className="text-[#999999]">มหาวิทยาลัย:</span> จุฬาลงกรณ์มหาวิทยาลัย
                </p>
                <p className="text-sm text-[#333333]">
                  <span className="text-[#999999]">ปีที่จบ:</span> 2556
                </p>
              </div>
            </div>

            <div className="h-px bg-[#E0E0E0]" />

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-5 h-5 text-[#666666]" />
                <p className="text-sm font-semibold text-[#333333]">ติดต่อ</p>
              </div>
              <div className="pl-7 space-y-1">
                <p className="text-sm text-[#333333]">
                  <span className="text-[#999999]">อีเมล:</span> somchai@swu.ac.th
                </p>
                <p className="text-sm text-[#333333]">
                  <span className="text-[#999999]">โทรศัพท์:</span> 081-234-5678
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FF9900]/10 border border-[#FF9900] rounded-lg p-3">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 text-[#FF9900] flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-[#FF9900]">แจ้งเตือน</p>
              <p className="text-xs text-[#666666]">หากแก้ไขข้อมูล จะต้องผ่านการยืนยันจากมหาวิทยาลัย</p>
              <p className="text-xs text-[#999999]">Notice: Editing requires university re-verification</p>
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
            <span className="block">ข้าพเจ้ายืนยันว่าข้อมูลข้างต้นถูกต้อง</span>
            <span className="text-xs text-[#999999]">I confirm the above information is correct</span>
          </label>
        </div>

        <Button
          onClick={handleNext}
          disabled={!confirmed}
          className="w-full bg-[#0066CC] hover:bg-[#0052A3] text-white disabled:bg-[#E0E0E0] disabled:text-[#999999] disabled:cursor-not-allowed"
        >
          ถัดไป / Next Step →
        </Button>
      </div>
    </div>
  );
}

export default ApplicationStep1;

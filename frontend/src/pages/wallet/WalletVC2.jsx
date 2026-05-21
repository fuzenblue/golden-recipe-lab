import { Building2, Briefcase, Calendar, BookOpen, Users, Beaker } from 'lucide-react';

function WalletVC2() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] overflow-hidden">
      <div className="bg-[#0066CC]/5 px-4 py-3 border-b border-[#E0E0E0]">
        <div className="flex items-center gap-2 text-sm">
          <Building2 className="w-5 h-5 text-[#0066CC]" />
          <div>
            <p className="font-semibold text-[#0066CC]">ออกโดย: มหาวิทยาลัยศรีนครินทรวิโรฒ</p>
            <p className="text-xs text-[#999999]">Issued by: Srinakharinwirot University</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            สังกัด
          </h4>
          <div className="pl-6 space-y-2">
            <div>
              <p className="text-xs text-[#999999]">มหาวิทยาลัย</p>
              <p className="text-sm text-[#333333]">มหาวิทยาลัยศรีนครินทรวิโรฒ</p>
            </div>
            <div>
              <p className="text-xs text-[#999999]">คณะ</p>
              <p className="text-sm text-[#333333]">คณะวิทยาศาสตร์</p>
            </div>
            <div>
              <p className="text-xs text-[#999999]">สาขา</p>
              <p className="text-sm text-[#333333]">วิทยาการคอมพิวเตอร์</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#E0E0E0]" />

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            ปัจจุบันดำรงตำแหน่ง
          </h4>
          <div className="pl-6 space-y-2">
            <div>
              <p className="text-xs text-[#999999]">ตำแหน่ง</p>
              <p className="text-sm text-[#333333]">ผู้ช่วยศาสตราจารย์</p>
            </div>
            <div>
              <p className="text-xs text-[#999999]">ระดับ</p>
              <p className="text-sm text-[#333333]">8</p>
            </div>
            <div>
              <p className="text-xs text-[#999999]">ขั้น</p>
              <p className="text-sm text-[#333333]">3</p>
            </div>
            <div>
              <p className="text-xs text-[#999999]">เงินเดือน</p>
              <p className="text-sm text-[#333333]">65,000 บาท</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#E0E0E0]" />

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            ประวัติการแต่งตั้ง
          </h4>
          <div className="pl-6 space-y-3">
            <div className="bg-[#F5F5F5] rounded p-3">
              <p className="text-xs font-semibold text-[#0066CC] mb-1">อาจารย์</p>
              <p className="text-xs text-[#999999]">เมื่อวันที่: 1 มิถุนายน 2559</p>
            </div>
            <div className="bg-[#F5F5F5] rounded p-3">
              <p className="text-xs font-semibold text-[#0066CC] mb-1">ผู้ช่วยศาสตราจารย์</p>
              <p className="text-xs text-[#999999]">ในสาขาวิชา: วิทยาการคอมพิวเตอร์</p>
              <p className="text-xs text-[#999999]">เมื่อวันที่: 15 มีนาคม 2562</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#E0E0E0]" />

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[#333333]">อายุราชการ</h4>
          <div className="pl-6">
            <p className="text-sm text-[#333333]">10 ปี 11 เดือน</p>
          </div>
        </div>

        <div className="h-px bg-[#E0E0E0]" />

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            งานสอน - บรรยาย และปฏิบัติการ
          </h4>
          <div className="pl-6 space-y-3">
            <div className="bg-[#F5F5F5] rounded p-3 space-y-1">
              <p className="text-xs font-medium text-[#333333]">CS101 - Introduction to Computer Science</p>
              <p className="text-xs text-[#999999]">ระดับ/หลักสูตร: ปริญญาตรี</p>
              <p className="text-xs text-[#999999]">หน่วยกิต: 3 (ทฤษฎี 3, ปฏิบัติ 0)</p>
            </div>
            <div className="bg-[#F5F5F5] rounded p-3 space-y-1">
              <p className="text-xs font-medium text-[#333333]">CS201 - Data Structures</p>
              <p className="text-xs text-[#999999]">ระดับ/หลักสูตร: ปริญญาตรี</p>
              <p className="text-xs text-[#999999]">หน่วยกิต: 3 (ทฤษฎี 2, ปฏิบัติ 1)</p>
            </div>
            <div className="bg-[#F5F5F5] rounded p-3 space-y-1">
              <p className="text-xs font-medium text-[#333333]">CS301 - Algorithms</p>
              <p className="text-xs text-[#999999]">ระดับ/หลักสูตร: ปริญญาตรี</p>
              <p className="text-xs text-[#999999]">หน่วยกิต: 3 (ทฤษฎี 3, ปฏิบัติ 0)</p>
            </div>
            <p className="text-xs text-[#0066CC] font-medium">รวมชั่วโมงสอน/สัปดาห์: 12 ชั่วโมง</p>
          </div>
        </div>

        <div className="h-px bg-[#E0E0E0]" />

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <Users className="w-4 h-4" />
            งานควบคุมวิทยานิพนธ์
          </h4>
          <div className="pl-6 space-y-3">
            <div className="bg-[#F5F5F5] rounded p-3">
              <p className="text-xs font-semibold text-[#0066CC] mb-1">นิสิตปริญญาเอก</p>
              <p className="text-xs text-[#999999]">สาขา: วิทยาการคอมพิวเตอร์</p>
              <p className="text-xs text-[#999999]">จำนวน: 2 คน</p>
              <p className="text-xs text-[#999999]">เฉลี่ย: 4 ชั่วโมง/สัปดาห์</p>
            </div>
            <div className="bg-[#F5F5F5] rounded p-3">
              <p className="text-xs font-semibold text-[#0066CC] mb-1">นิสิตปริญญาโท</p>
              <p className="text-xs text-[#999999]">สาขา: วิทยาการคอมพิวเตอร์</p>
              <p className="text-xs text-[#999999]">จำนวน: 5 คน</p>
              <p className="text-xs text-[#999999]">เฉลี่ย: 6 ชั่วโมง/สัปดาห์</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#E0E0E0]" />

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <Beaker className="w-4 h-4" />
            งานวิจัย
          </h4>
          <div className="pl-6">
            <div className="bg-[#F5F5F5] rounded p-3">
              <p className="text-xs font-medium text-[#333333] mb-1">งานวิจัยที่เสนอเพื่อจบการศึกษา/วิทยานิพนธ์</p>
              <p className="text-xs text-[#999999]">ชื่อเรื่อง: Deep Learning Approaches for Thai Natural Language Processing</p>
              <p className="text-xs text-[#999999]">ตีพิมพ์ใน: ACM Transactions on Asian Language Information Processing</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#E0E0E0]" />

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[#333333]">งานบริการทางวิชาการ</h4>
          <div className="pl-6">
            <p className="text-xs text-[#999999]">ประเภทกิจกรรม: การบรรยายพิเศษและอบรม</p>
            <p className="text-xs text-[#999999]">ปริมาณเวลา: 3 ชั่วโมง/สัปดาห์</p>
          </div>
        </div>

        <div className="h-px bg-[#E0E0E0]" />

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[#333333]">งานบริหาร</h4>
          <div className="pl-6">
            <p className="text-xs text-[#999999]">ความรับผิดชอบ: หัวหน้าสาขาวิชาวิทยาการคอมพิวเตอร์</p>
            <p className="text-xs text-[#999999]">ปริมาณเวลา: 5 ชั่วโมง/สัปดาห์</p>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F5F5] px-4 py-3 border-t border-[#E0E0E0] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#00AA00]" />
          <span className="text-xs text-[#00AA00] font-medium">verified</span>
        </div>
        <p className="text-xs text-[#999999]">อัพเดท: 15 พ.ค. 2569 14:20</p>
      </div>
    </div>
  );
}

export default WalletVC2;

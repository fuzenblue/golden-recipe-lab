import {
  BookOpen, FileText, Award, Lightbulb, DollarSign, TrendingUp,
} from 'lucide-react';

function WalletVC3() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] overflow-hidden">
      <div className="bg-[#0066CC]/5 px-4 py-3 border-b border-[#E0E0E0]">
        <div className="flex items-center gap-2 text-sm">
          <BookOpen className="w-5 h-5 text-[#0066CC]" />
          <div>
            <p className="font-semibold text-[#0066CC]">ออกโดย: Scopus / TCI / Google Scholar</p>
            <p className="text-xs text-[#999999]">Issued by: Publisher Database</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="bg-[#E3F2FD] rounded-lg p-3">
          <h4 className="text-sm font-semibold text-[#0066CC] mb-2">สรุปผลงานทางวิชาการ</h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <p className="text-[#999999]">ผลงานวิจัย</p>
              <p className="text-[#333333] font-semibold">12 ชิ้น</p>
            </div>
            <div>
              <p className="text-[#999999]">ตำรา/หนังสือ</p>
              <p className="text-[#333333] font-semibold">3 เล่ม</p>
            </div>
            <div>
              <p className="text-[#999999]">สิทธิบัตร</p>
              <p className="text-[#333333] font-semibold">2 ฉบับ</p>
            </div>
            <div>
              <p className="text-[#999999]">ทุนวิจัย</p>
              <p className="text-[#333333] font-semibold">8.5 ล้านบาท</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#E0E0E0]" />

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <FileText className="w-4 h-4" />
            ผลงานวิจัย (Research Works)
          </h4>
          <div className="pl-6 space-y-3">
            <div className="bg-[#F5F5F5] rounded p-3 space-y-1">
              <p className="text-xs font-medium text-[#333333]">1. Deep Learning for Thai NLP</p>
              <p className="text-xs text-[#999999]">ตีพิมพ์ใน: ACM Transactions on Asian Language Information Processing</p>
              <p className="text-xs text-[#999999]">Impact Factor: 3.5</p>
              <p className="text-xs text-[#999999]">ปี พ.ศ.: 2565</p>
              <p className="text-xs text-[#999999]">การอ้างอิง: 45 ครั้ง (Google Scholar)</p>
              <p className="text-xs text-[#0066CC]">สถานะ: ผู้ประพันธ์อันดับแรก, ระดับนานาชาติ</p>
              <p className="text-xs text-[#999999]">เป็นเจ้าของผลงาน: 60%</p>
            </div>

            <div className="bg-[#F5F5F5] rounded p-3 space-y-1">
              <p className="text-xs font-medium text-[#333333]">2. Neural Machine Translation for Thai-English</p>
              <p className="text-xs text-[#999999]">ตีพิมพ์ใน: Springer Nature - Natural Language Engineering</p>
              <p className="text-xs text-[#999999]">Impact Factor: 4.2</p>
              <p className="text-xs text-[#999999]">ปี พ.ศ.: 2564</p>
              <p className="text-xs text-[#999999]">การอ้างอิง: 67 ครั้ง</p>
              <p className="text-xs text-[#0066CC]">สถานะ: ผู้มีส่วนสำคัญทางปัญญา, ระดับนานาชาติ</p>
            </div>

            <div className="bg-[#F5F5F5] rounded p-3 space-y-1">
              <p className="text-xs font-medium text-[#333333]">3. BERT for Thai Language Understanding</p>
              <p className="text-xs text-[#999999]">ตีพิมพ์ใน: IEEE Access</p>
              <p className="text-xs text-[#999999]">Impact Factor: 3.8</p>
              <p className="text-xs text-[#999999]">ปี พ.ศ.: 2563</p>
              <p className="text-xs text-[#0066CC]">สถานะ: ผู้ประพันธ์อันดับแรก</p>
            </div>

            <p className="text-xs text-[#999999] italic">และอีก 9 ผลงาน...</p>
          </div>
        </div>

        <div className="h-px bg-[#E0E0E0]" />

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            ตำรา หนังสือ บทความทางวิชาการ
          </h4>
          <div className="pl-6 space-y-3">
            <div className="bg-[#F5F5F5] rounded p-3 space-y-1">
              <p className="text-xs font-medium text-[#333333]">1. การประมวลผลภาษาธรรมชาติภาษาไทย</p>
              <p className="text-xs text-[#999999]">ประเภท: ตำรา</p>
              <p className="text-xs text-[#999999]">ผู้จัดพิมพ์: สำนักพิมพ์จุฬาลงกรณ์มหาวิทยาลัย</p>
              <p className="text-xs text-[#999999]">ปี พ.ศ.: 2565</p>
              <p className="text-xs text-[#999999]">ใช้ประกอบการสอนรายวิชา: CS301 (รหัส)</p>
            </div>

            <div className="bg-[#F5F5F5] rounded p-3 space-y-1">
              <p className="text-xs font-medium text-[#333333]">2. Machine Learning สำหรับผู้เริ่มต้น</p>
              <p className="text-xs text-[#999999]">ประเภท: หนังสือ</p>
              <p className="text-xs text-[#999999]">ผู้จัดพิมพ์: SE-ED</p>
              <p className="text-xs text-[#999999]">ปี พ.ศ.: 2563</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#E0E0E0]" />

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <Award className="w-4 h-4" />
            สิทธิบัตร (Patents)
          </h4>
          <div className="pl-6 space-y-3">
            <div className="bg-[#F5F5F5] rounded p-3 space-y-1">
              <p className="text-xs font-medium text-[#333333]">1. ระบบแปลภาษาไทย-อังกฤษอัตโนมัติด้วย AI</p>
              <p className="text-xs text-[#999999]">ประเภท: สิทธิบัตรการประดิษฐ์</p>
              <p className="text-xs text-[#999999]">ปีที่ได้รับการจด: 2564</p>
              <p className="text-xs text-[#999999]">ครอบคลุมประเทศ: ไทย</p>
            </div>

            <div className="bg-[#F5F5F5] rounded p-3 space-y-1">
              <p className="text-xs font-medium text-[#333333]">2. เทคนิคการวิเคราะห์ความรู้สึกภาษาไทย</p>
              <p className="text-xs text-[#999999]">ประเภท: สิทธิบัตรการประดิษฐ์</p>
              <p className="text-xs text-[#999999]">ปีที่ได้รับการจด: 2563</p>
              <p className="text-xs text-[#999999]">ครอบคลุมประเทศ: ไทย, อาเซียน</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#E0E0E0]" />

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <Lightbulb className="w-4 h-4" />
            ซอฟต์แวร์
          </h4>
          <div className="pl-6 space-y-3">
            <div className="bg-[#F5F5F5] rounded p-3 space-y-1">
              <p className="text-xs font-medium text-[#333333]">ThaiNLP Toolkit</p>
              <p className="text-xs text-[#999999]">ประเภท: Open Source Library</p>
              <p className="text-xs text-[#999999]">เวอร์ชัน: 2.3.0</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#E0E0E0]" />

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            ประวัติการได้รับทุนวิจัย
          </h4>
          <div className="pl-6 space-y-3">
            <div className="bg-[#F5F5F5] rounded p-3 space-y-1">
              <p className="text-xs font-medium text-[#333333]">ทุนวิจัยพื้นฐาน สกว.</p>
              <p className="text-xs text-[#999999]">จำนวนเงิน: 3,500,000 บาท</p>
              <p className="text-xs text-[#999999]">ปีที่ได้รับ: 2565-2567</p>
            </div>

            <div className="bg-[#F5F5F5] rounded p-3 space-y-1">
              <p className="text-xs font-medium text-[#333333]">ทุนวิจัย NSTDA</p>
              <p className="text-xs text-[#999999]">จำนวนเงิน: 2,800,000 บาท</p>
              <p className="text-xs text-[#999999]">ปีที่ได้รับ: 2563-2565</p>
            </div>

            <div className="bg-[#F5F5F5] rounded p-3 space-y-1">
              <p className="text-xs font-medium text-[#333333]">ทุนวิจัยมหาวิทยาลัย</p>
              <p className="text-xs text-[#999999]">จำนวนเงิน: 2,200,000 บาท</p>
              <p className="text-xs text-[#999999]">ปีที่ได้รับ: 2562-2564</p>
            </div>

            <p className="text-xs text-[#0066CC] font-medium">รวมทุนวิจัยทั้งหมด: 8,500,000 บาท</p>
          </div>
        </div>

        <div className="h-px bg-[#E0E0E0]" />

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            การถ่ายทอดเทคโนโลยี
          </h4>
          <div className="pl-6">
            <div className="bg-[#F5F5F5] rounded p-3">
              <p className="text-xs text-[#999999]">ได้รับการถ่ายทอดเทคโนโลยี</p>
              <p className="text-xs text-[#333333]">ค่าธรรมเนียมใบอนุญาต (Licensing Fees): 450,000 บาท</p>
              <p className="text-xs text-[#999999] mt-1">หลักฐานสัญญา: มี</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F5F5] px-4 py-3 border-t border-[#E0E0E0] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#00AA00]" />
          <span className="text-xs text-[#00AA00] font-medium">verified</span>
        </div>
        <p className="text-xs text-[#999999]">อัพเดท: 10 พ.ค. 2569 16:45</p>
      </div>
    </div>
  );
}

export default WalletVC3;

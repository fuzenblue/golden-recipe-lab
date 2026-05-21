import { Building2, User, GraduationCap } from 'lucide-react';

function WalletVC1() {
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
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <User className="w-4 h-4" />
            ข้อมูลส่วนบุคคล
          </h4>
          <div className="pl-6 space-y-2">
            <div>
              <p className="text-xs text-[#999999]">ชื่อ</p>
              <p className="text-sm text-[#333333]">สมชาย</p>
            </div>
            <div>
              <p className="text-xs text-[#999999]">นามสกุล</p>
              <p className="text-sm text-[#333333]">ใจดี</p>
            </div>
            <div>
              <p className="text-xs text-[#999999]">วันเกิด</p>
              <p className="text-sm text-[#333333]">15 มีนาคม 2528</p>
            </div>
            <div>
              <p className="text-xs text-[#999999]">อายุ</p>
              <p className="text-sm text-[#333333]">41 ปี</p>
            </div>
            <div>
              <p className="text-xs text-[#999999]">เบอร์โทรศัพท์</p>
              <p className="text-sm text-[#333333]">081-234-5678</p>
            </div>
            <div>
              <p className="text-xs text-[#999999]">อีเมล</p>
              <p className="text-sm text-[#333333]">somchai@swu.ac.th</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#E0E0E0]" />

        <div className="space-y-3">
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

        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            การศึกษาระดับอุดมศึกษา
          </h4>

          <div className="pl-6 space-y-2">
            <div className="bg-[#F5F5F5] rounded p-3">
              <p className="text-xs font-semibold text-[#0066CC] mb-2">ปรัชญาดุษฎีบัณฑิต (Ph.D.)</p>
              <div className="space-y-1">
                <p className="text-xs text-[#999999]">สาขา: วิทยาการคอมพิวเตอร์</p>
                <p className="text-xs text-[#999999]">ปี พ.ศ. ที่จบ: 2556</p>
                <p className="text-xs text-[#999999]">สถาบัน: จุฬาลงกรณ์มหาวิทยาลัย, ประเทศไทย</p>
              </div>
            </div>
          </div>

          <div className="pl-6 space-y-2">
            <div className="bg-[#F5F5F5] rounded p-3">
              <p className="text-xs font-semibold text-[#0066CC] mb-2">วิทยาศาสตรมหาบัณฑิต (M.Sc.)</p>
              <div className="space-y-1">
                <p className="text-xs text-[#999999]">สาขา: วิทยาการคอมพิวเตอร์</p>
                <p className="text-xs text-[#999999]">ปี พ.ศ. ที่จบ: 2551</p>
                <p className="text-xs text-[#999999]">สถาบัน: จุฬาลงกรณ์มหาวิทยาลัย, ประเทศไทย</p>
              </div>
            </div>
          </div>

          <div className="pl-6 space-y-2">
            <div className="bg-[#F5F5F5] rounded p-3">
              <p className="text-xs font-semibold text-[#0066CC] mb-2">วิทยาศาสตรบัณฑิต (B.Sc.)</p>
              <div className="space-y-1">
                <p className="text-xs text-[#999999]">สาขา: วิทยาการคอมพิวเตอร์</p>
                <p className="text-xs text-[#999999]">ปี พ.ศ. ที่จบ: 2548</p>
                <p className="text-xs text-[#999999]">สถาบัน: มหาวิทยาลัยศรีนครินทรวิโรฒ, ประเทศไทย</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F5F5] px-4 py-3 border-t border-[#E0E0E0] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#00AA00]" />
          <span className="text-xs text-[#00AA00] font-medium">verified</span>
        </div>
        <p className="text-xs text-[#999999]">อัพเดท: 20 พ.ค. 2569 09:30</p>
      </div>
    </div>
  );
}

export default WalletVC1;

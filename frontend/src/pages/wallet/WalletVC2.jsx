import userMock from '../../data/user-mock.json';

function WalletVC2() {
  const data = userMock.vc2;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] overflow-hidden">
      <div className="bg-[#0066CC]/5 px-4 py-3 border-b border-[#E0E0E0]">
        <div className="flex items-center gap-2 text-sm">
          <i className="fa-solid fa-building-columns text-[#0066CC]"></i>
          <div>
            <p className="font-semibold text-[#0066CC]">ออกโดย: {data.university}</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <i className="fa-solid fa-building-columns text-[#0066CC]"></i>
            ข้อมูลหน่วยงาน
          </h4>
          <div className="pl-6 space-y-2">
            <div>
              <p className="text-xs text-[#999999]">สังกัด</p>
              <p className="text-sm text-[#333333]">{data.university}</p>
            </div>
            <div>
              <p className="text-xs text-[#999999]">คณะ</p>
              <p className="text-sm text-[#333333]">{data.faculty}</p>
            </div>
            <div>
              <p className="text-xs text-[#999999]">สาขา</p>
              <p className="text-sm text-[#333333]">{data.department}</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#E0E0E0]" />

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <i className="fa-solid fa-briefcase text-[#0066CC]"></i>
            ปัจจุบันดำรงตำแหน่ง
          </h4>
          <div className="pl-6 space-y-2">
            <div>
              <p className="text-xs text-[#999999]">ตำแหน่ง</p>
              <p className="text-sm text-[#333333]">{data.current_position_position}</p>
            </div>
            <div>
              <p className="text-xs text-[#999999]">ระดับ</p>
              <p className="text-sm text-[#333333]">{data.current_position_level}</p>
            </div>
            <div>
              <p className="text-xs text-[#999999]">ขั้น</p>
              <p className="text-sm text-[#333333]">{data.current_position_step}</p>
            </div>
            <div>
              <p className="text-xs text-[#999999]">เงินเดือน</p>
              <p className="text-sm text-[#333333]">{data.current_position_salary?.toLocaleString()} บาท</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#E0E0E0]" />

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <i className="fa-solid fa-calendar text-[#0066CC]"></i>
            การได้รับแต่งตั้ง
          </h4>
          <div className="pl-6 space-y-3">
            <div className="bg-[#F5F5F5] rounded p-3">
              <p className="text-xs font-semibold text-[#0066CC] mb-1">อาจารย์</p>
              <p className="text-xs text-[#999999]">เมื่อวันที่: {data.appointed_lecturer_date}</p>
            </div>
            <div className="bg-[#F5F5F5] rounded p-3">
              <p className="text-xs font-semibold text-[#0066CC] mb-1">ผู้ช่วยศาสตราจารย์</p>
              <p className="text-xs text-[#999999]">ในสาขาวิชา: {data.appointed_assistant_professor_field}</p>
              <p className="text-xs text-[#999999]">เมื่อวันที่: {data.appointed_assistant_professor_date}</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#E0E0E0]" />

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <i className="fa-solid fa-clock text-[#0066CC]"></i>
            อายุราชการ
          </h4>
          <div className="pl-6">
            <p className="text-sm text-[#333333]">{data.years_of_service_years} ปี {data.years_of_service_months} เดือน</p>
          </div>
        </div>

        <div className="h-px bg-[#E0E0E0]" />

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <i className="fa-solid fa-book-open text-[#0066CC]"></i>
            งานสอน - บรรยาย และปฏิบัติการ
          </h4>
          <div className="pl-6 space-y-3">
            <div className="bg-[#F5F5F5] rounded p-3 space-y-1">
              <p className="text-xs font-medium text-[#333333]">{data.lectures_name_code} - {data.lectures_subject_taught}</p>
              <p className="text-xs text-[#999999]">ระดับ/หลักสูตร: {data.lectures_level_curriculum}</p>
              <p className="text-xs text-[#999999]">หน่วยกิต: {data.lectures_credits} (ทฤษฎี {data.lectures_theory_hours}, ปฏิบัติ {data.lectures_practice_hours})</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#E0E0E0]" />

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <i className="fa-solid fa-users text-[#0066CC]"></i>
            งานควบคุมวิทยานิพนธ์
          </h4>
          <div className="pl-6 space-y-3">
            <div className="bg-[#F5F5F5] rounded p-3">
              <p className="text-xs font-semibold text-[#0066CC] mb-1">นิสิตปริญญาเอก</p>
              <p className="text-xs text-[#999999]">สาขา: {data.doctoral_students_field}</p>
              <p className="text-xs text-[#999999]">จำนวน: {data.doctoral_students_number} คน</p>
              <p className="text-xs text-[#999999]">เฉลี่ย: {data.doctoral_students_hours} ชั่วโมง/สัปดาห์</p>
            </div>
            <div className="bg-[#F5F5F5] rounded p-3">
              <p className="text-xs font-semibold text-[#0066CC] mb-1">นิสิตปริญญาโท</p>
              <p className="text-xs text-[#999999]">สาขา: {data.masters_students_field}</p>
              <p className="text-xs text-[#999999]">จำนวน: {data.masters_students_number} คน</p>
              <p className="text-xs text-[#999999]">เฉลี่ย: {data.masters_students_hours} ชั่วโมง/สัปดาห์</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#E0E0E0]" />

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <i className="fa-solid fa-flask text-[#0066CC]"></i>
            งานวิจัย
          </h4>
          <div className="pl-6">
            <div className="bg-[#F5F5F5] rounded p-3">
              <p className="text-xs font-medium text-[#333333] mb-1">งานวิจัยเพื่อจบการศึกษา/วิทยานิพนธ์</p>
              <p className="text-xs text-[#999999]">ชื่อเรื่อง: {data.research_graduation_title}</p>
              <p className="text-xs text-[#999999]">ตีพิมพ์ใน: {data.research_graduation_published}</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#E0E0E0]" />

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <i className="fa-solid fa-handshake-angle text-[#0066CC]"></i>
            งานบริการทางวิชาการ
          </h4>
          <div className="pl-6">
            <p className="text-xs text-[#999999]">ประเภทกิจกรรม: {data.academic_service_type}</p>
            <p className="text-xs text-[#999999]">ปริมาณเวลา: {data.academic_service_hours} ชั่วโมง/สัปดาห์</p>
          </div>
        </div>

        <div className="h-px bg-[#E0E0E0]" />

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <i className="fa-solid fa-building text-[#0066CC]"></i>
            งานบริหาร
          </h4>
          <div className="pl-6">
            <p className="text-xs text-[#999999]">ความรับผิดชอบ: {data.administrative_work_responsibility}</p>
            <p className="text-xs text-[#999999]">ปริมาณเวลา: {data.administrative_work_hours} ชั่วโมง/สัปดาห์</p>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F5F5] px-4 py-3 border-t border-[#E0E0E0] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#00AA00]" />
          <span className="text-xs text-[#00AA00] font-medium">ยืนยันแล้ว</span>
        </div>
        <p className="text-xs text-[#999999]">อัพเดท: 15 พ.ค. 2569 14:20</p>
      </div>
    </div>
  );
}

export default WalletVC2;

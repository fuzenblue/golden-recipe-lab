import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Checkbox from '../../components/ui/Checkbox';
import userMock from '../../data/user-mock.json';

function AccordionSection({ icon, title, open, onToggle, onEdit, children }) {
  return (
    <div className="border border-[#E0E0E0] rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-white">
        <button
          onClick={onToggle}
          className="flex items-center gap-2 flex-1 text-left"
        >
          <i className={`${icon} text-[#0066CC]`}></i>
          <span className="font-semibold text-[#333333] text-sm">{title}</span>
          <i className={`fa-solid fa-chevron-down text-[#999999] text-xs transition-transform ${open ? 'rotate-180' : ''}`}></i>
        </button>
        {open && (
          <button
            onClick={onEdit}
            className="flex items-center gap-1 text-sm text-[#0066CC] hover:underline ml-2"
          >
            <i className="fa-solid fa-pen"></i>
            แก้ไข
          </button>
        )}
      </div>
      {open && <div className="px-4 py-3 border-t border-[#E0E0E0] bg-white space-y-3">{children}</div>}
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div>
      <p className="text-xs text-[#999999] mb-0.5">{label}</p>
      <p className="text-sm text-[#333333]">{value || '-'}</p>
    </div>
  );
}

function ApplicationStep2() {
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState(false);
  const [openSections, setOpenSections] = useState({ service: true, workload: true, academic: true });
  const [editModal, setEditModal] = useState({ open: false, sectionTitle: '' });
  const [agree, setAgree] = useState(null);
  const progress = 50;
  const data = userMock.vc2;

  const handleNext = () => {
    if (confirmed) {
      navigate('/applications/step3');
    }
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const openEditModal = (sectionTitle) => {
    setEditModal({ open: true, sectionTitle });
    setAgree(null);
  };

  const handleEditConfirm = () => {
    if (agree) {
      setEditModal({ open: false, sectionTitle: '' });
      navigate('/vc/vc2');
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
            <i className="fa-solid fa-arrow-left"></i>
            <span className="text-sm">กลับ</span>
          </button>
          <div className="text-sm text-[#999999]">{progress}%</div>
        </div>
      </header>

      <div className="max-w-[432px] mx-auto px-4 py-6 space-y-6">
        <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-base font-semibold text-[#333333]">ขั้นตอนที่ 2/4</h2>
            <span className="text-sm text-[#999999]">ตรวจสอบประวัติการจ้างงานและภาระงาน</span>
          </div>
          <div className="w-full bg-[#E0E0E0] rounded-full h-2">
            <div
              className="bg-[#0066CC] h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="space-y-3">
          <AccordionSection
            icon="fa-solid fa-scroll"
            title="ประวัติการรับราชการ"
            open={openSections.service}
            onToggle={() => toggleSection('service')}
            onEdit={() => openEditModal('ประวัติการรับราชการ')}
          >
            <div className="bg-[#F5F5F5] rounded p-3 space-y-2">
              <DetailRow label="สังกัด" value={data.university} />
              <DetailRow label="คณะ" value={data.faculty} />
              <DetailRow label="สาขา" value={data.department} />
            </div>
            <div className="bg-[#F5F5F5] rounded p-3 space-y-2">
              <p className="text-xs font-semibold text-[#333333] mb-1">ประวัติการรับราชการ</p>
              <p className="text-sm text-[#333333]">{data.official_history || '-'}</p>
            </div>
            <div className="bg-[#F5F5F5] rounded p-3 space-y-2">
              <p className="text-xs font-semibold text-[#333333] mb-1">ตำแหน่งปัจจุบัน</p>
              <DetailRow label="ตำแหน่ง" value={data.current_position_position} />
              <DetailRow label="ระดับ" value={data.current_position_level} />
              <DetailRow label="ขั้น" value={data.current_position_step} />
              <DetailRow label="เงินเดือน" value={data.current_position_salary ? `${data.current_position_salary.toLocaleString()} บาท` : '-'} />
            </div>
            <div className="bg-[#F5F5F5] rounded p-3 space-y-2">
              <p className="text-xs font-semibold text-[#333333] mb-1">การได้รับแต่งตั้ง</p>
              <div className="text-sm text-[#333333]">
                <p>อาจารย์: {data.appointed_lecturer_date || '-'}</p>
                <p>ผู้ช่วยศาสตราจารย์: {data.appointed_assistant_professor_date || '-'}</p>
              </div>
            </div>
            <div className="bg-[#F5F5F5] rounded p-3">
              <DetailRow label="อายุราชการ" value={`${data.years_of_service_years} ปี ${data.years_of_service_months} เดือน`} />
            </div>
            <div className="bg-[#F5F5F5] rounded p-3">
              <DetailRow label="ภาระงานพื้นฐาน" value={data.background_duties} />
            </div>
          </AccordionSection>

          <AccordionSection
            icon="fa-solid fa-briefcase"
            title="ภาระงานย้อนหลัง 3 ปี"
            open={openSections.workload}
            onToggle={() => toggleSection('workload')}
            onEdit={() => openEditModal('ภาระงานย้อนหลัง 3 ปี')}
          >
            <div className="bg-[#F5F5F5] rounded p-3 space-y-2">
              <p className="text-xs font-semibold text-[#333333] mb-1">งานสอน - บรรยายและปฏิบัติการ</p>
              <p className="text-sm text-[#333333]">{data.lectures_name_code} - {data.lectures_subject_taught}</p>
              <DetailRow label="ระดับ/หลักสูตร" value={data.lectures_level_curriculum} />
              <DetailRow label="หน่วยกิต" value={`${data.lectures_credits} (ทฤษฎี ${data.lectures_theory_hours}, ปฏิบัติ ${data.lectures_practice_hours})`} />
              <DetailRow label="ภาระงานสอน" value={data.teaching_work} />
            </div>
            <div className="bg-[#F5F5F5] rounded p-3 space-y-2">
              <p className="text-xs font-semibold text-[#333333] mb-1">งานควบคุมวิทยานิพนธ์</p>
              <p className="text-sm text-[#333333]">ปริญญาเอก: {data.doctoral_students_number} คน ({data.doctoral_students_hours} ชม./สัปดาห์)</p>
              <p className="text-sm text-[#333333]">ปริญญาโท: {data.masters_students_number} คน ({data.masters_students_hours} ชม./สัปดาห์)</p>
              <DetailRow label="สาขา" value={data.doctoral_students_field} />
            </div>
            <div className="bg-[#F5F5F5] rounded p-3 space-y-2">
              <p className="text-xs font-semibold text-[#333333] mb-1">งานวิจัย</p>
              <DetailRow label="ชื่องานวิจัย" value={data.research_graduation_title} />
              <DetailRow label="ตีพิมพ์ใน" value={data.research_graduation_published} />
            </div>
            <div className="bg-[#F5F5F5] rounded p-3 space-y-2">
              <p className="text-xs font-semibold text-[#333333] mb-1">งานบริการทางวิชาการ</p>
              <DetailRow label="ประเภทกิจกรรม" value={data.academic_service_type} />
              <DetailRow label="ปริมาณเวลา" value={data.academic_service_hours ? `${data.academic_service_hours} ชั่วโมง/สัปดาห์` : '-'} />
            </div>
            <div className="bg-[#F5F5F5] rounded p-3 space-y-2">
              <p className="text-xs font-semibold text-[#333333] mb-1">งานบริหาร</p>
              <DetailRow label="ความรับผิดชอบ" value={data.administrative_work_responsibility} />
              <DetailRow label="ปริมาณเวลา" value={data.administrative_work_hours ? `${data.administrative_work_hours} ชั่วโมง/สัปดาห์` : '-'} />
            </div>
          </AccordionSection>

          <AccordionSection
            icon="fa-solid fa-flask"
            title="ผลงานทางวิชาการ"
            open={openSections.academic}
            onToggle={() => toggleSection('academic')}
            onEdit={() => openEditModal('ผลงานทางวิชาการ')}
          >
            <div className="bg-[#F5F5F5] rounded p-3 space-y-2">
              <p className="text-xs font-semibold text-[#333333] mb-1">วุฒิการศึกษา</p>
              <p className="text-sm text-[#333333]">{data.educational_record || '-'}</p>
            </div>
            <div className="bg-[#F5F5F5] rounded p-3 space-y-2">
              <p className="text-xs font-semibold text-[#333333] mb-1">งานวิจัยตีพิมพ์</p>
              <DetailRow label="ชื่องานวิจัย" value={data.research_graduation_title} />
              <DetailRow label="ตีพิมพ์ใน" value={data.research_graduation_published} />
            </div>
          </AccordionSection>
        </div>

        <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-[#E0E0E0]">
          <Checkbox
            checked={confirmed}
            onCheckedChange={(checked) => setConfirmed(checked)}
            className="mt-1"
          />
          <label className="text-sm text-[#333333] flex-1 cursor-pointer" onClick={() => setConfirmed(!confirmed)}>
            ข้าพเจ้ายืนยันว่าข้อมูลข้างต้นถูกต้อง
          </label>
        </div>

        <Button
          onClick={handleNext}
          disabled={!confirmed}
          className="w-full bg-[#0066CC] hover:bg-[#0052A3] text-white disabled:bg-[#E0E0E0] disabled:text-[#999999] disabled:cursor-not-allowed"
        >
          ถัดไป
          <i className="fa-solid fa-chevron-right ml-2"></i>
        </Button>
      </div>

      {editModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" onClick={() => setEditModal({ open: false, sectionTitle: '' })}>
          <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-2 mb-4">
              <i className="fa-solid fa-pen-to-square text-[#FF9900] text-lg"></i>
              <h4 className="font-semibold text-[#333333]">แก้ไขข้อมูล</h4>
            </div>
            <p className="text-sm text-[#666666] mb-4">
              คุณต้องการแก้ไขข้อมูลใช่หรือไม่ โปรดทราบว่าการแก้ไขข้อมูลคือการขอตรวจสอบข้อมูล <strong>{editModal.sectionTitle}</strong> ใหม่อีกครั้ง เราจะนำทางท่านไปยังการตรวจสอบประวัติการจ้างงานและภาระงาน
            </p>
            <div className="space-y-2 mb-6">
              <label className="flex items-center gap-3 p-3 border border-[#E0E0E0] rounded-lg cursor-pointer hover:bg-[#F5F5F5]">
                <input
                  type="radio"
                  name="editAgree"
                  checked={agree === true}
                  onChange={() => setAgree(true)}
                  className="w-4 h-4 text-[#0066CC]"
                />
                <span className="text-sm text-[#333333]">ใช่ ต้องการแก้ไขข้อมูล</span>
              </label>
              <label className="flex items-center gap-3 p-3 border border-[#E0E0E0] rounded-lg cursor-pointer hover:bg-[#F5F5F5]">
                <input
                  type="radio"
                  name="editAgree"
                  checked={agree === false}
                  onChange={() => setAgree(false)}
                  className="w-4 h-4 text-[#0066CC]"
                />
                <span className="text-sm text-[#333333]">ไม่ กลับไปหน้าก่อนหน้า</span>
              </label>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setEditModal({ open: false, sectionTitle: '' })}
                className="flex-1 py-2.5 border border-[#E0E0E0] rounded-lg text-sm text-[#333333] font-medium hover:bg-[#F5F5F5] transition-colors"
              >
                กลับ
              </button>
              <button
                onClick={handleEditConfirm}
                disabled={agree !== true}
                className="flex-1 py-2.5 bg-[#0066CC] hover:bg-[#0052A3] disabled:bg-[#E0E0E0] disabled:text-[#999999] text-white rounded-lg text-sm font-medium transition-colors disabled:cursor-not-allowed"
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ApplicationStep2;

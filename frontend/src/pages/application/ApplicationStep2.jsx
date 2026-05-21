import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getVC2Data } from '../../data/vcData';

const ApplicationStep2 = () => {
  const navigate = useNavigate();
  const vc2 = getVC2Data();
  const [formData, setFormData] = useState(vc2);
  const [isEditing, setIsEditing] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [confirmed, setConfirmed] = useState(true);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setHasChanges(true);
  };

  const handleSubmit = () => {
    if (hasChanges) {
      alert('ข้อมูลกำลังรอการตรวจสอบจากมหาวิทยาลัย กรุณารอการยืนยัน');
    } else {
      navigate('/application/step3');
    }
  };

  return (
    <>
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/application/step1')} className="btn btn-ghost btn-sm btn-circle">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <div className="flex-1">
          <h1 className="text-base font-bold">ขั้นตอนที่ 2/4</h1>
          <p className="text-caption text-base-content/50">← กลับ / Back &nbsp; 50%</p>
        </div>
      </div>

      <div className="bg-base-100 rounded-box border border-base-300 p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold">VC2: ประวัติการทำงาน / Work History</span>
        </div>
        <div className="w-full h-2 bg-base-200 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full" style={{ width: '50%' }}></div>
        </div>
      </div>

      <div className="bg-base-100 rounded-box border border-base-300 p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <span className="flex items-center gap-2">
            <i className="fa-solid fa-briefcase text-secondary"></i>
            <span className="font-medium text-sm">ตำแหน่งปัจจุบัน</span>
          </span>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`btn btn-xs ${isEditing ? 'btn-success' : 'btn-outline'}`}
          >
            <i className={`fa-solid ${isEditing ? 'fa-floppy-disk' : 'fa-pen'} mr-1`}></i>
            {isEditing ? 'บันทึก' : 'แก้ไข/Edit'}
          </button>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-base-content/60">ตำแหน่ง:</span>
            <span className="font-medium">{formData.current_position?.position}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-base-content/60">คณะ:</span>
            <span>{formData.faculty}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-base-content/60">ภาควิชา:</span>
            <span>{formData.department}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-base-content/60">เงินเดือน:</span>
            <span>{formData.current_position?.salary} บาท</span>
          </div>
        </div>

        <div className="border-t border-base-200 mt-3 pt-3">
          <p className="text-xs font-semibold text-base-content/60 mb-2"><i className="fa-regular fa-calendar mr-1"></i> ระยะเวลาทำงาน</p>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-base-content/60">เริ่มงาน:</span>
              <span>{formData.appointed_lecturer?.appointment_date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-base-content/60">รวม:</span>
              <span>{formData.years_of_service?.years} ปี {formData.years_of_service?.months} เดือน</span>
            </div>
          </div>
        </div>

        <div className="border-t border-base-200 mt-3 pt-3">
          <p className="text-xs font-semibold text-base-content/60 mb-2"><i className="fa-solid fa-book mr-1"></i> ภาระงานสอน</p>
          <div className="space-y-1">
            {formData.teaching_work?.map((item, idx) => (
              <div key={idx} className="text-sm flex justify-between">
                <span>{item.subject_taught} ({item.name_code})</span>
                <span className="text-base-content/50">{item.credits} หน่วยกิต</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-base-content/40 mt-1">{formData.background_duties}</p>
        </div>
      </div>

      <div role="alert" className="alert bg-warning/10 border border-warning/20 text-sm">
        <i className="fa-solid fa-clock text-warning"></i>
        <span className="text-xs"><i className="fa-solid fa-hourglass-half mr-1"></i> หากแก้ไข จะต้องผ่านการยืนยันจากมหาวิทยาลัยอีกครั้ง</span>
      </div>

      <div className="bg-base-100 rounded-box border border-base-300 p-4">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
          />
          <span className="text-sm"><i className="fa-solid fa-check mr-1"></i> ข้าพเจ้ายืนยันว่าข้อมูลข้างต้นถูกต้อง</span>
        </label>
      </div>

      <button
        onClick={handleSubmit}
        className="btn btn-primary btn-block text-btn"
        disabled={!confirmed}
      >
        {hasChanges ? 'ส่งข้อมูลเพื่อตรวจสอบ' : 'ถัดไป / Next Step →'}
      </button>
    </>
  );
};

export default ApplicationStep2;
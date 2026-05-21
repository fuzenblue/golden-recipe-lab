import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getVC1Data } from '../../data/vcData';

const ApplicationStep1 = () => {
  const navigate = useNavigate();
  const vc1 = getVC1Data();
  const [formData, setFormData] = useState(vc1);
  const [isEditing, setIsEditing] = useState(false);
  const [confirmed, setConfirmed] = useState(true);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    if (isEditing) {
      alert('ข้อมูลกำลังรอการตรวจสอบจากมหาวิทยาลัย กรุณารอการยืนยัน');
    } else {
      navigate('/application/step2');
    }
  };

  return (
    <>
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/applications')} className="btn btn-ghost btn-sm btn-circle">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <div className="flex-1">
          <h1 className="text-base font-bold">ขั้นตอนที่ 1/4</h1>
          <p className="text-caption text-base-content/50">← กลับ / Back &nbsp; 25%</p>
        </div>
      </div>

      <div className="bg-base-100 rounded-box border border-base-300 p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold">VC1: ข้อมูลส่วนตัว / Personal Information</span>
        </div>
        <div className="w-full h-2 bg-base-200 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full" style={{ width: '25%' }}></div>
        </div>
      </div>

      <div className="bg-base-100 rounded-box border border-base-300 p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <span className="flex items-center gap-2">
            <i className="fa-solid fa-user text-primary"></i>
            <span className="font-medium text-sm">ข้อมูลส่วนตัว</span>
          </span>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`btn btn-xs ${isEditing ? 'btn-success' : 'btn-outline'}`}
          >
            <i className={`fa-solid ${isEditing ? 'fa-floppy-disk' : 'fa-pen'} mr-1`}></i>
            {isEditing ? 'บันทึก' : 'แก้ไข/Edit'}
          </button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-base-content/50 w-5 flex justify-center"><i className="fa-solid fa-user text-xs"></i></span>
            <span>ชื่อ-นามสกุล: <strong>{formData.firstname} {formData.lastname}</strong></span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-base-content/50 w-5 flex justify-center"><i className="fa-solid fa-cake-candles text-xs"></i></span>
            <span>วันเกิด: {formData.date_of_birth}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-base-content/50 w-5 flex justify-center"><i className="fa-solid fa-id-card text-xs"></i></span>
            <span>รหัสประจำตัวประชาชน: 1-2345-67890-12-3</span>
          </div>
        </div>

        <div className="border-t border-base-200 mt-3 pt-3">
          <p className="text-xs font-semibold text-base-content/60 mb-2"><i className="fa-solid fa-graduation-cap mr-1"></i> การศึกษา</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-base-content/60">ปริญญา:</span>
              <span>{formData.higher_education} ({formData.phd})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-base-content/60">สาขา:</span>
              <span>{formData.phd}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-base-content/60">มหาวิทยาลัย:</span>
              <span>{formData.university}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-base-content/60">ปีที่จบ:</span>
              <span>{formData.phd_year_of_graduation}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-base-200 mt-3 pt-3">
          <p className="text-xs font-semibold text-base-content/60 mb-2"><i className="fa-solid fa-phone mr-1"></i> ติดต่อ</p>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-base-content/60">อีเมล:</span>
              <span>{formData.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-base-content/60">โทรศัพท์:</span>
              <span>{formData.telephone}</span>
            </div>
          </div>
        </div>
      </div>

      <div role="alert" className="alert bg-warning/10 border border-warning/20 text-sm">
        <i className="fa-solid fa-clock text-warning"></i>
        <span className="text-xs"><i className="fa-solid fa-triangle-exclamation mr-1"></i> หากแก้ไขข้อมูล จะต้องผ่านการยืนยันจากมหาวิทยาลัย</span>
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
        {isEditing ? 'ส่งข้อมูลเพื่อตรวจสอบ' : 'ถัดไป / Next Step →'}
      </button>
    </>
  );
};

export default ApplicationStep1;
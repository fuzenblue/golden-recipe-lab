import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import BottomNav from '../components/BottomNav';
import Input from '../components/ui/Input';
import Label from '../components/ui/Label';
import Textarea from '../components/ui/Textarea';

const vcSchemas = {
  vc1: {
    claims: {
      firstname: { display: [{ name: 'ชื่อ' }], mandatory: true },
      lastname: { display: [{ name: 'นามสกุล' }], mandatory: true },
      date_of_birth: { display: [{ name: 'วันเกิด' }], mandatory: true, format: 'date' },
      id_card: { display: [{ name: 'เลขบัตรประชาชน' }], mandatory: true },
      email: { display: [{ name: 'อีเมล' }], mandatory: true, format: 'email' },
      phone: { display: [{ name: 'เบอร์โทรศัพท์' }], mandatory: true, format: 'tel' },
      education: {
        display: [{ name: 'การศึกษา' }],
        fields: {
          degree: { display: [{ name: 'ระดับปริญญา' }], mandatory: true },
          field: { display: [{ name: 'สาขา' }], mandatory: true },
          university: { display: [{ name: 'มหาวิทยาลัย' }], mandatory: true },
          graduation_year: { display: [{ name: 'ปีที่จบ' }], mandatory: true },
        },
      },
    },
  },
  vc2: {
    claims: {
      position: { display: [{ name: 'ตำแหน่ง' }], mandatory: true },
      faculty: { display: [{ name: 'คณะ' }], mandatory: true },
      department: { display: [{ name: 'ภาควิชา' }], mandatory: true },
      salary: { display: [{ name: 'เงินเดือน' }], mandatory: true },
      start_date: { display: [{ name: 'วันที่เริ่มงาน' }], mandatory: true, format: 'date' },
      teaching_hours: { display: [{ name: 'ชั่วโมงสอน/สัปดาห์' }], mandatory: true },
    },
  },
  vc3: {
    claims: {
      publications: {
        display: [{ name: 'ผลงานวิจัย' }],
        fields: {
          title: { display: [{ name: 'ชื่อผลงาน' }], mandatory: true },
          journal: { display: [{ name: 'วารสาร' }], mandatory: true },
          year: { display: [{ name: 'ปี พ.ศ.' }], mandatory: true },
          impact_factor: { display: [{ name: 'Impact Factor' }] },
        },
      },
      research_topic: { display: [{ name: 'หัวข้อวิจัย' }] },
    },
  },
};

function VCForm() {
  const navigate = useNavigate();
  const { vcType } = useParams();
  const [formData, setFormData] = useState({});

  const getVCTitle = () => {
    switch (vcType) {
      case 'vc1': return 'VC1: ข้อมูลส่วนบุคคล';
      case 'vc2': return 'VC2: ข้อมูลการจ้างงาน';
      case 'vc3': return 'VC3: ผลงานทางวิชาการ';
      default: return 'แบบฟอร์ม';
    }
  };

  const handleInputChange = (fieldName, value) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('ส่งข้อมูลสำเร็จ!');
  };

  const renderField = (fieldKey, field, level = 0) => {
    const label = field.display?.[0]?.name || fieldKey;
    const isMandatory = field.mandatory || false;

    if (field.fields) {
      return (
        <div key={fieldKey} className={`space-y-4 ${level > 0 ? 'ml-4 pl-4 border-l-2 border-[#E0E0E0]' : ''}`}>
          <h3 className={`${level === 0 ? 'text-base' : 'text-sm'} font-semibold text-[#333333] mt-4`}>
            {label}
            {isMandatory && <span className="text-[#CC0000] ml-1">*</span>}
          </h3>
          {Object.entries(field.fields).map(([nestedKey, nestedField]) =>
            renderField(`${fieldKey}.${nestedKey}`, nestedField, level + 1)
          )}
        </div>
      );
    }

    const useTextarea = fieldKey.includes('description') ||
      fieldKey.includes('details') ||
      fieldKey.includes('work') ||
      fieldKey.includes('responsibility') ||
      fieldKey.includes('participation');

    const inputType = field.format === 'email' ? 'email' :
      field.format === 'tel' ? 'tel' :
      field.format === 'date' ? 'date' : 'text';

    return (
      <div key={fieldKey} className="space-y-2">
        <Label htmlFor={fieldKey}>
          {label}
          {isMandatory && <span className="text-[#CC0000] ml-1">*</span>}
        </Label>
        {useTextarea ? (
          <Textarea
            id={fieldKey}
            value={formData[fieldKey] || ''}
            onChange={(e) => handleInputChange(fieldKey, e.target.value)}
            required={isMandatory}
            className="w-full"
            placeholder={`กรุณากรอก${label}`}
          />
        ) : (
          <Input
            id={fieldKey}
            type={inputType}
            value={formData[fieldKey] || ''}
            onChange={(e) => handleInputChange(fieldKey, e.target.value)}
            required={isMandatory}
            className="w-full"
            placeholder={`กรุณากรอก${label}`}
          />
        )}
      </div>
    );
  };

  const activeSchema = vcSchemas[vcType] || vcSchemas.vc1;

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-24">
      <header className="bg-white border-b border-[#E0E0E0] px-4 py-3 sticky top-0 z-10">
        <div className="max-w-[432px] mx-auto flex items-center gap-3">
          <Link to="/submit-request" className="p-1 hover:bg-[#F5F5F5] rounded-full">
            <ArrowLeft className="w-5 h-5 text-[#333333]" />
          </Link>
          <h1 className="text-lg font-semibold text-[#333333]">{getVCTitle()}</h1>
        </div>
      </header>

      <div className="max-w-[432px] mx-auto px-4 py-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-[#E3F2FD] border border-[#0066CC]/20 rounded-lg p-4">
            <div className="flex gap-3">
              <span className="text-lg">📝</span>
              <div className="flex-1">
                <p className="text-sm text-[#333333] font-medium mb-1">กรอกข้อมูลให้ครบถ้วน</p>
                <p className="text-xs text-[#666666]">
                  ช่องที่มีเครื่องหมาย <span className="text-[#CC0000]">*</span> จำเป็นต้องกรอก
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm border border-[#E0E0E0] space-y-4">
            {Object.entries(activeSchema.claims).map(([fieldKey, field]) =>
              renderField(fieldKey, field)
            )}
          </div>

          <div className="flex gap-3 sticky bottom-20 bg-[#F5F5F5] py-3">
            <Link
              to="/submit-request"
              className="flex-1 px-4 py-3 border border-[#E0E0E0] bg-white text-[#333333] rounded-lg font-semibold hover:bg-[#F5F5F5] transition-colors text-center"
            >
              ยกเลิก
            </Link>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-[#0066CC] text-white rounded-lg font-semibold hover:bg-[#0052A3] transition-colors flex items-center justify-center gap-2"
            >
              <Save className="w-4 h-4" />
              บันทึก
            </button>
          </div>
        </form>
      </div>

      <BottomNav />
    </div>
  );
}

export default VCForm;

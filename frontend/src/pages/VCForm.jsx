import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ArrowLeft, Save, Plus, Trash2 } from 'lucide-react';
import BottomNav from '../components/BottomNav';
import Input from '../components/ui/Input';
import Label from '../components/ui/Label';
import Textarea from '../components/ui/Textarea';
import userMock from '../data/user-mock.json';

function VCForm() {
  const navigate = useNavigate();
  const { vcType } = useParams();
  const [formData, setFormData] = useState({});
  
  // States for dynamic entries
  const [lectureRows, setLectureRows] = useState([{ level: '', subject: '', hours: '', semester_part: '', semester_year: '' }]);
  const [thesisEntries, setThesisEntries] = useState([{ title: '', student: '' }]);
  const [serviceEntries, setServiceEntries] = useState([{ type: '', hours: '' }]);
  const [adminEntries, setAdminEntries] = useState([{ work: '', hours: '' }]);
  const [otherWorkEntries, setOtherWorkEntries] = useState([{ type: '', hours: '' }]);
  
  // Time unit states
  const [timeUnits, setTimeUnits] = useState({
    academic_service_hours: 'hr',
    administrative_work_hours: 'hr',
    other_related_work_hours: 'hr',
  });

  const getVCTitle = () => {
    switch (vcType) {
      case 'vc1': return 'VC1: ข้อมูลส่วนบุคคล';
      case 'vc2': return 'VC2: ข้อมูลการจ้างงาน';
      case 'vc3': return 'VC3: ผลงานทางวิชาการ';
      default: return 'แบบฟอร์ม';
    }
  };

  // Lecture handlers
  const handleLectureChange = (index, field, value) => {
    setLectureRows((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const addLectureRow = () => {
    setLectureRows((prev) => [...prev, { level: '', subject: '', hours: '', semester_part: '', semester_year: '' }]);
  };

  const removeLectureRow = (index) => {
    setLectureRows((prev) => prev.filter((_, i) => i !== index));
  };

  // Thesis handlers
  const handleThesisChange = (index, field, value) => {
    setThesisEntries((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const addThesisEntry = () => {
    setThesisEntries((prev) => [...prev, { title: '', student: '' }]);
  };

  const removeThesisEntry = (index) => {
    setThesisEntries((prev) => prev.filter((_, i) => i !== index));
  };

  // Service entry handlers
  const handleServiceChange = (index, field, value) => {
    setServiceEntries((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const addServiceEntry = () => {
    setServiceEntries((prev) => [...prev, { type: '', hours: '' }]);
  };

  const removeServiceEntry = (index) => {
    setServiceEntries((prev) => prev.filter((_, i) => i !== index));
  };

  // Admin entry handlers
  const handleAdminChange = (index, field, value) => {
    setAdminEntries((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const addAdminEntry = () => {
    setAdminEntries((prev) => [...prev, { work: '', hours: '' }]);
  };

  const removeAdminEntry = (index) => {
    setAdminEntries((prev) => prev.filter((_, i) => i !== index));
  };

  // Other work entry handlers
  const handleOtherWorkChange = (index, field, value) => {
    setOtherWorkEntries((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const addOtherWorkEntry = () => {
    setOtherWorkEntries((prev) => [...prev, { type: '', hours: '' }]);
  };

  const removeOtherWorkEntry = (index) => {
    setOtherWorkEntries((prev) => prev.filter((_, i) => i !== index));
  };

  // Time unit handler
  const handleTimeUnitChange = (field, value) => {
    setTimeUnits((prev) => ({ ...prev, [field]: value }));
  };

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('ส่งข้อมูลสำเร็จ!');
  };

  // VC3 specific rendering
  const renderVC3Form = () => {
    return (
      <div className="space-y-6">
        {/* ชื่อผลงาน */}
        <div className="bg-[#F5F5F5] rounded-lg p-4">
          <h3 className="text-sm font-semibold text-[#333333] mb-3">ชื่อผลงาน</h3>
          <div>
            <Label className="text-[10px] text-[#999999]">ชื่อผลงาน</Label>
            <Input
              value={formData.research_works_title || ''}
              onChange={(e) => handleInputChange('research_works_title', e.target.value)}
              className="w-full mt-1 bg-white text-sm border border-[#E0E0E0] rounded px-2 py-1"
              placeholder="ระบุชื่อผลงาน"
            />
          </div>
        </div>

        {/* สถานะผู้ขอในผลงาน */}
        <div className="bg-[#F5F5F5] rounded-lg p-4">
          <h3 className="text-sm font-semibold text-[#333333] mb-3">สถานะผู้ขอในผลงาน</h3>
          <div className="space-y-2">
            {[
              { value: 'first_author', label: 'ผู้ประพันธ์อันดับแรก (First author)' },
              { value: 'key_intellectual_contributor', label: 'ผู้มีส่วนสำคัญทางปัญญา (Essentially intellectual contributor)' },
              { value: 'published_author', label: 'ผู้ประพันธ์บรรณกิจ (Corresponding author)' },
            ].map((opt) => (
              <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="applicant_status"
                  value={opt.value}
                  checked={formData.applicant_status === opt.value}
                  onChange={(e) => handleInputChange('applicant_status', e.target.value)}
                  className="w-4 h-4 text-[#0066CC] focus:ring-[#0066CC]"
                />
                <span className="text-sm text-[#333333]">{opt.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* ประเภทของผลงาน */}
        <div className="bg-white border border-[#E0E0E0] rounded-lg p-4 space-y-4">
          <h3 className="text-sm font-bold text-[#0066CC] flex items-center gap-2 border-b border-[#E0E0E0] pb-2">
            <i className="fa-solid fa-circle text-[6px]"></i>
            ประเภทของผลงาน
          </h3>

          <div className="space-y-3">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.research_group_1 === 'ใช่'}
                onChange={(e) => handleInputChange('research_group_1', e.target.checked ? 'ใช่' : '')}
                className="mt-1 w-4 h-4 rounded border-[#E0E0E0] text-[#0066CC] focus:ring-[#0066CC]"
              />
              <span className="text-sm font-semibold text-[#333333]">กลุ่มที่ 1 งานวิจัย</span>
            </label>

            {formData.research_group_1 === 'ใช่' && (
              <div className="ml-6 pl-3 border-l-2 border-[#0066CC]/30 space-y-2">
                <p className="text-xs text-[#666666] font-medium">อยู่ในฐานข้อมูล:</p>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.intl_approved === 'ใช่'}
                    onChange={(e) => handleInputChange('intl_approved', e.target.checked ? 'ใช่' : '')}
                    className="mt-0.5 w-4 h-4 rounded border-[#E0E0E0] text-[#0066CC] focus:ring-[#0066CC]"
                  />
                  <span className="text-xs text-[#333333]">ระดับนานาชาติ ที่ ก.พ.อ. รับรอง</span>
                </label>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.mathscinet === 'ใช่'}
                    onChange={(e) => handleInputChange('mathscinet', e.target.checked ? 'ใช่' : '')}
                    className="mt-0.5 w-4 h-4 rounded border-[#E0E0E0] text-[#0066CC] focus:ring-[#0066CC]"
                  />
                  <span className="text-xs text-[#333333]">MathsciNet</span>
                </label>
                <div className="space-y-1">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.eric_wos === 'ใช่'}
                      onChange={(e) => handleInputChange('eric_wos', e.target.checked ? 'ใช่' : '')}
                      className="mt-0.5 w-4 h-4 rounded border-[#E0E0E0] text-[#0066CC] focus:ring-[#0066CC]"
                    />
                    <span className="text-xs text-[#333333]">ERIC Web of Science</span>
                  </label>
                  <div className="ml-6 flex flex-wrap gap-2">
                    {[
                      { name: 'scie', label: 'SCIE' },
                      { name: 'pubmed', label: 'Pubmed' },
                      { name: 'scopus', label: 'Scopus' },
                      { name: 'project_muse', label: 'Project Muse' },
                      { name: 'ssci', label: 'SSCI' },
                      { name: 'ahci', label: 'AHCI' },
                    ].map((item) => (
                      <label key={item.name} className="flex items-center gap-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData[item.name] === 'ใช่'}
                          onChange={(e) => handleInputChange(item.name, e.target.checked ? 'ใช่' : '')}
                          className="w-3.5 h-3.5 rounded border-[#E0E0E0] text-[#0066CC] focus:ring-[#0066CC]"
                        />
                        <span className="text-[11px] text-[#666666]">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.jstor === 'ใช่'}
                    onChange={(e) => handleInputChange('jstor', e.target.checked ? 'ใช่' : '')}
                    className="mt-0.5 w-4 h-4 rounded border-[#E0E0E0] text-[#0066CC] focus:ring-[#0066CC]"
                  />
                  <span className="text-xs text-[#333333]">JSTOR</span>
                </label>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.national_indexed === 'ใช่'}
                    onChange={(e) => handleInputChange('national_indexed', e.target.checked ? 'ใช่' : '')}
                    className="mt-0.5 w-4 h-4 rounded border-[#E0E0E0] text-[#0066CC] focus:ring-[#0066CC]"
                  />
                  <span className="text-xs text-[#333333]">ระดับชาติ (จะต้องเป็นวารสารที่มีคุณภาพและเป็นที่ยอมรับในสาขาวิชานั้นๆ, ตีพิมพ์อย่างต่อเนื่องสม่ำเสมอ อย่างน้อย 3 ปี และมีจำนวนผู้ทรงคุณวุฒิ (peer reviewer) จากหลากหลายสถาบัน อย่างน้อย 3 คน) / กรณีผลงานเผยแพร่ก่อนวันที่ 29 เมษายน 2565 สามารถใช้ผลงานที่ตีพิมพ์ในฐานข้อมูล TCI 1 หรือ TCI 2 ได้โดยอนุโลม</span>
                </label>
              </div>
            )}
          </div>

          <div className="border-t border-[#E0E0E0] pt-4 space-y-3">
            <p className="text-xs font-semibold text-[#333333] mb-3">ประเภทผลงานอื่น ๆ</p>
            {[
              { name: 'academic_works_for_industry', label: 'ผลงานวิชาการเพื่ออุตสาหกรรม' },
              { name: 'teaching_learning_development', label: 'ผลงานเพื่อพัฒนาการเรียนการสอน' },
              { name: 'public_policy_development', label: 'ผลงานเพื่อพัฒนานโยบายสาธารณะ' },
              { name: 'science_technology_creative', label: 'ผลงานสร้างสรรค์ด้านวิทยาศาสตร์และเทคโนโลยี' },
              { name: 'dictionaries_encyclopedias', label: 'พจนานุกรม สารานุกรม นามานุกรม' },
              { name: 'aesthetics_art_creative', label: 'ผลงานสร้างสรรค์ด้านสุนทรียะ ศิลปะ' },
              { name: 'social_service', label: 'ผลงานวิชาการรับใช้สังคม' },
              { name: 'textbook', label: 'ตำรา' },
              { name: 'book', label: 'หนังสือ' },
              { name: 'academic_article', label: 'บทความทางวิชาการ' },
            ].map((item) => (
              <label key={item.name} className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData[item.name] === 'ใช่'}
                  onChange={(e) => handleInputChange(item.name, e.target.checked ? 'ใช่' : '')}
                  className="mt-0.5 w-4 h-4 rounded border-[#E0E0E0] text-[#0066CC] focus:ring-[#0066CC]"
                />
                <span className="text-sm text-[#333333]">{item.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* รายละเอียดของการมีส่วนร่วม */}
        <div className="bg-[#F5F5F5] rounded-lg p-4">
          <h3 className="text-sm font-semibold text-[#333333] mb-3">รายละเอียดของการมีส่วนร่วม</h3>
          <div className="space-y-3">
            <div>
              <Label className="text-[10px] text-[#999999]">บทบาทในการมีส่วนร่วม</Label>
              <Input
                value={formData.involvement_role || ''}
                onChange={(e) => handleInputChange('involvement_role', e.target.value)}
                className="w-full mt-1 bg-white text-sm border border-[#E0E0E0] rounded px-2 py-1"
                placeholder="ระบุบทบาท"
              />
            </div>
            <div>
              <Label className="text-[10px] text-[#999999]">รายละเอียดการมีส่วนร่วม</Label>
              <Textarea
                value={formData.involvement_details || ''}
                onChange={(e) => handleInputChange('involvement_details', e.target.value)}
                className="w-full mt-1 bg-white text-sm border border-[#E0E0E0] rounded px-2 py-1"
                placeholder="ระบุรายละเอียด"
                rows={3}
              />
            </div>
            <div>
              <Label className="text-[10px] text-[#999999]">สัดส่วนการมีส่วนร่วม (รอยละ)</Label>
              <Input
                type="number"
                value={formData.involvement_percentage || ''}
                onChange={(e) => handleInputChange('involvement_percentage', e.target.value)}
                className="w-full mt-1 bg-white text-sm border border-[#E0E0E0] rounded px-2 py-1"
                placeholder="0"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  // VC2 specific rendering
  const renderVC2Form = () => {
    return (
      <div className="space-y-6">
        {/* Unit Info - Read-only */}
        <div className="bg-[#F5F5F5] rounded-lg p-4">
          <h3 className="text-sm font-semibold text-[#333333] mb-3">ข้อมูลหน่วยงาน</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-[10px] text-[#999999]">สังกัด</Label>
              <p className="text-sm text-[#333333] mt-1">{userMock.vc2.university || '-'}</p>
            </div>
            <div>
              <Label className="text-[10px] text-[#999999]">คณะ</Label>
              <p className="text-sm text-[#333333] mt-1">{userMock.vc2.faculty || '-'}</p>
            </div>
            <div className="col-span-2">
              <Label className="text-[10px] text-[#999999]">ภาควิชา</Label>
              <p className="text-sm text-[#333333] mt-1">{userMock.vc2.department || '-'}</p>
            </div>
          </div>
        </div>

        {/* Education Cards - Read-only */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-[#333333]">ประวัติการศึกษา</h3>
          {userMock.vc1.phd && (
            <div className="bg-[#F5F5F5] rounded-lg p-3 border-l-4 border-[#0066CC]">
              <p className="text-xs font-semibold text-[#0066CC]">ปริญญาเอก (PhD)</p>
              <p className="text-sm text-[#333333]">{userMock.vc1.phd}</p>
              <p className="text-xs text-[#999999]">{userMock.vc1.institution_name_country} ({userMock.vc1.phd_year_of_graduation})</p>
            </div>
          )}
          {userMock.vc1.master_of_science && (
            <div className="bg-[#F5F5F5] rounded-lg p-3 border-l-4 border-[#0066CC]">
              <p className="text-xs font-semibold text-[#0066CC]">ปริญญาโท (MSc)</p>
              <p className="text-sm text-[#333333]">{userMock.vc1.master_of_science}</p>
              <p className="text-xs text-[#999999]">{userMock.vc1.institution_name_country} ({userMock.vc1.master_of_science_year_of_graduation})</p>
            </div>
          )}
          {userMock.vc1.bachelor_of_science && (
            <div className="bg-[#F5F5F5] rounded-lg p-3 border-l-4 border-[#0066CC]">
              <p className="text-xs font-semibold text-[#0066CC]">ปริญญาตรี (BSc)</p>
              <p className="text-sm text-[#333333]">{userMock.vc1.bachelor_of_science}</p>
              <p className="text-xs text-[#999999]">{userMock.vc1.institution_name_country} ({userMock.vc1.bachelor_of_science_year_of_graduation})</p>
            </div>
          )}
        </div>

        {/* Service History */}
        <div className="bg-[#F5F5F5] rounded-lg p-4">
          <h3 className="text-sm font-semibold text-[#333333] mb-3">ประวัติการรับราชการ</h3>
          <div className="space-y-3">
            <div>
              <Label className="text-[10px] text-[#999999]">ประวัติการรับราชการ</Label>
              <p className="text-sm text-[#333333] mt-1">{userMock.vc2.official_history || '-'}</p>
            </div>
            <div>
              <Label className="text-[10px] text-[#999999]">อายุราชการ</Label>
              <p className="text-sm text-[#333333] mt-1">
                {userMock.vc2.years_of_service_years} ปี {userMock.vc2.years_of_service_months} เดือน
              </p>
            </div>
          </div>
        </div>

        {/* Workload Card */}
        <div className="bg-white border border-[#E0E0E0] rounded-lg p-4 space-y-4">
          <h3 className="text-sm font-semibold text-[#333333]">ภาระงานย้อนหลัง 3 ปี</h3>

          {/* 3.1 งานสอน */}
          <div className="border-t border-[#E0E0E0] pt-4">
            <p className="text-xs font-semibold text-[#333333] mb-3">งานสอน - บรรยายและปฏิบัติการ</p>
            <div className="space-y-3">
              {lectureRows.map((row, idx) => (
                <div key={idx} className="bg-[#F5F5F5] rounded-lg p-3 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label className="text-[10px] text-[#999999]">ระดับ</Label>
                      <select
                        value={row.level}
                        onChange={(e) => handleLectureChange(idx, 'level', e.target.value)}
                        className="w-full mt-1 bg-white text-sm border border-[#E0E0E0] rounded px-2 py-1"
                      >
                        <option value="">เลือก</option>
                        <option value="ปริญญาตรี">ปริญญาตรี</option>
                        <option value="บัณฑิตศึกษา">บัณฑิตศึกษา</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <Label className="text-[10px] text-[#999999]">รายวิชาที่สอน</Label>
                    <Input
                      value={row.subject}
                      onChange={(e) => handleLectureChange(idx, 'subject', e.target.value)}
                      className="w-full bg-white text-sm border border-[#E0E0E0] rounded px-2 py-1"
                      placeholder="ระบุรายวิชา"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label className="text-[10px] text-[#999999]">ช.ม./สัปดาห์</Label>
                      <Input
                        type="number"
                        value={row.hours}
                        onChange={(e) => handleLectureChange(idx, 'hours', e.target.value)}
                        className="w-full bg-white text-sm border border-[#E0E0E0] rounded px-2 py-1"
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <Label className="text-[10px] text-[#999999]">ภาค</Label>
                      <select
                        value={row.semester_part}
                        onChange={(e) => handleLectureChange(idx, 'semester_part', e.target.value)}
                        className="w-full bg-white text-sm border border-[#E0E0E0] rounded px-2 py-1"
                      >
                        <option value="">เลือก</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <Label className="text-[10px] text-[#999999]">ปีการศึกษา</Label>
                    <Input
                      type="number"
                      value={row.semester_year}
                      onChange={(e) => handleLectureChange(idx, 'semester_year', e.target.value)}
                      className="w-full bg-white text-sm border border-[#E0E0E0] rounded px-2 py-1"
                      placeholder="ปีการศึกษา"
                    />
                  </div>
                  {lectureRows.length > 1 && (
                    <button
                      onClick={() => removeLectureRow(idx)}
                      className="mt-2 w-full flex items-center justify-center gap-2 py-1 text-xs text-[#CC0000] hover:bg-[#FFEBEE] rounded transition-colors"
                    >
                      <Trash2 className="w-3 h-3" />
                      ลบ
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={addLectureRow}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs text-[#0066CC] border border-[#0066CC] rounded-lg hover:bg-[#E3F2FD] transition-colors"
              >
                <Plus className="w-3 h-3" />
                เพิ่มเติม
              </button>
            </div>
          </div>

          {/* 3.2 งานควบคุมวิทยานิพนธ์ */}
          <div className="border-t border-[#E0E0E0] pt-4">
            <p className="text-xs font-semibold text-[#333333] mb-3">งานควบคุมวิทยานิพนธ์</p>
            <div className="space-y-3">
              {thesisEntries.map((entry, idx) => (
                <div key={idx} className="bg-[#F5F5F5] rounded-lg p-3 border-l-4 border-[#0066CC] space-y-2">
                  <div>
                    <Label className="text-[10px] text-[#999999]">ชื่องาน/หัวข้อวิทยานิพนธ์</Label>
                    <Input
                      value={entry.title}
                      onChange={(e) => handleThesisChange(idx, 'title', e.target.value)}
                      className="w-full mt-1 bg-white text-sm border border-[#E0E0E0] rounded px-2 py-1"
                      placeholder="ระบุชื่องาน"
                    />
                  </div>
                  <div>
                    <Label className="text-[10px] text-[#999999]">ชื่อนิสิต</Label>
                    <Input
                      value={entry.student}
                      onChange={(e) => handleThesisChange(idx, 'student', e.target.value)}
                      className="w-full mt-1 bg-white text-sm border border-[#E0E0E0] rounded px-2 py-1"
                      placeholder="ระบุชื่อนิสิต"
                    />
                  </div>
                  {thesisEntries.length > 1 && (
                    <button
                      onClick={() => removeThesisEntry(idx)}
                      className="mt-2 w-full flex items-center justify-center gap-2 py-1 text-xs text-[#CC0000] hover:bg-[#FFEBEE] rounded transition-colors"
                    >
                      <Trash2 className="w-3 h-3" />
                      ลบ
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={addThesisEntry}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs text-[#0066CC] border border-[#0066CC] rounded-lg hover:bg-[#E3F2FD] transition-colors"
              >
                <Plus className="w-3 h-3" />
                เพิ่มเติม
              </button>
            </div>
          </div>

          {/* 3.3 งานบริการทางวิชาการ */}
          <div className="border-t border-[#E0E0E0] pt-4">
            <p className="text-xs font-semibold text-[#333333] mb-3">งานบริการทางวิชาการ</p>
            <p className="text-[10px] text-[#999999] mb-3">(โปรดระบุประเภทของกิจกรรม และปริมาณเวลาที่ใช้ต่อสัปดาห์)</p>
            <div className="space-y-3">
              {serviceEntries.map((entry, idx) => (
                <div key={idx} className="bg-[#F5F5F5] rounded-lg p-3 space-y-2">
                  <div>
                    <Label className="text-[10px] text-[#999999]">ประเภทของกิจกรรม</Label>
                    <Input
                      value={entry.type}
                      onChange={(e) => handleServiceChange(idx, 'type', e.target.value)}
                      className="w-full mt-1 bg-white text-sm border border-[#E0E0E0] rounded px-2 py-1"
                      placeholder="ระบุประเภท"
                    />
                  </div>
                  <div>
                    <Label className="text-[10px] text-[#999999]">ปริมาณเวลาที่ใช้ต่อสัปดาห์</Label>
                    <div className="flex gap-2 mt-1">
                      <Input
                        type="number"
                        value={entry.hours}
                        onChange={(e) => handleServiceChange(idx, 'hours', e.target.value)}
                        className="flex-1 bg-white text-sm border border-[#E0E0E0] rounded px-2 py-1"
                        placeholder="ระบุจำนวน"
                      />
                      <select
                        value={timeUnits.academic_service_hours}
                        onChange={(e) => handleTimeUnitChange('academic_service_hours', e.target.value)}
                        className="bg-white text-sm border border-[#E0E0E0] rounded px-2 py-1"
                      >
                        <option value="hr">ชั่วโมง</option>
                        <option value="min">นาที</option>
                      </select>
                    </div>
                  </div>
                  {serviceEntries.length > 1 && (
                    <button
                      onClick={() => removeServiceEntry(idx)}
                      className="mt-2 w-full flex items-center justify-center gap-2 py-1 text-xs text-[#CC0000] hover:bg-[#FFEBEE] rounded transition-colors"
                    >
                      <Trash2 className="w-3 h-3" />
                      ลบ
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={addServiceEntry}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs text-[#0066CC] border border-[#0066CC] rounded-lg hover:bg-[#E3F2FD] transition-colors"
              >
                <Plus className="w-3 h-3" />
                เพิ่มเติม
              </button>
            </div>
          </div>

          {/* 3.4 งานบริหาร */}
          <div className="border-t border-[#E0E0E0] pt-4">
            <p className="text-xs font-semibold text-[#333333] mb-3">งานบริหาร</p>
            <p className="text-[10px] text-[#999999] mb-3">(โปรดระบุงานบริหารที่มีส่วนรับผิดชอบโดยตรง และปริมาณเวลาที่ใช้ต่อสัปดาห์)</p>
            <div className="space-y-3">
              {adminEntries.map((entry, idx) => (
                <div key={idx} className="bg-[#F5F5F5] rounded-lg p-3 space-y-2">
                  <div>
                    <Label className="text-[10px] text-[#999999]">งานบริหารที่มีส่วนรับผิดชอบโดยตรง</Label>
                    <Input
                      value={entry.work}
                      onChange={(e) => handleAdminChange(idx, 'work', e.target.value)}
                      className="w-full mt-1 bg-white text-sm border border-[#E0E0E0] rounded px-2 py-1"
                      placeholder="ระบุงาน"
                    />
                  </div>
                  <div>
                    <Label className="text-[10px] text-[#999999]">ปริมาณเวลาที่ใช้ต่อสัปดาห์</Label>
                    <div className="flex gap-2 mt-1">
                      <Input
                        type="number"
                        value={entry.hours}
                        onChange={(e) => handleAdminChange(idx, 'hours', e.target.value)}
                        className="flex-1 bg-white text-sm border border-[#E0E0E0] rounded px-2 py-1"
                        placeholder="ระบุจำนวน"
                      />
                      <select
                        value={timeUnits.administrative_work_hours}
                        onChange={(e) => handleTimeUnitChange('administrative_work_hours', e.target.value)}
                        className="bg-white text-sm border border-[#E0E0E0] rounded px-2 py-1"
                      >
                        <option value="hr">ชั่วโมง</option>
                        <option value="min">นาที</option>
                      </select>
                    </div>
                  </div>
                  {adminEntries.length > 1 && (
                    <button
                      onClick={() => removeAdminEntry(idx)}
                      className="mt-2 w-full flex items-center justify-center gap-2 py-1 text-xs text-[#CC0000] hover:bg-[#FFEBEE] rounded transition-colors"
                    >
                      <Trash2 className="w-3 h-3" />
                      ลบ
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={addAdminEntry}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs text-[#0066CC] border border-[#0066CC] rounded-lg hover:bg-[#E3F2FD] transition-colors"
              >
                <Plus className="w-3 h-3" />
                เพิ่มเติม
              </button>
            </div>
          </div>

          {/* 3.5 งานอื่น ๆ */}
          <div className="border-t border-[#E0E0E0] pt-4">
            <p className="text-xs font-semibold text-[#333333] mb-3">งานอื่น ๆ ที่เกี่ยวข้อง</p>
            <p className="text-[10px] text-[#999999] mb-3">(โปรดระบุประเภทของงาน และปริมาณเวลาที่ใช้ต่อสัปดาห์)</p>
            <div className="space-y-3">
              {otherWorkEntries.map((entry, idx) => (
                <div key={idx} className="bg-[#F5F5F5] rounded-lg p-3 space-y-2">
                  <div>
                    <Label className="text-[10px] text-[#999999]">ประเภทของงาน</Label>
                    <Input
                      value={entry.type}
                      onChange={(e) => handleOtherWorkChange(idx, 'type', e.target.value)}
                      className="w-full mt-1 bg-white text-sm border border-[#E0E0E0] rounded px-2 py-1"
                      placeholder="ระบุประเภท"
                    />
                  </div>
                  <div>
                    <Label className="text-[10px] text-[#999999]">ปริมาณเวลาที่ใช้ต่อสัปดาห์</Label>
                    <div className="flex gap-2 mt-1">
                      <Input
                        type="number"
                        value={entry.hours}
                        onChange={(e) => handleOtherWorkChange(idx, 'hours', e.target.value)}
                        className="flex-1 bg-white text-sm border border-[#E0E0E0] rounded px-2 py-1"
                        placeholder="ระบุจำนวน"
                      />
                      <select
                        value={timeUnits.other_related_work_hours}
                        onChange={(e) => handleTimeUnitChange('other_related_work_hours', e.target.value)}
                        className="bg-white text-sm border border-[#E0E0E0] rounded px-2 py-1"
                      >
                        <option value="hr">ชั่วโมง</option>
                        <option value="min">นาที</option>
                      </select>
                    </div>
                  </div>
                  {otherWorkEntries.length > 1 && (
                    <button
                      onClick={() => removeOtherWorkEntry(idx)}
                      className="mt-2 w-full flex items-center justify-center gap-2 py-1 text-xs text-[#CC0000] hover:bg-[#FFEBEE] rounded transition-colors"
                    >
                      <Trash2 className="w-3 h-3" />
                      ลบ
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={addOtherWorkEntry}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs text-[#0066CC] border border-[#0066CC] rounded-lg hover:bg-[#E3F2FD] transition-colors"
              >
                <Plus className="w-3 h-3" />
                เพิ่มเติม
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

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

          <div className="bg-white rounded-lg p-4 shadow-sm border border-[#E0E0E0]">
            {vcType === 'vc2' ? renderVC2Form() : vcType === 'vc3' ? renderVC3Form() : <div className="text-[#999999]">แบบฟอร์มอื่นอยู่ในการพัฒนา</div>}
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

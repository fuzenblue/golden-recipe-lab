import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Checkbox from '../../components/ui/Checkbox';
import userMock from '../../data/user-mock.json';

function ApplicationStep1() {
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const progress = 25;
  const data = userMock.vc1;

  const handleNext = () => {
    if (confirmed) {
      navigate('/applications/step2');
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
            <h2 className="text-base font-semibold text-[#333333]">
              ขั้นตอนที่ 1/4
            </h2>
            <span className="text-sm text-[#999999]">ข้อมูลส่วนบุคคลและการศึกษา</span>
          </div>
          <div className="w-full bg-[#E0E0E0] rounded-full h-2">
            <div
              className="bg-[#0066CC] h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0]">
            <div className="px-4 py-3 border-b border-[#E0E0E0]">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-user text-[#666666]"></i>
                <h3 className="font-semibold text-[#333333]">ข้อมูลส่วนบุคคล</h3>
                <button
                  onClick={() => setShowInfo(!showInfo)}
                  className="ml-auto w-5 h-5 rounded-full bg-[#FFCC02] hover:bg-[#E6B800] flex items-center justify-center text-xs text-white font-bold"
                >
                  i
                </button>
              </div>
              {showInfo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" onClick={() => setShowInfo(false)}>
                  <div className="bg-white rounded-lg shadow-xl max-w-sm w-full p-6" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center gap-2 mb-4">
                      <i className="fa-solid fa-circle-info text-[#FFCC02] text-lg"></i>
                      <h4 className="font-semibold text-[#333333]">ข้อมูลส่วนบุคคล</h4>
                    </div>
                    <p className="text-sm text-[#666666] mb-6">
                      หากต้องการแก้ไขข้อมูลส่วนบุคคล กรุณาติดต่อมหาวิทยาลัยของคุณ
                    </p>
                    <button
                      onClick={() => setShowInfo(false)}
                      className="w-full py-2 rounded-lg bg-[#0066CC] hover:bg-[#0052A3] text-white text-sm font-medium"
                    >
                      ตกลง
                    </button>
                  </div>
                </div>
              )}
            </div>

          <div className="p-4 space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-xs text-[#999999] mb-1">ชื่อ</p>
                <p className="text-sm text-[#333333]">{data.firstname}</p>
              </div>
              <div className="flex-1">
                <p className="text-xs text-[#999999] mb-1">นามสกุล</p>
                <p className="text-sm text-[#333333]">{data.lastname}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-xs text-[#999999] mb-1">วันเกิด</p>
                <p className="text-sm text-[#333333]">{data.date_of_birth}</p>
              </div>
              <div className="flex-1">
                <p className="text-xs text-[#999999] mb-1">อายุ</p>
                <p className="text-sm text-[#333333]">{data.age} ปี</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-xs text-[#999999] mb-1">เบอร์โทรศัพท์</p>
                <p className="text-sm text-[#333333]">{data.telephone}</p>
              </div>
              <div className="flex-1">
                <p className="text-xs text-[#999999] mb-1">อีเมล</p>
                <p className="text-sm text-[#333333]">{data.email}</p>
              </div>
            </div>

            <div className="h-px bg-[#E0E0E0]" />

            <div>
              <div className="flex items-center gap-2 mb-2">
                <i className="fa-solid fa-building-columns text-[#666666]"></i>
                <p className="text-sm font-semibold text-[#333333]">สังกัด</p>
              </div>
              <div className="pl-7 space-y-1">
                <p className="text-sm text-[#333333]">
                  <span className="text-[#999999]">มหาวิทยาลัย:</span> {data.university}
                </p>
                <p className="text-sm text-[#333333]">
                  <span className="text-[#999999]">คณะ:</span> {data.faculty}
                </p>
                <p className="text-sm text-[#333333]">
                  <span className="text-[#999999]">สาขา:</span> {data.department}
                </p>
              </div>
            </div>

            <div className="h-px bg-[#E0E0E0]" />

            <div>
              <div className="flex items-center gap-2 mb-2">
                <i className="fa-solid fa-graduation-cap text-[#666666]"></i>
                <p className="text-sm font-semibold text-[#333333]">การศึกษาระดับอุดมศึกษา</p>
              </div>
              <div className="pl-7 space-y-3">
                <div className="bg-[#F5F5F5] rounded p-3">
                  <p className="text-xs font-semibold text-[#0066CC] mb-1">ปรัชญาดุษฎีบัณฑิต (Ph.D.)</p>
                  <p className="text-xs text-[#999999]">สาขา: {data.phd}</p>
                  <p className="text-xs text-[#999999]">ปี พ.ศ. ที่จบ: {data.phd_year_of_graduation}</p>
                  <p className="text-xs text-[#999999]">สถาบัน: {data.institution_name_country}</p>
                </div>
                <div className="bg-[#F5F5F5] rounded p-3">
                  <p className="text-xs font-semibold text-[#0066CC] mb-1">วิทยาศาสตรมหาบัณฑิต (M.Sc.)</p>
                  <p className="text-xs text-[#999999]">สาขา: {data.master_of_science}</p>
                  <p className="text-xs text-[#999999]">ปี พ.ศ. ที่จบ: {data.master_of_science_year_of_graduation}</p>
                  <p className="text-xs text-[#999999]">สถาบัน: {data.institution_name_country}</p>
                </div>
                <div className="bg-[#F5F5F5] rounded p-3">
                  <p className="text-xs font-semibold text-[#0066CC] mb-1">วิทยาศาสตรบัณฑิต (B.Sc.)</p>
                  <p className="text-xs text-[#999999]">สาขา: {data.bachelor_of_science}</p>
                  <p className="text-xs text-[#999999]">ปี พ.ศ. ที่จบ: {data.bachelor_of_science_year_of_graduation}</p>
                  <p className="text-xs text-[#999999]">สถาบัน: {data.institution_name_country}</p>
                </div>
              </div>
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
    </div>
  );
}

export default ApplicationStep1;

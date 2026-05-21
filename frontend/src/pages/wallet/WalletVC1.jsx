import { useState } from 'react';
import userMock from '../../data/user-mock.json';

function WalletVC1() {
  const data = userMock.vc1;
  const [showInfo, setShowInfo] = useState(false);

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
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-user text-[#0066CC]"></i>
            <h4 className="text-sm font-semibold text-[#333333]">ข้อมูลส่วนบุคคล</h4>
            <button
              onClick={() => setShowInfo(true)}
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
          <div className="pl-6 space-y-2">
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-xs text-[#999999]">ชื่อ</p>
                <p className="text-sm text-[#333333]">{data.firstname}</p>
              </div>
              <div className="flex-1">
                <p className="text-xs text-[#999999]">นามสกุล</p>
                <p className="text-sm text-[#333333]">{data.lastname}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-xs text-[#999999]">วันเกิด</p>
                <p className="text-sm text-[#333333]">{data.date_of_birth}</p>
              </div>
              <div className="flex-1">
                <p className="text-xs text-[#999999]">อายุ</p>
                <p className="text-sm text-[#333333]">{data.age} ปี</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-xs text-[#999999]">เบอร์โทรศัพท์</p>
                <p className="text-sm text-[#333333]">{data.telephone}</p>
              </div>
              <div className="flex-1">
                <p className="text-xs text-[#999999]">อีเมล</p>
                <p className="text-sm text-[#333333]">{data.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#E0E0E0]" />

        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <i className="fa-solid fa-building-columns text-[#0066CC]"></i>
            สังกัด
          </h4>
          <div className="pl-6 space-y-2">
            <div>
              <p className="text-xs text-[#999999]">มหาวิทยาลัย</p>
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

        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <i className="fa-solid fa-graduation-cap text-[#0066CC]"></i>
            การศึกษาระดับอุดมศึกษา
          </h4>

          <div className="pl-6 space-y-2">
            <div className="bg-[#F5F5F5] rounded p-3">
              <p className="text-xs font-semibold text-[#0066CC] mb-2">ปรัชญาดุษฎีบัณฑิต (Ph.D.)</p>
              <div className="space-y-1">
                <p className="text-xs text-[#999999]">สาขา: {data.phd}</p>
                <p className="text-xs text-[#999999]">ปี พ.ศ. ที่จบ: {data.phd_year_of_graduation}</p>
                <p className="text-xs text-[#999999]">สถาบัน: {data.institution_name_country}</p>
              </div>
            </div>
          </div>

          <div className="pl-6 space-y-2">
            <div className="bg-[#F5F5F5] rounded p-3">
              <p className="text-xs font-semibold text-[#0066CC] mb-2">วิทยาศาสตรมหาบัณฑิต (M.Sc.)</p>
              <div className="space-y-1">
                <p className="text-xs text-[#999999]">สาขา: {data.master_of_science}</p>
                <p className="text-xs text-[#999999]">ปี พ.ศ. ที่จบ: {data.master_of_science_year_of_graduation}</p>
                <p className="text-xs text-[#999999]">สถาบัน: {data.institution_name_country}</p>
              </div>
            </div>
          </div>

          <div className="pl-6 space-y-2">
            <div className="bg-[#F5F5F5] rounded p-3">
              <p className="text-xs font-semibold text-[#0066CC] mb-2">วิทยาศาสตรบัณฑิต (B.Sc.)</p>
              <div className="space-y-1">
                <p className="text-xs text-[#999999]">สาขา: {data.bachelor_of_science}</p>
                <p className="text-xs text-[#999999]">ปี พ.ศ. ที่จบ: {data.bachelor_of_science_year_of_graduation}</p>
                <p className="text-xs text-[#999999]">สถาบัน: {data.institution_name_country}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F5F5] px-4 py-3 border-t border-[#E0E0E0] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#00AA00]" />
          <span className="text-xs text-[#00AA00] font-medium">ยืนยันแล้ว</span>
        </div>
        <p className="text-xs text-[#999999]">อัพเดท: 20 พ.ค. 2569 09:30</p>
      </div>
    </div>
  );
}

export default WalletVC1;

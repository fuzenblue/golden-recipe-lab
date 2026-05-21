import BottomNav from '../components/BottomNav';
import {
  ArrowLeft, Camera, Lock, Key, History, LogOut, Shield,
  Bell, HelpCircle, FileText,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks';
import { logout } from '../store/slices/authSlice';

function Profile() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20">
      <header className="bg-white border-b border-[#E0E0E0] px-4 py-3 sticky top-0 z-10">
        <div className="max-w-[432px] mx-auto flex items-center gap-3">
          <Link to="/" className="p-1 hover:bg-[#F5F5F5] rounded-full">
            <ArrowLeft className="w-5 h-5 text-[#333333]" />
          </Link>
          <h1 className="text-lg font-semibold text-[#333333]">โปรไฟล์</h1>
        </div>
      </header>

      <div className="max-w-[432px] mx-auto px-4 py-6 space-y-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E0E0E0]">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-[#E3F2FD] flex items-center justify-center text-5xl text-[#0066CC]">
                <UserIcon />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#0066CC] rounded-full flex items-center justify-center text-white hover:bg-[#0052A3] transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-[#333333]">ดร.สมชาย ใจดี</h2>
            <p className="text-sm text-[#666666]">user@g.swu.ac.th</p>
          </div>
        </div>

        <Section title="ข้อมูลส่วนบุคคล">
          <InfoRow label="คำนำหน้า" value="ดร." />
          <InfoRow label="วันเกิด" value="15 มีนาคม 2528" />
          <InfoRow label="เลขบัตรประชาชน" value="1234567890123" />
        </Section>

        <Section title="ข้อมูลสถาบัน">
          <InfoRow label="มหาวิทยาลัย" value="มหาวิทยาลัยศรีนครินทรวิโรฒ (SWU)" />
          <InfoRow label="คณะ" value="คณะวิทยาศาสตร์" />
          <InfoRow label="ภาควิชา" value="ภาควิชาเคมี" />
          <InfoRow label="ตำแหน่ง" value="ผู้ช่วยศาสตราจารย์ (ผช.)" />
        </Section>

        <Section title="การตั้งค่า">
          <MenuButton icon={Bell} label="การแจ้งเตือน" />
          <MenuButton icon={Shield} label="ความปลอดภัย" />
        </Section>

        <Section title="ความปลอดภัย">
          <MenuButton icon={Key} label="เปลี่ยน PIN" />
          <MenuButton icon={Lock} label="เปลี่ยนรหัสผ่าน" />
          <MenuButton icon={History} label="ประวัติการเข้าสู่ระบบ" />
        </Section>

        <Section title="เกี่ยวกับ">
          <MenuButton icon={FileText} label="นโยบายความเป็นส่วนตัว" />
          <MenuButton icon={FileText} label="ข้อกำหนดการใช้งาน" />
          <MenuButton icon={HelpCircle} label="ความช่วยเหลือและคำติชม" />
          <div className="px-4 py-3">
            <p className="text-xs text-[#999999]">Version 1.0.0</p>
          </div>
        </Section>

        <button
          onClick={handleLogout}
          className="w-full px-4 py-3 bg-white border border-[#CC0000] text-[#CC0000] rounded-lg font-semibold hover:bg-[#CC0000] hover:text-white transition-colors flex items-center justify-center gap-2"
        >
          <LogOut className="w-5 h-5" />
          ออกจากระบบ
        </button>
      </div>

      <BottomNav />
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] overflow-hidden">
      <div className="px-4 py-3 bg-[#F5F5F5] border-b border-[#E0E0E0]">
        <h3 className="font-semibold text-[#333333]">{title}</h3>
      </div>
      <div className="divide-y divide-[#E0E0E0]">{children}</div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="px-4 py-3">
      <p className="text-xs text-[#999999] mb-1">{label}</p>
      <p className="text-sm text-[#333333]">{value}</p>
    </div>
  );
}

function MenuButton({ icon: Icon, label }) {
  return (
    <button className="w-full px-4 py-3 flex items-center gap-3 hover:bg-[#F5F5F5] transition-colors">
      <Icon className="w-5 h-5 text-[#666666]" />
      <span className="flex-1 text-left text-sm text-[#333333]">{label}</span>
      <span className="text-[#999999]">›</span>
    </button>
  );
}

function UserIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="5" />
      <path d="M3 21v-2a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7v2" />
    </svg>
  );
}

export default Profile;

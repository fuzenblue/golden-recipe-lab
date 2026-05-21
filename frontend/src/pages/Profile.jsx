import BottomNav from '../components/BottomNav';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks';
import { logout } from '../store/slices/authSlice';
import logoSrc from '../logo.png';

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
        <div className="flex items-center gap-3">
          <Link to="/" className="p-1 hover:bg-[#F5F5F5] rounded-full">
            <i className="fa-solid fa-arrow-left text-[#333333]"></i>
          </Link>
          <h1 className="text-lg font-semibold text-[#333333]">โปรไฟล์</h1>
        </div>
      </header>

      <div className="px-4 py-6 space-y-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E0E0E0]">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-[#E3F2FD] flex items-center justify-center">
                <img src={logoSrc} alt="Logo" className="w-16 h-16 object-contain rounded-lg" />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#0066CC] rounded-full flex items-center justify-center text-white hover:bg-[#0052A3] transition-colors">
                <i className="fa-solid fa-camera"></i>
              </button>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-[#333333]">สมชาย สาธิต</h2>
            <p className="text-sm text-[#666666]">demo@grl.ac.th</p>
          </div>
        </div>

        <Section title="ข้อมูลส่วนบุคคล">
          <InfoRow label="คำนำหน้า" value="นาย" />
          <InfoRow label="วันเกิด" value="20 มิถุนายน 2528" />
          <InfoRow label="เลขบัตรประชาชน" value="1-2345-67890-12-1" />
        </Section>

        <Section title="ข้อมูลสถาบัน">
          <InfoRow label="มหาวิทยาลัย" value="โกลเดน เรสสิพี แล็ป" />
          <InfoRow label="คณะ" value="คณะวิทยาศาสตร์และเทคโนโลยี" />
          <InfoRow label="ภาควิชา" value="วิทยาการคอมพิวเตอร์" />
          <InfoRow label="ตำแหน่ง" value="ผู้ช่วยศาสตราจารย์" />
        </Section>

        <Section title="การตั้งค่า">
          <MenuButton icon="fa-bell" label="การแจ้งเตือน" />
          <MenuButton icon="fa-shield-halved" label="ความปลอดภัย" />
        </Section>

        <Section title="ความปลอดภัย">
          <MenuButton icon="fa-key" label="เปลี่ยน PIN" />
          <MenuButton icon="fa-lock" label="เปลี่ยนรหัสผ่าน" />
          <MenuButton icon="fa-clock-rotate-left" label="ประวัติการเข้าสู่ระบบ" />
        </Section>

        <Section title="เกี่ยวกับ">
          <MenuButton icon="fa-file-lines" label="นโยบายความเป็นส่วนตัว" />
          <MenuButton icon="fa-file-lines" label="ข้อกำหนดการใช้งาน" to="/terms" />
          <MenuButton icon="fa-circle-question" label="ความช่วยเหลือ" />
          <div className="px-4 py-3">
            <p className="text-xs text-[#999999]">เวอร์ชัน 1.0.0</p>
          </div>
        </Section>

        <button
          onClick={handleLogout}
          className="w-full px-4 py-3 bg-white border border-[#CC0000] text-[#CC0000] rounded-lg font-semibold hover:bg-[#CC0000] hover:text-white transition-colors flex items-center justify-center gap-2"
        >
          <i className="fa-solid fa-right-from-bracket"></i>
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

function MenuButton({ icon, label, to }) {
  const content = (
    <>
      <i className={"fa-solid " + icon + " w-5 text-[#666666]"}></i>
      <span className="flex-1 text-left text-sm text-[#333333]">{label}</span>
      <span className="text-[#999999]">›</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className="w-full px-4 py-3 flex items-center gap-3 hover:bg-[#F5F5F5] transition-colors">
        {content}
      </Link>
    );
  }

  return (
    <button className="w-full px-4 py-3 flex items-center gap-3 hover:bg-[#F5F5F5] transition-colors">
      {content}
    </button>
  );
}

export default Profile;

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks';
import { fetchDemoCredentials } from '../store/slices/credentialsSlice';
import BottomNav from '../components/BottomNav';
import {
  CheckCircle, Edit, FileText, Plus, ChevronRight, Bell, Clipboard, Target, FolderOpen,
  FileCheck, User, Building2, Briefcase, GraduationCap, Calendar, AlertCircle,
} from 'lucide-react';

function Dashboard() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { items: credentials } = useAppSelector((state) => state.credentials);

  useEffect(() => {
    if (credentials.length === 0) {
      dispatch(fetchDemoCredentials());
    }
  }, [dispatch, credentials.length]);

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20">
      <header className="bg-white border-b border-[#E0E0E0] px-4 py-3">
        <div className="max-w-[432px] mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-base font-semibold text-[#333333]">
              Researcher Digital Wallet
            </h1>
            <p className="text-xs text-[#999999]">Thai Academic Edition</p>
          </div>
          <button className="w-8 h-8 rounded-full hover:bg-[#F5F5F5] flex items-center justify-center">
            <Bell className="w-5 h-5 text-[#666666]" />
          </button>
        </div>
      </header>

      <div className="max-w-[432px] mx-auto px-4 py-6 space-y-6">
        <div className="bg-gradient-to-br from-[#0066CC] to-[#004C99] rounded-xl shadow-lg p-6 text-white">
          <div className="flex gap-4 mb-4">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <User className="w-10 h-10 text-white/80" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold">{user?.name || 'ดร.สมชาย ใจดี'}</h2>
              <p className="text-sm text-white/80">ID: 1234567890123</p>
              <div className="flex items-center gap-1 mt-1">
                <CheckCircle className="w-3 h-3" />
                <span className="text-xs">ยืนยันแล้ว</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-white/70 text-xs flex items-center gap-1">
                <Building2 className="w-3 h-3" /> สังกัด
              </p>
              <p className="font-medium">{user?.department || 'คณะวิทยาศาสตร์'}</p>
            </div>
            <div>
              <p className="text-white/70 text-xs flex items-center gap-1">
                <Briefcase className="w-3 h-3" /> ตำแหน่ง
              </p>
              <p className="font-medium">{user?.position || 'ผู้ช่วยศาสตราจารย์'}</p>
            </div>
            <div>
              <p className="text-white/70 text-xs flex items-center gap-1">
                <GraduationCap className="w-3 h-3" /> ภาควิชา
              </p>
              <p className="font-medium">วิทยาการคอมพิวเตอร์</p>
            </div>
            <div>
              <p className="text-white/70 text-xs flex items-center gap-1">
                <Calendar className="w-3 h-3" /> หมดอายุ
              </p>
              <p className="font-medium">15 มี.ค. 2570</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Link
            to="/applications"
            className="bg-white rounded-lg p-4 shadow-sm border border-[#E0E0E0] hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#E3F2FD] flex items-center justify-center">
                <Edit className="w-6 h-6 text-[#0066CC]" />
              </div>
              <div>
                <p className="font-semibold text-[#333333] text-sm">ส่งคำร้องใหม่</p>
                <p className="text-xs text-[#999999]">Submit Request</p>
              </div>
            </div>
          </Link>

          <Link
            to="/wallet"
            className="bg-white rounded-lg p-4 shadow-sm border border-[#E0E0E0] hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#E3F2FD] flex items-center justify-center">
                <FolderOpen className="w-6 h-6 text-[#0066CC]" />
              </div>
              <div>
                <p className="font-semibold text-[#333333] text-sm">เอกสารของฉัน</p>
                <p className="text-xs text-[#999999]">My Documents</p>
              </div>
            </div>
          </Link>

          <Link
            to="/applications"
            className="bg-white rounded-lg p-4 shadow-sm border border-[#E0E0E0] hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#E3F2FD] flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-[#0066CC]" />
              </div>
              <div>
                <p className="font-semibold text-[#333333] text-sm">ตรวจสอบคำขอ</p>
                <p className="text-xs text-[#999999]">Check Requests</p>
              </div>
            </div>
          </Link>

          <Link
            to="/profile"
            className="bg-white rounded-lg p-4 shadow-sm border border-[#E0E0E0] hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#E3F2FD] flex items-center justify-center">
                <Plus className="w-6 h-6 text-[#0066CC]" />
              </div>
              <div>
                <p className="font-semibold text-[#333333] text-sm">เพิ่มเติม</p>
                <p className="text-xs text-[#999999]">More Services</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-[#E0E0E0]">
          <h3 className="font-semibold text-[#333333] mb-3">กิจกรรมล่าสุด</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#00AA00]/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-[#00AA00]" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#333333]">คำร้องของคุณได้รับการอนุมัติแล้ว</p>
                <p className="text-xs text-[#999999]">2 วันที่แล้ว</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FF9900]/10 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-4 h-4 text-[#FF9900]" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#333333]">เอกสารจะหมดอายุใน 30 วัน</p>
                <p className="text-xs text-[#999999]">5 วันที่แล้ว</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] p-4">
          <h2 className="text-sm font-semibold text-[#333333] mb-3 flex items-center gap-2">
            <Clipboard className="w-4 h-4" />
            VERIFIABLE CREDENTIALS
          </h2>
          <div className="space-y-2">
            {[
              { id: 'VC1', name: 'ข้อมูลส่วนตัว', status: 'verified' },
              { id: 'VC2', name: 'ประวัติการทำงาน', status: 'verified' },
              { id: 'VC3', name: 'ผลงานวิชาการ', status: 'pending' },
            ].map((vc) => (
              <Link
                key={vc.id}
                to="/wallet"
                className="flex items-center justify-between p-3 rounded border border-[#E0E0E0] hover:bg-[#F5F5F5] transition-colors"
              >
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-sm font-medium text-[#333333]">{vc.id}</span>
                  <span className="text-sm text-[#666666]">|</span>
                  <span className="text-sm text-[#666666]">{vc.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      vc.status === 'verified' ? 'bg-[#00AA00]' : 'bg-[#FF9900]'
                    }`}
                  />
                  <span
                    className={`text-xs ${
                      vc.status === 'verified' ? 'text-[#00AA00]' : 'text-[#FF9900]'
                    }`}
                  >
                    {vc.status}
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#999999]" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-[#333333] flex items-center gap-2">
            <Target className="w-4 h-4" />
            QUICK ACTIONS
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <Link
              to="/applications"
              className="bg-white rounded-lg p-4 shadow-sm border border-[#E0E0E0] hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#E3F2FD] flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#0066CC]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#333333]">สมัครตำแหน่ง</p>
                  <p className="text-xs text-[#999999]">Apply Position</p>
                </div>
              </div>
            </Link>

            <Link
              to="/wallet"
              className="bg-white rounded-lg p-4 shadow-sm border border-[#E0E0E0] hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#E3F2FD] flex items-center justify-center">
                  <FolderOpen className="w-6 h-6 text-[#0066CC]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#333333]">ดูวุฒิบัตร</p>
                  <p className="text-xs text-[#999999]">View Credentials</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-[#E0E0E0]">
          <h2 className="text-sm font-semibold text-[#333333] mb-3 flex items-center gap-2">
            <FileCheck className="w-4 h-4" />
            APPLICATION STATUS
          </h2>

          <div className="text-center py-6">
            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[#F5F5F5] flex items-center justify-center">
              <Edit className="w-6 h-6 text-[#999999]" />
            </div>
            <p className="text-sm text-[#666666] mb-1">ไม่มีการสมัครงานที่กำลังดำเนินการ</p>
            <p className="text-xs text-[#999999] mb-3">No active applications</p>
            <Link
              to="/applications"
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#0066CC] text-white text-sm font-medium hover:bg-[#0052A3] transition-colors"
            >
              สมัครตำแหน่งใหม่ / Apply for Position
            </Link>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

export default Dashboard;

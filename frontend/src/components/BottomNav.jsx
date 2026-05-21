import { Home, Wallet, FileText, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

function BottomNav() {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'หน้าแรก', path: '/dashboard' },
    { icon: Wallet, label: 'กระเป๋า', path: '/wallet' },
    { icon: FileText, label: 'คำร้อง', path: '/applications' },
    { icon: User, label: 'โปรไฟล์', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E0E0E0] shadow-[0_-2px_4px_rgba(0,0,0,0.08)] z-50">
      <div className="max-w-[432px] mx-auto grid grid-cols-4 h-14">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center gap-0.5 transition-colors ${
                isActive
                  ? 'text-[#0066CC]'
                  : 'text-[#999999] hover:text-[#0066CC]'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'fill-current' : ''}`} />
              <span className="text-xs">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNav;

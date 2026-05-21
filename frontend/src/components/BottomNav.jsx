import { Link, useLocation } from 'react-router-dom';

function BottomNav() {
  const location = useLocation();

  const navItems = [
    { icon: 'fa-house', label: 'หน้าแรก', path: '/dashboard' },
    { icon: 'fa-wallet', label: 'กระเป๋า', path: '/wallet' },
    { icon: 'fa-file-pen', label: 'สมัคร', path: '/applications' },
    { icon: 'fa-user', label: 'โปรไฟล์', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[432px] bg-white border-t border-[#E0E0E0] shadow-[0_-2px_4px_rgba(0,0,0,0.08)] z-50">
      <div className="grid grid-cols-4 h-14">
        {navItems.map((item) => {
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
              <i className={`fa-solid ${item.icon} text-lg ${isActive ? '' : ''}`}></i>
              <span className="text-xs">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNav;

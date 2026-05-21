import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks';
import { logout } from '../store/slices/authSlice';

const bottomMenu = [
  { path: '/dashboard', icon: 'fa-house', textTh: 'Home', textEn: 'Home' },
  { path: '/wallet', icon: 'fa-wallet', textTh: 'Wallet', textEn: 'Wallet' },
  { path: '/applications', icon: 'fa-file-pen', textTh: 'Apply', textEn: 'Apply' },
  { path: '/settings', icon: 'fa-user', textTh: 'Profile', textEn: 'Profile' },
  { path: '/help', icon: 'fa-circle-question', textTh: 'More', textEn: 'More' },
];

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('hasPin');
    localStorage.removeItem('userPin');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col max-w-mobile mx-auto relative">
      <header className="sticky top-0 z-40 bg-base-100/95 backdrop-blur-sm border-b border-base-300">
        <div className="flex items-center justify-between px-4 h-14">
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-wallet text-white text-sm"></i>
            </div>
            <span className="font-bold text-base">Acard Wallet</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-sm btn-circle">
                <div className="indicator">
                  <i className="fa-regular fa-bell text-lg"></i>
                  <span className="badge badge-xs badge-error indicator-item"></span>
                </div>
              </label>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-sm btn-circle avatar">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-semibold">
                  {user?.name?.charAt(0) || 'U'}
                </div>
              </label>
              <ul tabIndex={0} className="mt-2 z-[100] p-2 shadow-lg menu menu-sm dropdown-content bg-base-100 rounded-box w-48 border border-base-200">
                <li className="menu-title px-3 py-1.5 border-b border-base-200">
                  <p className="font-semibold text-sm">{user?.name}</p>
                  <p className="text-xs text-base-content/60 truncate">{user?.email}</p>
                </li>
                <li><a onClick={() => navigate('/settings')}><i className="fa-solid fa-user w-4"></i> โปรไฟล์</a></li>
                <li><a onClick={() => navigate('/settings')}><i className="fa-solid fa-gear w-4"></i> Settings</a></li>
                <li><a onClick={handleLogout} className="text-error"><i className="fa-solid fa-right-from-bracket w-4"></i> ออกจากระบบ</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-20">
        <div className="px-4 py-4 space-y-4">
          <Outlet />
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 max-w-mobile mx-auto bg-base-100/95 backdrop-blur-sm border-t border-base-300 z-50 shadow-[0_-2px_4px_rgba(0,0,0,0.08)]">
        <div className="flex justify-around items-center h-14">
          {bottomMenu.map((item) => {
            const isActive = location.pathname === item.path ||
              (item.path === '/applications' && location.pathname.startsWith('/application'));
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center min-w-[44px] min-h-[44px] px-2 ${
                  isActive ? 'text-primary' : 'text-gray'
                }`}
              >
                <i className={`fa-solid ${item.icon} text-lg`}></i>
                <span className="text-[10px] mt-0.5 font-medium">{item.textTh}</span>
                {isActive && (
                  <div className="w-1 h-1 bg-primary rounded-full mt-0.5"></div>
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
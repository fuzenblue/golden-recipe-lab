import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks';

const menuItems = [
  { text: 'Dashboard', icon: 'fa-house', path: '/dashboard' },
  { text: 'Wallet', icon: 'fa-wallet', path: '/wallet' },
  { text: 'Applications', icon: 'fa-file-lines', path: '/applications' },
  { text: 'Teaching Records', icon: 'fa-graduation-cap', path: '/teaching' },
];

const secondaryItems = [
  { text: 'Trusted Issuers', icon: 'fa-shield-halved', path: '/issuers' },
  { text: 'Settings', icon: 'fa-gear', path: '/settings' },
  { text: 'Help', icon: 'fa-circle-question', path: '/help' },
];

const Sidebar = () => {
  const location = useLocation();
  const { user } = useAppSelector((state) => state.auth);
  const { items: credentials } = useAppSelector((state) => state.credentials);
  
  const verifiedCount = credentials.filter(c => c.status === 'verified' || c.status === 'ready').length;

  return (
    <div className="drawer-side z-40">
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <aside className="w-64 min-h-screen bg-primary text-primary-content flex flex-col">
        <div className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-white/20 rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-wallet text-xl"></i>
            </div>
            <div>
              <h2 className="font-bold text-lg">Acard Wallet</h2>
              <p className="text-xs opacity-70">{user?.institution || 'Researcher'}</p>
            </div>
          </div>
        </div>

        <div className="px-4 mx-4 bg-white/10 rounded-lg py-2 mb-4">
          <p className="text-xs opacity-70">Verified Credentials</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-success rounded-full" 
                style={{ width: `${credentials.length > 0 ? (verifiedCount / credentials.length) * 100 : 0}%` }}
              ></div>
            </div>
            <span className="text-xs font-semibold">{verifiedCount}/{credentials.length}</span>
          </div>
        </div>

        <ul className="px-2 flex-1">
          {menuItems.map((item) => (
            <li key={item.path} className="mb-1">
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                  location.pathname === item.path 
                    ? 'bg-white/15 font-semibold' 
                    : 'hover:bg-white/10'
                }`}
              >
                <i className={`fa-solid ${item.icon} w-5`}></i>
                <span>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="border-t border-white/10 px-2 py-4">
          {secondaryItems.map((item) => (
            <li key={item.path} className="mb-1 list-none">
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all opacity-80 hover:opacity-100 ${
                  location.pathname === item.path ? 'bg-white/15' : 'hover:bg-white/10'
                }`}
              >
                <i className={`fa-solid ${item.icon} w-5`}></i>
                <span>{item.text}</span>
              </Link>
            </li>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks';
import { logout } from '../store/slices/authSlice';

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-30 bg-base-100 border-b border-base-300">
      <div className="navbar px-4 lg:px-6">
        <div className="flex-1">
          <label htmlFor="my-drawer" className="btn btn-ghost lg:hidden">
            <i className="fa-solid fa-bars"></i>
          </label>
        </div>

        <div className="flex items-center gap-2">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <i className="fa-solid fa-bell text-lg"></i>
              <span className="badge badge-xs badge-error indicator-item"></span>
            </div>
          </button>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-9 rounded-full bg-primary text-primary-content flex items-center justify-center font-semibold">
                {user?.name?.charAt(0) || 'U'}
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[100] p-2 shadow-lg menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border border-base-200">
              <li className="menu-title px-4 py-2 border-b border-base-200">
                <p className="font-semibold">{user?.name}</p>
                <p className="text-xs text-base-content/60">{user?.email}</p>
              </li>
              <li><a onClick={() => navigate('/settings')}><i className="fa-solid fa-user w-5"></i> โปรไฟล์</a></li>
              <li><a onClick={() => navigate('/settings')}><i className="fa-solid fa-gear w-5"></i> ตั้งค่า</a></li>
              <li><a onClick={handleLogout} className="text-error"><i className="fa-solid fa-right-from-bracket w-5"></i> ออกจากระบบ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
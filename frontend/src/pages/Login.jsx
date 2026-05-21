import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { login } from '../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useAppSelector((state) => state.auth);
  const [email, setEmail] = useState('demo@swu.ac.th');
  const [password, setPassword] = useState('demo123');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (value) => {
    if (!value) return 'กรุณากรอกอีเมล';
    if (!value.includes('@')) return 'รูปแบบอีเมลไม่ถูกต้อง';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validateEmail(email);
    if (err) { setEmailError(err); return; }
    setEmailError('');
    const result = await dispatch(login({ email, password }));
    if (login.fulfilled.match(result)) {
      const hasPin = localStorage.getItem('hasPin');
      navigate(hasPin ? '/pin-verify' : '/pin-setup');
    }
  };

  return (
    <div className="min-h-screen bg-base-100 flex flex-col max-w-mobile mx-auto">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
            <i className="fa-solid fa-building-columns text-4xl text-primary"></i>
          </div>
          <h1 className="text-h2 text-center">Acard Wallet</h1>
          <p className="text-body-sm text-base-content/60 text-center mt-1">
            Present by Golden Recipe Lab
          </p>
        </div>

        {error && (
          <div role="alert" className="alert alert-error w-full max-w-sm mb-4">
            <i className="fa-solid fa-circle-exclamation"></i>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium"><i className="fa-regular fa-envelope mr-1"></i> อีเมลสถาบัน / Email</span>
            </label>
            <input
              type="email"
              placeholder="demo@swu.ac.th"
              className={`input input-bordered w-full ${emailError ? 'input-error' : ''}`}
              value={email}
              onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
              autoComplete="email"
            />
            {emailError && (
              <label className="label">
                <span className="label-text-alt text-error">{emailError}</span>
              </label>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium"><i className="fa-solid fa-lock mr-1"></i> รหัสผ่าน / Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="input input-bordered w-full pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 btn btn-ghost btn-xs"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
                aria-label={showPassword ? 'ซ่อนรหัสผ่าน' : 'แสดงรหัสผ่าน'}
              >
                <i className={`fa-regular ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
            </div>
          </div>

          <button
            type="submit"
            className={`btn btn-primary w-full text-btn ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'กำลังเข้า...' : 'เข้าสู่ระบบ / LOGIN'}
          </button>
        </form>

        <div className="flex flex-col items-center gap-2 mt-6 w-full max-w-sm">
          <a href="#" className="text-sm text-primary hover:underline">
            ลืมรหัสผ่าน? / Forgot Password?
          </a>
        </div>

        <div className="divider text-base-content/40 text-xs w-full max-w-sm my-6">
          Demo Account
        </div>

        <div className="bg-base-200 rounded-box p-4 w-full max-w-sm text-sm">
          <div className="flex justify-between items-center">
            <span className="text-base-content/60"><i className="fa-regular fa-envelope mr-1"></i> Email:</span>
            <span className="font-mono text-xs">demo@swu.ac.th</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-base-content/60"><i className="fa-solid fa-key mr-1"></i> Password:</span>
            <span className="font-mono text-xs">demo123</span>
          </div>
        </div>

        <p className="text-xs text-base-content/40 mt-6 text-center">
          ลงทะเบียนครั้งแรก? — First time? Contact your institution
        </p>
      </div>
    </div>
  );
};

export default Login;
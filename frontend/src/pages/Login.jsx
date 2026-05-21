import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Building2, Mail, Lock } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { login } from '../store/slices/authSlice';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Label from '../components/ui/Label';

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);
  const [email, setEmail] = useState('demo@swu.ac.th');
  const [password, setPassword] = useState('demo123');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('กรุณากรอกอีเมลและรหัสผ่าน');
      return;
    }

    const result = await dispatch(login({ email, password }));
    if (login.fulfilled.match(result)) {
      const hasPin = localStorage.getItem('hasPin');
      navigate(hasPin ? '/pin-verify' : '/pin-setup');
    } else {
      setError('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-[432px] space-y-6">
        <div className="text-center space-y-2">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#0066CC] flex items-center justify-center">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-[#333333]">GRL WALLET</h1>
          <p className="text-sm text-[#999999]">Thai Academic Researcher Wallet</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] p-6 space-y-4">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#333333] flex items-center gap-2">
                <Mail className="w-4 h-4" />
                อีเมล / Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="demo@swu.ac.th"
                className="w-full bg-[#F5F5F5] border-[#E0E0E0] focus:border-[#0066CC] focus:ring-[#0066CC]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#333333] flex items-center gap-2">
                <Lock className="w-4 h-4" />
                รหัสผ่าน / Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  className="w-full bg-[#F5F5F5] border-[#E0E0E0] focus:border-[#0066CC] focus:ring-[#0066CC] pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999999] hover:text-[#333333]"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-[#CC0000]/10 border border-[#CC0000] text-[#CC0000] px-4 py-2 rounded text-sm">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#0066CC] hover:bg-[#0052A3] text-white font-semibold"
            >
              {isLoading ? 'กำลังเข้า...' : 'เข้าสู่ระบบ / LOGIN'}
            </Button>
          </form>

          <div className="text-center space-y-1 text-sm">
            <button className="text-[#0066CC] hover:underline block w-full">
              ลืมรหัสผ่าน? / Forgot Password?
            </button>
            <p className="text-[#999999] text-xs mt-4">
              Demo: demo@swu.ac.th / demo123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

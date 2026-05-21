import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PinVerify() {
  const navigate = useNavigate();
  const [pin, setPin] = useState('');
  const [attempts, setAttempts] = useState(3);
  const [error, setError] = useState('');

  const handleNumberClick = (num) => {
    if (pin.length < 8) {
      const newPin = pin + num;
      setPin(newPin);
      setError('');

      if (newPin.length === 8) {
        verifyPIN(newPin);
      }
    }
  };

  const handleBackspace = () => {
    setPin(pin.slice(0, -1));
    setError('');
  };

  const verifyPIN = (enteredPin) => {
    const savedPin = localStorage.getItem('userPin') || '12345678';

    if (enteredPin === savedPin) {
      navigate('/dashboard');
    } else {
      const newAttempts = attempts - 1;
      setAttempts(newAttempts);

      if (newAttempts === 0) {
        setError('รหัส PIN ถูกล็อค กรุณารอ 15 นาที');
      } else {
        setError(`รหัส PIN ไม่ถูกต้อง เหลือ ${newAttempts} ครั้ง`);
      }
      setPin('');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-[432px] space-y-6">
        <div className="text-center space-y-2">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#0066CC]/10 flex items-center justify-center">
            <i className="fa-solid fa-lock text-2xl text-[#0066CC]"></i>
          </div>
          <h1 className="text-xl font-bold text-[#333333]">
            กรุณากรอกรหัส PIN
          </h1>
        </div>

        <div className="flex justify-center gap-2">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full border-2 transition-all ${
                i < pin.length
                  ? 'bg-[#0066CC] border-[#0066CC]'
                  : 'bg-transparent border-[#E0E0E0]'
              }`}
            />
          ))}
        </div>

        {error && (
          <div className="bg-[#CC0000]/10 border border-[#CC0000] text-[#CC0000] px-4 py-2 rounded text-sm text-center">
            {error}
          </div>
        )}

        <div className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] p-6">
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handleNumberClick(num.toString())}
                disabled={attempts === 0}
                className="h-16 rounded-lg bg-[#F5F5F5] hover:bg-[#E3F2FD] active:bg-[#0066CC]/20 text-xl font-semibold text-[#333333] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {num}
              </button>
            ))}

            <div></div>
            <button
              onClick={() => handleNumberClick('0')}
              disabled={attempts === 0}
              className="h-16 rounded-lg bg-[#F5F5F5] hover:bg-[#E3F2FD] active:bg-[#0066CC]/20 text-xl font-semibold text-[#333333] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              0
            </button>
            <button
              onClick={handleBackspace}
              disabled={attempts === 0}
              className="h-16 rounded-lg bg-[#F5F5F5] hover:bg-[#FF9900]/10 active:bg-[#FF9900]/20 text-2xl transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <i className="fa-solid fa-delete-left"></i>
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i < attempts ? 'bg-[#00AA00]' : 'bg-[#E0E0E0]'
              }`}
            />
          ))}
        </div>

        <p className="text-center text-xs text-[#999999]">
          Demo PIN: 12345678
        </p>
      </div>
    </div>
  );
}

export default PinVerify;

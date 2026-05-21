import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import Button from '../components/ui/Button';

function PinSetup() {
  const navigate = useNavigate();
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [step, setStep] = useState('setup');
  const [error, setError] = useState('');

  const handleNumberClick = (num) => {
    const currentPin = step === 'setup' ? pin : confirmPin;
    if (currentPin.length < 8) {
      if (step === 'setup') {
        setPin(currentPin + num);
      } else {
        setConfirmPin(currentPin + num);
      }
      setError('');
    }
  };

  const handleBackspace = () => {
    if (step === 'setup') {
      setPin(pin.slice(0, -1));
    } else {
      setConfirmPin(confirmPin.slice(0, -1));
    }
    setError('');
  };

  const handleConfirm = () => {
    if (step === 'setup') {
      if (pin.length === 8) {
        setStep('confirm');
      }
    } else {
      if (confirmPin.length === 8) {
        if (pin === confirmPin) {
          localStorage.setItem('userPin', pin);
          localStorage.setItem('hasPin', 'true');
          navigate('/dashboard');
        } else {
          setError('รหัส PIN ไม่ตรงกัน กรุณาลองใหม่');
          setConfirmPin('');
        }
      }
    }
  };

  const currentPin = step === 'setup' ? pin : confirmPin;
  const isComplete = currentPin.length === 8;

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-[432px] space-y-6">
        <div className="text-center space-y-2">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#0066CC]/10 flex items-center justify-center">
            <Lock className="w-8 h-8 text-[#0066CC]" />
          </div>
          <h1 className="text-xl font-bold text-[#333333]">
            {step === 'setup' ? 'สร้างรหัส PIN 8 หลักของคุณ' : 'ยืนยันรหัส PIN อีกครั้ง'}
          </h1>
          <p className="text-sm text-[#999999]">
            {step === 'setup' ? 'Create your 8-digit PIN' : 'Confirm your PIN'}
          </p>
        </div>

        <div className="flex justify-center gap-2">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full border-2 transition-all ${
                i < currentPin.length
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
                className="h-16 rounded-lg bg-[#F5F5F5] hover:bg-[#E3F2FD] active:bg-[#0066CC]/20 text-xl font-semibold text-[#333333] transition-colors"
              >
                {num}
              </button>
            ))}

            <button
              onClick={handleBackspace}
              className="h-16 rounded-lg bg-[#F5F5F5] hover:bg-[#FF9900]/10 active:bg-[#FF9900]/20 text-2xl transition-colors flex items-center justify-center"
            >
              ⌫
            </button>
            <button
              onClick={() => handleNumberClick('0')}
              className="h-16 rounded-lg bg-[#F5F5F5] hover:bg-[#E3F2FD] active:bg-[#0066CC]/20 text-xl font-semibold text-[#333333] transition-colors"
            >
              0
            </button>
            <button
              onClick={handleConfirm}
              disabled={!isComplete}
              className={`h-16 rounded-lg text-2xl transition-colors flex items-center justify-center ${
                isComplete
                  ? 'bg-[#00AA00] hover:bg-[#008800] text-white'
                  : 'bg-[#E0E0E0] text-[#999999] cursor-not-allowed'
              }`}
            >
              ✓
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-[#999999]">
          Demo PIN: 12345678
        </p>
      </div>
    </div>
  );
}

export default PinSetup;

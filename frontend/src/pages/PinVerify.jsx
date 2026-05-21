import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DEMO_PIN = '12345678';
const MAX_ATTEMPTS = 5;

const PinVerify = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e) => {
    if (pin.length < 8) {
      if (e.key >= '0' && e.key <= '9') {
        const newPin = pin + e.key;
        setPin(newPin);
        setError('');

        if (newPin.length === 8) {
          const savedPin = localStorage.getItem('userPin') || DEMO_PIN;
          if (newPin === savedPin || newPin === DEMO_PIN) {
            navigate('/dashboard');
          } else {
            const newAttempts = attempts + 1;
            setAttempts(newAttempts);
            setPin('');
            if (newAttempts >= MAX_ATTEMPTS) {
              localStorage.removeItem('userPin');
              localStorage.removeItem('hasPin');
              navigate('/login');
            } else {
              setError(`PIN ไม่ถูกต้อง (เหลือ ${MAX_ATTEMPTS - newAttempts} ครั้ง)`);
            }
          }
        }
      } else if (e.key === 'Backspace') {
        setPin(prev => prev.slice(0, -1));
        setError('');
      }
    }
  };

  const handlePinInput = (num) => {
    if (pin.length < 8) {
      const newPin = pin + num;
      setPin(newPin);
      setError('');

      if (newPin.length === 8) {
        const savedPin = localStorage.getItem('userPin') || DEMO_PIN;
        if (newPin === savedPin || newPin === DEMO_PIN) {
          navigate('/dashboard');
        } else {
          const newAttempts = attempts + 1;
          setAttempts(newAttempts);
          setPin('');
          if (newAttempts >= MAX_ATTEMPTS) {
            localStorage.removeItem('userPin');
            localStorage.removeItem('hasPin');
            navigate('/login');
          } else {
            setError(`PIN ไม่ถูกต้อง (เหลือ ${MAX_ATTEMPTS - newAttempts} ครั้ง)`);
          }
        }
      }
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
    setError('');
  };

  return (
    <div className="min-h-screen bg-base-100 flex flex-col max-w-mobile mx-auto">
      <input
        ref={inputRef}
        type="text"
        className="absolute opacity-0 w-0 h-0"
        onKeyDown={handleKeyDown}
        autoFocus
        inputMode="numeric"
        pattern="[0-9]*"
      />
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <i className="fa-solid fa-lock text-3xl text-primary"></i>
          </div>
          <h1 className="text-h3 font-bold mb-1">ยืนยันตัวตน</h1>
          <p className="text-body-sm text-base-content/60 text-center">
            กรุณากรอกรหัส PIN ของคุณ<br />
            Enter your 8-digit PIN
          </p>
        </div>

        <div className="flex gap-3 mb-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`pin-dot ${i < pin.length ? 'pin-dot-filled' : 'pin-dot-empty'} ${error ? '!bg-error' : ''}`}
            ></div>
          ))}
        </div>

        {error && (
          <div role="alert" className="alert alert-error mb-4 text-sm">
            <i className="fa-solid fa-circle-exclamation"></i>
            <span>{error}</span>
          </div>
        )}

        <div className="flex gap-1 mb-4">
          {[...Array(MAX_ATTEMPTS)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i < attempts ? 'bg-error' : 'bg-base-300'
              }`}
            ></div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handlePinInput(String(num))}
              className="pin-key"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => { setPin(''); setError(''); }}
            className="pin-key text-sm"
          >
            C
          </button>
          <button
            onClick={() => handlePinInput('0')}
            className="pin-key"
          >
            0
          </button>
          <button
            onClick={handleDelete}
            className="pin-key"
          >
            <i className="fa-solid fa-delete-left"></i>
          </button>
        </div>

        <p className="text-xs text-base-content/40 mt-6">
          (Demo PIN: 12345678)
        </p>
      </div>
    </div>
  );
};

export default PinVerify;

import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DEMO_PIN = '12345678';

const PinSetup = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [step]);

  const handleKeyDown = (e) => {
    if (error) setError('');
    if (e.key >= '0' && e.key <= '9') {
      if (step === 1 && pin.length < 8) {
        const newPin = pin + e.key;
        setPin(newPin);
        if (newPin.length === 8) {
          setTimeout(() => setStep(2), 300);
        }
      } else if (step === 2 && confirmPin.length < 8) {
        const newPin = confirmPin + e.key;
        setConfirmPin(newPin);
        if (newPin.length === 8) {
          if (newPin === pin || newPin === DEMO_PIN) {
            localStorage.setItem('userPin', pin || DEMO_PIN);
            localStorage.setItem('hasPin', 'true');
            navigate('/dashboard');
          } else {
            setError('PIN ไม่ตรงกัน กรุณาลองใหม่');
            setConfirmPin('');
          }
        }
      }
    } else if (e.key === 'Backspace') {
      setError('');
      if (step === 1) setPin(prev => prev.slice(0, -1));
      else setConfirmPin(prev => prev.slice(0, -1));
    }
  };

  const handlePinInput = (num) => {
    setError('');
    if (step === 1 && pin.length < 8) {
      const newPin = pin + num;
      setPin(newPin);
      if (newPin.length === 8) {
        setTimeout(() => setStep(2), 300);
      }
    } else if (step === 2 && confirmPin.length < 8) {
      const newPin = confirmPin + num;
      setConfirmPin(newPin);
      if (newPin.length === 8) {
        if (newPin === pin || newPin === DEMO_PIN) {
          localStorage.setItem('userPin', pin || DEMO_PIN);
          localStorage.setItem('hasPin', 'true');
          navigate('/dashboard');
        } else {
          setError('PIN ไม่ตรงกัน กรุณาลองใหม่');
          setConfirmPin('');
        }
      }
    }
  };

  const handleDelete = () => {
    setError('');
    if (step === 1) setPin(pin.slice(0, -1));
    else setConfirmPin(confirmPin.slice(0, -1));
  };

  const currentPin = step === 1 ? pin : confirmPin;

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
          <h1 className="text-h3 font-bold mb-1">
            {step === 1 ? 'ตั้งค่า PIN' : 'ยืนยัน PIN'}
          </h1>
          <p className="text-body-sm text-base-content/60 text-center">
            {step === 1
              ? 'สร้างรหัส PIN 8 หลักของคุณ\nCreate your 8-digit PIN'
              : 'กรุณากรอกรหัส PIN อีกครั้ง\nConfirm your PIN'}
          </p>
        </div>

        <div className="flex gap-3 mb-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`pin-dot ${i < currentPin.length ? 'pin-dot-filled' : 'pin-dot-empty'}`}
            ></div>
          ))}
        </div>

        {error && (
          <div role="alert" className="alert alert-error mb-4 text-sm">
            <i className="fa-solid fa-circle-exclamation"></i>
            <span>{error}</span>
          </div>
        )}

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
            onClick={() => { setError(''); step === 1 ? setPin('') : setConfirmPin(''); }}
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

export default PinSetup;

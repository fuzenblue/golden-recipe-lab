import { createContext, useContext } from 'react';

const RadioGroupContext = createContext(null);

function RadioGroup({ value, onValueChange, className = '', children, ...props }) {
  return (
    <RadioGroupContext.Provider value={{ value, onValueChange }}>
      <div className={`grid gap-3 ${className}`} role="radiogroup" {...props}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
}

function RadioGroupItem({ value, className = '', id, children, ...props }) {
  const ctx = useContext(RadioGroupContext);
  const isChecked = ctx?.value === value;

  return (
    <label
      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
        isChecked
          ? 'border-[#0066CC] bg-[#E3F2FD]'
          : 'border-[#E0E0E0] hover:border-[#0066CC]'
      } ${className}`}
    >
      <button
        type="button"
        role="radio"
        aria-checked={isChecked}
        id={id}
        onClick={() => ctx?.onValueChange?.(value)}
        className={`aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center ${
          isChecked ? 'border-[#0066CC]' : 'border-[#E0E0E0]'
        }`}
        {...props}
      >
        {isChecked && <div className="size-2 rounded-full bg-[#0066CC]" />}
      </button>
      {children}
    </label>
  );
}

export { RadioGroup, RadioGroupItem };

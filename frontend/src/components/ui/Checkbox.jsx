import { forwardRef } from 'react';
import { Check } from 'lucide-react';

const Checkbox = forwardRef(function Checkbox({ className = '', checked, onCheckedChange, ...props }, ref) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      ref={ref}
      onClick={() => onCheckedChange?.(!checked)}
      className={`peer size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center ${
        checked
          ? 'bg-[#0066CC] border-[#0066CC] text-white'
          : 'bg-white border-[#E0E0E0]'
      } ${className}`}
      {...props}
    >
      {checked && <Check className="size-3.5" />}
    </button>
  );
});

export default Checkbox;

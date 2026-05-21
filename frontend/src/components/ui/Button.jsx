import { forwardRef } from 'react';

const variants = {
  primary: 'bg-[#0066CC] text-white hover:bg-[#0052A3] active:bg-[#003D7A]',
  secondary: 'bg-white border border-[#0066CC] text-[#0066CC] hover:bg-[#E3F2FD]',
  destructive: 'bg-[#CC0000] text-white hover:bg-[#B30000]',
  outline: 'bg-white border border-[#E0E0E0] text-[#333333] hover:bg-[#F5F5F5]',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3',
};

const Button = forwardRef(function Button(
  { className = '', variant = 'primary', size = 'md', children, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={`rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;

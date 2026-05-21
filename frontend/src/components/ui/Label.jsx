import { forwardRef } from 'react';

const Label = forwardRef(function Label({ className = '', ...props }, ref) {
  return (
    <label
      ref={ref}
      className={`block text-sm font-medium text-[#333333] ${className}`}
      {...props}
    />
  );
});

export default Label;

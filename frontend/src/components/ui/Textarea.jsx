import { forwardRef } from 'react';

const Textarea = forwardRef(function Textarea({ className = '', ...props }, ref) {
  return (
    <textarea
      className={`w-full px-3 py-2 bg-[#F5F5F5] border border-[#E0E0E0] rounded-md text-[#333333] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all min-h-[80px] resize-y ${className}`}
      ref={ref}
      {...props}
    />
  );
});

export default Textarea;

import { createContext, useContext, useState } from 'react';

const TabsContext = createContext(null);

function Tabs({ value, onValueChange, defaultValue, className = '', children, ...props }) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const controlledValue = value !== undefined ? value : internalValue;
  const handleChange = onValueChange || setInternalValue;

  return (
    <TabsContext.Provider value={{ value: controlledValue, onValueChange: handleChange }}>
      <div className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

function TabsList({ className = '', children, ...props }) {
  return (
    <div className={`inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] ${className}`} {...props}>
      {children}
    </div>
  );
}

function TabsTrigger({ className = '', value, children, ...props }) {
  const ctx = useContext(TabsContext);
  const isActive = ctx?.value === value;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={() => ctx?.onValueChange?.(value)}
      className={`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 ${
        isActive
          ? 'bg-card text-foreground shadow-xs'
          : 'text-muted-foreground hover:text-foreground'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function TabsContent({ className = '', value, children, ...props }) {
  const ctx = useContext(TabsContext);
  if (ctx?.value !== value) return null;

  return (
    <div role="tabpanel" className={`flex-1 outline-none ${className}`} {...props}>
      {children}
    </div>
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };

"use client";

export const ItemsList = ({ children }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto p-4 max-h-[calc(100vh-4rem)]">
      {children}
    </div>
  );
};

"use client";

export const Card = ({ children, ...props }) => {
  return (
    <div
      className="flex flex-col bg-white hover:bg-gray-100 border border-gray-300 transition-colors shadow p-4 rounded"
      {...props}
    >
      {children}
    </div>
  );
};

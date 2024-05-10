"use client";

export const Button = ({ children, onClick, className = "", ...props }) => {
    return (
        <button
            className={`inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-semibold
                        hover:bg-gray-200 ring-indigo-500 focus:outline-none focus:ring ${className}`}
            onClick={onClick}
            {...props}>
            {children}
        </button>
    );
};

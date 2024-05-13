"use client";

import Link from "next/link";

export const LinkButton = ({
  children,
  href,
  target = null,
  className = "",
  ...props
}) => {
  return (
    <Link
      target={target}
      prefetch={false}
      href={href}
      className={`inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-semibold
                        hover:bg-gray-300 ring-indigo-500 focus:outline-none focus:ring ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

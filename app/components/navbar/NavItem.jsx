"use client";

import Link from "next/link";

export const NavItem = ({ href, isActive, category }) => {
  return (
    <Link
      prefetch={false}
      className={`p-2 hover:bg-gray-200 rounded ${isActive ? "font-bold" : ""}`}
      href={href}
    >
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </Link>
  );
};

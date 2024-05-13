"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { NavItem } from "./NavItem";

export const NavList = ({ navList = [] }) => {
  const categories = new Set(navList.map((el) => el.category));
  const uniqueCategories = ["all", ...categories];
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isActive = (category) => {
    if (category === "all") return `${pathname}?${searchParams}` === "/?";
    return (
      `/?filter=${category.toLowerCase()}` === `${pathname}?${searchParams}`
    );
  };

  const href = (category) => {
    if (category === "all") return "/";
    return `/?filter=${encodeURIComponent(category)}`;
  };

  return (
    <div className="flex flex-col gap-4">
      {uniqueCategories.map((category) => (
        <NavItem
          key={category}
          href={href(category)}
          isActive={isActive(category)}
          category={category}
        />
      ))}
    </div>
  );
};

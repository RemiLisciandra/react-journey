"use client";

import React from "react";
import Link from 'next/link';

export const NavList = ({navList = []}) => {
    const categories = new Set(navList.map(el => el.category));
    const uniqueCategories = ["all", ...categories];

    return (
        <div className="flex flex-col gap-4">
            {uniqueCategories.map(category => {
                return (
                    <Link className={`px-2 hover:bg-gray-200`} key={category}
                          href={category !== "all" ? `/?filter=${encodeURIComponent(category)}` : "/"}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Link>
                );
            })}
        </div>
    );
};
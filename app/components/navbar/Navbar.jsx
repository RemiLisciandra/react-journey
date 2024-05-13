"use client";

import React from "react";
import { NavList } from "./NavList";
import { DataList } from "../../../data/DataList";

export const Navbar = () => {
  return (
    <aside className="flex flex-col px-5 max-w-[200px] w-full">
      <NavList navList={DataList} />
    </aside>
  );
};

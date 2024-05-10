"use client"

import React from "react";
import {NavList} from "./NavList";
import {REACT_CARDS} from "./REACT_CARDS";

export const Navbar = () => {
    return (
        <aside className="flex flex-col px-5 max-w-[200px]">
            <NavList navList={REACT_CARDS} />
        </aside>
    );
};
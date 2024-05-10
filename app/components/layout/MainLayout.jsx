"use client";

import React from "react";
import {Header} from "../header/Header";
import {Navbar} from "../navbar/Navbar";

const MainLayout = ({children}) => {
    return (
        <>
            <Header/>
            <Navbar/>
            <main className="h-full m-auto px-10">{children}</main>
        </>
    );
};

export default MainLayout;

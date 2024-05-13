"use client";

import React from "react";
import { Header } from "../header/Header";
import { Navbar } from "../navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex">
        <Navbar />
        <main className="flex-1 h-full px-10">{children}</main>
      </div>
    </>
  );
};

export default MainLayout;

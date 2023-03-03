import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Nav";
import Footer from "../Footer";

function HomeLayout() {
  return (
    <div className="w-full dark:bg-slate-900 text-white body__wrapper relative  selection:bg-slate-800 selection:text-white">
      <NavBar />
      <div className="pt-2 w-full main__body  max-w-5xl m-auto px-5 sm:px-10 relative">
        <Outlet />
      </div>
      <div className="pt-3 footer">
        <Footer />
      </div>
    </div>
  );
}

export default HomeLayout;

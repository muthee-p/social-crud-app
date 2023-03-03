import React from "react";

function Footer() {
  return (
    <div className="w-full max-w-5xl m-auto px-5 sm:px-10 dark:text-white text-slate-900 ">
      <div className="w-full flex justify-between">
        <div className="w-1/2 text-sm">
          <h1 className="text-2xl font-bold">
            <span className="text-sky-500 ">Social</span>{" "}
            <span className="underline">App</span>
            <sup className="text-xs text-sky-400">beta</sup>
          </h1>
        </div>
        <div className="w-1/2 text-sm">
          <p className="text-right">© 2021 Social App</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

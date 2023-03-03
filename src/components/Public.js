import React from "react";
import { WaveSvg, heroImage } from "../assets";

const Public = () => {
  return (
    <div className="w-full py-2 flex gap-3 items-center mt-3 font-nunito tracking-wide">
      <div className="w-full max-w-sm p-3  dark:text-gray-300 text-sky-900">
        <span className="dark:text-blue-500 text-xs bg-slate-300 rounded-sm font-bold p-1 items-center">
          Lets' talk about it <WaveSvg />
        </span>
        {/* catchy  header and some text */}
        <h3 className="text-2xl font-bold capitalize font-mono">
          Communication is our passion
        </h3>
        <p className="dark:text-gray-300 text-slate-700 py-2 leading-7">
          Unity is strength. When there is teamwork and collaboration, wonderful
          things can be achieved. <br />
          <span className="dark:text-sky-200 text-sky-500 font-bold mt-1 italic">
            ~ Mattie Stepanek
          </span>
        </p>
      </div>
      <div className="w-full">
        <img
          src={heroImage}
          alt="hero"
          className="object-cover bg-blend-multiply"
        />
      </div>

      {/* <h2 className="">WELCOME TO SOCIAL APP</h2>
      <h3>What is this app?</h3>
      This is a social app where you can post your thoughts and ideas. You can
      also edit and delete your posts. You can also follow other users and see
      their posts. You can also like and comment on other users posts. You can
      also see your followers and the people you are following. */}
    </div>
  );
};

export default Public;

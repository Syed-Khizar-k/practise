"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavBar = () => {
  const [isActive, SetisActive] = useState(false);
  return (
    <nav className="flex justify-between items-center py-[10px]  ">
      <a className="flex items-center font-[900] gap-2" href="/">
        <img src="/favicon.png" alt="Logo" />
        <span>Halloween</span>
      </a>
      <div className="">
        <ul className="hidden  md:flex justify-center items-center gap-8 font-medium">
          <li className="">
            <a
              href="/"
              className="after:block after:h-1 after:w-1 after:ml-5 after:rounded-lg after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="after:block after:h-1 after:w-1 after:ml-5 after:rounded-lg after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              About
            </a>
          </li>
          <li>
            <a
              href="#candy"
              className="after:block after:h-1 after:w-1 after:ml-5 after:rounded-lg after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              Candy
            </a>
          </li>
          <li>
            <a
              href="#newarrival"
              className="after:block after:h-1 after:w-1 after:ml-5 after:rounded-lg after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              New
            </a>
          </li>
          <li className="py-[6px] px-[15px] border border-white rounded-3xl">
            <a href="#newsletter">Support</a>
          </li>
        </ul>
        <div className="  text-white md:hidden ">
          <button
            onClick={() => {
              SetisActive(!isActive);
            }}>
            <FontAwesomeIcon
              icon={isActive ? faXmark : faBars}
              size="2x"
              className="h-[22px]"></FontAwesomeIcon>
          </button>
        </div>
        <div
          className={` mobile w-[50vw] h-[50vh] bg-gray-800/15 backdrop-blur-lg absolute right-[0] p-[20px] 
            ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-90"}
        `}>
          <ul className="text-[18px] font-[900]">
            <li className="py-[10px]">
              <a href="/">Home</a>
            </li>
            <li className="py-[10px]">
              <a href="#about">About</a>
            </li>
            <li className="py-[10px]">
              <a href="#candy">Candy</a>
            </li>
            <li className="py-[10px]">
              <a href="#newarrival">New</a>
            </li>
            <li className="py-[10px]">
              <a href="#newsletter">Support</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

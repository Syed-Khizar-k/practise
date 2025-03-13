"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import elemdata from "@/data/elemdata.json";
const NavBar = () => {
  const data = elemdata.navigation;
  const [isActive, SetisActive] = useState(false);
  return (
    <nav className="w-full fixed z-30 backdrop-blur-sm">
      <div className="flex justify-between items-center py-[10px] md:max-w-5xl max-w-[80vw] ">
        <a className="flex items-center font-[900] gap-2" href="/">
          <img src={data.img} alt="Logo" />
          <span>{data.logo}</span>
        </a>
        <div className="">
          <ul className="hidden  md:flex justify-center items-center gap-8 font-medium">
            {data.links.map((ls, index) => {
              return (
                <li className="Link" key={index}>
                  <a
                    href={ls.link}
                    className="after:block after:h-1 after:w-1 after:ml-5 after:rounded-lg after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
                    {ls.text}
                  </a>
                </li>
              );
            })}

            <li className="py-[6px] px-[15px] border border-white rounded-3xl">
              <a href="#newsletter">{data.l5}</a>
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
            className={` mobile w-[70vw] h-[50vh] bg-gray-800/15  absolute right-[0] p-[20px] backdrop-blur
            ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
            <ul
              className="text-[18px] font-[900]"
              onClick={() => {
                SetisActive(false);
              }}>
              {data.links.map((link, index) => {
                return (
                  <li className="py-[10px] " key={index}>
                    <a href={link.link}> {link.text}</a>
                  </li>
                );
              })}

              <li className="py-[10px]">
                <a href="#newsletter"> {data.l5}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

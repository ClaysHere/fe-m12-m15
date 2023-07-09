import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <Logo />
        <ul className={"ml-80 flex items-center py-4 gap-x-4"}>
          <li className={"cursor-pointer hover:scale-105"}>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className={"cursor-pointer hover:scale-105"}>
            <NavLink to={"/guestbook"}>Guest Book</NavLink>
          </li>
          <li className={"cursor-pointer hover:scale-105"}>
            <NavLink to={"/faq"}>FAQ</NavLink>
          </li>
          <li className={"cursor-pointer hover:scale-105"}>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li className={"cursor-pointer hover:scale-105"}>
            <NavLink to={"/askme"}>Ask Me</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

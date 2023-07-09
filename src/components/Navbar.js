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
            <NavLink
              to={"/"}
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid black" : "none",
              })}>
              Home
            </NavLink>
          </li>
          <li className={"cursor-pointer hover:scale-105"}>
            <NavLink
              to={"/guestbook"}
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid black" : "none",
              })}>
              Guest Book
            </NavLink>
          </li>
          <li className={"cursor-pointer hover:scale-105"}>
            <NavLink
              to={"/faq"}
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid black" : "none",
              })}>
              FAQ
            </NavLink>
          </li>
          <li className={"cursor-pointer hover:scale-105"}>
            <NavLink
              to={"/about"}
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid black" : "none",
              })}>
              About
            </NavLink>
          </li>
          <li className={"cursor-pointer hover:scale-105"}>
            <NavLink
              to={"/askme"}
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid black" : "none",
              })}>
              Ask Me
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

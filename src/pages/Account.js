import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Account = () => {
  return (
    <>
      <div className={"mt-8 w-full bg-slate-100 p-12"}>
        <ul
          className={"w-1/2 flex items-center justify-center mx-auto gap-x-8"}>
          <li>
            <NavLink
              className={"bg-sky-600 text-white px-4 py-2 rounded-lg"}
              to="signup"
              style={({ isActive }) => ({
                background: isActive ? "black" : "blue",
              })}>
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"bg-sky-600 text-white px-4 py-2 rounded-lg"}
              to="signin"
              style={({ isActive }) => ({
                background: isActive ? "black" : "blue",
              })}>
              Sign In
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default Account;

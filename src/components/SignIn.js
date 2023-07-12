import React from "react";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div
        className={
          "w-1/2 mx-auto mt-8 border py-16 bg-slate-300 rounded-lg shadow-2xl"
        }>
        <h1 className={"w-full text-center text-4xl font-bold"}>Sign In</h1>
        <form className={"w-full flex flex-col items-center gap-y-4 mt-16"}>
          <div className={"w-1/2 flex flex-col"}>
            <label className={"text-xl mb-2 font-semibold"} htmlFor="user">
              Username
            </label>
            <input
              className={
                "border-2 border-slate-400 rounded-lg text-lg px-3 py-1"
              }
              type="text"
              id="user"
              required
            />
          </div>
          <div className={"w-1/2 flex flex-col"}>
            <label className={"text-xl mb-2 font-semibold"} htmlFor="pwd">
              Password
            </label>
            <input
              className={
                "border-2 border-slate-400 rounded-lg text-lg px-3 py-1"
              }
              type="password"
              id="pwd"
              required
            />
          </div>
          <button
            className={
              "font-bold bg-sky-500 text-slate-100 px-4 py-2 rounded-lg hover:bg-sky-600 mt-8"
            }
            type="submit">
            Sign In
          </button>
        </form>
        <p className={"text-center mt-4"}>
          Belum punya akun?{" "}
          <span>
            <NavLink className={"text-blue-600 font-bold"} to="/account/signup">
              Sign Up
            </NavLink>
          </span>
        </p>
      </div>
    </>
  );
};

export default SignIn;

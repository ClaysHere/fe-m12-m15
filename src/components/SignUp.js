import React from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div
        className={
          "w-1/2 mx-auto mt-8 border py-16 bg-slate-300 rounded-lg shadow-2xl"
        }>
        <h1 className={"w-full text-center text-4xl font-bold"}>Sign Up</h1>
        <form className={"w-full flex flex-col items-center gap-y-4 mt-16"}>
          <div className={"w-1/2 flex flex-col"}>
            <label className={"text-xl mb-2 font-semibold"} htmlFor="user">
              Username*
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
              Password*
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
          <div className={"w-1/2 flex flex-col"}>
            <label
              className={"text-xl mb-2 font-semibold"}
              htmlFor="confirm-pwd">
              Confirm Password*
            </label>
            <input
              className={
                "border-2 border-slate-400 rounded-lg text-lg px-3 py-1"
              }
              type="password"
              id="confirm-pwd"
              required
            />
          </div>
          <div className={"w-1/2 flex gap-x-2"}>
            <input type="checkbox" name="cek" id="cek" required />
            <label htmlFor="cek">Confirm term and condition*</label>
          </div>
          <button
            className={
              "font-bold bg-sky-500 text-slate-100 px-4 py-2 rounded-lg hover:bg-sky-600"
            }
            type="submit">
            Sign Un
          </button>
        </form>
        <p className={"text-center mt-4"}>
          Sudah punya akun?{" "}
          <span>
            <NavLink className={"text-blue-600 font-bold"} to="/account/signin">
              Sign In
            </NavLink>
          </span>
        </p>
      </div>
    </>
  );
};

export default SignUp;

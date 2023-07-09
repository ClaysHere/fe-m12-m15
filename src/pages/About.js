import React from "react";
import vektor from "../img/vektor.svg";

const About = () => {
  return (
    <>
      <div
        className={
          "grid grid-cols-2 mt-8 w-full items-center bg-slate-100 gap-x-8"
        }>
        <div className={"pl-12"}>
          <h1 className={"text-6xl font-thin"}>About us</h1>
          <p className={"mt-4 text-lg"}>Hi,</p>
          <p className={"text-lg"}>
            Tiiger, Bunny and Friends built this website. Be Happy!
          </p>
        </div>
        <div className={""}>
          <img src={vektor} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;

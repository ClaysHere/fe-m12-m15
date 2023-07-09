import React from "react";

const Logo = () => {
  return (
    <>
      <div className={"w-full relative ml-2"}>
        <span
          className={
            "w-[55px] h-[7px] bg-[#003b5c] block rounded-xl absolute origin-top-left rotate-[50deg] -left-1 top-2 z-30"
          }></span>
        <span
          className={
            "w-[55px] h-[7px] bg-gradient-to-r from-[#003b5c] to-slate-300 block rounded-xl absolute origin-top-left rotate-[70deg] left-3 z-20"
          }></span>
        <span
          className={
            "w-[55px] h-[7px] bg-gradient-to-r from-[#003b5c] to-slate-300 block rounded-xl absolute origin-center rotate-[90deg] -bottom-6 z-10"
          }></span>
        <span
          className={
            "w-[55px] h-[7px] bg-gradient-to-l from-[#003b5c] to-slate-300 block rounded-xl absolute origin-top-right rotate-[-70deg] -left-3 z-20"
          }></span>
        <span
          className={
            "w-[55px] h-[7px] bg-[#003b5c] block rounded-xl absolute origin-top-right rotate-[-50deg] left-1 top-2 z-30"
          }></span>
        <span
          className={
            "absolute left-20 font-bold text-5xl text-[#003b5c] font-mono"
          }>
          Catalog
        </span>
      </div>
    </>
  );
};

export default Logo;

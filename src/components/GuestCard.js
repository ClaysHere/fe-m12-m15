import React from "react";

const GuestCard = (props) => {
  return (
    <>
      <div className={""}>
        <div className={"flex gap-x-4 items-center px-6"}>
          <p className={"bg-sky-400 px-4 rounded-lg font-bold"}>{props.time}</p>
          <p className={"text-lg font-semibold"}>{props.nama}</p>
        </div>
        {props.indeks < props.size - 1 ? (
          <hr className={"my-4 h-[2px] bg-slate-700 w-full"} />
        ) : null}
      </div>
    </>
  );
};

export default GuestCard;

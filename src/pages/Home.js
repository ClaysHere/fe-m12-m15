import React from "react";
import ContainerBook from "../components/ContainerBook";

const Home = () => {
  return (
    <>
      <div className={"w-full"}>
        <input
          type="text"
          placeholder="Search"
          className={"w-full border-2 border-slate-400 mt-16 rounded-lg p-2"}
        />
        <div className={"flex gap-2 mt-4"}>
          <input type="radio" name="title" id="title" />
          <label htmlFor="title">Title</label>
        </div>
      </div>
      <ContainerBook />
    </>
  );
};

export default Home;

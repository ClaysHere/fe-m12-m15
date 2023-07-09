import React, { useRef, useState } from "react";
import ContainerBook from "../components/ContainerBook";

let initSearch = {
  search: "",
  year: "",
};
const Home = () => {
  const tahun = useRef();
  const search = useRef();
  const [filter, setFilter] = useState("");
  const [searching, setSearching] = useState(initSearch);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const check = (e) => {
    setFilter(e.target.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSearch = {
      search: search.current.value,
      year: tahun.current.value,
    };

    setSearching(newSearch);
    setFormSubmitted(true);

    search.current.value = "";
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={"w-full"}>
        <div className={"flex mt-8"}>
          <input
            ref={search}
            type="text"
            placeholder="Search"
            className={
              "w-full p-2 border-t-2 border-l-2 border-b-2 border-slate-400 rounded-tl-lg rounded-bl-lg focus:ring-4 focus:ring-blue-300"
            }
          />
          <button
            className={
              "py-2 px-3 font-semibold hover:bg-green-800 bg-green-700 text-white border-t-2 border-r-2 border-b-2 border-green-700 rounded-tr-lg rounded-br-lg"
            }
            type="submit">
            Search
          </button>
        </div>
        <div className={"mt-4 flex gap-x-2 items-center"}>
          <div className={"flex gap-2"}>
            <input type="radio" name="filter" id="title" onClick={check} />
            <label htmlFor="title">Title</label>
          </div>
          <div className={"flex gap-2"}>
            <input type="radio" name="filter" id="author" onClick={check} />
            <label htmlFor="author">Author</label>
          </div>
          <div className={"flex gap-2"}>
            <input type="radio" name="filter" id="publish" onClick={check} />
            <label htmlFor="publish">Publisher</label>
          </div>
          <div className={"flex gap-2 items-center"}>
            <input type="radio" name="filter" id="year" onClick={check} />
            <label htmlFor="year">Title & Year :</label>
            <input
              ref={tahun}
              className={"border-2 border-slate-400 rounded-lg w-1/4 px-2 py-1"}
              type="number"
              placeholder="year?"
            />
          </div>
        </div>
      </form>
      <ContainerBook
        key={formSubmitted}
        filter={filter !== "" ? filter : "all"}
        search={searching.search}
        year={searching.year}
      />
    </>
  );
};

export default Home;

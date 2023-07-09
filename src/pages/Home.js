import React, { useEffect, useRef, useState } from "react";
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
    // if (search.current.value === "") {
    //   return;
    // }

    const newSearch = {
      search: search.current.value,
      year: parseInt(tahun.current.value),
    };

    setSearching(newSearch);
    setFormSubmitted(true);
  };

  useEffect(() => {
    initSearch.search = search.current.value;
  }, [searching]);

  return (
    <>
      <form className={"w-full"}>
        <div className={"flex items-end"}>
          <input
            onChange={handleSubmit}
            ref={search}
            type="text"
            placeholder="Search"
            className={
              "w-full p-2 border-2 border-slate-400 rounded-lg focus:ring-4 focus:ring-blue-300 mt-8"
            }
          />
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

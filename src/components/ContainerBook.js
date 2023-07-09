import React from "react";
import CardBook from "./CardBook";
import books from "../database/books.js";

const ContainerBook = () => {
  const allBooks = books.map((book, index) => {
    return (
      <CardBook
        key={index}
        title={book.title}
        author={book.author}
        publisher={book.publisher}
        year={book.year}
        random={Math.floor(Math.random() * 11)}
      />
    );
  });
  return (
    <>
      <div className={"mt-12 px-4"}>
        <h1 className={"text-3xl font-semibold"}>Our Books</h1>
        <hr className={"mt-2 h-[2px] bg-slate-800"} />
        <div className={"mt-6 w-full grid grid-cols-3 gap-6"}>{allBooks}</div>
      </div>
    </>
  );
};

export default ContainerBook;

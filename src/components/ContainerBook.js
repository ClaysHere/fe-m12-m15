import React from "react";
import CardBook from "./CardBook";
import books from "../database/books.js";

const ContainerBook = (props) => {
  const filter = props.filter;
  const search = props.search;
  const year = props.year;
  const allBooks = books.map((book, index) => {
    if (filter === "title") {
      if (book.title.toLowerCase().includes(search.toLowerCase())) {
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
      }
    } else if (filter === "author") {
      if (book.author.toLowerCase().includes(search.toLowerCase())) {
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
      }
    } else if (filter === "publish") {
      if (book.publisher.toLowerCase().includes(search.toLowerCase())) {
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
      }
    } else if (filter === "year") {
      if (
        book.year === parseInt(year) &&
        book.title.toLowerCase().includes(search.toLowerCase())
      ) {
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
      } else if (
        year === "" &&
        book.title.toLowerCase().includes(search.toLowerCase())
      ) {
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
      }
    } else {
      if (
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.publisher.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
      ) {
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
      }
    }
    return <></>;
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

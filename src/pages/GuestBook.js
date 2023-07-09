import React, { useState } from "react";
import GuestCard from "../components/GuestCard";

const GuestBook = () => {
  const currentDate = new Date();
  const months = currentDate.getMonth();
  const dates = currentDate.getDate();
  const years = currentDate.getFullYear();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const formattedDate = `${months + 1}/${dates}/${years}, ${
    hours > 12 ? hours - 12 : hours
  }:${minutes}:${seconds} ${hours > 12 ? "PM" : "AM"}`;

  const [nama, setNama] = useState("");
  const [guests, setGuests] = useState([
    {
      guestName: "React JS",
      time: formattedDate,
    },
  ]);

  const handleAddGuest = (e) => {
    e.preventDefault();
    setGuests((prevGuest) => [
      ...prevGuest,
      {
        guestName: nama,
        time: formattedDate,
      },
    ]);
    setNama("");
  };

  const allGuest = guests.map((guest, indeks) => {
    return (
      <GuestCard
        key={indeks}
        nama={guest.guestName}
        time={guest.time}
        indeks={indeks}
        size={guests.length}
      />
    );
  });
  return (
    <>
      <div className={"mt-8 w-full items-center bg-slate-100 gap-x-8 p-12"}>
        <h1 className={"text-5xl font-thin"}>Guest Book</h1>
        <form
          onSubmit={handleAddGuest}
          className={"w-full flex justify-between items-center mt-8"}>
          <input
            className={
              "w-full p-2 border-t-2 border-l-2 border-b-2 border-slate-400 rounded-tl-lg rounded-bl-lg focus:ring-4 focus:ring-blue-300"
            }
            type="text"
            name="guest"
            placeholder="Guest's Name"
            onChange={(e) => setNama(e.target.value)}
            value={nama}
            required
          />
          <button
            className={
              "py-2 px-3 font-semibold hover:bg-green-800 bg-green-700 text-white border-t-2 border-r-2 border-b-2 border-green-700 rounded-tr-lg rounded-br-lg"
            }
            type="submit">
            Submit
          </button>
        </form>
        <div className={"mt-8"}>{allGuest}</div>
      </div>
    </>
  );
};

export default GuestBook;

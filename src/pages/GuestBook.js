import React, { useRef, useState } from "react";
import GuestCard from "../components/GuestCard";

const initGuests = [
  {
    guestName: "React JS",
    time: Date.now(),
  },
];
const GuestBook = () => {
  const nama = useRef();
  const [guests, setGuests] = useState(initGuests);

  const handleAddGuest = (e) => {
    e.preventDefault();
    if (nama.current.value === 0) {
      return;
    }

    const newItem = {
      guestName: nama.current.value,
      time: Date.now(),
    };

    setGuests(guests.concat(newItem));
    nama.current.value = "";
    nama.current.focus();
  };

  const allGuest = guests.map((guest, indeks) => {
    const tanggal = new Date(guest.time).toLocaleString();
    return (
      <GuestCard
        key={indeks}
        nama={guest.guestName}
        time={tanggal}
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
            ref={nama}
            className={
              "w-full p-2 border-t-2 border-l-2 border-b-2 border-slate-400 rounded-tl-lg rounded-bl-lg focus:ring-4 focus:ring-blue-300"
            }
            type="text"
            name="guest"
            placeholder="Guest's Name"
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

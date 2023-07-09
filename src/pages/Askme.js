import React, { useRef, useState } from "react";
import GuestCard from "../components/GuestCard";

const initQuests = [
  {
    guestName: "React JS",
    quest: "The first question...?",
  },
];

const Askme = () => {
  const nama = useRef();
  const quest = useRef();
  const [quests, setQuests] = useState(initQuests);

  const handleAddQuest = (e) => {
    e.preventDefault();
    e.preventDefault();
    if (nama.current.value === 0) {
      return;
    }

    const newItem = {
      guestName: nama.current.value,
      quest: quest.current.value,
    };

    setQuests(quests.concat(newItem));
    nama.current.value = "";
    quest.current.value = "";
    nama.current.focus();
  };
  const allQuest = quests.map((quest, indeks) => {
    return (
      <GuestCard
        key={indeks}
        time={quest.guestName}
        nama={quest.quest}
        indeks={indeks}
        size={quests.length}
      />
    );
  });
  return (
    <>
      <div className={"mt-8 w-full items-center bg-slate-100 gap-x-8 p-12"}>
        <h1 className={"text-5xl font-thin"}>Ask Me</h1>
        <form
          onSubmit={handleAddQuest}
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
          <input
            ref={quest}
            className={
              "w-full p-2 border-t-2 border-l-2 border-b-2 border-slate-400 focus:ring-4 focus:ring-blue-300"
            }
            type="text"
            name="guest"
            placeholder="Question.."
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
        <div className={"mt-8"}>{allQuest}</div>
      </div>
    </>
  );
};

export default Askme;

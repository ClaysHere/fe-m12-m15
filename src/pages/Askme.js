import React, { useState } from "react";
import GuestCard from "../components/GuestCard";

const Askme = () => {
  const [nama, setNama] = useState("");
  const [question, setQuestion] = useState("");
  const [quests, setQuests] = useState([
    {
      guestName: "React JS",
      quest: "The first question...?",
    },
  ]);

  const handleAddQuest = (e) => {
    e.preventDefault();
    setQuests((prevQuest) => [
      ...prevQuest,
      {
        guestName: nama,
        quest: question,
      },
    ]);
    setNama("");
    setQuestion("");
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
          <input
            className={
              "w-full p-2 border-t-2 border-l-2 border-b-2 border-slate-400 focus:ring-4 focus:ring-blue-300"
            }
            type="text"
            name="guest"
            placeholder="Question.."
            onChange={(e) => setQuestion(e.target.value)}
            value={question}
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

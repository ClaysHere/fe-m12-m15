import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";

const CardBook = (props) => {
  const [like, setLike] = useState(false);
  const [mark, setMark] = useState(false);
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setLike(!like);
    setCount(!like ? count + 1 : count - 1);
  };

  const handleMark = () => {
    setMark(!mark);
  };
  return (
    <>
      <div className={"border-2 rounded-lg"}>
        <div className={"p-4 flex flex-col items-center"}>
          <h2 className={"text-xl font-semibold"}>{props.title}</h2>
          <p className={"font-medium mt-2"}>{props.author}</p>
          <p className={"font-light mt-4"}>
            {props.publisher} <span>{props.year}</span>
          </p>
        </div>
        <div
          className={
            "p-4 border-t-2 bg-slate-100 flex items-center justify-between"
          }>
          <div className={"flex items-center gap-x-2"}>
            <span onClick={handleLike}>
              {like ? <AiFillLike /> : <AiOutlineLike />}
            </span>
            <p>
              <span>{count + props.random}</span> Like(s)
            </p>
          </div>
          <div>
            <span onClick={handleMark}>
              {mark ? <FaBookmark /> : <FaRegBookmark />}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBook;

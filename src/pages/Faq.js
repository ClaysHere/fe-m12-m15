import React from "react";

const Faq = () => {
  return (
    <>
      <div className={"mt-8 w-full bg-slate-100 p-12"}>
        <h1 className={"text-5xl font-thin"}>
          Frequently Asked Questions (FAQs)
        </h1>
        <div className={"mt-8"}>
          <p className={"font-bold"}>
            How many items of print books can i borrow from the library?
          </p>
          <p className={"italic"}>
            You can borrow up to 10 copies of print books per loan.
          </p>
        </div>
        <div className={"mt-4"}>
          <p className={"font-bold"}>How long can I borrow the collection?</p>
          <p className={"italic"}>Our borrowing period is 10 days.</p>
        </div>
        <div className={"mt-4"}>
          <p className={"font-bold"}>
            How many times can I renew the borrowed item(s)?
          </p>
          <p className={"italic"}>
            You can borrowed item(s) can be renewed once; but when the item(s)
            is reserved by others, renewal is not allowed.
          </p>
        </div>
        <div className={"mt-4"}>
          <p className={"font-bold"}>
            Why is my device unable to connect to the Wi-Fi in the library?
          </p>
          <p className={"italic"}>
            There may be some technical problems, please check these:
          </p>
          <ul className={"list-disc pl-8 italic"}>
            <li>You have not activated Wi-Fi function in your device.</li>
            <li>
              The quota of maximum Wi-Fi users has probably been reached. If you
              can not connect to theWi-Fi acces due to this problem, you can try
              again to connect after some time.
            </li>
          </ul>
          <p className={"mt-4 italic"}>
            Several devices (e.g. notebook) need to be restarted to connect to
            Wi-Fi access. This often solves most of the problems.
          </p>
        </div>
      </div>
    </>
  );
};

export default Faq;

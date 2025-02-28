import React from "react";

export const Button = ({ style, text }) => {
  return (
    <>
      {style === "outline" ? (
        <button className="inline-flex py-2 px-6 items-center border hover:text-white hover:bg-primary cursor-pointer duration-300 border-primary rounded-full">
          {text}
        </button>
      ) : (
        <button className="inline-flex py-2 px-6 items-center bg-primary text-white hover:bg-primary-dark cursor-pointer duration-300 rounded-full">
          {text}
        </button>
      )}
    </>
  );
};
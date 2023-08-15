import React from "react";

const Btn = ({ text }) => {
  return (
    <button className="h-[44px] text-white w-full bg-[#1B3F7A] flex justify-center items-center rounded-[5px]">
      {text}
    </button>
  );
};

export default Btn;

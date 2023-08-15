import React from "react";

const Input = ({ img, placeholder }) => {
  return (
    <div className="flex justify-between h-[46px] items-center bg-[#F4F7FE] rounded-[5px]">
      <input placeholder={placeholder} className="flex-1 bg-transparent" />
      <div className="flex justify-center items-center p-[7px] rounded-[5px] mr-[9px] bg-white">
        <img src={img} />
      </div>
    </div>
  );
};

export default Input;

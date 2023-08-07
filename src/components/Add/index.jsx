import { Button } from "antd";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useEngine } from "../../hooks";
const Add = () => {
  const { state, dispatch } = useEngine();
  return (
    <div className="h-screen flex justify-center items-center">
      <Button
        onClick={() => {
          dispatch("modal", true);
        }}
        type="primary"
        htmlType="submit"
      >
        <AiOutlinePlus color="#000" />
      </Button>
    </div>
  );
};

export default Add;

import { Button, Modal, Select } from "antd";
import React, { useState } from "react";
import { useEngine } from "../../hooks";
import { tags } from "../../utils/constants";
import Input from "antd/es/input/Input";

const AddElement = () => {
  const { state, dispatch } = useEngine();
  const [form, setForm] = useState({});

  const handleCancel = () => {
    dispatch("modal", false);
  };
  return (
    <div>
      <Modal
        centered
        open={state.modal}
        title="Add new Element"
        onOk={() => {}}
        onCancel={handleCancel}
        footer={[]}
      >
        <div className="flex">
          <Select
            className="flex-1"
            showSearch
            placeholder="Select a Tag"
            optionFilterProp="children"
            onChange={tag => {
              setForm({ ...form, tag });
            }}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={tags}
          />
        </div>
        <div className="flex mt-1">
          <Input
            placeholder="Tailwind Classes"
            onChange={({ target: { value } }) => {
              setForm({ ...form, className: value });
            }}
          />
        </div>
        <div className="flex">
          <button className="bg-green-400 flex-1 mt-2 rounded py-1 text-white">
            Add
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddElement;

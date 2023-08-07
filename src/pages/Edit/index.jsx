import React, { useState } from "react";
import { useEngine } from "../../hooks";

import AddElement from "../../components/AddElement";
import Tree from "../../components/Tree";
const Edit = () => {
  const { state, dispatch, render } = useEngine();

  return (
    <div>
      <div className="h-screen calc flex">
        <div>
          <Tree />
        </div>
        <div className="flex-1">
          {render()}
          <AddElement />
        </div>
      </div>

      <pre>
        <code> {"<div></div>"}</code>
      </pre>
    </div>
  );
};

export default Edit;

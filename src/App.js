import React from "react";
import { useEngine } from "./hooks";
import { Route, Routes } from "react-router-dom";
import Edit from "./pages/Edit";
import Preview from "./pages/Preview";

const App = () => {
  const { state, dispatch, render } = useEngine();
  return (
    <Routes>
      <Route path="/" element={<Edit />} />
      <Route path="/preview" element={<Preview />} />
    </Routes>
  );
};

export default App;

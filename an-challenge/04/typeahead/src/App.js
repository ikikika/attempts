import React from "react";
import InputComponent from "./TypeAhead/InputComponent";
import Countries from "./countries";

const App = () => {
  return <InputComponent suggestions={Countries} />;
};

export default App;

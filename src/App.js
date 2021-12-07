import React from "react";
import Canvas from "./component/Canvas4";

const App = () => {
  return (
    <div
      style={{
        width: "800px",
        height: "600px",
        backgroundColor: "#000",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        overflow: "hidden",
      }}
    >
      <Canvas />
    </div>
  );
};

export default App;

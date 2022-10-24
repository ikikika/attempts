import React from "react";
import "./Home.css";
import bg from "../assets/globe.jpg";

export default function Home() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: 0,
        position: "absolute",
      }}
    >
      <div
        className="Home"
        style={{
          // backgroundColor: "red",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bg})`,
        }}
      >
        <div className="titlewrapper">
          <p style={{ fontSize: "90px" }}>Hektor</p>
          <p>Synthetic Financial Derivative powered by hashgraph</p>
        </div>
      </div>
    </div>
  );
}

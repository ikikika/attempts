import React, { useState } from "react";
import PanZoom from "react-easy-panzoom";
// import { ReactComponent as Polygon } from "../asset/polygon.svg";
import Polygon from "./Polygon";

const shapes = [
  {
    id: 1,
    fill: "red",
    points: "0,0 0,200 100,300 100,400 300,400 300,0",
    height: 400,
    width: 300,
    top: 100,
    left: 200,
    hoverColor: "yellow",
    text: "Saigon",
  },
  {
    id: 2,
    fill: "lime",
    points: "0,0 0,100 100,400 400,200 100,0",
    height: 400,
    width: 400,
    top: 100,
    left: 600,
    hoverColor: "red",
    text: "Hanoi",
  },
  {
    id: 3,
    fill: "pink",
    points: "0,0 0,300 100,400 100,300",
    height: 400,
    width: 100,
    top: 400,
    left: 600,
    hoverColor: "blue",
    text: "Danang",
  },
  {
    id: 4,
    fill: "aqua",
    points: "0,0 0,200 100,400 500,400 500,200 200,200 200,100 100,0",
    height: 400,
    width: 500,
    top: 400,
    left: 0,
    hoverColor: "salmon",
    text: "Hue",
  },
  {
    id: 5,
    fill: "orange",
    points: "0,0 0,200 100,400 500,400 500,200 200,200 200,100 100,0",
    height: 400,
    width: 500,
    top: 400,
    left: 0,
    hoverColor: "GreenYellow",
    text: "Dalat",
  },
  {
    id: 6,
    fill: "blue",
    points: "0,0 100,400 300,400 300,0",
    height: 400,
    width: 300,
    top: -100,
    left: -200,
    hoverColor: "GreenYellow",
    text: "Vung Tau",
  },
];

const Canvas4 = () => {
  return (
    <PanZoom enableBoundingBox>
      <div
        style={{
          backgroundColor: "rgb(0,0,0)",
          width: "800px",
          height: "600px",
        }}
      >
        {shapes.map((shape) => {
          return (
            <Polygon
              key={shape.id}
              fill={shape.fill}
              points={shape.points}
              height={shape.height}
              width={shape.width}
              style={{ position: "absolute", top: shape.top, left: shape.left }}
              hoverColor={shape.hoverColor}
              text={shape.text}
            />
          );
        })}
      </div>
    </PanZoom>
  );
};

export default Canvas4;

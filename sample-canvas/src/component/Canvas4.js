import React, { useState, useEffect } from "react";
import PanZoom from "react-easy-panzoom";
import Polygon from "./Polygon";

import ShapesJson from "../asset/shapes.json";

const Canvas4 = () => {
  const [Shapes, setShapes] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("Shapes")) {
      setShapes(JSON.parse(localStorage.getItem("Shapes")));
    } else {
      setShapes(ShapesJson);
    }
  }, []);

  return (
    <PanZoom enableBoundingBox>
      <div
        style={{
          backgroundColor: "rgb(0,0,0)",
          width: "800px",
          height: "600px",
        }}
      >
        {Shapes
          ? Shapes.map((shape) => {
              return (
                <Polygon
                  key={shape.id}
                  fill={shape.fill}
                  points={shape.points}
                  height={shape.height}
                  width={shape.width}
                  style={{
                    position: "absolute",
                    top: parseInt(shape.top),
                    left: parseInt(shape.left),
                  }}
                  hoverColor={shape.hoverColor}
                  text={shape.text}
                  link={shape.link}
                />
              );
            })
          : ""}
      </div>
    </PanZoom>
  );
};

export default Canvas4;

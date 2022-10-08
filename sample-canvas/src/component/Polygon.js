import React, { useState } from "react";

const Polygon = ({
  fill,
  points,
  height,
  width,
  style,
  hoverColor,
  text,
  link,
}) => {
  const [color, SetColor] = useState(fill);

  return (
    <div style={style}>
      <svg fill={color} height={height} width={width}>
        <polygon
          points={points}
          onMouseOver={() => {
            SetColor(hoverColor);
          }}
          onMouseLeave={() => {
            SetColor(fill);
          }}
          onClick={() => {
            if (link) {
              window.location.href = link;
            } else {
              alert(`You clicked on ${text}`);
            }
          }}
        />
      </svg>
      <div
        style={{
          color: "white",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          height: "20px",
          textAlign: "center",
          margin: "auto",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Polygon;

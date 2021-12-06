import React from "react";
import PanZoom from "react-easy-panzoom";

const shapes = [
  {
    id: 1,
    width: "50px",
    height: "70px",
    backgroundColor: "red",
    top: "250px",
    left: "400px",
  },
  {
    id: 2,
    width: "150px",
    height: "80px",
    backgroundColor: "lime",
    top: "150px",
    left: "350px",
  },
  {
    id: 3,
    width: "150px",
    height: "180px",
    backgroundColor: "yellow",
    top: "250px",
    left: "230px",
  },
  {
    id: 4,
    width: "100px",
    height: "120px",
    backgroundColor: "blue",
    top: "110px",
    left: "230px",
  },
  {
    id: 5,
    width: "100px",
    height: "120px",
    backgroundColor: "pink",
    top: "10px",
    left: "350px",
  },
  {
    id: 6,
    width: "90px",
    height: "100px",
    backgroundColor: "aqua",
    top: "30px",
    left: "460px",
  },
  {
    id: 7,
    width: "90px",
    height: "100px",
    backgroundColor: "blue",
    top: "150px",
    left: "520px",
  },
  {
    id: 8,
    width: "130px",
    height: "70px",
    backgroundColor: "pink",
    top: "270px",
    left: "460px",
  },
  {
    id: 9,
    width: "200px",
    height: "70px",
    backgroundColor: "orange",
    top: "350px",
    left: "390px",
  },
  {
    id: 10,
    width: "90px",
    height: "100px",
    backgroundColor: "violet",
    top: "330px",
    left: "120px",
  },
  {
    id: 11,
    width: "80px",
    height: "150px",
    backgroundColor: "SpringGreen",
    top: "160px",
    left: "130px",
  },
  {
    id: 12,
    width: "90px",
    height: "110px",
    backgroundColor: "PowderBlue",
    top: "30px",
    left: "120px",
  },
  {
    id: 13,
    width: "120px",
    height: "70px",
    backgroundColor: "Moccasin",
    top: "30px",
    left: "220px",
  },

  {
    id: 21,
    width: "50px",
    height: "70px",
    backgroundColor: "red",
    top: "250px",
    left: "900px",
  },
  {
    id: 22,
    width: "150px",
    height: "80px",
    backgroundColor: "lime",
    top: "150px",
    left: "850px",
  },
  {
    id: 23,
    width: "150px",
    height: "180px",
    backgroundColor: "yellow",
    top: "250px",
    left: "730px",
  },
  {
    id: 24,
    width: "100px",
    height: "120px",
    backgroundColor: "blue",
    top: "110px",
    left: "730px",
  },
  {
    id: 25,
    width: "100px",
    height: "120px",
    backgroundColor: "pink",
    top: "10px",
    left: "850px",
  },
  {
    id: 26,
    width: "90px",
    height: "100px",
    backgroundColor: "aqua",
    top: "30px",
    left: "960px",
  },
  {
    id: 27,
    width: "90px",
    height: "100px",
    backgroundColor: "blue",
    top: "150px",
    left: "1020px",
  },
  {
    id: 28,
    width: "130px",
    height: "70px",
    backgroundColor: "pink",
    top: "270px",
    left: "960px",
  },
  {
    id: 29,
    width: "200px",
    height: "70px",
    backgroundColor: "orange",
    top: "350px",
    left: "890px",
  },
  {
    id: 210,
    width: "90px",
    height: "100px",
    backgroundColor: "violet",
    top: "330px",
    left: "620px",
  },
  {
    id: 211,
    width: "80px",
    height: "150px",
    backgroundColor: "SpringGreen",
    top: "160px",
    left: "630px",
  },
  {
    id: 212,
    width: "90px",
    height: "110px",
    backgroundColor: "PowderBlue",
    top: "30px",
    left: "620px",
  },
  {
    id: 213,
    width: "120px",
    height: "70px",
    backgroundColor: "Moccasin",
    top: "30px",
    left: "720px",
  },

  {
    id: 31,
    width: "50px",
    height: "70px",
    backgroundColor: "red",
    top: "-180px",
    left: "400px",
  },
  {
    id: 32,
    width: "150px",
    height: "80px",
    backgroundColor: "lime",
    top: "-280px",
    left: "350px",
  },
  {
    id: 33,
    width: "150px",
    height: "180px",
    backgroundColor: "yellow",
    top: "-180px",
    left: "230px",
  },
  {
    id: 34,
    width: "100px",
    height: "120px",
    backgroundColor: "blue",
    top: "-320px",
    left: "230px",
  },
  {
    id: 35,
    width: "100px",
    height: "120px",
    backgroundColor: "pink",
    top: "-420px",
    left: "350px",
  },
  {
    id: 36,
    width: "90px",
    height: "100px",
    backgroundColor: "aqua",
    top: "-400px",
    left: "460px",
  },
  {
    id: 37,
    width: "90px",
    height: "100px",
    backgroundColor: "blue",
    top: "-280px",
    left: "520px",
  },
  {
    id: 38,
    width: "130px",
    height: "70px",
    backgroundColor: "pink",
    top: "-160px",
    left: "460px",
  },
  {
    id: 39,
    width: "200px",
    height: "70px",
    backgroundColor: "orange",
    top: "-80px",
    left: "390px",
  },
  {
    id: 310,
    width: "90px",
    height: "100px",
    backgroundColor: "violet",
    top: "-100px",
    left: "120px",
  },
  {
    id: 311,
    width: "80px",
    height: "150px",
    backgroundColor: "SpringGreen",
    top: "-270px",
    left: "130px",
  },
  {
    id: 312,
    width: "90px",
    height: "110px",
    backgroundColor: "PowderBlue",
    top: "-400px",
    left: "120px",
  },
  {
    id: 313,
    width: "120px",
    height: "70px",
    backgroundColor: "Moccasin",
    top: "-400px",
    left: "220px",
  },
  {
    id: 41,
    width: "500px",
    height: "370px",
    backgroundColor: "Linen",
    top: "-400px",
    left: "620px",
  },
  {
    id: 51,
    width: "200px",
    height: "820px",
    backgroundColor: "LemonChiffon",
    top: "-400px",
    left: "-100px",
  },
];

const Canvas4 = () => {
  return (
    <PanZoom enableBoundingBox>
      <div
        style={{
          backgroundColor: "rgb(0,0,0)",
          width: "800px",
          height: "500px",
        }}
      >
        {shapes.map((shape) => {
          return (
            <div
              key={shape.id}
              style={{
                width: shape.width,
                height: shape.height,
                backgroundColor: shape.backgroundColor,
                position: "absolute",
                top: shape.top,
                left: shape.left,
              }}
              onMouseOver={(e) => {
                e.target.style.background = "HotPink";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = shape.backgroundColor;
              }}
              onClick={() => {
                alert(`You clicked on the ${shape.backgroundColor} box`);
              }}
            />
          );
        })}
      </div>
    </PanZoom>
  );
};

export default Canvas4;

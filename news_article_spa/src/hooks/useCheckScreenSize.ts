import { useEffect, useState } from "react";

const useCheckScreenSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let screenSize = 6;

  switch (true) {
    case width <= 576:
      screenSize = 0; // xs
      break;
    case width <= 768:
      screenSize = 2; // sm
      break;
    case width <= 992:
      screenSize = 3; // md
      break;
    case width <= 1200:
      screenSize = 4; // lg
      break;
    case width <= 1400:
      screenSize = 5; // xl
      break;
    default:
      screenSize = 6; // xxl
  }

  return screenSize;
};

export default useCheckScreenSize;

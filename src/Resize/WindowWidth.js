import { useEffect, useState } from "react";

function WindowWidth() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, [screenWidth]);

  return screenWidth;
}

export default WindowWidth;

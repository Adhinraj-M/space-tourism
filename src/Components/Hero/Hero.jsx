import { useRef } from "react";
import "./hero.css";

function Hero() {
  const exploreCon = useRef(null);

  const handleMouseOver = () => {
    exploreCon.current.classList.add("mouse-enter");
  };

  const handleMouseLeave = () => {
    exploreCon.current.classList.remove("mouse-enter");
  };

  return (
    <div className="hero-container">
      <div className="sub-container">
        <div className="hero-content-container">
          <p className="top-text">SO,YOU WANT TO TRAVEL TO</p>
          <h1 className="middle-text">SPACE</h1>
          <p className="last-paragraph">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="explore-btn" ref={exploreCon}>
          <div
            className="explore"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <span className="explore-text">EXPLORE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

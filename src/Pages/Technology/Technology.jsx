import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import MobHeader from "../../Components/MobHeader/MobHeader";
import WindowWidth from "../../Resize/WindowWidth";
import "./technology.css";
import bgTechnMob from "/public/assets/technology/background-technology-mobile.jpg";
import bgTechTab from "/public/assets/technology/background-technology-tablet.jpg";
import bgTechDesk from "/public/assets/technology/background-technology-desktop.jpg";

import TechnologyList from "../../Components/TechnologyList/TechnologyList";

function Technology() {
  const [bgTech, setBgTech] = useState(bgTechnMob);

  const screenwidth = WindowWidth();

  useEffect(() => {
    if (screenwidth >= 768) {
      setBgTech(bgTechTab);
    } else if (screenwidth >= 1024) {
      setBgTech(bgTechDesk);
    } else {
      setBgTech(bgTechnMob);
    }
  }, [screenwidth]);

  return (
    <div
      className="technology-main"
      style={{ backgroundImage: `url(${bgTech})` }}>
      {screenwidth > 748 ? <Header /> : <MobHeader />}
      <div className="section-container">
        <div className="tech-sub-container">
          <p className="tech-heading">
            <span className="tech-no">03</span>SPACE LAUNCH 101
          </p>
          <TechnologyList/>
        </div>
      </div>
    </div>
  );
}

export default Technology;

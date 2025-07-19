import { useEffect, useState } from "react";
import WindowWidth from "../../Resize/WindowWidth";
import "./crew.css";
import crewBgMob from "../../../public/assets/crew/background-crew-mobile.jpg";
import crewBgTab from "../../../public/assets/crew/background-crew-tablet.jpg";
import crewByDesk from "../../../public/assets/crew/background-crew-desktop.jpg";
import Header from "../../Components/Header/Header";
import MobHeader from "../../Components/MobHeader/MobHeader";
import CrewList from "../../Components/CrewList/CrewList";

function Crew() {
  const [bgImg, setBgImg] = useState(crewBgMob);

  const screenwidth = WindowWidth();

  useEffect(() => {
    if (screenwidth > 768) {
      setBgImg(crewBgTab);
    } else if (screenwidth > 1024) {
      setBgImg(crewByDesk);
    } else {
      setBgImg(crewBgMob);
    }
  }, [screenwidth]);

  return (
    <div className="crew-container" style={{ background: `url(${bgImg})` }}>
      {screenwidth > 748 ? <Header /> : <MobHeader />}
      <div className="crew-wrapper">
        <div className="crew">
          <p className="crew-heading">
            <span className="crew-no">02</span>MEET YOUR CREW
          </p>

          <CrewList />
        </div>
      </div>
    </div>
  );
}

export default Crew;

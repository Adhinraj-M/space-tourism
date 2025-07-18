import "./destination.css";
import MobHeader from "../../Components/MobHeader/MobHeader";
import WindowWidth from "../../Resize/WindowWidth";
import Header from "../../Components/Header/Header";
import destBgMob from "../../../public/assets/destination/background-destination-mobile.jpg";
import destBgTab from "../../../public/assets/destination/background-destination-tablet.jpg";
import destBgDesk from "../../../public/assets/destination/background-destination-desktop.jpg";
import { useEffect, useState } from "react";

import DestinationList from "../../Components/DestinationList/DestinationList";

 function Destination() {
  const [bgImg, setBgImg] = useState(destBgMob);

  const screenwidth = WindowWidth();
  
    useEffect(() => {
    if (screenwidth > 748) {
      setBgImg(destBgTab);
    } else if (screenwidth > 1024) {
      setBgImg(destBgDesk);
    } else {
      setBgImg(destBgMob);
    }
  }, [screenwidth]);

  
  return (
    <div
      className="main-container"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {screenwidth > 748 ? <Header /> : <MobHeader />}
      <div className="destination-hero">
        <div className="destination-sub">
          <p className="heading">
            <span className="dest-no">01</span>PICK YOUR DESTINATION
          </p>
          <DestinationList />
        </div>
      </div>
    </div>
  );
}

export default Destination;

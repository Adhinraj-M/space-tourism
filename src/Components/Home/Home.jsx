import { useEffect, useState } from "react";
import Hero from "../../Components/Home/Hero/Hero.jsx";
import "../Home/home.css";
import bgMob from "../../assets/home/background-home-mobile.jpg";
import bgTab from "../../assets/home/background-home-tablet.jpg";
import bgDesktop from "../../assets/home/background-home-desktop.jpg";
import WindowWidth from "../../Resize/WindowWidth.js";
import MobHeader from "./MobHeader/MobHeader.jsx";
import Header from "./Header/Header.jsx";

function Home() {
  const [background, setBackground] = useState(bgMob);

  const screenWidth = WindowWidth();

  useEffect(() => {
    if (screenWidth >= 1024) {
      setBackground(bgDesktop);
    } else if (screenWidth >= 748) {
      setBackground(bgTab);
    } else {
      setBackground(bgMob);
    }
  }, [screenWidth]);

  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      {screenWidth > 748 ?  <Header/> : <MobHeader/>}
      <Hero />
    </div>
  );
}

export default Home;
